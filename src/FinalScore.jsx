export default function FinalScore({ finalScore, max, resetQuiz }) {
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
      </div>
    </>
  );
}
