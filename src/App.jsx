import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import About from './components/About';
import TestimonialsPage from './components/TestimonialsPage';
import JointVenture from './components/JointVenture';
import ServicesPage from './components/ServicesPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';



function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/testimonials" element={<TestimonialsPage />} />
                    <Route path="/joint-venture" element={<JointVenture />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-service" element={<TermsAndConditions />} />


                </Routes>
                <Footer />
                <Chatbot />
            </div>
        </Router>
    );
}

export default App;

