import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

  const location = useLocation(); // Use useLocation hook
  const currentPage = location.pathname; // Determine current page

  console.log('Current Page:', currentPage);
  return (
    <div>
      <div className="navbar">
        <div className="navbarLeft">
          <h2>Portfolio</h2>
        </div>
        <div className="navbarRight">
          <div className="navbarItems">
            <Link to="/" className={`navbarItem ${currentPage === '/' ? "active" : ''}`}>Home</Link>
            <Link to="/about" className={`navbarItem ${currentPage === '/about' ? 'active' : ''}`}>About</Link>
            <Link to="/skills" className={`navbarItem ${currentPage === '/skills' ? 'active' : ''}`}>Skills</Link>
            <Link to="/projects" className={`navbarItem ${currentPage === '/projects' ? 'active' : ''}`}>Projects</Link>
            <Link to="/contact" className={`navbarItem ${currentPage === '/contact' ? 'active' : ''}`}>Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
