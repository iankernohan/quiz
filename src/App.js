import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppProvider } from "./components/contexts/AppContext";
import Home from "./components/home/Home";
import FlashCards from './components/flashcard/FlashCards'
import NewQuiz from "./components/new_quiz/NewQuiz";
import Quiz from "./components/quiz/Quiz";
import AppLayout from "./components/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/newQuiz', element: <NewQuiz /> },
      { path: '/quiz/:name', element: <Quiz /> },
      { path: '/flashcards/:name', element: <FlashCards /> }
    ]
  }

])


function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  )
}

export default App;
