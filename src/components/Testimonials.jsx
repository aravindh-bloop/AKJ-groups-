import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            text: 'What struck me most was that AKJ Groups used the exact same premium tiles and fittings they had promised — even though I was facing budget constraints. They flatly refused to downgrade. That integrity is rare.',
            author: 'Rajesh Sharma',
            position: 'CEO, TechVision Solutions',
            highlight: 'No compromise on materials'
        },
        {
            text: 'I was amazed — even when I offered to cut costs halfway through, they refused to swap to cheaper brands. They said "our name is on this building." That commitment to quality is why I recommend AKJ Groups to everyone.',
            author: 'Kavita Singh',
            position: 'Architect, Delhi',
            highlight: 'Refused to cut corners'
        },
        {
            text: 'Every fitting, every wire, every tile was a top-grade brand — no substitutes, no shortcuts. AKJ Groups delivered quality that goes far beyond what I expected for the price.',
            author: 'Vikram Reddy',
            position: 'Business Owner, Hyderabad',
            highlight: 'Top-grade brands throughout'
        },
        {
            text: 'The craftsmanship is exceptional. AKJ Groups has a zero-compromise policy that you can actually feel in every room. The quality of finishing speaks for itself — years later, nothing has degraded.',
            author: 'Neha Kapoor',
            position: 'Environmental Consultant, Pune',
            highlight: 'Built to last'
        }
    ];

    const testimonialsColumn2 = [
        {
            text: 'I specifically asked them to use cheaper cement to cut costs. They explained why they couldn\'t — and used premium grade instead at no extra charge. AKJ Groups takes their quality standard seriously.',
            author: 'Amit Patel',
            position: 'Homeowner, Ahmedabad',
            highlight: 'Upgraded at no extra charge'
        },
        {
            text: 'Every single material used in our facility was premium-grade — AKJ Groups refused to make any substitutions. Our employees actually notice the quality of the space every single day.',
            author: 'Priya Menon',
            position: 'Operations Manager, Chennai',
            highlight: 'Quality you can feel daily'
        },
        {
            text: 'I\'ve worked with many contractors who quietly swap to inferior brands. AKJ Groups is completely different — they showed me every bill, every brand. Absolute transparency and uncompromising quality.',
            author: 'Sanjay Kumar',
            position: 'Property Developer, Kolkata',
            highlight: 'Full material transparency'
        },
        {
            text: 'Their work ethic is unmatched. During a material shortage, they delayed delivery by 2 weeks rather than substitute with a lower-quality brand. That dedication is what sets AKJ Groups apart.',
            author: 'Meera Desai',
            position: 'Interior Designer, Mumbai',
            highlight: 'Delayed, not downgraded'
        }
    ];

    // Duplicate for seamless loop
    const column1Data = [...testimonials, ...testimonials];
    const column2Data = [...testimonialsColumn2, ...testimonialsColumn2];

    return (
        <>
            {/* Quality Banner above Testimonials */}
            <div className="testimonials-quality-banner">
                <div className="tqb-inner">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" className="tqb-icon">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span className="tqb-text">
                        Our clients consistently highlight one thing above all else —
                        <strong> our refusal to compromise on quality, no matter the circumstance.</strong>
                    </span>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22" className="tqb-icon">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                </div>
            </div>

            <section className="testimonials" id="testimonials">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">Client Feedback</span>
                        <h2 className="section-title">What Our Clients Say</h2>
                        <p className="section-description">
                            Real clients. Real projects. One consistent truth — 
                            <span className="testimonials-quality-line"> uncompromising quality every single time.</span>
                        </p>
                    </div>
                    <div className="testimonials-scroll-container">
                        {/* Left Column - Scrolls Up */}
                        <div className="testimonials-column scroll-up">
                            {column1Data.map((testimonial, index) => (
                                <div className="testimonial-card" key={index}>
                                    <div className="testimonial-highlight-badge">
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                        {testimonial.highlight}
                                    </div>
                                    <div className="quote-icon">"</div>
                                    <p className="testimonial-text">{testimonial.text}</p>
                                    <div className="testimonial-author">
                                        <div className="author-avatar"></div>
                                        <div className="author-info">
                                            <h4>{testimonial.author}</h4>
                                            <p>{testimonial.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Column - Scrolls Down */}
                        <div className="testimonials-column scroll-down">
                            {column2Data.map((testimonial, index) => (
                                <div className="testimonial-card" key={index}>
                                    <div className="testimonial-highlight-badge">
                                        <svg viewBox="0 0 24 24" fill="currentColor" width="10" height="10">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                        </svg>
                                        {testimonial.highlight}
                                    </div>
                                    <div className="quote-icon">"</div>
                                    <p className="testimonial-text">{testimonial.text}</p>
                                    <div className="testimonial-author">
                                        <div className="author-avatar"></div>
                                        <div className="author-info">
                                            <h4>{testimonial.author}</h4>
                                            <p>{testimonial.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
