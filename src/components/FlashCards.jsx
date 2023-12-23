import { useState } from "react";
import FlashcardButtons from "./FlashcardButtons";
import quizes from "./quizes";

function FlashCards({ selectedQuiz }) {
  const [cardNumber, setCardNumber] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [questions, setQuestions] = useState(selectedQuiz.questions);
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
    if (!showAnswer) {
      e.target.classList.add("flashcard-flip");
      setTimeout(() => e.target.classList.remove("flashcard-flip"), 500);
    } else {
      e.target.classList.add("flashcard-flip-reverse");
      setTimeout(
        () => e.target.classList.remove("flashcard-flip-reverse"),
        500
      );
    }
    setTimeout(() => setShowAnswer((curr) => !curr), 250);
    console.log(JSON.stringify(quizes));
  }

  return (
    <div className="flashcard-container">
      <button onClick={shuffleQuestions}>Shuffle</button>
      <section
        className={`flashcard 
        }`}
        onClick={handleClick}
        style={
          showAnswer ? { backgroundColor: "#cf6766", color: "#031424" } : {}
        }
      >
        <p>{showAnswer ? currentCard.correctAnswer : currentCard.question}</p>
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
