import { useEffect } from "react";
import Quiz from "./Quiz";
import { useNavigate } from "react-router-dom";

export default function QuizPage({ selectedQuiz }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedQuiz) navigate("/");
  }, [selectedQuiz, navigate]);

  return (
    <section className="quiz-page">
      <Quiz selectedQuiz={selectedQuiz} />
    </section>
  );
}
