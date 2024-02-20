import React from 'react'
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
                    <span className="navbarItem">Home</span>
                    <span className="navbarItem">About</span>
                    <span className="navbarItem">Skills</span>
                    <span className="navbarItem">Projects</span>
                    <span className="navbarItem">Contact</span>
                </div>
            </div>
        </div>
    </div>
  )
}
