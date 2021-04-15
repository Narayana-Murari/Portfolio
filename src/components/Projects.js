import React, { Component } from 'react';

class Projects extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="portfolio" className="portfolio section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>Here are the links to the projects on which I'm working and that I have done in the past. Please have a look at them and let me know what you think about them. I'm open to feedback and suggestions, hit me up at my email Id.</p>
                    </div>

                    {/* <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div> */}

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="images/portfolio/MyPortfolioImg.png" className="img-fluid" alt=""></img>
                                <div className="portfolio-info">
                                    <h4>Portfolio</h4>
                                    <p>Web Application</p>
                                    <div className="portfolio-links">
                                        <a href="images/portfolio/MyPortfolioImg.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                        <a href="https://github.com/Narayana-Murari/Portfolio" target="_blank" className="portfolio-details-lightbox" data-glightbox="type: external" title="Portfolio Details"><i className="bx bx-link"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
