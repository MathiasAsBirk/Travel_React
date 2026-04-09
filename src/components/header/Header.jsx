import './header.css';
import headerBg from '../../assets/Header.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="hero">
      <div className="hero__bg" style={{ backgroundImage: `url(${headerBg})` }} />
      <div className="hero__overlay" />
      <div className="hero__content">
        <p className="hero__tag">Italy & Croatia Road Trip</p>
        <h1 className="hero__title">
          Discover the enchanting beauty of the Mediterranean
        </h1>
        <p className="hero__subtitle">
          A journey through ancient cities, stunning coastlines, and unforgettable flavors.
        </p>
        <div className="hero__actions">
          <Link to="/Cities" className="hero__btn hero__btn--primary">Explore Cities</Link>
          <Link to="/Gallery" className="hero__btn hero__btn--outline">View Gallery</Link>
        </div>
      </div>
      <div className="hero__scroll-hint">
        <span>Scroll to explore</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5"/>
          <circle className="hero__scroll-dot" cx="8" cy="8" r="2" fill="currentColor"/>
        </svg>
      </div>
    </header>
  );
};

export default Header;
