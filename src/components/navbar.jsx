// Navbar.js
import { useState } from 'react';
import '../styles/navbar.css'; // Import the CSS file
import logo from "/logo.jpg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo real state" className='logo' />
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#properties">Properties</a></li>
      </ul>
      <button className="contact-btn">Contact Us</button>
    </nav>
  );
};

export default Navbar;
