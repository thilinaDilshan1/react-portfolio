import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Navbar.css';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Skills from '../../Pages/Skills/Skills';
import Projects from '../../Pages/Projects/Projects';
import Contact from '../../Pages/Contact/Contact';

export default function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="navbarLeft">
              <h2>Portfolio</h2>
            </div>
            <Router>
              <div className="navbarRight">
                <div className="navbarItems">
                  <Link to="/" className="navbarItem">Home</Link>
                  <Link to="/about" className="navbarItem">About</Link>
                  <Link to="/skills" className="navbarItem">Skills</Link>
                  <Link to="/projects" className="navbarItem">Projects</Link>
                  <Link to="/contact" className="navbarItem">Contact</Link>
                </div>
              </div>

              <Route path="/" exact render={() => <Home />} />
              <Route path="/about" render={() => <About />} />
              <Route path="/skills" render={() => <Skills />} />
              <Route path="/projects" render={() => <Projects />} />
              <Route path="/contact" render={() => <Contact />} />
            </Router>
        </div>
    </div>
  )
}
