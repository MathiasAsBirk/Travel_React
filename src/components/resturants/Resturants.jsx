import './resturants.css';

const entries = [
  {
    city: "Rome",
    country: "Italy",
    emoji: "🍕",
    title: "The Taste of Tradition",
    text: 'Rome, the eternal city, is filled with flavors that tell stories of centuries past. From the legendary carbonara at "Roscioli" to the unbeatable cacio e pepe at "Flavio al Velavevodetto," every meal is a love letter to Italian cuisine.',
  },
  {
    city: "Florence",
    country: "Italy",
    emoji: "🍝",
    title: "A Pasta Lover's Paradise",
    text: 'Florence is home to some of the best handmade pasta dishes in the world. "Trattoria Mario" is a must-visit for their famous bistecca alla fiorentina, while "Osteria Vini e Vecchi Sapori" serves unforgettable truffle pasta.',
  },
  {
    city: "Milan",
    country: "Italy",
    emoji: "🍷",
    title: "Gourmet Elegance",
    text: 'Milan is a hotspot for gourmet dining and rich Italian flavors. "Trattoria Milanese" is famous for its authentic risotto alla milanese, while "Ratanà" blends tradition with modern flavors, offering an exquisite Osso Buco dish.',
  },
  {
    city: "Venice",
    country: "Italy",
    emoji: "🦐",
    title: "Seafood and Cicchetti Delights",
    text: 'Venice is known for its incredible seafood dishes and traditional cicchetti. "Osteria alle Testiere" is a hidden gem offering some of the best seafood pasta, while "Cantina Do Mori" serves classic Venetian cicchetti paired with local wines.',
  },
  {
    city: "Rijeka",
    country: "Croatia",
    emoji: "🦞",
    title: "Seafood by the Adriatic",
    text: 'Croatia\'s coastline is known for its incredible seafood, and Rijeka is no exception. "Konoba Tarsa" serves grilled octopus like no other, while "Molo Longo" offers fresh fish with stunning sea views.',
  },
];

const Resturants = () => {
  return (
    <div className="food-page page-content">
      <div className="food-page__header">
        <span className="food-page__tag">Culinary Guide</span>
        <h1 className="food-page__title">A Culinary Road Trip</h1>
        <p className="food-page__subtitle">
          Exploring the best restaurants and hidden food gems across Italy and Croatia
        </p>
        <span className="food-page__date">February 2025</span>
      </div>

      <div className="food-page__entries">
        {entries.map((entry, i) => (
          <article key={i} className="food-entry">
            <div className="food-entry__meta">
              <span className="food-entry__emoji">{entry.emoji}</span>
              <span className="food-entry__location">{entry.city}, {entry.country}</span>
            </div>
            <h2 className="food-entry__title">{entry.title}</h2>
            <p className="food-entry__text">{entry.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Resturants;
