import { useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

export default function QuestionPreview({ question, index, setQuestions }) {
  const [showDetails, setShowDetails] = useState(false);

  function deleteQuestion(index) {
    setQuestions((prev) => {
      return prev.filter((q, i) => {
        return i === index ? null : q;
      });
    });
  }

  return (
    <div className="question-preview">
      <div onClick={() => deleteQuestion(index)} className="trash">
        <FaRegTrashAlt />
      </div>
      <p>Question {index + 1}</p>
      <h3>{question.question}</h3>
      <span onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? (
          <>
            close answers
            <MdArrowDropUp />
          </>
        ) : (
          <>
            show answers
            <MdArrowDropDown />
          </>
        )}
      </span>
      {showDetails && (
        <div className="details">
          {question.answers.map((answer, i) => (
            <p key={i}>
              {i + 1}. {answer}{" "}
              {question.correctAnswer === answer ? "(correct)" : null}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
