import stl from "./UpdatePoll.module.css";
import { useEffect, useState } from "react";
import NumberCounter from "../../../../../utils/NumberCounter";
import { motion as m } from "framer-motion";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

const pollQuestions = [
  { question: 1, questionValue: "Bird House calculator" },
  { question: 2, questionValue: "Hydra calculator" },
  { question: 3, questionValue: "Herbiboar calculator" },
  { question: 4, questionValue: "Blast Furnace calculator" },
  { question: 5, questionValue: "Pyramid plunder calculator" },
];

const pollResults = [
  { question: 1, questionValue: "Bird House calculator", voteCount: 15 },
  { question: 2, questionValue: "Hydra calculator", voteCount: 28 },
  { question: 3, questionValue: "Herbiboar calculator", voteCount: 34 },
  { question: 4, questionValue: "Blast Furnace calculator", voteCount: 98 },
  { question: 5, questionValue: "Pyramid plunder calculator", voteCount: 62 },
];

const UpdatePoll = () => {
  const [checkedQuestion, setCheckedQuestion] = useState(null);
  const [voted, setVoted] = useState(false);
  const [totalVotes, setTotalVotes] = useState(200);
  const [activePhase, setActivePhase] = useState("Poll");

  useEffect(() => {
    setCheckedQuestion(null);
  }, [voted]);

  const handleVote = () => {
    if (!checkedQuestion) {
      return;
    }
    setVoted(!voted);
    setTotalVotes((votes) => votes + 1);
  };

  return (
    <div className={stl.modal}>
      <HiOutlineQuestionMarkCircle className={stl.questionMark} />
      <h2 className={stl.title}>Update poll</h2>
      {!voted && (
        <>
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
        </>
      )}

      {voted && (
        <>
          <div className={stl.voteResults}>
            {pollResults.map((item) => {
              const percentage = (item.voteCount / totalVotes) * 100;
              return (
                <div className={stl.resultWrapper} key={item.question}>
                  <div className={stl.votesWrap}>
                    <span className={stl.votes}>
                      <NumberCounter n={item.voteCount} time="3000" />x
                    </span>
                  </div>
                  <div className={stl.percentageBox}>
                    <m.div
                      className={stl.resultPercentage}
                      initial={{ width: 0 }}
                      transition={{ duration: 3 }}
                      animate={{ width: `${percentage}%` }}
                    ></m.div>
                  </div>
                  <div className={stl.questionValueWrap}>
                    <span className={stl.questionTxt}>
                      {item.questionValue}
                    </span>
                  </div>
                </div>
              );
            })}
            <span className={stl.totalVotes}>
              Total votes: <span className={stl.whiteVotes}>{totalVotes}</span>
            </span>
          </div>
        </>
      )}

      <div className={stl.ctaBox}>
        <button
          className={stl.voteBtn}
          style={{
            opacity: voted ? "0" : "1",
            cursor: voted ? "initial" : "pointer",
          }}
          disabled={voted ? true : false}
          onClick={handleVote}
        >
          Vote
        </button>
      </div>
      <div className={stl.seeResultsBox}>
        <span className={stl.seeResults} onClick={() => setVoted(!voted)}>
          {voted ? "Vote" : "See results"}
        </span>
      </div>
      <div className={stl.phasesBox}>
        <div className={stl.phase}>
          <span
            className={`${stl.phaseSpan} ${
              activePhase === "Idle" ? stl.phaseActive : ""
            }`}
          >
            Idle
          </span>
        </div>
        <div className={stl.phase}>
          <span
            className={`${stl.phaseSpan} ${
              activePhase === "Submissions" ? stl.phaseActive : ""
            }`}
          >
            Submissions
          </span>
        </div>
        <div className={stl.phase}>
          <span
            className={`${stl.phaseSpan} ${
              activePhase === "Poll" ? stl.phaseActive : ""
            }`}
          >
            Poll
          </span>
        </div>
        <div className={stl.phase}>
          <span
            className={`${stl.phaseSpan} ${
              activePhase === "Construction" ? stl.phaseActive : ""
            }`}
          >
            Construction
          </span>
        </div>
      </div>
    </div>
  );
};

export default UpdatePoll;
