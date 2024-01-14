import stl from "./PollResults.module.css";
import NumberCounter from "../../../../../utils/NumberCounter";
import { motion as m } from "framer-motion";

const PollResults = ({ totalVotes, voteResults }) => {
  return (
    <div className={stl.voteResults}>
      {voteResults.map((item) => {
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
