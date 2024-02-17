import stl from "./Overview.module.css";
import supabase from "../../../../utils/supabase/supabase";
import { useEffect } from "react";
import { useState } from "react";

const Overview = () => {
  const [submissionsList, setSubmissionsList] = useState([]);
  const [voteResults, setVoteResults] = useState({});

  useEffect(() => {
    const submissionsFetcher = async () => {
      try {
        const { data, error } = await supabase
          .from("poll_submissions")
          .select("*");

        if (error) {
          throw new Error(error);
        }

        setSubmissionsList(data);
      } catch (err) {
        console.error(err);
      }
    };

    const voteResultsFetcher = async () => {
      try {
        const { data, error } = await supabase.from("poll_votes").select("*");

        if (error) {
          throw new Error(error);
        }

        const tempObj = {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
          5: 0,
        };
        data.forEach((item) => {
          const vote = item.uservote;

          if (vote === 1) {
            tempObj[1] = tempObj[1] + 1;
          }
          if (vote === 2) {
            tempObj[2] = tempObj[2] + 1;
          }
          if (vote === 3) {
            tempObj[3] = tempObj[3] + 1;
          }
          if (vote === 4) {
            tempObj[4] = tempObj[4] + 1;
          }
          if (vote === 5) {
            tempObj[5] = tempObj[5] + 1;
          }
        });

        setVoteResults(tempObj);
      } catch (err) {
        console.error(err);
      }
    };

    if (submissionsList.length === 0) {
      submissionsFetcher();
    }
    if (Object.entries(voteResults).length === 0) {
      voteResultsFetcher();
    }
  }, [submissionsList.length, voteResults]);

  return (
    <div className={stl.overview}>
      <div className={stl.submissions}>
        <span className={stl.herospan}>Poll Submissions</span>
        {submissionsList.map((item, index) => {
          return (
            <span className={stl.submission} key={index}>
              {item.submission}
            </span>
          );
        })}
      </div>
      <div className={stl.voteresults}>
        <span className={stl.herospan}>Vote Results</span>

        <span className={stl.submission}>
          Q1 : {voteResults && voteResults[1]}
        </span>
        <span className={stl.submission}>
          Q2 : {voteResults && voteResults[2]}
        </span>
        <span className={stl.submission}>
          Q3 : {voteResults && voteResults[3]}
        </span>
        <span className={stl.submission}>
          Q4 : {voteResults && voteResults[4]}
        </span>
        <span className={stl.submission}>
          Q5 : {voteResults && voteResults[5]}
        </span>
      </div>
    </div>
  );
};

export default Overview;
