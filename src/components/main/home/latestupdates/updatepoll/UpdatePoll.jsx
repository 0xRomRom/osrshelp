import stl from "./UpdatePoll.module.css";
import { useEffect, useState } from "react";

const pollQuestions = [
  { question: 1, questionValue: "Bird House calculator" },
  { question: 2, questionValue: "Hydra calculator" },
  { question: 3, questionValue: "Herbiboar calculator" },
  { question: 4, questionValue: "Blast Furnace calculator" },
  { question: 5, questionValue: "Pyramid plunder calculator" },
];

const UpdatePoll = () => {
  const [checkedQuestion, setCheckedQuestion] = useState(null);
  const [voted, setVoted] = useState(false);

  return (
    <div className={stl.modal}>
      <h2 className={stl.runechat}>Update poll</h2>
      {!voted && (
        <>
          <div className={stl.questionsList}>
            {pollQuestions.map((item, index) => {
              return (
                <div
                  className={`${stl.questionWrapper} ${
                    checkedQuestion === item.question ? stl.questionChecked : ""
                  }`}
                  key={index}
                >
                  <div
                    className={stl.checkBox}
                    onClick={() => setCheckedQuestion(item.question)}
                  >
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
          </div>
        </>
      )}

      {voted && (
        <div className={stl.voteResults}>
          {pollQuestions.map((item, index) => {
            return (
              <div
                className={`${stl.questionWrapper} ${
                  checkedQuestion === item.question ? stl.questionChecked : ""
                }`}
                key={index}
              >
                <div className={stl.votesWrap}>
                  <span className={stl.percentage}></span>
                </div>
                <span className={stl.questionTxt}>{item.questionValue}</span>
              </div>
            );
          })}
        </div>
      )}
      <div className={stl.seeResultsBox}>
        <span className={stl.seeResults} onClick={() => setVoted(!voted)}>
          {voted ? "Vote" : "See results"}
        </span>
      </div>
      <div className={stl.ctaBox}>
        <button
          className={stl.voteBtn}
          style={{
            opacity: !voted ? "1" : "0",
            cursor: !voted ? "pointer" : "initial",
          }}
          disabled={voted ? true : false}
          onClick={() => alert("hi")}
        >
          Vote
        </button>
      </div>
    </div>
  );
};

export default UpdatePoll;
