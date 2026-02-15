import React from 'react';

const Gallery = () => {
    const categories = ['Residential', 'Commercial', 'Architecture', 'Interior', 'Renovation', 'Landscape'];

    return (
        <section className="gallery" id="gallery">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Our Portfolio</span>
                    <h2 className="section-title">Project Gallery</h2>
                    <p className="section-description">Visual journey through our completed projects and ongoing work</p>
                </div>
                <div className="gallery-grid">
                    {categories.map((category, index) => (
                        <div className="gallery-item" key={index}>
                            <div className="gallery-placeholder"></div>
                            <div className="gallery-overlay">
                                <span className="gallery-category">{category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
