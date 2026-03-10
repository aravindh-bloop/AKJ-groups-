import React from 'react';

const QualityPledge = () => {
    const pillars = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="32" height="32">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
            ),
            label: 'Top-Grade Materials Only',
            detail: 'We never substitute premium materials for cheaper alternatives — regardless of budget pressure.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="32" height="32">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                </svg>
            ),
            label: 'Zero Compromise Policy',
            detail: 'Our work ethics demand excellence at every stage, every time — with no exceptions, ever.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="32" height="32">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <path d="M8 21h8M12 17v4"/>
                    <path d="M7 8h.01M11 8h6"/>
                    <path d="M7 12h.01M11 12h6"/>
                </svg>
            ),
            label: 'Trusted Brand Partners',
            detail: 'Every component — tile, fitting, wire, cement — sourced exclusively from certified premium brands.'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="32" height="32">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
            ),
            label: 'Lifetime Quality Assurance',
            detail: 'We stand behind every project we build — our quality promise doesn\'t end at handover.'
        }
    ];

    const stats = [
        { value: '100%', label: 'Premium Materials Used' },
        { value: '0', label: 'Quality Compromises — Ever' },
        { value: '500+', label: 'Premium Projects Delivered' },
        { value: '15+', label: 'Years of Uncompromised Work' },
    ];

    return (
        <section className="quality-pledge-section" id="quality-pledge">
            {/* Decorative top border */}
            <div className="qp-gold-bar" />

            <div className="qp-inner">
                {/* Header */}
                <div className="qp-header">
                    <span className="qp-eyebrow">Our Unbreakable Standard</span>
                    <h2 className="qp-headline">
                        Quality Is Not Negotiable.<br />
                        <span className="qp-headline-accent">Not Now. Not Ever.</span>
                    </h2>
                    <p className="qp-subtext">
                        At AKJ Groups, we hold one standard — the highest. Even when budgets are tight, even when 
                        no one is watching, we use only top-tier brands and materials. Because our name is on 
                        every wall, every floor, every beam we build.
                    </p>
                </div>

                {/* Central manifesto quote */}
                <div className="qp-manifesto">
                    <div className="qp-manifesto-lines">
                        <span className="qp-line-deco" />
                        <span className="qp-line-deco" />
                    </div>
                    <blockquote className="qp-quote">
                        "We don't cut corners. We don't swap brands. We don't compromise —
                        <strong> not for cost, not for convenience, not for any reason.</strong>
                        That's the AKJ Groups promise."
                    </blockquote>
                    <div className="qp-manifesto-lines">
                        <span className="qp-line-deco" />
                        <span className="qp-line-deco" />
                    </div>
                </div>

                {/* Pillars of Quality */}
                <div className="qp-pillars">
                    {pillars.map((p, i) => (
                        <div className="qp-pillar" key={i}>
                            <div className="qp-pillar-icon">{p.icon}</div>
                            <h4 className="qp-pillar-label">{p.label}</h4>
                            <p className="qp-pillar-detail">{p.detail}</p>
                        </div>
                    ))}
                </div>

                {/* Stats bar */}
                <div className="qp-stats-bar">
                    {stats.map((s, i) => (
                        <div className="qp-stat" key={i}>
                            <span className="qp-stat-value">{s.value}</span>
                            <span className="qp-stat-label">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* Bottom tagline strip */}
                <div className="qp-tagline-strip">
                    <div className="qp-tagline-track">
                        {[
                            'Premium Brands · No Substitutes',
                            'Zero Compromise Guarantee',
                            'Top-Grade Materials Always',
                            'Built to Last · Built with Pride',
                            'Uncompromising Work Ethics',
                            'Quality First · Quality Last',
                        ].concat([
                            'Premium Brands · No Substitutes',
                            'Zero Compromise Guarantee',
                            'Top-Grade Materials Always',
                            'Built to Last · Built with Pride',
                            'Uncompromising Work Ethics',
                            'Quality First · Quality Last',
                        ]).map((tag, i) => (
                            <span className="qp-tag-item" key={i}>
                                <span className="qp-tag-diamond">◆</span>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="qp-gold-bar" />
        </section>
    );
};

export default QualityPledge;
