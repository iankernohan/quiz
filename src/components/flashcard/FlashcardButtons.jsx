import { Link } from "react-router-dom";

export default function FlashcardButtons({
  setCardNumber,
  setShowAnswer,
  questions,
  cardNumber,
}) {
  function handleNext() {
    if (cardNumber < questions.length - 1) {
      setShowAnswer(false);
      setCardNumber((prev) => prev + 1);
    }
  }

  function handlePrev() {
    if (cardNumber > 0) {
      setShowAnswer(false);
      setCardNumber((prev) => prev - 1);
    }
  }

  return (
    <section className="flashcard-buttons">
      <button
        onClick={handlePrev}
        className={cardNumber === 0 ? "disable" : ""}
      >
        Previous
      </button>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <button
        onClick={handleNext}
        className={cardNumber === questions.length - 1 ? "disable" : ""}
      >
        Next
      </button>
    </section>
  );
}
