export default function QuizList({ quizes, handleQuizSelect, selectedQuiz }) {
  return (
    <div className="quizList">
      {quizes.map((quiz) => {
        return (
          <div
            className="quizCard"
            key={quiz.id}
            onClick={() => handleQuizSelect(quiz)}
            style={
              selectedQuiz === quiz
                ? { backgroundColor: "#031424", color: "#c8bfc7" }
                : {}
            }
          >
            <div>{quiz.name}</div>
          </div>
        );
      })}
    </div>
  );
}
