import Buttons from "./Buttons";
import QuestionBox from "./QuestionBox";

export default function AllQuestions({
  questions,
  setFinalScore,
  questionNum,
  setQuestionNum,
  answer,
  updateAnswer,
  submitReady,
}) {
  const letters = ["a", "b", "c", "d"];

  const questionBoxes = questions.map((question) => {
    return (
      <>
        <QuestionBox
          questions={questions}
          questionNum={questionNum}
          letters={letters}
          answer={answer}
          updateAnswer={updateAnswer}
        />
      </>
    );
  });

  return (
    <>
      {questionBoxes[questionNum]}
      <Buttons
        questions={questions}
        questionNum={questionNum}
        setQuestionNum={setQuestionNum}
        answer={answer}
        setFinalScore={setFinalScore}
        submitReady={submitReady}
      />
    </>
  );
}
