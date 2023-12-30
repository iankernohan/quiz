import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./components/contexts/AppContext";
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import FlashCards from './components/flashcard/FlashCards'
import NewQuiz from "./components/new_quiz/NewQuiz";
import Quiz from "./components/quiz/Quiz";


function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Header>Quisp</Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newQuiz" element={<NewQuiz />} />
          <Route path="/quiz/:name" element={<Quiz />}
          />
          <Route path="/flashcards/:name" element={<FlashCards />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  )
}

export default App;
