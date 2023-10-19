import Quiz from "./Quiz";
import quizes from "./quizes";
import QuizList from "./QuizList";
import Header from "./Header";
import Preview from "./Preview";
import { useState } from "react";


function App() {
  const [isQuiz, setIsQuiz] = useState('');
  const [selectedQuiz, setSelectedQuiz] = useState('');

  const quiz = quizes[isQuiz]

  function handleQuizSelect(quizName) {
    quizName === selectedQuiz ? setSelectedQuiz('') : setSelectedQuiz(quizName);
    console.log(quizes[quizName])
  }

  function handleSetQuiz(quiz) {
    setIsQuiz(quiz);
  }


  return (
    <div className="page">
      <Header >Quisp</Header>
      {!isQuiz ?
        <>
          <QuizList quizes={quizes} handleQuizSelect={handleQuizSelect} selectedQuiz={selectedQuiz} />
          <Preview selectedQuiz={quizes[selectedQuiz]} quizName={selectedQuiz} handleSetQuiz={handleSetQuiz} />
        </>
        :
        <Quiz title={quiz.name} questions={quiz.questions} setIsQuiz={setIsQuiz} />}
    </div>
  )
}

export default App;
