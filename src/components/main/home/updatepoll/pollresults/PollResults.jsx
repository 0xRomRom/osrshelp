import stl from "./PollResults.module.css";
import NumberCounter from "../../../../../utils/NumberCounter";
import { motion as m } from "framer-motion";

const pollResults = [
  { question: 1, questionValue: "Bird House calculator", voteCount: 15 },
  { question: 2, questionValue: "Hydra calculator", voteCount: 28 },
  { question: 3, questionValue: "Herbiboar calculator", voteCount: 34 },
  { question: 4, questionValue: "Blast Furnace calculator", voteCount: 98 },
  { question: 5, questionValue: "Pyramid plunder calculator", voteCount: 62 },
];
const PollResults = ({ totalVotes, voteResults }) => {
  return (
    <div className={stl.voteResults}>
      {pollResults.map((item) => {
        const percentage = item.voteCount / totalVotes;
        console.log(percentage);
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
              <span className={stl.questionTxt}>{item.questionValue}</span>
            </div>
          </div>
        );
      })}
      <span className={stl.totalVotes}>
        Total votes: <span className={stl.whiteVotes}>{totalVotes}</span>
      </span>
    </div>
  );
};

export default PollResults;
