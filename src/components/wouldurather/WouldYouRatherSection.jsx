import { useState } from 'react';
import './wouldyourather.css';

const questions = [
  { question: "Would you rather eat pasta every day or pizza every day?", option1: "Pasta", option2: "Pizza" },
  { question: "Would you rather swim in the Adriatic Sea or explore ancient ruins?", option1: "Swim", option2: "Explore" },
  { question: "Would you rather road trip in a classic Fiat 500 or a luxury sports car?", option1: "Fiat 500", option2: "Sports Car" },
  { question: "Would you rather drink Italian espresso or Croatian wine for the rest of the trip?", option1: "Espresso", option2: "Wine" },
  { question: "Would you rather visit the Colosseum or the Eiffel Tower?", option1: "Colosseum", option2: "Eiffel Tower" },
  { question: "Would you rather visit Italy or Croatia?", option1: "Italy", option2: "Croatia" },
];

function WouldYouRatherSection() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  const handlePick = (option) => {
    setSelected(option);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % questions.length);
      setSelected(null);
    }, 600);
  };

  const q = questions[index];

  return (
    <section className="wyr">
      <div className="wyr__inner">
        <span className="wyr__tag">Interactive</span>
        <h2 className="wyr__title">Would You Rather?</h2>
        <div className="wyr__card">
          <p className="wyr__counter">{index + 1} / {questions.length}</p>
          <p className="wyr__question">{q.question}</p>
          <div className="wyr__options">
            <button
              className={`wyr__btn ${selected === 1 ? 'wyr__btn--selected' : ''} ${selected === 2 ? 'wyr__btn--faded' : ''}`}
              onClick={() => !selected && handlePick(1)}
            >
              {q.option1}
            </button>
            <span className="wyr__or">or</span>
            <button
              className={`wyr__btn ${selected === 2 ? 'wyr__btn--selected' : ''} ${selected === 1 ? 'wyr__btn--faded' : ''}`}
              onClick={() => !selected && handlePick(2)}
            >
              {q.option2}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WouldYouRatherSection;
