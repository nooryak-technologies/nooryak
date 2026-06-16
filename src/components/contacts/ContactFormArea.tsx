'use client';

import React, { useState } from 'react';
import { toast } from 'sonner';
import Swal from 'sweetalert2';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowRight, Send } from 'lucide-react';

const ContactFormArea = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/enquiry', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    phone: formData.phone,
                    service: formData.service || 'General Inquiry',
                    message: formData.message
                })
            });

            const data = await res.json();

            if (res.ok) {
                Swal.fire({
                    title: 'Message Sent!',
                    text: 'Thank you for reaching out. Our team will contact you shortly.',
                    icon: 'success',
                    confirmButtonColor: '#FF5A1F',
                    background: '#ffffff',
                    color: '#111111',
                    customClass: {
                        popup: 'custom-swal-popup',
                        confirmButton: 'custom-swal-confirm-btn'
                    }
                });
                setFormData({
                    name: '',
                    email: '',
                    company: '',
                    phone: '',
                    service: '',
                    message: ''
                });
            } else {
                toast.error(data.message || 'Something went wrong');
            }
        } catch (error) {
            toast.error('Failed to submit enquiry');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-page-new pb-120 pt-160">
            <div className="container">
                <div className="row g-5">
                    {/* Left Column: Contact details and Google Map */}
                    <div className="col-lg-6 col-12">
                        <div className="contact-details-column">
                            <div className="contact-kicker d-flex align-items-center mb-15">
                                <span className="orange-dot">•</span>
                                <span className="kicker-text">CONTACT US</span>
                            </div>

                            <h1 className="contact-heading mb-25">
                                We'd Love to Hear <br />
                                From <span className="highlight-orange">You</span>
                            </h1>

                            <p className="contact-description mb-40">
                                Have a project in mind or need expert advice? Our team is ready to
                                help you bring your ideas to life. Get in touch with us today!
                            </p>

                            <div className="contact-cards-grid mb-40">
                                <div className="row g-2">
                                    {/* Card 1: Call Us */}
                                    <div className="col-lg-3 col-6">
                                        <div className="info-card">
                                            <div className="icon-circle">
                                                <Phone size={20} className="icon-orange" />
                                            </div>
                                            <h3 className="card-title">Call Us</h3>
                                            <p className="card-value">+91 63749 13298</p>
                                            <p className="card-note">Mon - Sat 10:00 AM - 7:00 PM</p>
                                        </div>
                                    </div>

                                    {/* Card 2: Email Us */}
                                    <div className="col-lg-3 col-6">
                                        <div className="info-card">
                                            <div className="icon-circle">
                                                <Mail size={20} className="icon-orange" />
                                            </div>
                                            <h3 className="card-title">Email Us</h3>
                                            <p className="card-value">contact@nooryak.com</p>
                                            <p className="card-note">We reply within 24 hours</p>
                                        </div>
                                    </div>

                                    {/* Card 3: Visit Us */}
                                    <div className="col-lg-3 col-6">
                                        <div className="info-card">
                                            <div className="icon-circle">
                                                <MapPin size={20} className="icon-orange" />
                                            </div>
                                            <h3 className="card-title">Visit Us</h3>
                                            <p className="card-value address-text">
                                                Shafi Tower, Floor 1, Door, Khana Bagh Street, Police Quarters Lane, Chennai, Tamil Nadu 600001
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card 4: Business Hours */}
                                    <div className="col-lg-3 col-6">
                                        <div className="info-card">
                                            <div className="icon-circle">
                                                <Clock size={20} className="icon-orange" />
                                            </div>
                                            <h3 className="card-title">Business Hours</h3>
                                            <div className="card-value-stack">
                                                <p className="time-row">
                                                    <span className="day-name">Mon - Sat</span>
                                                    <span className="time-val">10:00 AM - 7:00 PM</span>
                                                </p>
                                                <p className="time-row">
                                                    <span className="day-name">Sunday</span>
                                                    <span className="time-val closed">Closed</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Box */}
                            <div className="contact-map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.6042264474518!2d80.27275357507806!3d13.060845387262779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526703186886ef%3A0xc96617a758dc125a!2sNOORYAK%20TECHNOLOGIES%20Website%20Development%20Company%20Chennai!5e0!3m2!1sen!2sin!4v1774884227172!5m2!1sen!2sin"
                                    width="100%"
                                    height="320"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Send Us a Message Card */}
                    <div className="col-lg-6 col-12">
                        <div className="contact-form-card">
                            <h2 className="form-title">Send Us a Message</h2>
                            <p className="form-subtitle">Fill out the form below and we'll get back to you shortly.</p>

                            <form onSubmit={handleSubmit} className="custom-form">
                                <div className="row g-4">
                                    <div className="col-md-6 col-12">
                                        <div className="form-field">
                                            <label>Full Name <span className="required-asterisk">*</span></label>
                                            <input
                                                name="name"
                                                type="text"
                                                placeholder="Enter your full name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <div className="form-field">
                                            <label>Email Address <span className="required-asterisk">*</span></label>
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="Enter your email address"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <div className="form-field">
                                            <label>Company</label>
                                            <input
                                                name="company"
                                                type="text"
                                                placeholder="Enter your company name"
                                                value={formData.company}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-12">
                                        <div className="form-field">
                                            <label>Phone Number</label>
                                            <input
                                                name="phone"
                                                type="tel"
                                                placeholder="Enter your phone number"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-field">
                                            <label>Services Interested In</label>
                                            <div className="select-wrapper">
                                                <select
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleChange}
                                                >
                                                    <option value="" disabled>Select a service</option>
                                                    <option value="Digital Marketing">Digital Marketing</option>
                                                    <option value="Web Development">Web Development</option>
                                                    <option value="App Development">App Development</option>
                                                    <option value="Google Ads / PPC">Google Ads / PPC</option>
                                                    <option value="Local SEO">Local SEO</option>
                                                    <option value="Software Development">Software Development</option>
                                                    <option value="MLM Software Development">MLM Software Development</option>
                                                    <option value="Social Media Marketing">Social Media Marketing</option>
                                                    <option value="Graphic Designing">Graphic Designing</option>
                                                    <option value="Video Editing">Video Editing</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <div className="form-field">
                                            <label>How Can We Help You? <span className="required-asterisk">*</span></label>
                                            <textarea
                                                name="message"
                                                placeholder="Tell us about your project or requirement..."
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="col-12 mt-4">
                                        <button className="submit-btn" type="submit" disabled={loading}>
                                            <span>{loading ? 'Sending...' : 'Send Message'}</span>
                                            <ArrowRight size={18} className="btn-arrow" />
                                        </button>
                                    </div>

                                    <div className="col-12 mt-3 text-center">
                                        <div className="privacy-badge d-flex align-items-center justify-content-center">
                                            <ShieldCheck size={16} className="privacy-icon me-2" />
                                            <span>We respect your privacy. Your information is safe with us.</span>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sticky Enquiry Sidebar Badge */}
            <div className="enquiry-sidebar-badge" onClick={() => window.dispatchEvent(new Event('openEnquiryForm'))}>
                <div className="badge-letters">
                    <span>E</span>
                    <span>N</span>
                    <span>Q</span>
                    <span>U</span>
                    <span>I</span>
                    <span>R</span>
                    <span>Y</span>
                </div>
                <div className="badge-icon-box">
                    <Send size={11} className="badge-icon" />
                </div>
            </div>
        </section>
    );
};

export default ContactFormArea;