import React, { Component } from 'react';

class WorkExperience extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="resume" className="resume">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Resume</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>

                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="resume-title">Summary</h3>
                            <div className="resume-item pb-0">
                                <h4>Narayana Murari</h4>
                                <p><em>I am a software developer with expertise in Java, Python, Web Development, Enterprise Application Development</em></p>
                                <ul>
                                    <li>Hyderabad, India</li>
                                    <li><a href="mailto:narayana.murari@gmail.com">narayana.murari@gmail.com</a></li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Bachelor Of Technology, Electonics &amp; Communication</h4>
                                <h5>2015 - 2019</h5>
                                <p><em>National Institute of Technology Karnataka</em></p>
                                <p>CGPA : 7.33/10</p>
                            </div>
                            <div className="resume-item">
                                <h4>Board of Intermediate, Telangana, India</h4>
                                <h5>2013 - 2015</h5>
                                <p><em>Sai Chaitanya Junior College, Hyderabad</em></p>
                                <p><em>Majors in Physics, Mathematics &amp; Chemistry</em></p>
                                <p>Percentage : 98.9%</p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="resume-title">Professional Experience</h3>
                            <div className="resume-item">
                                <h4>Intern</h4>
                                <h5>March 2021 - Present</h5>
                                <p><em>Reach Technologies, Bengaluru</em></p>
                                <ul>
                                    <li>Developed communication module in an ECommerce website developed using Django and Angular</li>
                                    <li>Understood the business requirement and created test plans to cover all use cases.</li>
                                    <li>Executed the test plans, found bugs and performed root cause analysis</li>
                                </ul>
                            </div>
                            <div className="resume-item">
                                <h4>Engineering Analyst</h4>
                                <h5>July 2019 - December 2020</h5>
                                <p><em>Wells Fargo India, Hyderabad</em></p>
                                <ul>
                                    <li>Worked on a software application in Capital Markets domain which is used to integrate various trading systems, market data, risk analytics and to provide real time risk, profit &amp; loss and hedging information to trading desks</li>
                                    <li>Working on developing an Automation Testing Tool, using Java and Spring to automate all the manual testing processes which helps in automatic regression testing of the application.</li>
                                    <li>Enhanced the Risk Analytics application by effectively finding the existing functional and behavioural issues and finding a viable solution without impacting the existing functionality which led to improved stability of the application.</li>
                                    <li>Developed a health monitoring system of the application which sends the health status of processes on demand basis using Java and shell scripts.</li>
                                    <li>Developed a dynamic and highly customisable web based Cache Viewer tool using SpringBoot and BootStrap which helps to see the data stored in Oracle Coherence caches on demand.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default WorkExperience;
