'use client';

import { useState, useEffect } from "react";
import "./enquiryfrom.scss";
import { toast } from "sonner";
import Swal from 'sweetalert2';

export default function EnquiryForm() {
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'Digital Marketing',
        message: ''
    });

    useEffect(() => {
        let timeout: NodeJS.Timeout | null = null;

        if (closing) {
            timeout = setTimeout(() => {
                setOpen(false);
                setClosing(false);
            }, 400);
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [closing]);

    // Listen for global 'openEnquiryForm' custom event (fired by buttons anywhere on the page)
    useEffect(() => {
        const listener = () => handleOpen();
        window.addEventListener('openEnquiryForm', listener);
        return () => window.removeEventListener('openEnquiryForm', listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOpen = () => {
        setClosing(false);
        setOpen(true);
    };

    const handleClose = () => {
        setClosing(true);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await res.json();

            if (res.ok) {
                Swal.fire({
                    title: 'Enquiry Sent!',
                    text: 'We have received your request and will get back to you soon.',
                    icon: 'success',
                    confirmButtonColor: '#ff7a18',
                    background: '#111',
                    color: '#fff',
                });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    service: 'Digital Marketing',
                    message: ''
                });
                handleClose();
            } else {
                toast.error(data.message || 'Something went wrong');
            }
        } catch (error) {
            toast.error('Failed to send enquiry');
        } finally {
            setLoading(false);
        }
    };

    const isMounted = open || closing;
    const isActive = open && !closing;

    return (
        <div className="enquiryform">

            {/* 🔥 Floating Button */}
            <button onClick={handleOpen} className="gra_btn floating-trigger">
                <span className="btn-text">Enquiry</span>
                <i className="fa-solid fa-paper-plane"></i>
            </button>

            {isMounted && (
                <div
                    className={`enquiry-overlay ${isActive ? "open" : "closing"}`}
                    onClick={handleClose}
                >
                    <div
                        className={`enquiry-panel ${isActive ? "open" : "closing"}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-glow"></div>
                        <div className="bg-glow secondary"></div>

                        <button onClick={handleClose} className="close-btn" aria-label="Close Enquiry Form">
                            <i className="fa-solid fa-xmark"></i>
                        </button>

                        <div className="header-section">
                            <h2 className="title">Let’s Connect 🚀</h2>
                            <p className="subtitle">We’ll get back to you within 24 hours</p>
                        </div>

                        <form className="form" onSubmit={handleSubmit}>

                            <div className="input-group" style={{ "--idx": 1 } as React.CSSProperties}>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required 
                                    placeholder=" " 
                                />
                                <label htmlFor="name">Your Name</label>
                                <span className="bar"></span>
                            </div>

                            <div className="input-group" style={{ "--idx": 2 } as React.CSSProperties}>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required 
                                    placeholder=" " 
                                />
                                <label htmlFor="email">Email Address</label>
                                <span className="bar"></span>
                            </div>

                            <div className="input-group" style={{ "--idx": 3 } as React.CSSProperties}>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required 
                                    placeholder=" " 
                                />
                                <label htmlFor="phone">Phone Number</label>
                                <span className="bar"></span>
                            </div>

                            <div className="input-group services_select" style={{ "--idx": 4 } as React.CSSProperties}>
                                <label htmlFor="message">Services</label>
                                <select 
                                    name="service" 
                                    id="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="App Development">App Development</option>
                                    <option value="Google Ads">Google Ads</option>
                                    <option value="Software Development">Software Development</option>
                                    <option value="Social Media Marketing">Social Media Marketing</option>
                                    <option value="Graphic Designing">Graphic Designing</option>
                                    <option value="Video Editing">Video Editing</option>
                                </select>
                                <span className="bar"></span>
                            </div>

                            <div className="input-group" style={{ "--idx": 5 } as React.CSSProperties}>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={4} 
                                    value={formData.message}
                                    onChange={handleChange}
                                    required 
                                    placeholder=" "
                                ></textarea>
                                <label htmlFor="message">Your Message</label>
                                <span className="bar"></span>
                            </div>

                            <button type="submit" className="submit-btn" style={{ "--idx": 5 } as React.CSSProperties} disabled={loading}>
                                <span>{loading ? 'Sending...' : 'Send Enquiry'}</span>
                                <i className="fa-solid fa-paper-plane-top"></i>
                            </button>
                        </form>

                    </div>
                </div>
            )}
        </div>
    );
}