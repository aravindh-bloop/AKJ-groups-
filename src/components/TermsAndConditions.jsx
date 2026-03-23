import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    const lastUpdated = "March 23, 2026";
    const companyName = "AKJ GROUPS";
    const email = "akjgroupsmd@gmail.com";
    const phones = "+91 98408 53007 / +91 89394 62856";
    const location = "Tamil Nadu, India";

    return (
        <div className="terms-conditions-page" style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--mint-cream)', minHeight: '100vh' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'left', marginBottom: '60px' }}>
                    <span className="section-tag">Legal</span>
                    <h1 className="section-title gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', display: 'block' }}>Terms and Conditions</h1>
                    <p className="section-description" style={{ marginLeft: '0', maxWidth: '800px' }}>
                        Welcome to {companyName}. By accessing this website, you agree to comply with the following Terms and Conditions.
                        <br /><br />
                        <strong>Last Updated:</strong> {lastUpdated}
                    </p>
                </div>

                <div className="policy-content" style={{ 
                    backgroundColor: 'var(--white)', 
                    padding: '50px', 
                    borderRadius: '24px', 
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    lineHeight: '1.8',
                    color: 'var(--charcoal)'
                }}>
                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>1. Website Use</h3>
                        <p>This website is intended for informational purposes regarding our construction services. Users agree not to misuse the website for unlawful or harmful activities.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>2. Services Disclaimer</h3>
                        <p>All project timelines, cost estimates, and service descriptions provided on the website are indicative and subject to change based on site inspection, material costs, and project complexity.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>3. Intellectual Property</h3>
                        <p>All content including text, images, logos, designs, and graphics on this website is the property of {companyName} unless otherwise stated. Unauthorized reproduction or use is prohibited.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>4. Quotations and Contracts</h3>
                        <p>Submitting an enquiry or requesting a quotation does not form a legally binding contract. Final agreements will be governed by signed project contracts.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>5. Payments and Pricing</h3>
                        <p>Pricing mentioned on the website is approximate and may vary. Payment schedules and terms will be defined in formal agreements.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>6. Limitation of Liability</h3>
                        <p>{companyName} shall not be held liable for any direct or indirect damages arising from the use or inability to use this website.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>7. External Links</h3>
                        <p>We may provide links to third-party websites for convenience. We do not control or endorse their content.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>8. Governing Law</h3>
                        <p>These Terms shall be governed by the laws of {location}.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>9. Modifications</h3>
                        <p>We reserve the right to modify these Terms at any time without prior notice.</p>
                    </section>

                    <section style={{ marginBottom: '0' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>10. Contact Information</h3>
                        <p>For any questions regarding these Terms, contact:</p>
                        <ul style={{ listStyle: 'none', padding: '0', marginTop: '10px' }}>
                            <li><strong>{companyName}</strong></li>
                            <li><strong>Email:</strong> <a href={`mailto:${email}`} style={{ color: 'var(--muted-teal)', textDecoration: 'none' }}>{email}</a></li>
                            <li><strong>Phone:</strong> {phones}</li>
                        </ul>
                    </section>
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default TermsAndConditions;
