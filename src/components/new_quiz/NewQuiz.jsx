import { useState } from "react";
import NewQuizForm from "./NewQuizForm";
import "../../styles/NewQuiz.css";

export default function NewQuiz() {
  const [questions, setQuestions] = useState([]);

  return (
    <section className="new-quiz">
      <NewQuizForm questions={questions} setQuestions={setQuestions} />
    </section>
  );
}
