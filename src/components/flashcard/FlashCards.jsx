import { useState } from "react";
import { useApp } from "../contexts/AppContext";
import FlashcardButtons from "./FlashcardButtons";

import "../../styles/Flashcard.css";

function FlashCards() {
  const { selectedQuiz } = useApp();

  const [cardNumber, setCardNumber] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [questions] = useState(selectedQuiz.questions);
  const currentCard = questions[cardNumber];

  function shuffleQuestions() {
    const oldQuestions = [...questions];
    const newQuestions = [];

    for (let i = 0; i < questions.length; i++) {
      const index = Math.floor(Math.random * oldQuestions.length);
      const question = oldQuestions.splice(index, 1);
      newQuestions.push(question[0]);
      console.log(question);
    }

    console.log(oldQuestions);
    console.log(newQuestions);
  }

  function handleClick(e) {
    setShowAnswer((prev) => !prev);
  }

  return (
    <div className="flashcard-container">
      <button onClick={shuffleQuestions}>Shuffle</button>

      <section className="flashcard" onClick={handleClick}>
        <div
          className="flashcard-inner"
          style={showAnswer ? { transform: "rotateY(180deg)" } : {}}
        >
          <div className="flashcard-front">{currentCard.question}</div>
          <div className="flashcard-back">{currentCard.correctAnswer}</div>
        </div>
      </section>

      <FlashcardButtons
        setCardNumber={setCardNumber}
        setShowAnswer={setShowAnswer}
        questions={selectedQuiz.questions}
        cardNumber={cardNumber}
      />
    </div>
  );
}

export default FlashCards;
