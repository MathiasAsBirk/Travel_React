import './navbar.css';
import React, { useState, useRef, useEffect } from 'react';
import roadtripLogo from '/src/assets/roadtrip-logo.svg';
import searchIcon from '/src/assets/magnifying-glass-solid.svg';
import { Link, useNavigate } from 'react-router-dom';

const searchData = [
  // Pages
  { label: 'Home',              path: '/',       category: 'Page' },
  { label: 'Gallery',           path: '/Gallery', category: 'Page' },
  { label: 'Cities',            path: '/Cities',  category: 'Page' },
  { label: 'Food & Restaurants',path: '/Food',    category: 'Page' },
  { label: 'Blog',              path: '/Blogs',   category: 'Page' },
  { label: 'About',             path: '/About',   category: 'Page' },

  // Cities
  { label: 'Rome',     path: '/Cities', category: 'City' },
  { label: 'Florence', path: '/Cities', category: 'City' },
  { label: 'Milan',    path: '/Cities', category: 'City' },
  { label: 'Venice',   path: '/Cities', category: 'City' },
  { label: 'Trieste',  path: '/Cities', category: 'City' },
  { label: 'Rijeka',   path: '/Cities', category: 'City' },

  // Landmarks / highlights
  { label: 'Colosseum',               path: '/Cities', category: 'Landmark' },
  { label: 'Vatican City',            path: '/Cities', category: 'Landmark' },
  { label: 'Trevi Fountain',          path: '/Cities', category: 'Landmark' },
  { label: 'Duomo (Florence)',        path: '/Cities', category: 'Landmark' },
  { label: 'Uffizi Gallery',          path: '/Cities', category: 'Landmark' },
  { label: 'Ponte Vecchio',           path: '/Cities', category: 'Landmark' },
  { label: 'Grand Canal',             path: '/Cities', category: 'Landmark' },
  { label: "St. Mark's Basilica",     path: '/Cities', category: 'Landmark' },
  { label: 'Rialto Bridge',           path: '/Cities', category: 'Landmark' },
  { label: 'Milan Cathedral',         path: '/Cities', category: 'Landmark' },
  { label: 'Sforza Castle',           path: '/Cities', category: 'Landmark' },
  { label: 'Trsat Castle',            path: '/Cities', category: 'Landmark' },
  { label: 'Castello di Miramare',    path: '/Cities', category: 'Landmark' },
  { label: 'Piazza Unità d\'Italia',  path: '/Cities', category: 'Landmark' },

  // Blog posts
  { label: 'Blog: Rijeka',   path: '/Blogs', category: 'Blog' },
  { label: 'Blog: Trieste',  path: '/Blogs', category: 'Blog' },
  { label: 'Blog: Venice',   path: '/Blogs', category: 'Blog' },
  { label: 'Blog: Milan',    path: '/Blogs', category: 'Blog' },
  { label: 'Blog: Florence', path: '/Blogs', category: 'Blog' },
  { label: 'Blog: Rome',     path: '/Blogs', category: 'Blog' },

  // Food
  { label: 'Italian Food',  path: '/Food', category: 'Food' },
  { label: 'Croatian Food', path: '/Food', category: 'Food' },
  { label: 'Restaurants',   path: '/Food', category: 'Food' },
  { label: 'Pizza',         path: '/Food', category: 'Food' },
  { label: 'Pasta',         path: '/Food', category: 'Food' },
  { label: 'Gelato',        path: '/Food', category: 'Food' },
  { label: 'Seafood',       path: '/Food', category: 'Food' },
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const navigate = useNavigate();
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleSearch = () => {
    setSearchVisible(v => {
      if (v) {
        setQuery('');
        setResults([]);
      }
      return !v;
    });
  };

  const handleQueryChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    setActiveIndex(-1);
    if (val.trim().length === 0) {
      setResults([]);
      return;
    }
    const lower = val.toLowerCase();
    const filtered = searchData.filter(item =>
      item.label.toLowerCase().includes(lower)
    ).slice(0, 8);
    setResults(filtered);
  };

  const goTo = (path) => {
    navigate(path);
    setQuery('');
    setResults([]);
    setSearchVisible(false);
  };

  const handleKeyDown = (e) => {
    if (results.length === 0) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      const target = activeIndex >= 0 ? results[activeIndex] : results[0];
      if (target) goTo(target.path);
    } else if (e.key === 'Escape') {
      setQuery('');
      setResults([]);
      setSearchVisible(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setResults([]);
        setSearchVisible(false);
        setQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (searchVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchVisible]);

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

      <div className="search-container" ref={searchRef}>
        <div className="search-icon" onClick={toggleSearch}>
          <img className="search-img" src={searchIcon} alt="Search Icon" />
        </div>

        {searchVisible && (
          <div className="search-wrapper">
            <input
              ref={inputRef}
              type="text"
              className="search-input"
              placeholder="Search cities, food, blogs..."
              value={query}
              onChange={handleQueryChange}
              onKeyDown={handleKeyDown}
            />
            {results.length > 0 && (
              <ul className="search-dropdown">
                {results.map((item, i) => (
                  <li
                    key={i}
                    className={`search-result-item ${i === activeIndex ? 'active' : ''}`}
                    onMouseDown={() => goTo(item.path)}
                  >
                    <span className="result-label">{item.label}</span>
                    <span className="result-category">{item.category}</span>
                  </li>
                ))}
              </ul>
            )}
            {query.length > 0 && results.length === 0 && (
              <ul className="search-dropdown">
                <li className="search-no-results">No results found</li>
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
