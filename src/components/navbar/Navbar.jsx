import './navbar.css';
import React, { useState } from 'react';
import roadtripLogo from '/src/assets/roadtrip-logo.svg';
import searchIcon from '/src/assets/magnifying-glass-solid.svg';
import { Link } from 'react-router-dom';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const toggleSearch = () => setSearchVisible(!searchVisible);

  return (
    <nav className="navigation">
      <img className="logo" src={roadtripLogo} alt="" />

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
        <Link to="/Gallery" className="nav-link" onClick={closeMenu}>Gallery</Link>
        <Link to="/cities" className="nav-link" onClick={closeMenu}>Cities</Link>
        <Link to="/Food" className="nav-link" onClick={closeMenu}>Food</Link>
        <Link to="/Blogs" className="nav-link" onClick={closeMenu}>Blog</Link>
        <Link to="/About" className="nav-link" onClick={closeMenu}>About</Link>
      </div>

      <div className="search-container">
        <div className="search-icon" onClick={toggleSearch}>
          <img className="search-img" src={searchIcon} alt="Search Icon" />
        </div>
        {searchVisible && (
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            autoFocus
          />
        )}
      </div>
    </nav>
  );
}

export default Navigation;
