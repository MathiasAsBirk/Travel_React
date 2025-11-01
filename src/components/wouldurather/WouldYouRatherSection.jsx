import React, { useState } from 'react';
import './wouldyourather.css';

function WouldYouRatherSection() {
  const questions = [
    { question: "Would you rather eat pasta every day 🍝 or pizza every day 🍕?", option1: "Pasta!", option2: "Pizza!" },
    { question: "Would you rather swim in the Adriatic Sea 🌊 or explore ancient ruins 🏛️?", option1: "Swim!", option2: "Ruins!" },
    { question: "Would you rather road trip in a classic Fiat 500 🚗 or a luxury sports car 🏎️?", option1: "Fiat 500!", option2: "Sports Car!" },
    { question: "Would you rather drink Italian espresso ☕ or Croatian wine 🍷 for the rest of the trip?", option1: "Espresso!", option2: "Wine!" },
    { question: "Would you rather visit the Colosseum 🏟️ or the Eiffel Tower 🗼?", option1: "Colosseum!", option2: "Eiffel"},
    { question: "Would you rather visit Italy 🏖️ or Croatia 🏞️?", option1: "Italy!", option2: "Croatia!"}
  ];

  const [index, setIndex] = useState(0);
  const nextQuestion = () => {
    setIndex((prevIndex) => (prevIndex + 1) % questions.length);
  };

  return (
    <section className="would-you-rather">
      <h2 className="wyr-title">Would You Rather? 🤔</h2>
      <div className="wyr-card">
        <p className="wyr-question">{questions[index].question}</p>
        <div className="wyr-buttons">
          <button className="wyr-btn" onClick={nextQuestion}>{questions[index].option1}</button>
          <button className="wyr-btn" onClick={nextQuestion}>{questions[index].option2}</button>
        </div>
      </div>
    </section>
  );
}

export default WouldYouRatherSection;
