import React from 'react';
import Services from './Services';
import QualityPledge from './QualityPledge';
import Partners from './Partners'; // We'll keep the base data but redesign it below or update it

const ServicesPage = () => {
    return (
        <div className="services-page">
            {/* Services Hero */}
            <section className="about-hero">
                <div className="about-hero-image-wrapper">
                    <img 
                        src="/assets/home arch.jpg" 
                        alt="Services Excellence" 
                        className="about-hero-image" 
                    />
                </div>
                <div className="about-hero-content">
                    <div className="container">
                        <div className="section-tag fade-in-up">What We Do</div>
                        <h1 className="about-hero-title fade-in-up delay-1">
                            Excellence in Every Pillar
                        </h1>
                        <p className="about-hero-subtitle fade-in-up delay-2">
                            Comprehensive construction, design, and consultancy solutions for 
                            the modern world. We combine decades of expertise with cutting-edge 
                            innovation to build your future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Core Services Section */}
            <Services />

            {/* Quality Pledge Integration */}
            <QualityPledge />

            {/* Redesigned Partners Section */}
            <Partners />

            {/* Call to Action */}
            <section className="about-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2 className="cta-title">Looking for Expert Consultation?</h2>
                        <p className="cta-subtitle">
                            Discuss your vision with our senior architects and engineers today.
                        </p>
                        <div className="cta-buttons">
                            <a href="#contact" className="btn btn-primary btn-large">Get Free Consultation</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
