"use client";

import { useEffect, useRef, useState } from "react";
import "./HomeMainHero.scss";
import { Images } from "@/utils/Images";
import Link from "next/link";

/* ── TEXTS ── */
const texts = [
    "Digital Marketing & Web Development Company",
    "Ecommerce Development and Sales",
    "Web & App Development",
    "Product Design & Branding",
    "Social Media Marketing",
];

/* ── SOCIAL ICONS ── */
const FacebookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
);

const XIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231z" />
    </svg>
);

const InstagramIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
);

const DribbbleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72" />
    </svg>
);

/* ── COUNT-UP HELPER ── */
function animateCount(
    el: HTMLElement,
    target: number,
    suffix: string,
    duration: number
) {
    const start = performance.now();
    const update = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // easeInOutSine — very slow, steady climb from start to end
        const ease = -(Math.cos(Math.PI * progress) - 1) / 2;
        el.textContent = Math.round(target * ease) + suffix;
        if (progress < 1) requestAnimationFrame(update);
    };
    requestAnimationFrame(update);
}

export default function HomeMainHero() {
    /* ── TYPING EFFECT ── */
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const statsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timeout;

        if (charIndex < currentText.length) {
            timeout = setTimeout(() => {
                setDisplayText(currentText.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 70);
        } else {
            // Pause after full typing (10s), then move to next text
            timeout = setTimeout(() => {
                setTextIndex((textIndex + 1) % texts.length);
                setCharIndex(0);
                setDisplayText("");
            }, 1000);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, textIndex]);

    /* ── COUNT-UP — replays every time section scrolls into view ── */
    useEffect(() => {
        const section = statsRef.current;
        if (!section) return;

        let rafIds: number[] = [];
        let inView = false;

        const reset = () => {
            rafIds.forEach(cancelAnimationFrame);
            rafIds = [];
            section.querySelectorAll<HTMLElement>(".number[data-target]").forEach((el) => {
                el.textContent = "0" + (el.dataset.suffix || "");
            });
        };

        const runAnimation = () => {
            reset();
            section.querySelectorAll<HTMLElement>(".number[data-target]").forEach((el) => {
                const target = parseFloat(el.dataset.target || "0");
                const suffix = el.dataset.suffix || "";
                const duration = parseInt(el.dataset.duration || "7000");
                const start = performance.now();

                const tick = (now: number) => {
                    const progress = Math.min((now - start) / duration, 1);
                    const ease = -(Math.cos(Math.PI * progress) - 1) / 2;
                    el.textContent = Math.round(target * ease) + suffix;
                    if (progress < 1) rafIds.push(requestAnimationFrame(tick));
                };
                rafIds.push(requestAnimationFrame(tick));
            });
        };

        const onScroll = () => {
            const rect = section.getBoundingClientRect();
            const nowInView = rect.top < window.innerHeight && rect.bottom > 0;

            if (nowInView && !inView) {
                inView = true;
                runAnimation();           // enter view → animate
            } else if (!nowInView && inView) {
                inView = false;
                reset();                  // leave view → reset to 0
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll(); // check immediately on mount

        return () => {
            window.removeEventListener("scroll", onScroll);
            rafIds.forEach(cancelAnimationFrame);
        };

    }, []);


    return (

        <section className="hero" style={{ position: "relative", overflow: "hidden" }}>
            {/* 🔥 MAIN CONTENT */}
            <div className="main" style={{ position: "relative", zIndex: 2 }}>

                {/* LEFT */}
                <div className="left">
                    <div className="socialBar">
                        <span className="followLabel">Follow</span>
                        <FacebookIcon />
                        <XIcon />
                        <InstagramIcon />
                    </div>

                    <div className="mb_res">
                        <div className="mb_res_top">
                            <p className="tagline"><span className="dotIndicator"></span> AI Powered Digital Agency</p>

                            <h1 className="heading" style={{ fontWeight: "700" }}>
                                {displayText}
                            </h1>
                        </div>

                        <div className="stats">
                            <div className="btns-group">
                                <Link href="#" className="ctaBtn ctaBtnPrimary">
                                    Start a Project <span className="arrow">↗</span>
                                </Link>
                                <Link href="/services" className="ctaBtn ctaBtnSecondary">
                                    Our Services <span className="arrow">↗</span>
                                </Link>
                            </div>

                            <div className="stat-numbers" ref={statsRef}>
                                <div className="stat">
                                    <div
                                        className="number"
                                        data-target="138"
                                        data-suffix="+"
                                        data-duration="8000"
                                    >0+</div>
                                    <div className="label">Projects Completed in <br /> 5 Countries</div>
                                </div>
                                <div className="stat">
                                    <div
                                        className="number"
                                        data-target="98"
                                        data-suffix="%"
                                        data-duration="7000"
                                    >0%</div>
                                    <div className="label">Clients Satisfied <br /> and Repeating</div>
                                </div>
                            </div>
                        </div>

                        <div className="hero-social-proof">
                            <div className="avatars">
                                <img src="https://i.pravatar.cc/150?u=1" alt="User 1" />
                                <img src="https://i.pravatar.cc/150?u=2" alt="User 2" />
                                <img src="https://i.pravatar.cc/150?u=3" alt="User 3" />
                                <img src="https://i.pravatar.cc/150?u=4" alt="User 4" />
                                <div className="avatar-plus">+1k</div>
                            </div>
                            <p className="social-proof-text">Trusted by 1000+ happy clients worldwide</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT — desktop: panel image | tablet+mobile: full bg image */}
                <div className="right">
                    <div className="imageWrap">
                        <img src={Images.herobanner.src} alt="Hero" className="herobanner_1" />
                        {/* <img src={Images.herobanner_person.src} alt="Hero" className="herobanner_3"/> */}
                        {/* <img src={Images.herobanner1.src} alt="Hero" className="herobanner_2"/> */}
                    </div>

                    <div className="floatingCard">
                        <p>
                            Results - <br />
                            Driven Digital <br />
                            Marketing - <br />
                            Scale Your <br />
                            Brand Online
                        </p>
                    </div>

                    <div className="awardLabel">Award Winning Agency</div>
                </div>
            </div>
        </section>
    );
}
