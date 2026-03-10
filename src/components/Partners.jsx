import React, { useState } from 'react';

const Partners = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            svgIcon: (
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="26" height="26">
                    <path d="M4 4h2v2H4V4zm0 4h2v2H4V8zm0 4h2v4H4v-4zm4-8h2v2H8V4zm0 4h2v2H8V8zm4-4h2v2h-2V4zm8 4v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6" stroke="#888" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M9 21V12h6v9" stroke="#888" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="3" width="18" height="2" rx="1" fill="#bbb" />
                    <circle cx="17" cy="7" r="4" fill="none" stroke="#888" strokeWidth="1.5" />
                    <path d="M15 7c0-.5.2-1 .6-1.4M17 5v.5" stroke="#888" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
            ),
            emoji: '🚿',
            title: 'Plumbing & Sanitaryware',
            partners: [
                { name: 'Jaquar', description: 'Bathroom Fittings', logo: '/assets/partners/jaguar.svg', initials: 'JQ' },
                { name: 'Kohler', description: 'Luxury Sanitaryware', logo: '/assets/partners/kohler.png', initials: 'K' },
                { name: 'Parryware', description: 'Sanitaryware', logo: '/assets/partners/parryware.png', initials: 'PW' },
                { name: 'Kajaria', description: 'Tiles & Flooring', logo: '/assets/partners/kajaria.png', initials: 'KJ' },
                { name: 'Johnson', description: 'Ceramic Tiles', logo: '/assets/partners/johnson.png', initials: 'J' },
            ],
        },
        {
            emoji: '⚡',
            title: 'Electrical',
            partners: [
                { name: 'Legrand', description: 'Electrical Solutions', logo: '/assets/partners/legrand.png', initials: 'L' },
                { name: 'Panasonic', description: 'Electronics & Appliances', logo: '/assets/partners/panasonic.png', initials: 'P' },
                { name: 'MK', description: 'Electrical Accessories', logo: '/assets/partners/mk.png', initials: 'MK' },
                { name: 'Finolex', description: 'Cables & Wiring', logo: '/assets/partners/finolex.png', initials: 'F' },
            ],
        },
        {
            emoji: '🏗️',
            title: 'Construction Materials',
            partners: [
                { name: 'UltraTech', description: 'Cement & Concrete', logo: '/assets/partners/ultratech.png', initials: 'UC' },
                { name: 'Ramco', description: 'Premium Cement', logo: '/assets/partners/ramco.png', initials: 'R' },
                { name: 'Tata Steel', description: 'Structural Steel', logo: '/assets/partners/tatasteel.png', initials: 'TS' },
            ],
        },
        {
            emoji: '🎨',
            title: 'Paints & Interiors',
            partners: [
                { name: 'Asian Paints', description: 'Premium Paints', logo: '/assets/partners/asianpaints.png', initials: 'AP' },
                { name: 'Berger', description: 'Interior & Exterior', logo: '/assets/partners/berger.png', initials: 'BP' },
                { name: 'Greenply', description: 'Plywood & Laminates', logo: '/assets/partners/greenply.png', initials: 'G' },
            ],
        },
    ];

    // Inner component so each card manages its own image error state
    const PartnerCard = ({ partner, isLast }) => {
        const [imgError, setImgError] = React.useState(false);
        const showFallback = !partner.logo || imgError;

        return (
            <div className={`pc-card${isLast ? ' pc-card--active' : ''}`}>
                {/* Inner logo box */}
                <div className="pc-logo-box">
                    {showFallback ? (
                        <div className="pc-initials">
                            <span>{partner.initials}</span>
                        </div>
                    ) : (
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            className="pc-logo-img"
                            onError={() => setImgError(true)}
                        />
                    )}
                </div>
                <h4 className="pc-name">{partner.name}</h4>
                <p className="pc-desc">{partner.description}</p>
            </div>
        );
    };

    return (
        <section className="pc-section" id="partners">
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <span className="section-tag">Our Ecosystem</span>
                    <h2 className="section-title">Our Trusted Partners</h2>
                    <p className="section-description">
                        We collaborate with 50+ industry-leading brands across construction,
                        interiors, and smart architecture to deliver world-class quality.
                    </p>
                </div>

                {/* Category Tab Pills */}
                <div className="pc-tabs">
                    {categories.map((cat, idx) => (
                        <button
                            key={idx}
                            className={`pc-tab${activeCategory === idx ? ' active' : ''}`}
                            onClick={() => setActiveCategory(idx)}
                        >
                            <span>{cat.emoji}</span>
                            <span>{cat.title}</span>
                        </button>
                    ))}
                </div>

                {/* Category Panels */}
                {categories.map((cat, catIdx) => (
                    <div
                        key={catIdx}
                        className={`pc-panel${activeCategory === catIdx ? ' pc-panel--active' : ''}`}
                    >
                        {/* Icon + Title */}
                        <div className="pc-cat-header">
                            <div className="pc-cat-icon">
                                <span role="img" aria-label={cat.title}>{cat.emoji}</span>
                            </div>
                            <h3 className="pc-cat-title">{cat.title}</h3>
                        </div>

                        {/* Cards */}
                        <div className="pc-cards">
                            {cat.partners.map((partner, idx) => (
                                <PartnerCard
                                    key={idx}
                                    partner={partner}
                                    isLast={idx === cat.partners.length - 1}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Partners;
