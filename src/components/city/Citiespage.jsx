import { useState, useEffect } from "react";
import "./citiespage.css";

import romeImg from '../../assets/Rome.jpg';
import florenceImg from '../../assets/Florence.jpg';
import milanImg from '../../assets/milan.jpg';
import veniceImg from '../../assets/Venice.jpg';
import triesteImg from '../../assets/trieste.jpg';
import rijekaImg from '../../assets/rijeka.jpg';

const cities = [
  {
    name: "Rome",
    country: "Italy",
    image: romeImg,
    description: "The Eternal City where history and modern life blend seamlessly.",
    highlights: ["Colosseum", "Vatican City", "Trevi Fountain"],
    details: "Rome, often called 'The Eternal City,' is a destination where history comes alive. Walking through its ancient streets feels like stepping back in time, with landmarks like the Colosseum, where gladiators once battled, and Vatican City, home to St. Peter's Basilica and the Sistine Chapel. The Trevi Fountain is a must-visit — toss a coin in and make a wish! Beyond history, Rome offers incredible food: try carbonara at a traditional trattoria or grab a gelato while wandering charming piazzas.",
  },
  {
    name: "Florence",
    country: "Italy",
    image: florenceImg,
    description: "The birthplace of the Renaissance, a masterpiece in itself.",
    highlights: ["Duomo", "Uffizi Gallery", "Ponte Vecchio"],
    details: "Florence is the heart of the Renaissance, filled with breathtaking art and architecture. The Duomo dominates the skyline, offering panoramic views from the top. The Uffizi Gallery houses masterpieces by Michelangelo and Botticelli, while Ponte Vecchio, the city's famous bridge, is lined with unique jewelry shops. Strolling through Florence, you'll find charming cafes serving bistecca alla fiorentina (Florentine steak) and delicious handmade pasta with truffles.",
  },
  {
    name: "Milan",
    country: "Italy",
    image: milanImg,
    description: "Italy's fashion capital, a mix of historic charm and modern luxury.",
    highlights: ["Milan Cathedral", "Galleria Vittorio Emanuele", "Sforza Castle"],
    details: "Milan is Italy's fashion and business hub, where history meets modern luxury. The Milan Cathedral (Duomo di Milano) is an architectural masterpiece — you can even walk on its rooftop for stunning city views. Nearby, the Galleria Vittorio Emanuele II is one of the world's oldest shopping malls, home to luxury brands. Art lovers can admire Leonardo da Vinci's 'The Last Supper' at Santa Maria delle Grazie. In the evening, head to Navigli, Milan's canal district, for a classic Italian aperitivo.",
  },
  {
    name: "Venice",
    country: "Italy",
    image: veniceImg,
    description: "The floating city of canals, gondolas, and timeless beauty.",
    highlights: ["Grand Canal", "St. Mark's Basilica", "Rialto Bridge"],
    details: "Venice is a dreamlike city built on water, where canals replace streets and gondolas glide past historic palaces. The Grand Canal is the main waterway, lined with beautiful buildings that reflect centuries of history. St. Mark's Basilica and its square are the heart of the city, while the Rialto Bridge offers incredible views. For a quieter experience, explore Venice's hidden alleyways, stop for cicchetti (Venetian tapas), and visit the colorful island of Burano.",
  },
  {
    name: "Trieste",
    country: "Italy",
    image: triesteImg,
    description: "A charming port city with a unique blend of Italian, Austrian, and Slavic culture.",
    highlights: ["Piazza Unita d'Italia", "Castello di Miramare", "Canal Grande"],
    details: "Trieste is a fascinating city with a rich history and a cosmopolitan atmosphere. Its heart is Piazza Unita d'Italia, one of Europe's largest sea-facing squares, surrounded by impressive historic buildings. Castello di Miramare, a fairytale-like white marble castle, offers breathtaking views of the sea. The Canal Grande, inspired by Venice, is a picturesque spot lined with cozy cafes and restaurants. The city is also famous for its coffee culture and literary heritage.",
  },
  {
    name: "Rijeka",
    country: "Croatia",
    image: rijekaImg,
    description: "A vibrant coastal city known for lively festivals and stunning Adriatic views.",
    highlights: ["Trsat Castle", "Korzo Street", "City Market"],
    details: "Rijeka is Croatia's hidden gem, a coastal city with a mix of history, culture, and stunning Adriatic views. The Trsat Castle, perched on a hill, provides breathtaking panoramas. Korzo Street is the city's lively center, filled with shops, cafes, and street performances. Rijeka's markets are perfect for fresh seafood, and its annual carnival is one of the biggest in Croatia. Nearby, the beaches of Kvarner Bay offer a perfect escape for sun and relaxation.",
  },
];

const CitiesPage = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedCity ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedCity]);

  return (
    <div className="cities page-content">
      <div className="cities__header">
        <span className="cities__tag">Destinations</span>
        <h1 className="cities__title">Explore the Cities</h1>
        <p className="cities__subtitle">
          Discover the beauty, history, and culture of the incredible cities we visited on our road trip.
        </p>
      </div>

      <div className="cities__grid">
        {cities.map((city, index) => (
          <div className="cities__card" key={index} onClick={() => setSelectedCity(city)}>
            <div className="cities__card-img-wrap">
              <img src={city.image} alt={city.name} className="cities__card-img" loading="lazy" />
              <span className="cities__card-country">{city.country}</span>
            </div>
            <div className="cities__card-body">
              <h2 className="cities__card-name">{city.name}</h2>
              <p className="cities__card-desc">{city.description}</p>
              <div className="cities__card-highlights">
                {city.highlights.map((h, i) => (
                  <span key={i} className="cities__card-chip">{h}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedCity && (
        <div className="cities-modal" onClick={() => setSelectedCity(null)}>
          <div className="cities-modal__content" onClick={(e) => e.stopPropagation()}>
            <button className="cities-modal__close" onClick={() => setSelectedCity(null)}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <div className="cities-modal__header">
              <span className="cities-modal__country">{selectedCity.country}</span>
              <h2 className="cities-modal__title">{selectedCity.name}</h2>
              <div className="cities-modal__chips">
                {selectedCity.highlights.map((h, i) => (
                  <span key={i} className="cities__card-chip">{h}</span>
                ))}
              </div>
            </div>
            <p className="cities-modal__text">{selectedCity.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CitiesPage;
