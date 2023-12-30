import { useState } from "react";
import { useApp } from "../contexts/AppContext";
import FinalScore from "../FinalScore";
import Title from "./Title";
import QuestionBox from "./QuestionBox";
import Buttons from "./QuizButtons";

import "../../styles/Quiz.css";

export default function Quiz() {
  const { selectedQuiz } = useApp();

  const questions = selectedQuiz.questions;
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
    const value = e.target.textContent;
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
  }

  return (
    <section className="quiz-page">
      <div className="quiz">
        <Title title={selectedQuiz.name} />
        {submit ? (
          <FinalScore
            finalScore={finalScore}
            max={questions.length}
            resetQuiz={resetQuiz}
            questions={questions}
            answer={answer}
          />
        ) : (
          <>
            <QuestionBox
              questions={questions}
              questionNum={questionNum}
              answer={answer}
              updateAnswer={updateAnswer}
            />
            <Buttons
              questions={questions}
              questionNum={questionNum}
              setQuestionNum={setQuestionNum}
              answer={answer}
              setFinalScore={setFinalScore}
              submitReady={submitReady}
              returnHome={returnHome}
            />
          </>
        )}
      </div>
    </section>
  );
}
