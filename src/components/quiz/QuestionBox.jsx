export default function QuestionBox({
  questions,
  questionNum,
  answer,
  updateAnswer,
}) {
  const question = questions[Number(questionNum)];

  return (
    <>
      <div className="questionBox">
        <div className="questionBoxHeader">
          <h4 className="questionNum">Question {questionNum + 1}</h4>
          <h2 className="question">{question.question}</h2>
        </div>
        <div className="answers">
          {question.answers.map((ans, i) => (
            <div
              className="answer"
              onClick={updateAnswer}
              style={
                ans === answer[questionNum]
                  ? {
                      backgroundColor: "#cf6766",
                      color: "white",
                      paddingLeft: "3rem",
                    }
                  : {}
              }
              key={i}
              value={ans}
            >
              <div>{ans}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
