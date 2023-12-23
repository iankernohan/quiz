import QuestionPreview from "./QuestionPreview";

export default function NewQuizPreview({ questions, setQuestions }) {
  return (
    <section className="new-quiz-preview-container">
      <h2>Preview Questions</h2>
      <section className="new-quiz-preview">
        {questions.length === 0 ? (
          <h4>Add some questions!</h4>
        ) : (
          questions.map((question, i) => {
            return (
              <QuestionPreview
                key={i}
                question={question}
                index={i}
                setQuestions={setQuestions}
              />
            );
          })
        )}
      </section>
    </section>
  );
}
