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

  return (
    <div className={stl.modal}>
      <h2 className={stl.runechat}>Update poll</h2>
      <div className={stl.questionsList}>
        {pollQuestions.map((item, index) => {
          return (
            <div className={stl.questionWrapper} key={index}>
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
      <div className={stl.ctaBox}>
        <button className={stl.voteBtn}>Vote</button>
      </div>
      <div className={stl.seeResultsBox}></div>
    </div>
  );
};

export default UpdatePoll;
