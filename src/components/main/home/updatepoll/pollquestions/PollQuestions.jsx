import stl from "./PollQuestions.module.css";

const pollQuestions = [
  { question: 1, questionValue: "Bird House calculator" },
  { question: 2, questionValue: "Hydra calculator" },
  { question: 3, questionValue: "Herbiboar calculator" },
  { question: 4, questionValue: "Blast Furnace calculator" },
  { question: 5, questionValue: "Pyramid plunder calculator" },
];

const PollQuestions = ({ totalVotes, checkedQuestion, setCheckedQuestion }) => {
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
