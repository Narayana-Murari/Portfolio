import React, { Component } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';

class Skills extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Skills</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>

                    <div className="row skills-content">

                        <div className="col-lg-6 skill-box">

                            <div className="progress">
                                <span className="skill">Java</span>
                                <ProgressBar completed={100}  bgColor="#0563bb"/>
                            </div>

                            <div className="progress">
                                <span className="skill">Python</span>
                                <ProgressBar completed={90} bgColor="#0563bb"/>
                            </div>

                            <div className="progress">
                                <span className="skill">Springboot</span>
                                <ProgressBar completed={75} bgColor="#0563bb" />
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="progress">
                                <span className="skill">Spring</span>
                                <ProgressBar completed={80} bgColor="#0563bb"/>
                            </div>

                            <div className="progress">
                                <span className="skill">SQL</span>
                                <ProgressBar completed={90} bgColor="#0563bb" />
                            </div>

                            <div className="progress">
                                <span className="skill">HTML</span>
                                <ProgressBar completed={90} bgColor="#0563bb" />
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        );
    }
}

export default Skills;
