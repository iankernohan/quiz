import { useState } from "react";

export default function QuizList({ quizes, handleQuizSelect, selectedQuiz }) {
  const [isAtBottom, setIsAtBottom] = useState(false);

  function handleScroll(e) {
    const { scrollHeight, scrollTop, clientHeight } = e.target;
    const atBottom = scrollTop === scrollHeight - clientHeight;
    atBottom ? setIsAtBottom(true) : setIsAtBottom(false);
  }

  return (
    <div className="quizList">
      <div className="quizSelect" onScroll={handleScroll}>
        {Object.keys(quizes).map((quizName, i) => {
          return (
            <div
              className="quizCard"
              key={i}
              onClick={() => handleQuizSelect(quizName)}
              style={
                selectedQuiz === quizName ? { backgroundColor: "#80b3ff" } : {}
              }
            >
              <div style={{ fontSize: "1.7rem" }}>{quizes[quizName].name}</div>
              <div style={{ fontSize: "1.2rem" }}>
                {quizes[quizName].questions.length} Questions
              </div>
            </div>
          );
        })}
      </div>

      {isAtBottom ? null : (
        <div className="quizListScroll">
          <p>Scroll Down</p>
          <p>&#129095;</p>
        </div>
      )}
    </div>
  );
}
