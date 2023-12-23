import Preview from "./Preview";
import QuizList from "./QuizList";

function Home({ quizes, handleQuizSelect, selectedQuiz }) {
  return (
    <div className="home-page">
      <QuizList
        quizes={quizes}
        handleQuizSelect={handleQuizSelect}
        selectedQuiz={selectedQuiz}
      />
      <Preview selectedQuiz={selectedQuiz} />
    </div>
  );
}

export default Home;
