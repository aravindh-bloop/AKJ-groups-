import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [formStatus, setFormStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus('sending');

        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData);
            setFormStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });

            setTimeout(() => setFormStatus(''), 3000);
        }, 1000);
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Get In Touch</span>
                    <h2 className="section-title">Contact Us</h2>
                    <p className="section-description">
                        Let's discuss your next project and bring your vision to life
                    </p>
                </div>
                <div className="contact-content">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name *"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email *"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-row">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your Message *"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={formStatus === 'sending'}
                        >
                            {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {formStatus === 'success' && (
                            <p className="form-success-message">Thank you! Your message has been sent successfully.</p>
                        )}
                    </form>
                    <div className="contact-info">
                        <div className="info-item">
                            <div className="info-icon">📍</div>
                            <div className="info-content">
                                <h4>Address</h4>
                                <p>123 Construction Avenue<br />Building District, Mumbai 400001</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">📞</div>
                            <div className="info-content">
                                <h4>Phone</h4>
                                <p>+91 98765 43210<br />+91 98765 43211</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">✉️</div>
                            <div className="info-content">
                                <h4>Email</h4>
                                <p>info@akjgroups.com<br />projects@akjgroups.com</p>
                            </div>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">🕒</div>
                            <div className="info-content">
                                <h4>Business Hours</h4>
                                <p>Monday - Saturday<br />9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
