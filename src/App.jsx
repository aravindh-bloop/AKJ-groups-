import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';

import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Services />
            <Projects />
            <Partners />
            <Testimonials />

            <Contact />
            <Footer />
        </div>
    );
}

export default App;
