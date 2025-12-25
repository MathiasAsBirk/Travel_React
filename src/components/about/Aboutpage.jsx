import "./aboutpage.css";
import mathiasImg from '../../assets/Black.webp';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Our Road Trip</h1>
      <p className="about-intro">
        Join us on our incredible journey through Italy and Croatia! This trip has been an unforgettable experience, filled with breathtaking landscapes, delicious food, and rich history.
      </p>
      
      <div className="about-content">
        <div className="about-person">
          {/* 2. Use the imported variable */}
          <img src={mathiasImg} alt="Mathias" className="about-image" />
          <h2 className="about-name">Mathias</h2>
          <p className="about-text">
            Hi, I’m Mathias! Traveling has always been a passion of mine, and this road trip gave me the chance to explore the beauty of Italy and Croatia. From indulging in authentic Italian pasta to wandering through Venice’s canals, every moment was incredible. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;