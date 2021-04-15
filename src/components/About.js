import React, { Component } from 'react';
import ProfilePic from '../images/LinkedInProfilePicFinal.png';

class About extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>About</h2>
                        <p>I love solving problems and learning new programming languages &amp; technologies. I believe in Kaizen philosophy of improving oneself continously in small step increments which will compound significantly over the time.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                            <img src={ProfilePic} className="img-fluid" alt="ProfilePic"></img>
                        </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content">
                                <h3>Application Programmer &amp; Web Developer.</h3>
                    <p>
                    </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>14 August 1998</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>http://narayana-murari.github.io/Portfolio</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 8861896647</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Hyderabad, India</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bachelor's</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong><a href="mailto:narayana.murari@gmail.com"><span>narayana.murari@gmail.com</span></a></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                            I'm experienced in developing Web Applications and Enterprise Applications using Java, Python. I have graduated in Bachelor of Technology from National Institute of Technology Karnataka.
                            Apart from software development, I love travelling and exploring new places, cuisines. I also enjoy working out and watching movies. 
                            </p>
                        </div>
                    </div>

                </div>
            </section>

        );
    }
}

export default About;