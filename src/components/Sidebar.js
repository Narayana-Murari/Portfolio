import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Sidebar extends Component {

    constructor(props) {
        super(props);

        this.listener = null;
        this.state = {
            status: "hero"
        }
    }

    

    componentDidMount() {
        this.listener = document.addEventListener("scroll", e => {
            let navbarlinks = select('#navbar .scrollto', true)
            const navbarlinksActive = () => {
                let position = window.scrollY + 200
                navbarlinks.forEach(navbarlink => {
                    if (!navbarlink.hash) return
                    let section = select(navbarlink.hash)
                    if (!section) return
                    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                        navbarlink.classList.add('active')
                    } else {
                        navbarlink.classList.remove('active')
                    }
                })
            }
            window.addEventListener('load', navbarlinksActive)
            onscroll(document, navbarlinksActive)

            
        });

    }



    componentDidUpdate() {
        document.removeEventListener("scroll", this.listener);
    }

    render() {

        return (
            <header id="header" className="d-flex flex-column justify-content-center">

                <nav id="navbar" className="navbar nav-menu">
                    {/* <ul>
                        <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#skills" className="nav-link scrollto"><i className="bx bx-book-heart"></i> <span>Skills</span></a></li>
                        <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
                        <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                    </ul> */}
                    <Navbar>
                        <Nav className="navbar nav-menu" defaultActiveKey="#hero">
                            <Nav.Link href="#hero" id="hero-nav" className="scrollto"><i className="bx bx-home"></i> <span>Home</span></Nav.Link>
                            <Nav.Link href="#about" id="about-nav" className="scrollto"><i className="bx bx-user"></i> <span>About</span></Nav.Link>
                            <Nav.Link href="#skills" id="skills-nav" className="scrollto"><i className="bx bx-book-heart"></i> <span>About</span></Nav.Link>
                            <Nav.Link href="#resume" id="resume-nav" className="scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></Nav.Link>
                            <Nav.Link href="#portfolio" id="portfolio-nav" className="scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></Nav.Link>
                        </Nav>
                    </Navbar>
                </nav>

            </header>
        );
    }
}

const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }


  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    var top = 0;
    var left = 0;
    var bottom = window.innerHeight;
    var right = window.innerWidth;
    //x1 x2
    //x3 x4
    var x1 = (bottom - top) * 0.3;
    var x3 = (bottom - top) * 0.7;
    var x2 = (right - left) * 0.7;
    var x4 = (right - left) * 0.3;
    console.log(rect);
    // console.log(window.innerHeight);
    // console.log(window.innerWidth);
    return (
        ((rect.bottom + rect.top) / 2) <= x3 && ((rect.bottom + rect.top) / 2) >= x1 &&
        ((rect.left + rect.right) / 2) <= x2 && ((rect.left + rect.right) / 2) >= x4
        // rect.top >= x1 && rect.bottom <x3 &&
        // rect.left >= 0 &&
        // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

export default Sidebar;
