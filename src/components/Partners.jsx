import React, { useEffect, useRef } from 'react';

const Partners = () => {
    // Extensive list of partners across niches
    const partners = {
        construction: [
            { name: "UltraTech Cement", initial: "U", type: "Cement" },
            { name: "Coramandel", initial: "C", type: "Cement" },
            { name: "Dalmia", initial: "D", type: "Cement" },
            { name: "Ramco", initial: "R", type: "Cement" },
            { name: "Tata Steel", initial: "T", type: "Steel" },
            { name: "L&T Construction", initial: "L", type: "Infra" },
            { name: "ACC Limited", initial: "A", type: "Cement" },
            { name: "ARS Steel", initial: "A", type: "Steel" },
            { name: "TMT steels", initial: "T", type: "Steel" },
            { name: "RMC", initial: "R", type: "Steel" },
            { name: "VIZAG STEEL", initial: "V", type: "Steel" },
        ],
        interiors: [
            { name: "Asian Paints", initial: "A", type: "Paint" },
            { name: "Berger Paints", initial: "B", type: "Paint" },
            { name: "Dulux", initial: "D", type: "Paint" },
            { name: "Greenply", initial: "G", type: "Plywood" },
            { name: "CenturyPly", initial: "C", type: "Plywood" },
            { name: "Kajaria", initial: "K", type: "Tiles" },
            { name: "KAG", initial: "K", type: "Tiles" },
            { name: "Johnson", initial: "J", type: "Tiles" },
            { name: "Jaquar", initial: "J", type: "Plumbing" },
            { name: "Parryware", initial: "P", type: "Plumbing" },
            { name: "Kohler", initial: "K", type: "Plumbing" },
            { name: "Jenson & Nicholson", initial: "J", type: "Paints" },
        ],
        electrical: [
            { name: "Panasonic", initial: "P", type: "Electrical" },
            { name: "Anchor", initial: "A", type: "Electric" },
            { name: "Legrand", initial: "L", type: "Electric" },
            { name: "Finolex", initial: "F", type: "Lighting" },
            { name: "MK powering", initial: "M", type: "Electrical" },
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
