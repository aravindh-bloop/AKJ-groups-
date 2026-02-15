import React from 'react';

const Testimonials = () => {
    const testimonials = [
        {
            text: 'AKJ Groups transformed our vision into reality. Their attention to detail and commitment to quality is unmatched. Our new office space has exceeded all expectations.',
            author: 'Rajesh Sharma',
            position: 'CEO, TechVision Solutions'
        },
        {
            text: 'The level of craftsmanship and professionalism displayed by AKJ Groups is truly remarkable. They turned our dream home into a stunning reality.',
            author: 'Kavita Singh',
            position: 'Architect, Delhi'
        },
        {
            text: 'Outstanding service from start to finish. The team was responsive, professional, and delivered exceptional results. Highly recommended for any construction project.',
            author: 'Vikram Reddy',
            position: 'Business Owner, Hyderabad'
        },
        {
            text: 'Their innovative approach to sustainable construction impressed us greatly. AKJ Groups delivered a project that\'s both beautiful and environmentally responsible.',
            author: 'Neha Kapoor',
            position: 'Environmental Consultant, Pune'
        }
    ];

    const testimonialsColumn2 = [
        {
            text: 'Professional, reliable, and incredibly skilled. They completed our home renovation on time and within budget. We couldn\'t be happier with the results.',
            author: 'Amit Patel',
            position: 'Homeowner, Ahmedabad'
        },
        {
            text: 'Working with AKJ Groups was a pleasure from start to finish. Their expertise in commercial construction is evident in every detail of our new facility.',
            author: 'Priya Menon',
            position: 'Operations Manager, Chennai'
        },
        {
            text: 'The team\'s dedication to quality and customer satisfaction is exceptional. They went above and beyond to ensure our project was completed to perfection.',
            author: 'Sanjay Kumar',
            position: 'Property Developer, Kolkata'
        },
        {
            text: 'AKJ Groups brought our architectural vision to life with precision and care. Their attention to detail and commitment to excellence is truly commendable.',
            author: 'Meera Desai',
            position: 'Interior Designer, Mumbai'
        }
    ];

    // Duplicate for seamless loop
    const column1Data = [...testimonials, ...testimonials];
    const column2Data = [...testimonialsColumn2, ...testimonialsColumn2];

    return (
        <section className="testimonials" id="testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Client Feedback</span>
                    <h2 className="section-title">What Our Clients Say</h2>
                    <p className="section-description">Trusted by hundreds of satisfied clients across the nation</p>
                </div>
                <div className="testimonials-scroll-container">
                    {/* Left Column - Scrolls Up */}
                    <div className="testimonials-column scroll-up">
                        {column1Data.map((testimonial, index) => (
                            <div className="testimonial-card" key={index}>
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
    );
};

export default Testimonials;
