'use client'
import Logo from '../components/Logo';
import React, { useState } from 'react';
import Link from 'next/link';


const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">

      <Logo />

      {/* Hamburger Icon for Small Screens */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
        <div className={`bar ${isMenuOpen ? 'open' : ''}`} />
      </div>

      {/* Navbar Links */}
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link href="/world" onClick={toggleMenu}>World</Link>
        </li>
        <li>
          <Link href="/business" onClick={toggleMenu}>Business</Link>
        </li>
        <li>
          <Link href="/science" onClick={toggleMenu}>Science</Link>
        </li>
        <li>
          <Link href="/technology" onClick={toggleMenu}>Technology</Link>
        </li>
        <li>
          <Link href="/culture" onClick={toggleMenu}>Culture</Link>
        </li>
        <li>
          <Link href="/lifestyle" onClick={toggleMenu}>Lifestyle</Link>
        </li>
        <li>
          <Link href="/sports" onClick={toggleMenu}>Sports</Link>
        </li>
      </ul>

      <style>{`
      .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5vh;
        background-color: white;
        color: white;
      }           
      .hamburger {
        display: none; /* Hide by default for larger screens */
        cursor: pointer;
        padding-right: 1vh;
      }      
      .bar {
        width: 2.75vh;
        height: 0.25vh;
        background-color: grey;
        margin: 6px 0;
        transition: 0.4s;
      }      
      .nav-links {
        list-style: none;
        display: flex;
      }      
      .nav-links li {
        margin-right: 1vw;
        color: grey;
        font-size: 2.5vh;
        padding: .25vh;
      }      
      /* Media Query for Small Screens */
      @media screen and (max-width: 1024px) {
        .hamburger {
          display: block; /* Show for smaller screens */
        }      
        .nav-links {
          display: none; /* Hide by default for smaller screens */
          flex-direction: column;
          position: absolute;
          top: 5vh;
          left: 0;
          width: 100%;
          background-color: white;
        }      
        .nav-links.open {
          display: flex; /* Show when the menu is open */
        }
      }
    `}</style>
    </nav>
  );
};

export default Header;
