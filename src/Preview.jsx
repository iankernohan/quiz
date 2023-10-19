export default function Preview({ selectedQuiz, handleSetQuiz, quizName }) {
  return selectedQuiz ? (
    <div className="previewContainer">
      <h2>{selectedQuiz.name}</h2>
      <h3>{selectedQuiz.questions.length} Questions</h3>

      <button onClick={() => handleSetQuiz(quizName)}>Play</button>
    </div>
  ) : (
    <div className="previewContainer">
      <h2>Quiz Name</h2>
      <h3>Select a Quiz!</h3>
    </div>
  );
}
