import React from 'react';

const JointVenture = () => {

    const services = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="36" height="36">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
            ),
            title: 'Land Evaluation',
            desc: 'Comprehensive site assessment, title verification, and feasibility analysis before any commitment is made.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="36" height="36">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <path d="M8 21h8M12 17v4"/>
                    <path d="M7 7h10M7 11h6"/>
                </svg>
            ),
            title: 'Legal Process Support',
            desc: 'Full assistance with documentation, sale deed execution, encumbrance checks, and regulatory approvals.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="36" height="36">
                    <path d="M2 20h20M4 20V10l8-6 8 6v10"/>
                    <path d="M9 20v-5h6v5"/>
                    <path d="M12 4v2"/>
                </svg>
            ),
            title: 'Plan Approvals',
            desc: 'Expert guidance through DTCP, CMDA, and local body approvals with minimal delays and full compliance.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="36" height="36">
                    <circle cx="12" cy="12" r="2"/>
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
            ),
            title: 'Architectural Planning',
            desc: 'Modern, functional layouts designed by experienced architects balancing aesthetics with smart space utilization.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="36" height="36">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
            ),
            title: 'Structural Planning',
            desc: 'Robust structural engineering ensuring seismic resistance, longevity, and full compliance with IS standards.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="36" height="36">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
            ),
            title: 'Construction Management',
            desc: 'On-site supervision, quality control, and vendor management ensuring timely, premium-grade execution.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="36" height="36">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
            ),
            title: 'Progress Monitoring',
            desc: 'Regular milestone updates, transparent reporting, and open communication with landowners at every stage.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="36" height="36">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                </svg>
            ),
            title: 'Final Handover',
            desc: 'Thorough inspection, completion certificate, and seamless handover to landowners and residents.'
        },
    ];

    const process = [
        {
            step: '01',
            title: 'Initial Discussion',
            desc: 'We meet with the landowner to understand the property, goals, and joint venture expectations. Full transparency from day one.'
        },
        {
            step: '02',
            title: 'Site Evaluation & Feasibility',
            desc: 'Our team evaluates the land for buildability, legal status, and commercial potential before any agreement is signed.'
        },
        {
            step: '03',
            title: 'MOU & Legal Documentation',
            desc: 'A structured MOU is drawn and legally executed, clearly defining roles, share ratios, timelines, and responsibilities.'
        },
        {
            step: '04',
            title: 'Design & Approvals',
            desc: 'Architectural design, structural engineering, and all regulatory approvals are obtained with our expert team handling the process.'
        },
        {
            step: '05',
            title: 'Construction Phase',
            desc: 'Premium-grade construction begins with full project management, quality audits, and regular landowner updates.'
        },
        {
            step: '06',
            title: 'Completion & Handover',
            desc: 'Final inspection, OC certification, and successful handover — your land transformed into a value-driven modern development.'
        },
    ];

    const whyUs = [
        { stat: '15+', label: 'Years Experience' },
        { stat: '50+', label: 'JV Projects Delivered' },
        { stat: '100%', label: 'Legal Compliance' },
        { stat: '0', label: 'Compromises on Quality' },
    ];

    return (
        <div className="jv-page">

            {/* Hero */}
            <section className="jv-hero">
                <div className="jv-hero-overlay" />
                <div className="jv-hero-bg-pattern" />
                <div className="jv-hero-content">
                    <div className="container">
                        <span className="jv-eyebrow fade-in-up">Joint Venture Development</span>
                        <h1 className="jv-hero-title fade-in-up delay-1">
                            Your Land.<br />
                            <span className="jv-title-gold">Our Expertise.</span><br />
                            Shared Success.
                        </h1>
                        <p className="jv-hero-subtitle fade-in-up delay-2">
                            AKJ Groups transforms vacant plots and redevelopment properties into
                            premium modern residences — with full transparency, zero compromise on quality,
                            and long-term partnerships built on trust.
                        </p>
                        <div className="jv-hero-ctas fade-in-up delay-3">
                            <a href="#jv-contact" className="btn btn-primary">Explore a Joint Venture</a>
                            <a href="#jv-process" className="btn btn-secondary">How It Works</a>
                        </div>
                    </div>
                </div>
                {/* Floating stat chips */}
                <div className="jv-hero-chips">
                    <span className="jv-chip">✦ Chennai-Based</span>
                    <span className="jv-chip">✦ End-to-End Development</span>
                    <span className="jv-chip">✦ Transparent Partnerships</span>
                </div>
            </section>

            {/* Intro strip */}
            <div className="jv-gold-strip">
                <span>Premium Residential Development</span>
                <span className="jv-strip-dot">◆</span>
                <span>Joint Venture Specialists</span>
                <span className="jv-strip-dot">◆</span>
                <span>Vacant Land Transformation</span>
                <span className="jv-strip-dot">◆</span>
                <span>Redevelopment Projects</span>
            </div>

            {/* About / Overview */}
            <section className="jv-overview">
                <div className="container">
                    <div className="jv-overview-grid">
                        <div className="jv-overview-left">
                            <span className="section-tag">Who We Are</span>
                            <h2 className="section-title">An Emerging Force in<br />Joint Venture Development</h2>
                            <p className="jv-body-text">
                                AKJ GROUPS is an emerging construction and joint venture development company based in Chennai,
                                committed to delivering high-quality residential projects with professionalism and integrity.
                                We specialize in joint venture developments and residential construction, transforming vacant
                                lands and redevelopment properties into well-planned modern living spaces.
                            </p>
                            <p className="jv-body-text">
                                As a growing company, we are dedicated to building long-term partnerships based on trust,
                                commitment, and mutual growth — ensuring satisfaction for both landowners and future residents.
                            </p>
                            <div className="jv-overview-badges">
                                <span className="jv-badge">✓ Quality Workmanship</span>
                                <span className="jv-badge">✓ Structural Strength</span>
                                <span className="jv-badge">✓ Regulatory Compliance</span>
                                <span className="jv-badge">✓ Timely Delivery</span>
                            </div>
                        </div>
                        <div className="jv-overview-right">
                            <div className="jv-overview-card main-card">
                                <div className="jv-overview-card-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
                                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                        <polyline points="9 22 9 12 15 12 15 22"/>
                                    </svg>
                                </div>
                                <h3>Our Objective</h3>
                                <p>
                                    To create value-driven developments that combine smart design, efficient space
                                    utilization, and modern construction standards — delivering an exceptional outcome
                                    for landowners, buyers, and the communities we build in.
                                </p>
                            </div>
                            <div className="jv-overview-card accent-card">
                                <div className="jv-overview-card-icon accent">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="40" height="40">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                        <circle cx="9" cy="7" r="4"/>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                                    </svg>
                                </div>
                                <h3>Our Approach</h3>
                                <p>
                                    Systematic execution, full transparency, and strong communication with all stakeholders
                                    throughout the entire project lifecycle — from first handshake to final handover.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Partner stats */}
            <section className="jv-stats-band">
                <div className="container">
                    <div className="jv-stats-grid">
                        {whyUs.map((item, i) => (
                            <div className="jv-stat-item" key={i}>
                                <span className="jv-stat-number">{item.stat}</span>
                                <span className="jv-stat-label">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services we provide */}
            <section className="jv-services" id="jv-services">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">End-to-End Support</span>
                        <h2 className="section-title">Everything Managed, Nothing Left to Chance</h2>
                        <p className="section-description">
                            From the moment you share your land details to the day keys are handed over —
                            every step is handled with expertise and care.
                        </p>
                    </div>
                    <div className="jv-services-grid">
                        {services.map((svc, i) => (
                            <div className="jv-service-card" key={i}>
                                <div className="jv-service-icon">{svc.icon}</div>
                                <h4 className="jv-service-title">{svc.title}</h4>
                                <p className="jv-service-desc">{svc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process timeline */}
            <section className="jv-process" id="jv-process">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Our Process</span>
                        <h2 className="section-title">From Handshake to Handover</h2>
                        <p className="section-description">
                            A clear, structured journey — so you always know what's happening with your land.
                        </p>
                    </div>
                    <div className="jv-timeline">
                        {process.map((step, i) => (
                            <div className={`jv-timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
                                <div className="jv-timeline-node">
                                    <span className="jv-node-step">{step.step}</span>
                                </div>
                                <div className="jv-timeline-card">
                                    <h4 className="jv-timeline-title">{step.title}</h4>
                                    <p className="jv-timeline-desc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                        <div className="jv-timeline-line" />
                    </div>
                </div>
            </section>

            {/* Why Partner with AKJ */}
            <section className="jv-why">
                <div className="container">
                    <div className="jv-why-grid">
                        <div className="jv-why-left">
                            <span className="section-tag">Why Choose AKJ Groups</span>
                            <h2 className="section-title">Built on Trust,<br />Delivered with Integrity</h2>
                            <p className="jv-body-text">
                                We understand that handing over your land is one of the biggest decisions you'll make.
                                That is why every engagement starts with full transparency — shared timelines, clear agreements,
                                and open communication throughout.
                            </p>
                            <ul className="jv-why-list">
                                <li>
                                    <span className="jv-why-dot">◆</span>
                                    <div>
                                        <strong>Zero Quality Compromise</strong>
                                        <p>We use only premium-grade materials — even when it costs more. Your project deserves the best.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="jv-why-dot">◆</span>
                                    <div>
                                        <strong>Legally Watertight Process</strong>
                                        <p>Every agreement, approval, and document handled with full legal rigor by our expert team.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="jv-why-dot">◆</span>
                                    <div>
                                        <strong>Transparent Reporting</strong>
                                        <p>Regular progress updates, milestone reports, and always-open communication with landowners.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className="jv-why-dot">◆</span>
                                    <div>
                                        <strong>Mutual Growth Partnership</strong>
                                        <p>We treat every joint venture as a long-term relationship — your success is our success.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="jv-why-right">
                            <div className="jv-why-visual">
                                <div className="jv-why-ring outer" />
                                <div className="jv-why-ring middle" />
                                <div className="jv-why-ring inner" />
                                <div className="jv-why-center">
                                    <span className="jv-why-center-text">Your Land<br />Our Expertise</span>
                                    <span className="jv-why-center-sub">= Shared Success</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA section */}
            <section className="jv-cta" id="jv-contact">
                <div className="jv-cta-bg" />
                <div className="container">
                    <div className="jv-cta-inner">
                        <span className="jv-eyebrow" style={{ color: '#C9960C' }}>Start the Conversation</span>
                        <h2 className="jv-cta-heading">
                            Have Land in Chennai?<br />
                            <span className="jv-title-gold">Let's Build Something Together.</span>
                        </h2>
                        <p className="jv-cta-subtext">
                            Reach out for a no-obligation consultation. Our team will evaluate your property,
                            walk you through the joint venture structure, and answer every question — openly and honestly.
                        </p>
                        <div className="jv-cta-actions">
                            <a href="tel:+919710397104" className="btn btn-primary jv-cta-btn">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                                </svg>
                                Call Us Now
                            </a>
                            <a href="https://wa.me/919710397104" target="_blank" rel="noopener noreferrer" className="btn btn-secondary jv-cta-btn">
                                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                WhatsApp Us
                            </a>
                        </div>
                        <p className="jv-cta-note">📍 Based in Chennai &nbsp;·&nbsp; Available across Tamil Nadu</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default JointVenture;
