import Quiz from "./Quiz";
import quizes from "./quizes";
import QuizList from "./QuizList";
import Header from "./Header";
import Preview from "./Preview";
import { useState } from "react";


function App() {
  const [isQuiz, setIsQuiz] = useState('');
  const [hoverQuiz, setHoverQuiz] = useState(false);

  const quiz = quizes[isQuiz]

  function handleQuizHover(value) {
    setHoverQuiz(value);
  }

  return (
    <div className="page">
      <Header >Quisp</Header>
      {!isQuiz ?
        <>
          <QuizList quizes={quizes} handleQuizSelect={name => setIsQuiz(name)} onQuizHover={handleQuizHover} />
          {hoverQuiz && <Preview />}
        </>
        :
        <Quiz title={quiz.name} questions={quiz.questions} setIsQuiz={setIsQuiz} />}
    </div>
  )
}

export default App;
