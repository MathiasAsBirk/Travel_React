import React, { useState } from "react";
import "./citiespage.css";

const cities = [
  {
    name: "Rome, Italy",
    image: "/src/assets/Rome.jpg",
    description:
      "Rome, the Eternal City, is a place where history and modern life blend seamlessly. From the Colosseum to the Vatican, every corner holds a story.",
    highlights: ["Colosseum", "Vatican City", "Trevi Fountain"],
    details:
      "Rome, often called 'The Eternal City, is a destination where history comes alive. Walking through its ancient streets feels like stepping back in time, with landmarks like the Colosseum, where gladiators once battled, and Vatican City, home to St. Peter’s Basilica and the Sistine Chapel. The Trevi Fountain is a must-visit—toss a coin in and make a wish! Beyond history, Rome offers incredible food: try carbonara at a traditional trattoria or grab a gelato while wandering charming piazzas.",
  },
  {
    name: "Florence, Italy",
    image: "/src/assets/Florence.jpg",
    description:
      "Florence, the birthplace of the Renaissance, is a masterpiece itself. The stunning Duomo, Uffizi Gallery, and Ponte Vecchio make this city unforgettable.",
    highlights: ["Duomo", "Uffizi Gallery", "Ponte Vecchio"],
    details:
      "Florence is the heart of the Renaissance, filled with breathtaking art and architecture. The Duomo dominates the skyline, offering panoramic views from the top. The Uffizi Gallery houses masterpieces by Michelangelo and Botticelli, while Ponte Vecchio, the city's famous bridge, is lined with unique jewelry shops. Strolling through Florence, you’ll find charming cafes serving bistecca alla fiorentina (Florentine steak) and delicious handmade pasta with truffles.",
  },
  {
    name: "Milan, Italy",
    image: "/src/assets/milan.jpg",
    description:
      "Milan, Italy's fashion capital, is a mix of historic charm and modern luxury. The grand Duomo and high-end shopping streets make it a must-visit.",
    highlights: ["Milan Cathedral", "Galleria Vittorio Emanuele", "Sforza Castle"],
    details:
      "Milan is Italy’s fashion and business hub, where history meets modern luxury. The Milan Cathedral (Duomo di Milano) is an architectural masterpiece—you can even walk on its rooftop for stunning city views. Nearby, the Galleria Vittorio Emanuele II is one of the world’s oldest shopping malls, home to luxury brands. Art lovers can admire Leonardo da Vinci’s 'The Last Supper' at Santa Maria delle Grazie. In the evening, head to Navigli, Milan’s canal district, for a classic Italian aperitivo",
  },
  {
    name: "Venice, Italy",
    image: "/src/assets/Venice.jpg",
    description:
      "Venice, the floating city, is pure magic. Glide through its canals on a gondola and soak in the stunning architecture of St. Mark's Square.",
    highlights: ["Grand Canal", "St. Mark’s Basilica", "Rialto Bridge"],
    details:
      "Venice is a dreamlike city built on water, where canals replace streets and gondolas glide past historic palaces. The Grand Canal is the main waterway, lined with beautiful buildings that reflect centuries of history. St. Mark’s Basilica and its square are the heart of the city, while the Rialto Bridge offers incredible views. For a quieter experience, explore Venice’s hidden alleyways, stop for cicchetti (Venetian tapas), and visit the colorful island of Burano.",
  },
   {
    name: "Trieste, Italy",
    image: "/src/assets/trieste.jpg",
    description:
      "Trieste, a charming port city in northeastern Italy, is known for its unique blend of Italian, Austrian, and Slavic culture, as well as its stunning Adriatic seaside location.",
    highlights: ["Piazza Unità d'Italia", "Castello di Miramare", "Canal Grande"],
    details:
      "Trieste is a fascinating city with a rich history and a cosmopolitan atmosphere. Its heart is Piazza Unità d'Italia, one of Europe's largest sea-facing squares, surrounded by impressive historic buildings. Castello di Miramare, a fairytale-like white marble castle, offers breathtaking views of the sea. The Canal Grande, inspired by Venice, is a picturesque spot lined with cozy cafés and restaurants. The city is also famous for its coffee culture and literary heritage, making it a perfect destination for history enthusiasts and food lovers alike."
},
  {
    name: "Rijeka, Croatia",
    image: "/src/assets/rijeka.jpg",
    description:
      "Rijeka, a vibrant coastal city in Croatia, is known for its lively festivals, historic castles, and beautiful Adriatic coastline.",
    highlights: ["Trsat Castle", "Korzo Street", "City Market"],
    details:
      "Rijeka is Croatia’s hidden gem, a coastal city with a mix of history, culture, and stunning Adriatic views. The Trsat Castle, perched on a hill, provides breathtaking panoramas. Korzo Street is the city’s lively center, filled with shops, cafes, and street performances. Rijeka’s markets are perfect for fresh seafood, and its annual carnival is one of the biggest in Croatia. Nearby, the beaches of Kvarner Bay offer a perfect escape for sun and relaxation.",
  }
];

const CitiesPage = () => {
  const [selectedCity, setSelectedCity] = useState(null);

  const openModal = (city) => {
    setSelectedCity(city);
  };

  const closeModal = () => {
    setSelectedCity(null);
  };

  return (
    <div className="cities-container">
      <h1 className="cities-title">Explore the Cities</h1>
      <p className="cities-intro">
        Discover the beauty, history, and culture of the incredible cities we visited on our road trip through Italy and Croatia.
      </p>
      <div className="cities-grid">
        {cities.map((city, index) => (
          <div className="city-card" key={index} onClick={() => openModal(city)}>
            <img src={city.image} alt={city.name} className="city-image" />
            <div className="city-content">
              <h2 className="city-name">{city.name}</h2>
              <p className="city-description">{city.description}</p>
              <ul className="city-highlights">
                {city.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {selectedCity && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCity.name}</h2>
            <hr />
            <p className="modal-text" >{selectedCity.details}</p>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CitiesPage;
