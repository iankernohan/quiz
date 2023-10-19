export default function QuestionBox({
  questions,
  questionNum,
  letters,
  answer,
  updateAnswer,
}) {
  const question = questions[Number(questionNum)];

  return (
    <>
      <div className="questionBox">
        <h4 className="questionNum">Question {questionNum + 1}</h4>
        <h1 className="question">{question.question}</h1>
        <div className="answers">
          {question.answers.map((ans, i) => (
            <div
              className="answer"
              onClick={updateAnswer}
              style={
                ans === answer[questionNum]
                  ? { backgroundColor: "rgb(135, 214, 148)" }
                  : {}
              }
              key={i}
              value={ans}
            >
              <div className="letter">{letters[i]}.</div>
              <div>{ans}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
