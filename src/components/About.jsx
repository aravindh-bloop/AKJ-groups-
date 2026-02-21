import React from 'react';

const About = () => {
    const values = [
        {
            icon: '🎯',
            title: 'Excellence',
            description: 'We strive for perfection in every project, ensuring the highest quality standards in construction.'
        },
        {
            icon: '🤝',
            title: 'Integrity',
            description: 'Honesty and transparency form the foundation of our relationships with clients and partners.'
        },
        {
            icon: '💡',
            title: 'Innovation',
            description: 'We embrace cutting-edge technologies and modern construction methodologies.'
        },
        {
            icon: '🌱',
            title: 'Sustainability',
            description: 'Building responsibly for today while preserving resources for tomorrow.'
        },
        {
            icon: '⚡',
            title: 'Efficiency',
            description: 'Delivering projects on time and within budget without compromising quality.'
        },
        {
            icon: '❤️',
            title: 'Customer Focus',
            description: 'Your satisfaction is our success. We listen, understand, and deliver beyond expectations.'
        }
    ];

    const team = [
        {
            name: 'N. Augustin',
            role: 'Founder',
            initial: 'NA',
            description: 'Visionary founder who established AKJ Groups with a commitment to excellence and innovation.'
        },
        {
            name: 'A. Kumutha',
            role: 'Chairman',
            initial: 'AK',
            description: 'Strategic leader guiding the company\'s vision and ensuring sustainable growth.'
        },
        {
            name: 'A. Jenson Bright',
            role: 'Managing Director',
            initial: 'AJB',
            description: 'Driving operational excellence and strategic initiatives across all projects.'
        },
        {
            name: 'A. Jenson Bright',
            role: 'Director',
            initial: 'AJB',
            description: 'Overseeing project execution and maintaining the highest quality standards.'
        },
        {
            name: 'S. Nambirajan',
            role: 'Vice President',
            initial: 'SN',
            description: 'Leading key initiatives and ensuring seamless coordination across departments.'
        },
        {
            name: 'V. Kumaresan',
            role: 'Project Engineer',
            initial: 'VK',
            description: 'Expert in project engineering, ensuring technical excellence in every build.'
        },
        {
            name: 'Saravanan',
            role: 'Architect',
            initial: 'S',
            description: 'Creative architect designing innovative and functional spaces.'
        },
        {
            name: 'Prabakar',
            role: 'Structural Engineer',
            initial: 'P',
            description: 'Ensuring structural integrity and safety in all construction projects.'
        },
        {
            name: 'Sudharshanan',
            role: 'Geo Technical Engineer',
            initial: 'S',
            description: 'Specialist in geotechnical analysis and foundation engineering.'
        },
        {
            name: 'Alex',
            role: 'Road & Infrastructure',
            initial: 'A',
            description: 'Expert in road construction and infrastructure development projects.'
        },
        {
            name: 'Maridurai',
            role: 'Survey Specialist',
            initial: 'M',
            description: 'Precision surveying and site analysis for accurate project planning.'
        },
        {
            name: 'Joderick Sherwin',
            role: 'Website Manager',
            initial: 'JS',
            description: 'Managing digital presence and online communications for AKJ Groups.'
        }
    ];

    return (
        <div className="about-page">
            {/* Landing Content */}
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <img
                    src="assets/happy home.jpg"
                    alt="Happy Home"
                    className="about-hero-image"
                />
                <div className="about-hero-content">
                    <div className="container">
                        <span className="section-tag fade-in-up">About Us</span>
                        <h1 className="about-hero-title fade-in-up delay-1">
                            Building Trust, Creating Homes
                        </h1>
                        <p className="about-hero-subtitle fade-in-up delay-2">
                            For over a decade, AKJ Groups has been transforming dreams into reality,
                            one project at a time. We don't just build structures; we create spaces
                            where memories are made and futures are built.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="about-commitment">
                <div className="container">
                    <div className="commitment-grid">
                        <div className="commitment-image-wrapper">
                            <img
                                src="assets/home arch.jpg"
                                alt="Architectural Excellence"
                                className="commitment-image"
                            />
                        </div>
                        <div className="commitment-content">
                            <span className="section-tag">Our Commitment</span>
                            <h2 className="section-title">Dedicated to Your Dreams</h2>
                            <p className="commitment-text">
                                AKJ GROUPS rakes pride in redefining excellence by crafting every project into a masterpiece
                                of precision, innovation and elegance. Revered for our unparalleled commitment to quality and artistry,
                                we transform visions into enduring realities that reflect sophistication and granduer. Specializing in
                                both Construction and Consultancy, we ensure creation blends architectural brilliance with engineering
                                precision, delivering unmatched results.
                            </p>
                            <p className="commitment-text">
                                With a client-first ethos, we guarantee seamless communication, timely delivery, and meticulous
                                attention to every detail, fostering enduring trust and admiration. As a trailblazer in premier construction
                                and consultancy, AKJ GROUPS stands as a symbol of prestige, creating iconic spaces that inspire confidence, elevate
                                standards, and leave an everlasting imprint on the communities we proudly serve.

                            </p>
                            <div className="commitment-stats">
                                <div className="stat-item">
                                    <span className="stat-number">500+</span>
                                    <span className="stat-label">Projects Completed</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">98%</span>
                                    <span className="stat-label">Client Satisfaction</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">50+</span>
                                    <span className="stat-label">Expert Team Members</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="vision-mission">
                <div className="container">
                    <div className="vm-grid">
                        <div className="vm-card vision-card">
                            <div className="vm-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                    <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                            </div>
                            <span className="vm-tag">Our Vision</span>
                            <h3 className="vm-title">Shaping Tomorrow's Skyline</h3>
                            <p className="vm-description">
                                Our vision is to ascend as the most esteemed and trusted partner in construction and consultancy, renowned
                                for our relentless pursuit of excellence, innovation, and bespoke client-focused solutions. We endeavor to redfine industry benchmarks
                                by delivering projects that not only inspire unparalleled confidence but also bring our clients unique aspirations to life.
                                with every endeavor, we seek to leave an inedible mark of grandeur and value, enriching the communities we proudly serve.
                            </p>
                        </div>

                        <div className="vm-card mission-card">
                            <div className="vm-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                </svg>
                            </div>
                            <span className="vm-tag">Our Mission</span>
                            <h3 className="vm-title">Excellence in Every Detail</h3>
                            <p className="vm-description">
                                Our mission is to deliver top-notch construction and consultancy solutions with a strong focus on client
                                satisfaction and exceptional quality. We are passionate about exceeding expectations through open communication,
                                thorough attention to detail, and a steadfast commitment to safety. By completeling projects efficiently
                                and upholding the highest standards, we aim to build lasting partnerships with our clients and craft timeless
                                spaces that inspire and endure.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="about-values">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Our Values</span>
                        <h2 className="section-title">The Pillars of Our Success</h2>
                        <p className="section-description">
                            Our core values guide every decision we make and every project we undertake
                        </p>
                    </div>
                    <div className="values-grid">
                        {values.map((value, index) => (
                            <div key={index} className="value-card">
                                <div className="value-icon">{value.icon}</div>
                                <h3 className="value-title">{value.title}</h3>
                                <p className="value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Team */}
            <section className="about-team">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">The Team</span>
                        <h2 className="section-title">Meet the Minds Behind AKJ Groups</h2>
                        <p className="section-description">
                            Our talented team of professionals brings together decades of experience
                            and a shared passion for excellence
                        </p>
                    </div>
                    <div className="team-grid">
                        {team.map((member, index) => (
                            <div key={index} className="team-card">
                                <div className="team-avatar">
                                    <span className="team-initial">{member.initial}</span>
                                    <div className="team-avatar-ring"></div>
                                </div>
                                <div className="team-info">
                                    <h3 className="team-name">{member.name}</h3>
                                    <span className="team-role">{member.role}</span>
                                    <p className="team-description">{member.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="about-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Ready to Start Your Project?</h2>
                        <p className="cta-subtitle">
                            Let's turn your vision into reality. Get in touch with us today.
                        </p>
                        <div className="cta-buttons">
                            <a href="#contact" className="btn btn-primary btn-large">Get Started</a>
                            <a href="#projects" className="btn btn-secondary btn-large">View Our Work</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
