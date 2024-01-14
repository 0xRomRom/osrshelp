import stl from "./PollQuestions.module.css";

const PollQuestions = ({
  totalVotes,
  checkedQuestion,
  setCheckedQuestion,
  pollQuestions,
}) => {
  return (
    <div className={stl.questionsList}>
      {pollQuestions.map((item) => {
        return (
          <div
            className={`${stl.questionWrapper} ${
              checkedQuestion === item.question ? stl.questionChecked : ""
            }`}
            key={item.question}
            onClick={() => setCheckedQuestion(item.question)}
          >
            <div className={stl.checkBox}>
              <div
                className={`${stl.innerCheck} ${
                  checkedQuestion === item.question ? stl.checked : ""
                }`}
              ></div>
            </div>
            <span className={stl.questionTxt}>{item.questionValue}</span>
          </div>
        );
      })}
      <span className={stl.totalVotes}>
        Total votes: <span className={stl.whiteVotes}>{totalVotes}</span>
      </span>
    </div>
  );
};

export default PollQuestions;
