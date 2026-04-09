import './trips.css';

const facts = [
  { icon: '2,500 km', label: 'Driven through Italy & Croatia' },
  { icon: '12 types', label: 'Of pizza eaten in Italy' },
  { icon: '4 sites', label: 'UNESCO World Heritage visited' },
  { icon: '6 cities', label: 'Explored across two countries' },
];

function TripsSection() {
  return (
    <section className="stats">
      <div className="stats__inner">
        <span className="stats__tag">By the Numbers</span>
        <h2 className="stats__title">Fun Facts from Our Road Trip</h2>
        <div className="stats__grid">
          {facts.map((fact, i) => (
            <div className="stats__card" key={i}>
              <span className="stats__number">{fact.icon}</span>
              <span className="stats__label">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TripsSection;
