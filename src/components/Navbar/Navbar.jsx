import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {
  return (
    <div>
        <div className="navbar">
            <div className="navbarLeft">
              <h2>Portfolio</h2>
            </div>
            <div className="navbarRight">
                <div className="navbarItems">
                  <Link to="/" className="navbarItem">Home</Link>
                  <Link to="/about" className="navbarItem">About</Link>
                  <Link to="/skills" className="navbarItem">Skills</Link>
                  <Link to="/projects" className="navbarItem">Projects</Link>
                  <Link to="/contact" className="navbarItem">Contact</Link>
              </div>
            </div>

        </div>
    </div>
  )
}
