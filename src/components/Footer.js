import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer id="footer">
                <div className="container">
                    <h3>Narayana Murari</h3>
                    {/* <p>Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni eligendi fuga maxime saepe commodi placeat.</p> */}
                    <div className="social-links">
                        <a href="#" className="twitter"><i className="footer-bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="footer-bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="footer-bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="footer-bx bxl-skype"></i></a>
                        <a href="https://www.linkedin.com/in/narayana-murari-a68827113/" target="_blank" className="linkedin"><i className="footer-bx bxl-linkedin"></i></a>
                    </div>
                    <div className="copyright">
                        &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
              </div>
                    <div className="credits">
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;