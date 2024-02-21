import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './Navbar.css';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';


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
