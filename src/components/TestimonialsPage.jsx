import React, { useState } from 'react';

const TestimonialsPage = () => {
    const [filter, setFilter] = useState('all');

    const testimonials = [
        {
            name: 'Rajesh Kumar',
            role: 'Homeowner',
            category: 'residential',
            rating: 5,
            text: 'AKJ Groups transformed our dream home into reality! Their attention to detail and commitment to quality is unmatched. Every aspect of the construction was handled professionally.',
            project: 'Villa Construction',
            location: 'Chennai'
        },
        {
            name: 'Priya Sharma',
            role: 'Business Owner',
            category: 'commercial',
            rating: 5,
            text: 'Outstanding work on our commercial complex. The team was professional, timely, and delivered beyond our expectations. Highly recommended!',
            project: 'Commercial Complex',
            location: 'Bangalore'
        },
        {
            name: 'Anand Krishnan',
            role: 'Property Developer',
            category: 'commercial',
            rating: 5,
            text: 'We\'ve worked with AKJ Groups on multiple projects. Their expertise in construction and consultancy is exceptional. They truly understand client needs.',
            project: 'Multi-Story Building',
            location: 'Coimbatore'
        },
        {
            name: 'Lakshmi Menon',
            role: 'Homeowner',
            category: 'residential',
            rating: 5,
            text: 'From design to completion, AKJ Groups made our home building journey smooth and stress-free. The quality of work is outstanding!',
            project: 'Independent House',
            location: 'Madurai'
        },
        {
            name: 'Vikram Patel',
            role: 'Architect',
            category: 'commercial',
            rating: 5,
            text: 'As an architect, I appreciate their technical expertise and innovative approach. AKJ Groups brings designs to life with precision.',
            project: 'Office Building',
            location: 'Chennai'
        },
        {
            name: 'Meera Iyer',
            role: 'Homeowner',
            category: 'residential',
            rating: 5,
            text: 'Exceptional service! They guided us through every step and delivered a beautiful home that exceeded our expectations.',
            project: 'Duplex House',
            location: 'Trichy'
        },
        {
            name: 'Suresh Babu',
            role: 'Business Owner',
            category: 'commercial',
            rating: 5,
            text: 'Professional, reliable, and efficient. AKJ Groups completed our warehouse project on time and within budget. Excellent team!',
            project: 'Warehouse Facility',
            location: 'Salem'
        },
        {
            name: 'Divya Reddy',
            role: 'Interior Designer',
            category: 'residential',
            rating: 5,
            text: 'Working with AKJ Groups was a pleasure. Their construction quality provides the perfect foundation for beautiful interiors.',
            project: 'Luxury Apartment',
            location: 'Chennai'
        },
        {
            name: 'Karthik Venkat',
            role: 'Homeowner',
            category: 'residential',
            rating: 5,
            text: 'Best construction company we\'ve worked with! Transparent pricing, quality materials, and skilled craftsmen. Our home is perfect!',
            project: 'Bungalow',
            location: 'Pondicherry'
        },
        {
            name: 'Aishwarya Nair',
            role: 'Property Manager',
            category: 'commercial',
            rating: 5,
            text: 'AKJ Groups delivered our commercial property with exceptional quality. Their project management skills are top-notch!',
            project: 'Shopping Complex',
            location: 'Bangalore'
        },
        {
            name: 'Ramesh Chand',
            role: 'Homeowner',
            category: 'residential',
            rating: 5,
            text: 'From foundation to finishing, every detail was perfect. AKJ Groups truly cares about their clients and delivers excellence.',
            project: 'Family Home',
            location: 'Vellore'
        },
        {
            name: 'Sneha Kapoor',
            role: 'Entrepreneur',
            category: 'commercial',
            rating: 5,
            text: 'Incredible team! They understood our vision and brought it to life. The quality and craftsmanship are outstanding.',
            project: 'Corporate Office',
            location: 'Chennai'
        },
        {
            name: 'Arjun Pillai',
            role: 'Homeowner',
            category: 'residential',
            rating: 5,
            text: 'AKJ Groups made our home construction journey enjoyable. Professional, punctual, and passionate about quality work!',
            project: 'Modern Villa',
            location: 'Kochi'
        },
        {
            name: 'Kavitha Raman',
            role: 'Business Owner',
            category: 'commercial',
            rating: 5,
            text: 'Excellent construction and consultancy services. They provided valuable insights that improved our project significantly.',
            project: 'Retail Space',
            location: 'Coimbatore'
        },
        {
            name: 'Naveen Kumar',
            role: 'Homeowner',
            category: 'residential',
            rating: 5,
            text: 'Outstanding quality and service! AKJ Groups built our dream home with precision and care. Highly recommend them!',
            project: 'Eco-Friendly Home',
            location: 'Chennai'
        }
    ];

    const filteredTestimonials = filter === 'all'
        ? testimonials
        : testimonials.filter(t => t.category === filter);

    const stats = [
        { number: '500+', label: 'Happy Clients', color: 'from-purple-500 to-pink-500' },
        { number: '98%', label: 'Satisfaction Rate', color: 'from-blue-500 to-cyan-500' },
        { number: '4.9/5', label: 'Average Rating', color: 'from-orange-500 to-yellow-500' },
        { number: '15+', label: 'Years Experience', color: 'from-green-500 to-teal-500' }
    ];

    return (
        <div className="testimonials-page">
            {/* Hero Section */}
            <section className="testimonials-hero">
                <div className="testimonials-hero-bg"></div>
                <div className="container">
                    <span className="section-tag fade-in-up" style={{ color: '#fff' }}>Client Testimonials</span>
                    <h1 className="testimonials-hero-title fade-in-up delay-1">
                        What Our Clients Say
                    </h1>
                    <p className="testimonials-hero-subtitle fade-in-up delay-2">
                        Don't just take our word for it - hear from the people who've experienced
                        our commitment to excellence firsthand
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="testimonials-stats">
                <div className="container">
                    <div className="stats-grid-colorful">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card-colorful">
                                <div className={`stat-gradient bg-gradient-${stat.color}`}></div>
                                <h3 className="stat-number-large">{stat.number}</h3>
                                <p className="stat-label-large">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="testimonials-filter-section">
                <div className="container">
                    <div className="filter-buttons">
                        <button
                            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            All Reviews
                        </button>
                        <button
                            className={`filter-btn ${filter === 'residential' ? 'active' : ''}`}
                            onClick={() => setFilter('residential')}
                        >
                            Residential
                        </button>
                        <button
                            className={`filter-btn ${filter === 'commercial' ? 'active' : ''}`}
                            onClick={() => setFilter('commercial')}
                        >
                            Commercial
                        </button>
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="testimonials-grid-section">
                <div className="container">
                    <div className="testimonials-masonry">
                        {filteredTestimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card-colorful">
                                <div className="testimonial-header">
                                    <div className="testimonial-avatar">
                                        <img src="assets/logo.png" alt={testimonial.name} />
                                    </div>
                                    <div className="testimonial-info">
                                        <h4 className="testimonial-name">{testimonial.name}</h4>
                                        <p className="testimonial-role">{testimonial.role}</p>
                                    </div>
                                </div>
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <span key={i} className="star">★</span>
                                    ))}
                                </div>
                                <p className="testimonial-text">{testimonial.text}</p>
                                <div className="testimonial-footer">
                                    <span className="testimonial-project">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                        </svg>
                                        {testimonial.project}
                                    </span>
                                    <span className="testimonial-location">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                            <circle cx="12" cy="10" r="3"></circle>
                                        </svg>
                                        {testimonial.location}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="testimonials-cta">
                <div className="container">
                    <div className="cta-box-colorful">
                        <h2 className="cta-title-colorful">Ready to Start Your Project?</h2>
                        <p className="cta-subtitle-colorful">
                            Join hundreds of satisfied clients who trusted AKJ Groups with their dreams
                        </p>
                        <div className="cta-buttons">
                            <a href="#contact" className="btn btn-primary btn-large">Get Started Today</a>
                            <a href="/about" className="btn btn-secondary btn-large">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TestimonialsPage;
