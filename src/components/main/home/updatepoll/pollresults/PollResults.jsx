import stl from "./PollResults.module.css";
import NumberCounter from "../../../../../utils/NumberCounter";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import supabase from "../../../../../utils/supabase/supabase";

const PollResults = ({ totalVotes, voteResults }) => {
  const [pollResults, setPollResults] = useState([]);

  useEffect(() => {
    const initFetcher = async () => {
      try {
        const { data, error } = await supabase
          .from("poll_questions")
          .select("pollobject")
          .eq("uid", "dbbc33b0-9a71-4172-9abd-979ef8ea3c14")
          .single();

        const parsedData = JSON.parse(data.pollobject);

        // setPollResults(parsedData);

        const updatedPollResults = parsedData.map((result, index) => ({
          ...result,
          voteCount: voteResults[`question${index + 1}`],
        }));

        console.log(updatedPollResults);
        setPollResults(updatedPollResults);

        if (error) {
          console.log(error);
          throw new Error(error);
        }
      } catch (err) {
        console.error(err);
      }
    };
    initFetcher();
  }, [voteResults]);

  return (
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
