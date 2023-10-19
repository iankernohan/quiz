export default function Buttons({
  questions,
  questionNum,
  setQuestionNum,
  answer,
  setFinalScore,
  submitReady,
}) {
  function handleNext() {
    if (questionNum < questions.length - 1) setQuestionNum((num) => num + 1);
  }

  function handlePrevious() {
    if (questionNum > 0) setQuestionNum((num) => num - 1);
  }

  function handleSubmit() {
    console.log("submitted");
    const score = questions
      .map((question, i) => {
        return question.correctAnswer === answer[i] ? 1 : null;
      })
      .reduce((a, b) => a + b, 0);
    console.log(score);
    setFinalScore(score);
    submitReady();
  }

  return (
    <div className="buttons">
      <button
        onClick={handlePrevious}
        className={questionNum === 0 ? "disable" : ""}
      >
        Previous
      </button>
      <button
        onClick={
          questions.length - 1 === questionNum ? handleSubmit : handleNext
        }
        style={
          questions.length - 1 === questionNum
            ? { backgroundColor: "green" }
            : {}
        }
      >
        {questions.length - 1 === questionNum ? "Submit" : "Next"}
      </button>
    </div>
  );
}
