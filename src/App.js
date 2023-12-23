import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizPage from "./components/QuizPage";
import Header from "./components/Header";
import Home from "./components/Home";
import FlashCards from './components/FlashCards'
import NewQuiz from "./components/new_quiz/NewQuiz";


function App() {
  const [quizes, setQuizes] = useState([]);
  const [filteredQuizes, setFilteredQuizes] = useState([])
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  useEffect(() => {
    async function getQuizes() {
      try {
        const res = await fetch('http://localhost:9000/quizes');
        const data = await res.json();
        setQuizes(data);
        setFilteredQuizes(data);
      } catch {
        alert('Could not retrieve quizes')
      }
    }
    getQuizes()
  }, [])

  function handleQuizSelect(quiz) {
    quiz.id === selectedQuiz?.id ? setSelectedQuiz('') : setSelectedQuiz(quiz);
    console.log(quiz)
  }

  return (
    <BrowserRouter>
      <Header filteredQuizes={filteredQuizes} setFilteredQuizes={setFilteredQuizes} quizes={quizes} >Quisp</Header>
      <Routes>
        <Route path="/" element={<Home
          quizes={filteredQuizes}
          handleQuizSelect={handleQuizSelect}
          selectedQuiz={selectedQuiz} />}
        />
        <Route path="/newQuiz" element={<NewQuiz />} />
        <Route path="/quiz/:name" element={<QuizPage selectedQuiz={selectedQuiz} />}
        />
        <Route path="/flashcards/:name" element={<FlashCards selectedQuiz={selectedQuiz} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
