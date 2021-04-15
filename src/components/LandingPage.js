import React, { Component } from 'react';
import Typewriter from 'typewriter-effect';

class LandingPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="hero" className="d-flex flex-column justify-content-center">
                <div className="container" data-aos="zoom-in" data-aos-delay="100">
                    <h1>Narayana Murari</h1>
                    {/* <p>I'm<span className="typed" data-typed-items="Developer, Traveller"></span></p> */}
                    <Typewriter options={{
                        strings: ['I\'m a developer, traveller, fitness enthusiast....!'],
                        autoStart: true,
                        loop: true,
                        wrapperClassName: 'typewriter',
                        cursor : "|",
                    }}>
                    </Typewriter>                
                    <div className="social-links">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="https://www.linkedin.com/in/narayana-murari-a68827113/" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </section>
        );
    }
}

export default LandingPage;
