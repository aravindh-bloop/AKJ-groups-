import React from 'react';

const Projects = () => {
    const projects = [
        { image: '/assets/project 1.jpeg' },
        { image: '/assets/project 2.jpeg' },
        { image: '/assets/project 3.jpeg' },
        { image: '/assets/project 4.jpeg' },
        { image: '/assets/project 5.jpeg' },
        { image: '/assets/project 6.jpeg' },
        { image: '/assets/project 7.jpeg' }
    ];

    // Duplicate projects for seamless loop
    const duplicatedProjects = [...projects, ...projects];

    return (
        <section className="projects" id="projects">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Our Work</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-description">A showcase of our commitment to excellence and innovation</p>
                </div>
            </div>

            <div className="projects-carousel-wrapper">
                <div className="projects-carousel">
                    {duplicatedProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <img
                                src={project.image}
                                alt={`Project ${(index % projects.length) + 1}`}
                                className="project-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
