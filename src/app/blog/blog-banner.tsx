import "./blogmain.scss";
import { Images } from "@/utils/Images";

interface BlogBannerProps {
    search: string;
    setSearch: (value: string) => void;
}

export default function BlogBanner({ search, setSearch }: BlogBannerProps) {
    return (
        <section className="blog_hero">
            <div className="container">
                <div className="row align-items-center">
                    <div className="hero-left col-md-6">
                        <p className="subtitle">INSIGHTS &amp; IDEAS</p>
                        <h1>Our <span>Blog</span></h1>
                        <p className="desc">
                            Stay updated with the latest trends in digital marketing, web <br className="d-none d-md-inline" /> development, technology.
                        </p>

                        {/* Mobile Only: Blog Illustration Placed Above Search Bar */}
                        <div className="hero-mobile-visual d-md-none">
                            <img src={Images.blog_banner.src} alt="blog_banner" className="main-img" />
                        </div>

                        <div className="search-box">
                            <input
                                placeholder="Search articles, topics..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            {search && (
                                <button type="button" onClick={() => setSearch("")} className="search-clear-btn" aria-label="Clear search">
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            )}
                            <button type="button" aria-label="Search articles">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </div>

                    {/* Desktop Only: Blog Illustration in Right Column */}
                    <div className="hero-right col-md-6 d-none d-md-flex justify-content-center align-items-center position-relative">
                        <img src={Images.blog_banner.src} alt="blog_banner" className="main-img" />
                    </div>
                </div>
            </div>
        </section>
    );
}
