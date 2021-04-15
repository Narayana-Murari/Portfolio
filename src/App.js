import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Education from './components/Education';
import LandingPage from './components/LandingPage';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar></Sidebar>
        <LandingPage></LandingPage>
        <About></About>
        <Skills></Skills>
        <WorkExperience></WorkExperience>
        <Projects></Projects>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
