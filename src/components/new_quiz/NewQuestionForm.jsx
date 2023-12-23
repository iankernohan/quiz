import { useState } from "react";

export default function NewQuestionForm({ setQuestions }) {
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");

  function changeAnswers(e, index) {
    const newAnswers = answers.map((ans, i) =>
      i === index ? e.target.value : ans
    );
    setAnswers(newAnswers);
  }

  function handleAddQuestion(e) {
    e.preventDefault();
    const questions = { question, answers, correctAnswer };
    setQuestions((prev) => [...prev, questions]);
    setQuestion("");
    setAnswers(["", "", "", ""]);
    setCorrectAnswer("");
  }

  return (
    <form className="question-form" onSubmit={handleAddQuestion}>
      <div>
        <label htmlFor="question">Question:</label>

        <textarea
          rows={5}
          type="text"
          value={question}
          placeholder="What is the question?"
          id="question"
          required
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>

      <div className="answer-form">
        <div>
          <label htmlFor="question">Answer 1</label>
          <input
            type="text"
            value={answers[0]}
            placeholder="First answer"
            id="question"
            required
            onChange={(e) => changeAnswers(e, 0)}
          />
        </div>

        <div>
          <label htmlFor="question">Answer 2</label>
          <input
            type="text"
            value={answers[1]}
            placeholder="Second answer"
            id="question"
            required
            onChange={(e) => changeAnswers(e, 1)}
          />
        </div>

        <div>
          <label htmlFor="question">Answer 3</label>
          <input
            type="text"
            value={answers[2]}
            placeholder="Third answer"
            id="question"
            required
            onChange={(e) => changeAnswers(e, 2)}
          />
        </div>

        <div>
          <label htmlFor="question">Answer 4</label>
          <input
            type="text"
            value={answers[3]}
            placeholder="Fourth answer"
            id="question"
            required
            onChange={(e) => changeAnswers(e, 3)}
          />
        </div>
      </div>

      <p style={{ textAlign: "center" }}>Choose correct answer number:</p>

      <div className="radio-buttons">
        <div>
          <input
            type="radio"
            id="1"
            name="correctAnswer"
            value={answers[0]}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          />
          <label htmlFor="1">1</label>
        </div>

        <div>
          <input
            type="radio"
            id="2"
            name="correctAnswer"
            value={answers[1]}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          />
          <label htmlFor="2">2</label>
        </div>

        <div>
          <input
            type="radio"
            id="3"
            name="correctAnswer"
            value={answers[2]}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          />
          <label htmlFor="3">3</label>
        </div>

        <div>
          <input
            type="radio"
            id="4"
            name="correctAnswer"
            value={answers[3]}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          />
          <label htmlFor="4">4</label>
        </div>
      </div>

      <button>Add Question</button>
    </form>
  );
}
