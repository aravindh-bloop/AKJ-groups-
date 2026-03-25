import React, { useState } from 'react';

const Partners = () => {
    const [activeCategory, setActiveCategory] = useState(0);

    const categories = [
        {
            emoji: '🚿',
            title: 'Plumbing & Sanitaryware',
            subtitle: 'Premium water solutions and luxury bathroom architecture.',
            partners: [
                { name: 'Jaquar', description: 'Artistic Bathroom Fittings', logo: '/assets/partners/jaguar.svg', initials: 'JQ' },
                { name: 'Kohler', description: 'Global Luxury standards', logo: '/assets/partners/kohler.png', initials: 'K' },
                { name: 'Parryware', description: 'Smart Sanitary Solutions', logo: '/assets/partners/parryware.png', initials: 'PW' },
                { name: 'Kajaria', description: 'Precision Ceramic Tiles', logo: '/assets/partners/kajaria.png', initials: 'KJ' },
                { name: 'Johnson', description: 'Signature Ceramic Tiles', logo: '/assets/partners/johnson.png', initials: 'J' },
            ],
        },
        {
            emoji: '⚡',
            title: 'Electrical & Smart Home',
            subtitle: 'Integrated electrical systems and automation excellence.',
            partners: [
                { name: 'Legrand', description: 'Global Electrical Networks', logo: '/assets/partners/legrand.png', initials: 'L' },
                { name: 'Panasonic', description: 'Precision Electricals', logo: '/assets/partners/panasonic.png', initials: 'P' },
                { name: 'MK', description: 'Design Electrical Switches', logo: '/assets/partners/mk.png', initials: 'MK' },
                { name: 'Finolex', description: 'Trusted Power Cabling', logo: '/assets/partners/finolex.png', initials: 'F' },
            ],
        },
        {
            emoji: '🏗️',
            title: 'Foundational Materials',
            subtitle: 'Core construction elements for unbreakable structures.',
            partners: [
                { name: 'UltraTech', description: 'The Engineer\'s Choice', logo: '/assets/partners/ultratech.png', initials: 'UC' },
                { name: 'Ramco', description: 'High-Performance Cement', logo: '/assets/partners/ramco.png', initials: 'R' },
                { name: 'Tata Steel', description: 'Strength of Tomorrow', logo: '/assets/partners/tatasteel_new.jpeg', initials: 'TS', highlight: true },
                { name: 'ARS Steel', description: 'Quality TMT Bars', logo: '/assets/partners/ars.jpeg', initials: 'ARS', highlight: true },
                { name: 'Jindaal Steel', description: 'Unmatched Durability', logo: '/assets/partners/jindaal.jpeg', initials: 'JS', highlight: true },
                { name: 'Vizag Steel', description: 'The Pride of Steel', logo: '/assets/partners/vizagsteel.jpeg', initials: 'VS', highlight: true },
            ],
        },
        {
            emoji: '🎨',
            title: 'Finishes & Interiors',
            subtitle: 'Aesthetic excellence and world-class interior materials.',
            partners: [
                { name: 'Asian Paints', description: 'Inspired Color Palettes', logo: '/assets/partners/asianpaints.png', initials: 'AP' },
                { name: 'Berger', description: 'Professional Paint Systems', logo: '/assets/partners/berger.png', initials: 'BP' },
                { name: 'Greenply', description: 'Sustainable Woody Elements', logo: '/assets/partners/greenply.png', initials: 'G' },
            ],
        },
    ];

    const PartnerCard = ({ partner }) => {
        const [imgError, setImgError] = useState(false);
        return (
            <div className={`modern-partner-card ${partner.highlight ? 'super-highlight' : ''}`}>
                <div className="mp-card-inner" style={{ position: 'relative' }}>
                    {partner.highlight && <div className="super-badge">Premium</div>}
                    <div className="mp-logo-container">
                        {!partner.logo || imgError ? (
                            <div className="mp-fallback">{partner.initials}</div>
                        ) : (
                            <img 
                                src={partner.logo} 
                                alt={partner.name} 
                                onError={() => setImgError(true)}
                                className="mp-logo"
                            />
                        )}
                    </div>
                    <div className="mp-content">
                        <h4 className="mp-name">{partner.name}</h4>
                        <p className="mp-desc">{partner.description}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="modern-partners-section" id="partners">
            <div className="container">
                <div className="section-header-modern">
                    <div className="section-tag-modern">Our Ecosystem</div>
                    <h2 className="section-title-modern">Building with the Best</h2>
                    <p className="section-description-modern">
                        We partner with industry-defining brands to ensure every material 
                        used in your project meets world-class standards of excellence.
                    </p>
                </div>

                <div className="partners-tabs-container">
                    <div className="partners-tabs">
                        {categories.map((cat, idx) => (
                            <button
                                key={idx}
                                className={`partner-tab-btn ${activeCategory === idx ? 'active' : ''}`}
                                onClick={() => setActiveCategory(idx)}
                            >
                                <span className="tab-emoji">{cat.emoji}</span>
                                <span className="tab-label">{cat.title}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="partner-category-info">
                    <h3 className="category-reveal-title">
                        {categories[activeCategory].emoji} {categories[activeCategory].title}
                    </h3>
                    <p className="category-reveal-desc">
                        {categories[activeCategory].subtitle}
                    </p>
                </div>

                <div className="modern-partners-grid">
                    {categories[activeCategory].partners.map((partner, pIdx) => (
                        <PartnerCard key={pIdx} partner={partner} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
