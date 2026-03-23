import React from 'react';

const Services = () => {
    const services = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            ),
            title: 'Residential Construction',
            description: 'Custom homes designed and built to perfection, reflecting your lifestyle and aspirations.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
            ),
            title: 'Commercial Projects',
            description: 'State-of-the-art commercial spaces that enhance productivity and brand presence.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
            ),
            title: 'Architectural Design',
            description: 'Innovative designs that blend aesthetics with functionality for lasting impact.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
            ),
            title: 'Interior Design',
            description: 'Curated interior solutions that transform spaces into inspiring environments.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
            ),
            title: 'Renovation & Remodeling',
            description: 'Transform existing spaces with expert renovation and modernization services.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
            ),
            title: 'Project Management',
            description: 'End-to-end project management ensuring timely delivery within budget.'
        }
    ];

    return (
        <section className="services" id="services">
            <div className="container">
                <div className="section-header fade-in-up">
                    <span className="section-tag-modern">Our Craft</span>
                    <h2 className="section-title">Core Specializations</h2>
                    <p className="section-description">Delivering structural excellence through industrial-grade precision and architectural innovation.</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card fade-in-up" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="service-icon-wrapper">
                                <div className="service-icon">{service.icon}</div>
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <div className="service-link">
                                <span>Explore Service</span>
                                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
