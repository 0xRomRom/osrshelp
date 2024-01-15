import stl from "./PollQuestions.module.css";
import { FaArrowDownLong } from "react-icons/fa6";

const PollQuestions = ({
  totalVotes,
  checkedQuestion,
  setCheckedQuestion,
  pollQuestions,
  alreadyVoted,
  userVoteIndex,
}) => {
  return (
    <div className={stl.questionsList}>
      {pollQuestions.map((item) => {
        return (
          <div
            className={`${stl.questionWrapper} ${
              checkedQuestion === item.question ? stl.questionChecked : ""
            } ${userVoteIndex === item.question ? stl.votedQuestion : ""}`}
            key={item.question}
            onClick={() => setCheckedQuestion(item.question)}
            style={{ pointerEvents: alreadyVoted ? "none" : "initial" }}
          >
            <div className={stl.checkBox}>
              <div
                style={{ opacity: alreadyVoted ? "0" : "1" }}
                className={`${stl.innerCheck} ${
                  checkedQuestion === item.question ? stl.checked : ""
                }`}
              ></div>
            </div>
            {userVoteIndex === item.question ? (
              <FaArrowDownLong className={stl.votedArrow} />
            ) : (
              ""
            )}
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
