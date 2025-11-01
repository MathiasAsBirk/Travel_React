import React from "react";
import "./aboutpage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Our Road Trip</h1>
      <p className="about-intro">
        Join us on our incredible journey through Italy and Croatia! This trip has been an unforgettable experience, filled with breathtaking landscapes, delicious food, and rich history.
      </p>
      
      <div className="about-content">
        <div className="about-person">
          <img src="../src/assets/Black.webp" alt="Mathias" className="about-image" />
          <h2 className="about-name">Mathias</h2>
          <p className="about-text">
            Hi, I’m Mathias! Traveling has always been a passion of mine, and this road trip gave me the chance to explore the beauty of Italy and Croatia. From indulging in authentic Italian pasta to wandering through Venice’s canals, every moment was incredible. 
          </p>
        </div>

        <div className="about-person">
          <img src="../src/assets/Black.webp" alt="Oliver" className="about-image" />
          <h2 className="about-name">Oliver</h2>
          <p className="about-text">
            Hey, I’m Oliver! This journey was about discovering new places, experiencing different cultures, and of course, eating amazing food! From the vibrant streets of Milan to the historic charm of Rijeka, this trip was truly special.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
