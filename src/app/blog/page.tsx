"use client";
import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Grid, Tag } from "lucide-react";
import "./blogmain.scss";
import BlogBanner from "./blog-banner";
import FeatureProject from "./featureproject";
import BlogSidebar from "./blogsidebar";

interface Blog {
    _id: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: string;
    author: string;
    slug: string;
    date: string;
    createdAt: string;
    tags: string[];
    status?: string;
    isFeatured?: boolean;
    views?: number;
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export default function BlogPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("All Articles");
    const [search, setSearch] = useState("");
    const [tabs, setTabs] = useState<string[]>(["All Articles"]);
    const [visibleCount, setVisibleCount] = useState(9);

    // Category Auto + Manual Slider State & Refs (Portfolio UI/UX)
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const tabsNavRef = useRef<HTMLUListElement | null>(null);
    const progressFillRef = useRef<HTMLDivElement | null>(null);
    const isUserInteractingRef = useRef(false);
    const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const autoDirRef = useRef<1 | -1>(1);
    const edgePauseUntilRef = useRef<number>(0);

    // Reset page when tab or search changes
    useEffect(() => {
        setVisibleCount(9);
    }, [activeTab, search]);

    useEffect(() => {
        fetch("/api/admin/blogs")
            .then((res) => res.json())
            .then((data) => {
                const fetchedBlogs = data.blogs || [];
                setBlogs(fetchedBlogs);
                const uniqueCategories = Array.from(new Set(fetchedBlogs.map((b: Blog) => b.category))).filter(Boolean) as string[];
                setTabs(["All Articles", ...uniqueCategories]);
            })
            .catch(err => console.error("Error fetching blogs:", err))
            .finally(() => setLoading(false));
    }, []);

    const updateScrollArrows = useCallback(() => {
        const el = tabsNavRef.current;
        if (!el) return;
        const maxScroll = el.scrollWidth - el.clientWidth;
        const nextLeft = el.scrollLeft > 4;
        const nextRight = maxScroll > 4 && el.scrollLeft < maxScroll - 4;
        setCanScrollLeft((prev) => (prev === nextLeft ? prev : nextLeft));
        setCanScrollRight((prev) => (prev === nextRight ? prev : nextRight));
        if (progressFillRef.current) {
            const pct = maxScroll > 4 ? Math.min(100, Math.max(18, (el.scrollLeft / maxScroll) * 100)) : 18;
            progressFillRef.current.style.width = `${pct}%`;
        }
    }, []);

    const pauseAutoSlide = useCallback((resumeDelayMs = 3500) => {
        isUserInteractingRef.current = true;
        if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
        resumeTimerRef.current = setTimeout(() => {
            isUserInteractingRef.current = false;
        }, resumeDelayMs);
    }, []);

    // Auto-Slider + Manual Slider Sync for Blog Categories (Mobile/Tablet & Overflow)
    useEffect(() => {
        if (loading) return;
        const el = tabsNavRef.current;
        if (!el || typeof window === "undefined") return;

        updateScrollArrows();

        let rafId = 0;
        let lastTime = performance.now();
        let carry = 0;
        const speedPxPerSec = 34;

        const tick = (now: number) => {
            const dt = Math.min((now - lastTime) / 1000, 0.05);
            lastTime = now;

            const isMobileOrTablet = window.innerWidth < 992;
            const maxScroll = el.scrollWidth - el.clientWidth;

            if (
                isMobileOrTablet &&
                maxScroll > 6 &&
                !isUserInteractingRef.current &&
                now >= edgePauseUntilRef.current
            ) {
                carry += autoDirRef.current * speedPxPerSec * dt;
                const step = Math.trunc(carry);
                if (step !== 0) {
                    carry -= step;
                    const nextLeft = el.scrollLeft + step;
                    if (nextLeft >= maxScroll) {
                        el.scrollLeft = maxScroll;
                        autoDirRef.current = -1;
                        edgePauseUntilRef.current = now + 1200;
                    } else if (nextLeft <= 0) {
                        el.scrollLeft = 0;
                        autoDirRef.current = 1;
                        edgePauseUntilRef.current = now + 1200;
                    } else {
                        el.scrollLeft = nextLeft;
                    }
                    updateScrollArrows();
                }
            }

            rafId = requestAnimationFrame(tick);
        };

        rafId = requestAnimationFrame(tick);

        const onScroll = () => updateScrollArrows();
        const onResize = () => updateScrollArrows();

        el.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize, { passive: true });

        return () => {
            cancelAnimationFrame(rafId);
            if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
            el.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onResize);
        };
    }, [loading, tabs.length, updateScrollArrows]);

    const handleManualSlide = (direction: "prev" | "next") => {
        const el = tabsNavRef.current;
        if (!el) return;
        pauseAutoSlide(4000);
        const delta = direction === "next" ? 185 : -185;
        el.scrollBy({ left: delta, behavior: "smooth" });
    };

    const handleTabClick = (tabName: string, e: React.MouseEvent<HTMLButtonElement>) => {
        setActiveTab(tabName);
        pauseAutoSlide(4500);
        const button = e.currentTarget;
        const container = tabsNavRef.current;
        if (container) {
            const targetLeft = button.offsetLeft - container.clientWidth / 2 + button.offsetWidth / 2;
            container.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" });
        }
    };

    const publishedBlogs = useMemo(() =>
        blogs.filter(b => !b.status || b.status === "Published"),
        [blogs]);

    const featuredBlogs = useMemo(() =>
        publishedBlogs.filter(b => b.isFeatured === true || String(b.isFeatured) === "true"),
        [publishedBlogs]);

    const regularBlogs = useMemo(() => {
        return publishedBlogs.filter(b => {
            const isNotFeatured = !b.isFeatured || String(b.isFeatured) === "false";
            const matchSearch = (b.title || "").toLowerCase().includes(search.toLowerCase()) ||
                (b.content || "").toLowerCase().includes(search.toLowerCase());
            const matchCategory = activeTab === "All Articles" || b.category === activeTab;
            return isNotFeatured && matchSearch && matchCategory;
        });
    }, [publishedBlogs, search, activeTab]);

    const displayedRegularBlogs = regularBlogs.slice(0, visibleCount);

    /* Category Count */
    const categories = useMemo(() => {
        const counts: Record<string, number> = {};
        publishedBlogs.forEach((b) => {
            if (b.category) {
                counts[b.category] = (counts[b.category] || 0) + 1;
            }
        });
        return Object.keys(counts).map((key) => ({
            name: key,
            count: counts[key],
        }));
    }, [publishedBlogs]);

    const popular = useMemo(() => {
        return [...blogs]
            .filter((b: Blog) => (b.views || 0) > 1)
            .sort((a: Blog, b: Blog) => (b.views || 0) - (a.views || 0))
            .slice(0, 4);
    }, [blogs]);

    if (loading) return (
        <div className="blog-page">
            <p className="loading text-center py-20 text-white">Loading blogs...</p>
        </div>
    );

    return (
        <div className="blog-page">
            <BlogBanner
                search={search}
                setSearch={setSearch}
            />

            {/* Portfolio-Style Auto + Manual Category Slider */}
            <div className="blog-tabs-section">
                <div className={`blog-tabs-slider-shell ${canScrollLeft ? "has-left" : ""} ${canScrollRight ? "has-right" : ""}`}>
                    <ul
                        ref={tabsNavRef}
                        className="blog-tabs-nav"
                        onTouchStart={() => pauseAutoSlide(4000)}
                        onTouchMove={() => pauseAutoSlide(4000)}
                        onPointerDown={() => pauseAutoSlide(4000)}
                        onWheel={() => pauseAutoSlide(3500)}
                        onMouseEnter={() => { isUserInteractingRef.current = true; }}
                        onMouseLeave={() => { isUserInteractingRef.current = false; }}
                    >
                        {tabs.map((t, i) => (
                            <li key={i}>
                                <button
                                    type="button"
                                    className={`blog-tab-btn ${activeTab === t ? "active" : ""}`}
                                    onClick={(e) => handleTabClick(t, e)}
                                >
                                    <span className="blog-tab-icon">
                                        {i === 0 ? <Grid size={14} /> : <Tag size={13} />}
                                    </span>
                                    <span>{t}</span>
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile / Tablet Manual Slider Controls + Progress Track */}
                    <div className="blog-mobile-slider-controls d-lg-none">
                        <div className="slider-arrow-group">
                            <button
                                type="button"
                                className={`blog-nav-arrow prev ${!canScrollLeft ? "is-disabled" : ""}`}
                                onClick={() => handleManualSlide("prev")}
                                disabled={!canScrollLeft}
                                aria-label="Slide categories left"
                            >
                                <ChevronLeft size={15} strokeWidth={2.5} />
                            </button>
                            <button
                                type="button"
                                className={`blog-nav-arrow next ${!canScrollRight ? "is-disabled" : ""}`}
                                onClick={() => handleManualSlide("next")}
                                disabled={!canScrollRight}
                                aria-label="Slide categories right"
                            >
                                <ChevronRight size={15} strokeWidth={2.5} />
                            </button>
                        </div>
                        <div className="slider-progress-track">
                            <div
                                ref={progressFillRef}
                                className="slider-progress-fill"
                                style={{ width: "18%" }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="content row">
                <div className="blogs col-xl-8 col-lg-12 col-md-12">
                    {displayedRegularBlogs.length === 0 && <p className="noblogfound">No regular articles found</p>}

                    {displayedRegularBlogs.map((b) => (
                        <div className="card fade-in" key={b._id}>
                            <Link href={`/blog/${b.slug}`} className="img">
                                <img src={b.image} alt={b.title} width="100%" height="100%" style={{ objectFit: "cover" }} />
                            </Link>

                            <div className="card-body">
                                <div className="top d-flex justify-content-between align-items-center">
                                    <span className="tag">{b.category}</span>
                                    <p className="date m-0">
                                        {formatDate(b.date || b.createdAt)}
                                    </p>
                                </div>
                                <h3>
                                    <Link href={`/blog/${b.slug}`}>{b.title}</Link>
                                </h3>
                                <p className="desc">{b.excerpt || (b.content ? b.content.replace(/<[^>]*>?/gm, "").slice(0, 100) + "..." : "")}</p>
                                <div className="bottom">
                                    <Link href={`/blog/${b.slug}`}>Read More →</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-xl-4 col-lg-12 col-md-12 sidebar_main">
                    <BlogSidebar
                        search={search}
                        setSearch={setSearch}
                        categories={categories}
                        popular={popular}
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>

                <div className="col-12 load_more_main">
                    {visibleCount < regularBlogs.length && (
                        <div className="load-more-container d-flex justify-content-center w-100 mt-10 pt-10">
                            <button
                                className="header-btn"
                                style={{ border: "none", cursor: "pointer" }}
                                onClick={() => setVisibleCount(prev => prev + 6)}
                            >
                                <span className="btn-text">Load More Articles</span>
                            </button>
                        </div>
                    )}
                </div>

                {/* Featured Section */}
                <div className="col-lg-12 featured_main">
                    <FeatureProject blogs={featuredBlogs} />
                </div>
            </div>
        </div>
    );
}
