import "./aboutpage.css";
import mathiasImg from '../../assets/Black.webp';

const AboutPage = () => {
  return (
    <div className="about page-content">
      <div className="about__header">
        <span className="about__tag">The Traveler</span>
        <h1 className="about__title">About This Journey</h1>
        <p className="about__subtitle">
          An incredible road trip through Italy and Croatia, filled with breathtaking landscapes, delicious food, and rich history.
        </p>
      </div>

      <div className="about__card">
        <div className="about__avatar-wrap">
          <img src={mathiasImg} alt="Mathias" className="about__avatar" />
        </div>
        <h2 className="about__name">Mathias</h2>
        <p className="about__bio">
          Hi, I'm Mathias! Traveling has always been a passion of mine, and this road trip gave me the chance to explore the beauty of Italy and Croatia. From indulging in authentic Italian pasta to wandering through Venice's canals, every moment was incredible.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
