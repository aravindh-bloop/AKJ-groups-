import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Projects from './Projects';
import Partners from './Partners';
import Testimonials from './Testimonials';
import Contact from './Contact';

const HomePage = () => {
    return (
        <>
            <Hero />
            <Services />
            <Projects />
            <Partners />
            <Testimonials />
            <Contact />
        </>
    );
};

export default HomePage;
