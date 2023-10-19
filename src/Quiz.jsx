import AllQuestions from "./AllQuestions";
import { useState } from "react";
import FinalScore from "./FinalScore";
import Title from "./Title";

export default function Quiz({ title, questions, setIsQuiz }) {
  const answersArray = questions.map((q) => {
    return "";
  });

  const [answer, setAnswer] = useState(answersArray);
  const [finalScore, setFinalScore] = useState(0);
  const [questionNum, setQuestionNum] = useState(0);
  const [submit, setSubmit] = useState(false);

  function submitReady() {
    setSubmit((s) => !s);
  }

  function updateAnswer(e) {
    const value = e.target.attributes[1].value;
    setAnswer((a) => {
      return a.map((ans, i) => {
        if (i === Number(questionNum)) {
          return value;
        } else {
          return ans;
        }
      });
    });
  }

  function resetQuiz() {
    setAnswer(answersArray);
    setFinalScore(0);
    setQuestionNum(0);
    setSubmit(false);
  }

  function returnHome() {
    setAnswer(answersArray);
    setFinalScore(0);
    setQuestionNum(0);
    setSubmit(false);
    setIsQuiz("");
  }

  return (
    <div className="quiz">
      <Title title={title} />
      {submit ? (
        <FinalScore
          finalScore={finalScore}
          max={questions.length}
          resetQuiz={resetQuiz}
        />
      ) : (
        <AllQuestions
          questions={questions}
          setFinalScore={setFinalScore}
          questionNum={questionNum}
          setQuestionNum={setQuestionNum}
          answer={answer}
          updateAnswer={updateAnswer}
          submitReady={submitReady}
        />
      )}
      <div className="homeButton" onClick={returnHome}>
        <button>Home</button>
      </div>
    </div>
  );
}
