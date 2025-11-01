import React from 'react';
import './trips.css';

function TripsSection() {
  return (
    <section className="funfacts-section">
    <h2 className="funfacts-title">Fun Facts from Our Road Trip!</h2>
    <div className="funfacts-grid">
      <div className="funfact-card">
        <p>🚗 We drove over <strong>2,500 km</strong> through Italy and Croatia!</p>
      </div>
      <div className="funfact-card">
        <p>🍕 We ate <strong>12 different types</strong> of pizza in Italy!</p>
      </div>
      <div className="funfact-card">
        <p>🏛️ We visited <strong>4 UNESCO World Heritage sites</strong> during our trip!</p>
      </div>
      <div className="funfact-card">
        <p>🌊 Dubrovnik had the <strong>clearest water</strong> we have ever seen!</p>
      </div>
    </div>
  </section>
  );
}

export default TripsSection;
