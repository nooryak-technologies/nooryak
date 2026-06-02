'use client';

import { ArrowTwenty } from '@/svg/ArrowIcons';
import React, { useState } from 'react';
import { toast } from 'sonner';
import Swal from 'sweetalert2';

const ContactFormArea = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '', // Used for Company
        service: 'Digital Marketing',
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
                    company: formData.subject,
                    service: formData.service,
                    message: formData.message
                })
            });

            const data = await res.json();

            if (res.ok) {
                Swal.fire({
                    title: 'Message Sent!',
                    text: 'Thank you for reaching out. Our team will contact you shortly.',
                    icon: 'success',
                    confirmButtonColor: '#ff7a18',
                    background: '#111',
                    color: '#fff',
                });
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    service: 'Digital Marketing',
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
        <div className="tp-contact-form-ptb pb-140">
            <div className="container container-1230">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-contact-form-heading mb-50">
                            <div className="ar-about-us-4-title-box d-flex align-items-center mb-15">
                                <span className="tp-section-subtitle pre">Contact Us</span>
                                <div className="ar-about-us-4-icon">
                                    <ArrowTwenty />
                                </div>
                            </div>
                            <h3 className="tp-section-title lts">{`Let's`} make <br />
                                your brand <br />
                                brilliant!</h3>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-contact-form-wrap">
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Full name*</label>
                                            <input 
                                                name="name" 
                                                type="text" 
                                                value={formData.name} 
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Email address*</label>
                                            <input 
                                                name="email" 
                                                type="email" 
                                                value={formData.email} 
                                                onChange={handleChange} 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Company</label>
                                            <input 
                                                name="subject" 
                                                type="text" 
                                                value={formData.subject} 
                                                onChange={handleChange} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>Services</label>
                                           <select 
                                                name="service" 
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
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="tp-contact-form-input mb-20">
                                            <label>How Can We Help You*
                                            </label>
                                            <textarea 
                                                name="message" 
                                                value={formData.message} 
                                                onChange={handleChange} 
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="tp-contact-form-btn">
                                            <button className="w-100" type="submit" disabled={loading}>
                                                <span>
                                                    <span className="text-1">{loading ? 'Sending...' : 'Send Message'}</span>
                                                    <span className="text-2">{loading ? 'Sending...' : 'Send Message'}</span>
                                                </span>
                                            </button>
                                            <p className="ajax-response mt-5"></p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFormArea;