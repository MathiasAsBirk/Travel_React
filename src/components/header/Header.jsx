import '../header/header.css';

const headerImages = {
    home: "../src/assets/Header.png", // Image for home header
};

const Header = ({ headerType }) => {
    return (
        <header className="header" style={{ backgroundImage: `url('${headerImages[headerType]}')` }}>
            <div className="header-overlay"></div>
            <h2 className="header-subtitle">
                Discover the enchanting beauty of Italy and Croatia!
            </h2>
        </header>
    );
}

export default Header;