'use client';

import MainMobileMenu from "@/layouts/subComponents/MainMobileMenu";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { Images } from "@/utils/Images";
import { X, ArrowRight, Phone, MessageCircle } from "lucide-react";
import "./OffCanvasPanel.scss";

type IProps = {
    openOffcanvas: boolean;
    setOpenOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
};

const OffCanvasPanel: React.FC<IProps> = ({ openOffcanvas, setOpenOffcanvas }) => {
    // Lock background page scroll while mobile sidebar is open
    useEffect(() => {
        if (typeof document === 'undefined') return;
        if (openOffcanvas) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [openOffcanvas]);

    const handleConsultationClick = () => {
        setOpenOffcanvas(false);
        if (typeof window !== 'undefined') {
            setTimeout(() => {
                window.dispatchEvent(new Event('openEnquiryForm'));
            }, 180);
        }
    };

    return (
        <>
            <div className={`tp-offcanvas-area nooryak-mobile-drawer ${openOffcanvas ? "opened" : ""}`}>
                <div className="tp-offcanvas-wrapper ny-drawer-shell">
                    {/* Header: Logo + Brand Subtitle + Close Button */}
                    <div className="ny-drawer-header">
                        <Link
                            href="/"
                            className="ny-drawer-brand"
                            onClick={() => setOpenOffcanvas(false)}
                        >
                            <div className="ny-drawer-logo-wrap">
                                <Image
                                    width={132}
                                    src={Images.logo}
                                    alt="Nooryak Technologies"
                                    className="ny-drawer-logo-img"
                                />
                            </div>
                            <span className="ny-drawer-tagline">DIGITAL &amp; SOFTWARE</span>
                        </Link>

                        <button
                            type="button"
                            onClick={() => setOpenOffcanvas(false)}
                            className="ny-drawer-close-btn"
                            aria-label="Close navigation menu"
                        >
                            <X size={20} strokeWidth={2.4} />
                        </button>
                    </div>

                    {/* Scrollable Pill Menu Body */}
                    <div className="ny-drawer-body">
                        <nav aria-label="Mobile Navigation">
                            <MainMobileMenu onNavigate={() => setOpenOffcanvas(false)} />
                        </nav>
                    </div>

                    {/* Footer: Gradient Orange CTA + WhatsApp & Direct Call + Location */}
                    <div className="ny-drawer-footer">
                        <button
                            type="button"
                            className="ny-cta-consultation-btn"
                            onClick={handleConsultationClick}
                        >
                            <span>Get Free Consultation</span>
                            <ArrowRight size={17} strokeWidth={2.4} />
                        </button>

                        <div className="ny-quick-contact-row">
                            <a
                                href="https://wa.me/916374913298?text=Hi%20Nooryak%20Technologies%2C%20I%20would%20like%20to%20discuss%20a%20project."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ny-quick-btn ny-quick-whatsapp"
                            >
                                <MessageCircle size={17} strokeWidth={2.3} />
                                <span>WhatsApp</span>
                            </a>
                            <a
                                href="tel:+916374913298"
                                className="ny-quick-btn ny-quick-call"
                            >
                                <Phone size={16} strokeWidth={2.3} />
                                <span>Direct Call</span>
                            </a>
                        </div>

                        <p className="ny-drawer-location">
                            Chennai &bull; India &bull; Remote Worldwide
                        </p>
                    </div>
                </div>
            </div>

            <div
                onClick={() => setOpenOffcanvas(false)}
                className={`body-overlay nooryak-mobile-overlay ${openOffcanvas ? "opened" : ""}`}
            ></div>
        </>
    );
};

export default OffCanvasPanel;
