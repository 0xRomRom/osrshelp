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
        const { data, error } = await supabase.from("submissions").select("*");

        if (error) {
          throw new Error(error);
        }

        setSubmissionsList(data[0]);
      } catch (err) {
        console.error(err);
      }
    };

    const voteResultsFetcher = async () => {
      try {
        const { data, error } = await supabase.from("poll_results").select("*");

        if (error) {
          throw new Error(error);
        }

        setVoteResults(data[0]);
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
        {submissionsList.map((item) => {
          return <span className={stl.submission}>{item}</span>;
        })}
      </div>
      <div className={stl.voteresults}>
        <span className={stl.herospan}>Vote Results</span>
        {Object.entries(submissionsList).map((item) => {
          return <span className={stl.submission}>{item}</span>;
        })}
      </div>
    </div>
  );
};

export default Overview;
