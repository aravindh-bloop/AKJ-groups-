import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Projects from './Projects';
import QualityPledge from './QualityPledge';
import Partners from './Partners';
import Testimonials from './Testimonials';
import Contact from './Contact';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <Projects />
            <QualityPledge />
            <Partners />
            <Testimonials />
            <Contact />
        </>
    );
};

export default HomePage;
