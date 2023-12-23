import { Link } from "react-router-dom";

export default function Preview({ selectedQuiz }) {
  return selectedQuiz ? (
    <div className="previewContainer">
      <h2>{selectedQuiz.name}</h2>
      <h3>{selectedQuiz.questions.length} Questions</h3>
      <Link to={`/quiz/${selectedQuiz.name}`} className="play-button-link">
        <button>Quiz</button>
      </Link>
      <Link
        to={`/flashcards/${selectedQuiz.name}`}
        className="play-button-link"
      >
        <button>Flashcards</button>
      </Link>
    </div>
  ) : (
    <div className="previewContainer">
      <h2>Select a quiz or flashcards!</h2>
    </div>
  );
}
