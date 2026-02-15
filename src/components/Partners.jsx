import React, { useEffect, useRef } from 'react';

const Partners = () => {
    // Extensive list of partners across niches
    const partners = {
        construction: [
            { name: "UltraTech Cement", initial: "U", type: "Cement" },
            { name: "Tata Steel", initial: "T", type: "Steel" },
            { name: "Jindal Panther", initial: "J", type: "Steel" },
            { name: "Ambuja Cement", initial: "A", type: "Cement" },
            { name: "L&T Construction", initial: "L", type: "Infra" },
            { name: "ACC Limited", initial: "A", type: "Cement" },
            { name: "JSW Steel", initial: "J", type: "Steel" },
            { name: "Shree Cement", initial: "S", type: "Cement" },
        ],
        interiors: [
            { name: "Asian Paints", initial: "A", type: "Paint" },
            { name: "Berger Paints", initial: "B", type: "Paint" },
            { name: "Greenply", initial: "G", type: "Plywood" },
            { name: "CenturyPly", initial: "C", type: "Plywood" },
            { name: "Kajaria", initial: "K", type: "Tiles" },
            { name: "Somany", initial: "S", type: "Tiles" },
            { name: "Jaquar", initial: "J", type: "Bath" },
            { name: "Cera", initial: "C", type: "Sanitary" },
        ],
        electrical: [
            { name: "Havells", initial: "H", type: "Electrical" },
            { name: "Schneider", initial: "S", type: "Electric" },
            { name: "Legrand", initial: "L", type: "Electric" },
            { name: "Philips", initial: "P", type: "Lighting" },
            { name: "Polycab", initial: "P", type: "Wires" },
            { name: "Finolex", initial: "F", type: "Cables" },
            { name: "Hafele", initial: "H", type: "Fittings" },
            { name: "Hettich", initial: "H", type: "Fittings" },
        ]
    };

    // Helper to duplicate for seamless scroll
    const getMarqueeItems = (items) => [...items, ...items, ...items];

    return (
        <section className="partners-redesign" id="partners">
            <div className="partners-overlay"></div>
            <div className="container">
                <div className="section-header">
                    <span className="section-tag" style={{ color: '#D4A574' }}>Our Ecosystem</span>
                    <h2 className="section-title text-light">Global Partnerships</h2>
                    <p className="section-description text-light-muted">
                        We collaborate with over 50+ industry-leading brands across construction, customized interiors, and smart architecture to deliver world-class quality.
                    </p>
                </div>
            </div>

            <div className="marquee-container">
                {/* Row 1: Construction - Left to Right */}
                <div className="marquee-row">
                    <div className="marquee-content scroll-left">
                        {getMarqueeItems(partners.construction).map((partner, idx) => (
                            <div key={`c-${idx}`} className="partner-card-glass">
                                <div className="partner-initial">{partner.initial}</div>
                                <div className="partner-info">
                                    <h4>{partner.name}</h4>
                                    <span>{partner.type}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 2: Interiors - Right to Left */}
                <div className="marquee-row">
                    <div className="marquee-content scroll-right">
                        {getMarqueeItems(partners.interiors).map((partner, idx) => (
                            <div key={`i-${idx}`} className="partner-card-glass">
                                <div className="partner-initial accent">{partner.initial}</div>
                                <div className="partner-info">
                                    <h4>{partner.name}</h4>
                                    <span>{partner.type}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row 3: Electrical/Misc - Left to Right */}
                <div className="marquee-row">
                    <div className="marquee-content scroll-left-slow">
                        {getMarqueeItems(partners.electrical).map((partner, idx) => (
                            <div key={`e-${idx}`} className="partner-card-glass">
                                <div className="partner-initial">{partner.initial}</div>
                                <div className="partner-info">
                                    <h4>{partner.name}</h4>
                                    <span>{partner.type}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;
