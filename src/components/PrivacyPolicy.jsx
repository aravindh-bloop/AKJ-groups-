import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy-page" style={{ paddingTop: '120px', paddingBottom: '80px', backgroundColor: 'var(--mint-cream)', minHeight: '100vh' }}>
            <div className="container">
                <div className="section-header" style={{ textAlign: 'left', marginBottom: '60px' }}>
                    <span className="section-tag">Legal</span>
                    <h1 className="section-title gradient-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', display: 'block' }}>Privacy Policy</h1>
                    <p className="section-description" style={{ marginLeft: '0', maxWidth: '800px' }}>
                        AKJ GROUPS values your privacy and is committed to protecting your personal information. 
                        This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
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
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>1. Information We Collect</h3>
                        <p>We may collect the following types of information:</p>
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                            <li><strong>Personal Information:</strong> such as name, phone number, email address, and project details when you fill out contact or quotation forms.</li>
                            <li><strong>Technical Information:</strong> such as IP address, browser type, device information, and pages visited.</li>
                            <li><strong>Cookies and Usage Data:</strong> to improve website performance and user experience.</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>2. How We Use Your Information</h3>
                        <p>We use the collected information to:</p>
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                            <li>Respond to enquiries and provide construction service quotations</li>
                            <li>Improve our website functionality and services</li>
                            <li>Communicate project updates or promotional offers (only if consent is given)</li>
                            <li>Ensure website security and prevent fraud</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>3. Sharing of Information</h3>
                        <p>We do not sell or rent your personal data. We may share information with trusted third-party service providers such as:</p>
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                            <li>Hosting providers</li>
                            <li>Analytics services</li>
                            <li>Payment processors (if applicable)</li>
                        </ul>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>4. Cookies Policy</h3>
                        <p>Our website may use cookies to enhance user experience, track website performance, and analyse traffic. Users can disable cookies through their browser settings.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>5. Data Security</h3>
                        <p>We implement reasonable technical and organisational measures to protect your personal data. However, no internet transmission is completely secure.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>6. Third-Party Links</h3>
                        <p>Our website may contain links to external websites. We are not responsible for their privacy practices.</p>
                    </section>

                    <section style={{ marginBottom: '40px' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>7. Your Rights</h3>
                        <p>Depending on applicable laws, you may have the right to:</p>
                        <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                            <li>Access your personal data</li>
                            <li>Request correction or deletion</li>
                            <li>Withdraw consent</li>
                        </ul>
                        <p style={{ marginTop: '20px' }}>To exercise these rights, contact us at:</p>
                        <p><strong>Email:</strong> <a href="mailto:akjgroupsmd@gmail.com" style={{ color: 'var(--muted-teal)', textDecoration: 'none', fontWeight: 'bold' }}>akjgroupsmd@gmail.com</a></p>
                    </section>

                    <section style={{ marginBottom: '0' }}>
                        <h3 style={{ color: 'var(--dark-blue)', marginBottom: '20px', fontSize: '1.5rem', fontFamily: 'var(--font-display)' }}>8. Changes to this Policy</h3>
                        <p>We may update this Privacy Policy from time to time. Changes will be posted on this page.</p>
                    </section>
                </div>

                <div style={{ marginTop: '40px', textAlign: 'center' }}>
                    <Link to="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
