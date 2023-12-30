import StyledLink from "./StyledLink";
import { FaCheck } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

import "../styles/FinalScore.css";

export default function FinalScore({
  finalScore,
  max,
  resetQuiz,
  questions,
  answer,
}) {
  return (
    <>
      <div className="finalScore">
        <h2>Your final score is: </h2>
        <h1>{Math.round((finalScore / max) * 100)}%</h1>
        <h3>
          You got {finalScore}/{max} correct!
        </h3>
      </div>
      <div className="resetButton">
        <button onClick={resetQuiz}>Retry</button>
        <StyledLink to={"/"}>
          <button>Home</button>
        </StyledLink>
      </div>
      <section className="results">
        <h2>Results</h2>
        {questions.map((question, i) => {
          return (
            <div key={i}>
              <section>
                <p>
                  <strong>Question:</strong> {question.question}
                </p>
                <p>
                  <strong>Correct Answer:</strong> {question.correctAnswer}
                </p>
                <p>
                  <strong>You Answered:</strong> {answer[i]}
                </p>
              </section>
              <span>
                {question.correctAnswer === answer[i] ? (
                  <FaCheck style={{ color: "green" }} />
                ) : (
                  <AiOutlineCloseCircle style={{ color: "red" }} />
                )}
              </span>
            </div>
          );
        })}
      </section>
    </>
  );
}
