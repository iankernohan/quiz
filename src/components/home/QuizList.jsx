import { useApp } from "../contexts/AppContext";
import Loader from "../Loader";
import QuizFilter from "./QuizFilter";

export default function QuizList() {
  const { filteredQuizes, selectedQuiz, handleQuizSelect, isLoading } =
    useApp();

  return (
    <div className="quizListContainer">
      <QuizFilter />
      <div className="quizList">
        {isLoading && <Loader />}
        {filteredQuizes.map((quiz) => {
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
    </div>
  );
}
