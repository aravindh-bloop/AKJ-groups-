import React from 'react';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="video-container">
                <video autoPlay muted loop playsInline id="heroVideo">
                    <source src="assets/background-video.mp4" type="video/mp4" />
                </video>
                <div className="video-overlay"></div>
            </div>
            <div className="hero-content">
                <div className="container">
                    <h1 className="hero-title fade-in-up">Building Dreams Into Reality</h1>
                    <p className="hero-subtitle fade-in-up delay-1">Your DELIGHT our DEDICATION</p>
                    <div className="hero-buttons fade-in-up delay-2">
                        <a href="#contact" className="btn btn-primary">Get a Quote</a>
                        <a href="#projects" className="btn btn-secondary">View Projects</a>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
