import './navbar.css';
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const searchData = [
  { label: 'Home',              path: '/',        category: 'Page' },
  { label: 'Gallery',           path: '/Gallery', category: 'Page' },
  { label: 'Cities',            path: '/Cities',  category: 'Page' },
  { label: 'Food & Restaurants',path: '/Food',    category: 'Page' },
  { label: 'Blog',              path: '/Blogs',   category: 'Page' },
  { label: 'About',             path: '/About',   category: 'Page' },

  { label: 'Rome',     path: '/Cities', category: 'City' },
  { label: 'Florence', path: '/Cities', category: 'City' },
  { label: 'Milan',    path: '/Cities', category: 'City' },
  { label: 'Venice',   path: '/Cities', category: 'City' },
  { label: 'Trieste',  path: '/Cities', category: 'City' },
  { label: 'Rijeka',   path: '/Cities', category: 'City' },

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

  { label: 'Blog: Rijeka',   path: '/Blogs', category: 'Blog' },
  { label: 'Blog: Trieste',  path: '/Blogs', category: 'Blog' },
  { label: 'Blog: Venice',   path: '/Blogs', category: 'Blog' },
  { label: 'Blog: Milan',    path: '/Blogs', category: 'Blog' },
  { label: 'Blog: Florence', path: '/Blogs', category: 'Blog' },
  { label: 'Blog: Rome',     path: '/Blogs', category: 'Blog' },

  { label: 'Italian Food',  path: '/Food', category: 'Food' },
  { label: 'Croatian Food', path: '/Food', category: 'Food' },
  { label: 'Restaurants',   path: '/Food', category: 'Food' },
  { label: 'Pizza',         path: '/Food', category: 'Food' },
  { label: 'Pasta',         path: '/Food', category: 'Food' },
  { label: 'Gelato',        path: '/Food', category: 'Food' },
  { label: 'Seafood',       path: '/Food', category: 'Food' },
];

const navLinks = [
  { to: '/',        label: 'Home' },
  { to: '/Gallery', label: 'Gallery' },
  { to: '/Cities',  label: 'Cities' },
  { to: '/Food',    label: 'Food' },
  { to: '/Blogs',   label: 'Blog' },
  { to: '/About',   label: 'About' },
];

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  const openSearch = () => {
    setSearchOpen(true);
    setMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery('');
    setResults([]);
    setActiveIndex(-1);
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
    setResults(searchData.filter(item =>
      item.label.toLowerCase().includes(lower)
    ).slice(0, 8));
  };

  const goTo = (path) => {
    navigate(path);
    closeSearch();
    closeMenu();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeSearch();
      return;
    }
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
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (searchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  // Lock body scroll when menu or search is open
  useEffect(() => {
    document.body.style.overflow = (menuOpen || searchOpen) ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen, searchOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <Link to="/" className="nav__logo" onClick={closeMenu}>
            Roadtrip
          </Link>

          <div className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav__link ${isActive(link.to) ? 'nav__link--active' : ''}`}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav__actions">
            <button className="nav__search-btn" onClick={openSearch} aria-label="Search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>

            <button
              className={`nav__hamburger ${menuOpen ? 'nav__hamburger--active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`nav__mobile-overlay ${menuOpen ? 'nav__mobile-overlay--visible' : ''}`} onClick={closeMenu} />

      {/* Search overlay */}
      {searchOpen && (
        <div className="search-overlay" onClick={closeSearch}>
          <div className="search-modal" onClick={e => e.stopPropagation()} ref={searchRef}>
            <div className="search-modal__input-wrap">
              <svg className="search-modal__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                ref={inputRef}
                type="text"
                className="search-modal__input"
                placeholder="Search cities, food, blogs..."
                value={query}
                onChange={handleQueryChange}
                onKeyDown={handleKeyDown}
              />
              <kbd className="search-modal__kbd">ESC</kbd>
            </div>

            {results.length > 0 && (
              <ul className="search-modal__results">
                {results.map((item, i) => (
                  <li
                    key={i}
                    className={`search-modal__item ${i === activeIndex ? 'search-modal__item--active' : ''}`}
                    onMouseDown={() => goTo(item.path)}
                    onMouseEnter={() => setActiveIndex(i)}
                  >
                    <span className="search-modal__label">{item.label}</span>
                    <span className="search-modal__category">{item.category}</span>
                  </li>
                ))}
              </ul>
            )}

            {query.length > 0 && results.length === 0 && (
              <div className="search-modal__empty">
                No results found for "{query}"
              </div>
            )}

            {query.length === 0 && (
              <div className="search-modal__hint">
                Start typing to search pages, cities, landmarks, and more...
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
