import './navbar.css'; // Importerer CSS til navbar
import React from 'react';
import roadtripLogo from '/src/assets/roadtrip-logo.svg'; // Importer logo
import searchIcon from '/src/assets/magnifying-glass-solid.svg'; // Importer søgeikon
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Navigation() {
  const toggleSearch = () => {
    const searchInput = document.getElementById('searchInput');
    if (searchInput.style.display === 'none') {
      searchInput.style.display = 'block';
      searchInput.focus();
    } else {
      searchInput.style.display = 'none';
    }
  };

  return (
    <nav className="navigation">
      <img className="logo" src={roadtripLogo} alt="" />
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/Gallery" className="nav-link">Gallery</Link>
      <Link to="/cities" className="nav-link">Cities</Link>
      <Link to="/Food" className="nav-link">Food</Link>
      <Link to="/Blogs" className="nav-link">Blog</Link>
      <Link to="/About" className="nav-link">About</Link>
      <div className="search-container">
        <div className="search-icon" onClick={toggleSearch}>
          <img className="search-img" src={searchIcon} alt="Search Icon" />
        </div>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          id="searchInput"
          style={{ display: 'none' }}
        />
      </div>
    </nav>
  );
}

export default Navigation;
