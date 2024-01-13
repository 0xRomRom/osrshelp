import stl from "./UpdatePoll.module.css";
import { useEffect, useState } from "react";

const pollQuestions = [
  { question: 1, questionValue: "Bird Houses" },
  { question: 2, questionValue: "Hydra calculator" },
];

const UpdatePoll = () => {
  const [checkedQuestion, setCheckedQuestion] = useState(null);

  useEffect(() => {
    console.log(checkedQuestion);
  }, [checkedQuestion]);

  return (
    <div className={stl.modal}>
      <h2 className={stl.runechat}>Update poll</h2>
      <div className={stl.questionsList}>
        {pollQuestions.map((item, index) => {
          console.log(item.question);
          return (
            <div className={stl.questionWrapper} key={index}>
              <div
                className={stl.checkBox}
                data-index={item.question}
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
        {/* <div className={stl.questionWrapper}>
          <div className={stl.checkBox}>
            <div className={stl.innerCheck}></div>
          </div>
          <span className={stl.questionTxt}>Bird houses</span>
        </div>
        <div className={stl.questionWrapper}>
          <div className={stl.checkBox}>
            <div className={stl.innerCheck}></div>
          </div>
          <span className={stl.questionTxt}>Bird houses</span>
        </div>
        <div className={stl.questionWrapper}>
          <div className={stl.checkBox}>
            <div className={stl.innerCheck}></div>
          </div>
          <span className={stl.questionTxt}>Bird houses</span>
        </div> */}
      </div>
      <div className={stl.ctaBox}></div>
      <div className={stl.seeResultsBox}></div>
    </div>
  );
};

export default UpdatePoll;
