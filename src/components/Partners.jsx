import { useState } from 'react';

const Partners = () => {
    const [activeTab, setActiveTab] = useState(0);

    const categories = [
        {
            id: 'steel',
            num: '01',
            label: 'Steel',
            fullTitle: 'Steel Partners',
            desc: 'Structural steel from India\'s most trusted mills — engineered for permanence, certified for performance.',
            spotlight: {
                name: 'Tata Steel',
                tagline: 'The Backbone of Modern India',
                description: 'Over a century of metallurgical mastery. Tata Steel is our primary structural partner — supplying TMT bars and structural sections that define the skeleton of every AKJ project. Unmatched quality control, traceable sourcing, and a legacy that speaks for itself.',
                logo: '/assets/partners/tatasteel_new.jpeg',
                initials: 'TS',
            },
            partners: [
                { name: 'Vizag Steel', tagline: 'Rashtriya Ispat Nigam Ltd.', logo: '/assets/partners/vizagsteel.jpeg', initials: 'VS' },
                { name: 'Jindal Steel', tagline: 'Power of Steel, Power of India', logo: '/assets/partners/jindaal.jpeg', initials: 'JS' },
                { name: 'ARS Steel', tagline: 'Quality TMT Bars', logo: '/assets/partners/ars.jpeg', initials: 'AS' },
            ],
        },
        {
            id: 'cement',
            num: '02',
            label: 'Cement',
            fullTitle: 'Cement & Concrete',
            desc: 'The foundation of structural integrity — premium cements and ready-mix concrete that set, cure, and endure.',
            spotlight: {
                name: 'UltraTech Cement',
                tagline: 'Setting the Standard in Strength',
                description: 'UltraTech\'s proprietary blend delivers superior compressive strength and long-term durability under demanding conditions. Our cornerstone cement partner, specified across all AKJ construction projects for its consistency and performance benchmarks that exceed IS standards.',
                logo: '/assets/partners/ultratech.png',
                initials: 'UTC',
            },
            partners: [
                { name: 'Coromandel Cements', tagline: 'South India\'s Strength Since Decades', logo: '/assets/partners/coromandel.jpeg', initials: 'CC' },
                { name: 'Ramco Cements', tagline: 'Building Confidence', logo: '/assets/partners/ramco.png', initials: 'RC' },
                { name: 'Dalmia Cements', tagline: 'The Future of Cement', logo: '/assets/partners/dalmia.jpeg', initials: 'DC' },
            ],
            sub: {
                title: 'Concrete Division',
                desc: 'Ready-mix concrete partners ensuring consistent grade, controlled water-cement ratio, and timely delivery to site.',
                partners: [
                    { name: 'RDC Concrete', tagline: 'Ready Mix Excellence', logo: '/assets/partners/rdc.jpeg', initials: 'RDC' },
                    { name: 'Raymix Concrete', tagline: 'Precision in Every Pour', logo: '/assets/partners/raymix.jpeg', initials: 'RMX' },
                    { name: 'SunX Concrete', tagline: 'Strength in Every Pour', logo: '/assets/partners/sunx.jpeg', initials: 'SXC' },
                ],
            },
        },
        {
            id: 'paints',
            num: '03',
            label: 'Paints',
            fullTitle: 'Paints & Finishes',
            desc: 'Color science, protective coatings, and surface engineering that define every wall, ceiling, and facade.',
            spotlight: {
                name: 'Asian Paints',
                tagline: 'Where Beauty Meets Durability',
                description: 'Asia\'s No.1 paint company and our primary finishing partner. Asian Paints\' expansive palette, weather-shield technology, and decade-long track record make them the default specification for every interior and exterior surface across AKJ developments.',
                logo: '/assets/partners/asianpaints.png',
                initials: 'AP',
            },
            partners: [
                { name: 'Dulux Paints', tagline: 'British Color Authority', logo: '/assets/partners/dulux.png', initials: 'DX' },
                { name: 'Berger Paints', tagline: 'Express Colors', logo: '/assets/partners/berger.png', initials: 'BP' },
                { name: 'Jenson & Nicholson', tagline: 'Premium Specialty Coatings', logo: '/assets/partners/jenson-nicholson.png', initials: 'JN' },
                { name: 'Greenply', tagline: 'Engineered Wood Panels', logo: '/assets/partners/greenply.png', initials: 'GP' },
            ],
        },
        {
            id: 'plumbing',
            num: '04',
            label: 'Plumbing',
            fullTitle: 'Plumbing & Sanitaryware',
            desc: 'Precision water systems and luxury bath architecture — from concealed supply lines to sculptural fixtures.',
            partners: [
                { name: 'Jaquar', tagline: 'Artistic Bathroom Architecture', logo: '/assets/partners/jaguar.svg', initials: 'JQ' },
                { name: 'Kohler', tagline: 'Global Luxury Standards', logo: '/assets/partners/kohler.png', initials: 'K' },
                { name: 'Parryware', tagline: 'Smart Sanitary Solutions', logo: '/assets/partners/parryware.png', initials: 'PW' },
                { name: 'Kajaria', tagline: 'Precision Ceramic Tiles', logo: '/assets/partners/kajaria.png', initials: 'KJ' },
                { name: 'Johnson', tagline: 'Signature Ceramic Collections', logo: '/assets/partners/johnson.png', initials: 'J' },
            ],
        },
        {
            id: 'electrical',
            num: '05',
            label: 'Electrical',
            fullTitle: 'Electrical & Smart Home',
            desc: 'Integrated electrical infrastructure and intelligent home automation from the world\'s most trusted names.',
            partners: [
                { name: 'Legrand', tagline: 'Global Electrical Networks', logo: '/assets/partners/legrand.png', initials: 'L' },
                { name: 'Panasonic', tagline: 'Precision Electricals', logo: '/assets/partners/panasonic.png', initials: 'P' },
                { name: 'MK', tagline: 'Design-Led Wiring Devices', logo: '/assets/partners/mk.png', initials: 'MK' },
                { name: 'Finolex', tagline: 'Trusted Power Cabling', logo: '/assets/partners/finolex.png', initials: 'F' },
            ],
        },
        {
            id: 'lifts',
            num: '06',
            label: 'Lifts',
            fullTitle: 'Vertical Transport',
            desc: 'Smooth, silent, and safe vertical mobility engineered for residential and commercial excellence.',
            single: {
                name: 'Johnson Lifts',
                tagline: 'Elevating Every Journey',
                description: 'Our exclusive vertical transport partner — Johnson Lifts delivers smooth, energy-efficient elevator systems with impeccable safety records and minimal maintenance requirements. Trusted across all AKJ residential towers and commercial complexes for reliable, long-term performance.',
                logo: '/assets/partners/johnsonlifts.jpeg',
                initials: 'JL',
            },
        },
    ];

    const active = categories[activeTab];

    const SpotlightCard = ({ data }) => {
        const [imgErr, setImgErr] = useState(false);
        return (
            <div className="ps-spotlight">
                <div className="ps-spotlight-badge">Flagship Partner</div>
                <div className="ps-spotlight-logo-wrap">
                    {data.logo && !imgErr ? (
                        <img
                            src={data.logo}
                            alt={data.name}
                            onError={() => setImgErr(true)}
                            className="ps-spotlight-logo"
                        />
                    ) : (
                        <span className="ps-spotlight-initials">{data.initials}</span>
                    )}
                </div>
                <div className="ps-spotlight-content">
                    <p className="ps-spotlight-label">Premier Alliance</p>
                    <h3 className="ps-spotlight-name">{data.name}</h3>
                    <p className="ps-spotlight-tagline">{data.tagline}</p>
                    <p className="ps-spotlight-desc">{data.description}</p>
                </div>
            </div>
        );
    };

    const PartnerCard = ({ partner }) => {
        const [imgErr, setImgErr] = useState(false);
        return (
            <div className="ps-card">
                <div className="ps-card-logo-wrap">
                    {partner.logo && !imgErr ? (
                        <img
                            src={partner.logo}
                            alt={partner.name}
                            onError={() => setImgErr(true)}
                            className="ps-card-logo"
                        />
                    ) : (
                        <span className="ps-card-initials">{partner.initials}</span>
                    )}
                </div>
                <div className="ps-card-body">
                    <h4 className="ps-card-name">{partner.name}</h4>
                    <p className="ps-card-tagline">{partner.tagline}</p>
                </div>
            </div>
        );
    };

    const SingleShowcase = ({ data }) => {
        const [imgErr, setImgErr] = useState(false);
        return (
            <div className="ps-single-showcase">
                <div className="ps-single-logo-wrap">
                    {data.logo && !imgErr ? (
                        <img
                            src={data.logo}
                            alt={data.name}
                            onError={() => setImgErr(true)}
                            className="ps-single-logo"
                        />
                    ) : (
                        <span className="ps-single-initials">{data.initials}</span>
                    )}
                </div>
                <div className="ps-single-content">
                    <span className="ps-single-label">Exclusive Partner</span>
                    <h3 className="ps-single-name">{data.name}</h3>
                    <p className="ps-single-tagline">{data.tagline}</p>
                    <p className="ps-single-desc">{data.description}</p>
                </div>
            </div>
        );
    };

    return (
        <section className="ps-section" id="partners">

            {/* ── Editorial Header Band ── */}
            <div className="ps-header-band">
                <div className="container">
                    <div className="ps-header-inner">
                        <div className="ps-header-text">
                            <span className="ps-eyebrow">Material Alliance</span>
                            <h2 className="ps-headline">
                                Building with the<br />
                                <em>Best in Class</em>
                            </h2>
                        </div>
                        <p className="ps-header-desc">
                            Every material, every fixture, every system we specify carries the hallmark of a brand that shares our commitment to quality. These are not default choices — each partner was earned through performance.
                        </p>
                    </div>
                    <div className="ps-header-rule" />
                </div>
            </div>

            {/* ── Tab Navigation ── */}
            <div className="ps-nav-band">
                <div className="container">
                    <nav className="ps-tabs" role="tablist" aria-label="Partner categories">
                        {categories.map((cat, idx) => (
                            <button
                                key={cat.id}
                                role="tab"
                                aria-selected={activeTab === idx}
                                className={`ps-tab${activeTab === idx ? ' ps-tab--active' : ''}`}
                                onClick={() => setActiveTab(idx)}
                            >
                                <span className="ps-tab-num">{cat.num}</span>
                                <span className="ps-tab-label">{cat.label}</span>
                            </button>
                        ))}
                    </nav>
                </div>
            </div>

            {/* ── Content Panel ── */}
            <div className="ps-panel" key={active.id}>
                <div className="container">

                    {/* Category Title Row */}
                    <div className="ps-panel-header">
                        <div className="ps-panel-big-num">{active.num}</div>
                        <div className="ps-panel-title-group">
                            <h3 className="ps-panel-title">{active.fullTitle}</h3>
                            <p className="ps-panel-desc">{active.desc}</p>
                        </div>
                    </div>

                    {/* Single-brand showcase (Lifts) */}
                    {active.single && <SingleShowcase data={active.single} />}

                    {/* Spotlight + partner grid */}
                    {active.spotlight && (
                        <>
                            <SpotlightCard data={active.spotlight} />
                            {active.partners && active.partners.length > 0 && (
                                <div className="ps-grid ps-grid--secondary">
                                    {active.partners.map((p, i) => (
                                        <PartnerCard key={i} partner={p} />
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    {/* Regular grid (no spotlight) */}
                    {!active.spotlight && !active.single && active.partners && (
                        <div className="ps-grid">
                            {active.partners.map((p, i) => (
                                <PartnerCard key={i} partner={p} />
                            ))}
                        </div>
                    )}

                    {/* Sub-section (Concrete under Cement) */}
                    {active.sub && (
                        <div className="ps-sub-section">
                            <div className="ps-sub-header">
                                <div className="ps-sub-rule" />
                                <div>
                                    <span className="ps-sub-label">{active.sub.title}</span>
                                    <p className="ps-sub-desc">{active.sub.desc}</p>
                                </div>
                            </div>
                            <div className="ps-grid ps-grid--concrete">
                                {active.sub.partners.map((p, i) => (
                                    <PartnerCard key={i} partner={p} />
                                ))}
                            </div>
                        </div>
                    )}

                </div>
            </div>

        </section>
    );
};

export default Partners;
