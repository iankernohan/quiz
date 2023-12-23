import { useState } from "react";
import NewQuestionForm from "./NewQuestionForm";
import NewQuizPreview from "./NewQuizPreview";
import { useNavigate } from "react-router-dom";

export default function NewQuizForm({ questions, setQuestions }) {
  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  async function addQuiz(e) {
    e.preventDefault();
    const newQuiz = {
      id: Math.floor(Math.random() * 1000000000),
      name: title,
      questions,
    };
    const res = await fetch("http://localhost:9000/quizes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuiz),
    });
    console.log(res);
    navigate("/");
  }

  return (
    <div className="quiz-form">
      <section className="question-section">
        <NewQuestionForm setQuestions={setQuestions} />
        <NewQuizPreview questions={questions} setQuestions={setQuestions} />
      </section>
      <hr />

      <form className="quiz-form" onSubmit={addQuiz}>
        <div className="title-input">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            placeholder="Quiz Title"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <button className="add-quiz-button">Add Quiz</button>
      </form>
    </div>
  );
}
