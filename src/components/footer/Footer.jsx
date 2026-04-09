import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">Roadtrip</span>
            <p className="footer__tagline">Italy & Croatia, 2025</p>
          </div>
          <nav className="footer__nav">
            <Link to="/" className="footer__link">Home</Link>
            <Link to="/Gallery" className="footer__link">Gallery</Link>
            <Link to="/Cities" className="footer__link">Cities</Link>
            <Link to="/Food" className="footer__link">Food</Link>
            <Link to="/Blogs" className="footer__link">Blog</Link>
            <Link to="/About" className="footer__link">About</Link>
          </nav>
        </div>
        <div className="footer__bottom">
          <p className="footer__copy">&copy; 2025 Mathias. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
