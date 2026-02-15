import React from 'react';

const About = () => {
    const stats = [
        { number: '500+', label: 'Projects Completed' },
        { number: '50+', label: 'Expert Team Members' },
        { number: '28+', label: 'Years Experience' },
        { number: '100%', label: 'Client Satisfaction' }
    ];

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <span className="section-tag">About Us</span>
                        <h2 className="section-title">Building Excellence Since 1995</h2>
                        <p>
                            AKJ Groups is a premier construction and architecture firm with nearly three decades of
                            excellence in delivering exceptional quality across residential, commercial, and industrial
                            projects. Our journey began with a simple vision: to transform dreams into concrete reality
                            through innovative design and superior craftsmanship.
                        </p>
                        <p>
                            Our team of highly skilled professionals combines time-honored construction techniques with
                            cutting-edge technology to create spaces that inspire, endure, and exceed expectations. We
                            take pride in our commitment to sustainability, quality, and client satisfaction in every
                            project we undertake.
                        </p>
                        <p>
                            From concept to completion, we work closely with our clients to ensure their vision is
                            realized with precision and care. Our comprehensive approach encompasses architectural
                            design, project management, and construction excellence.
                        </p>
                    </div>
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div className="stat-card" key={index}>
                                <h3>{stat.number}</h3>
                                <p>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
