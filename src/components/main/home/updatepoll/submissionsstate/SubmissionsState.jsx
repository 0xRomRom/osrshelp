import { useEffect, useState } from "react";
import stl from "./SubmissionsState.module.css";
import supabase from "../../../../../utils/supabase/supabase";

const SubmissionsState = ({ userID }) => {
  const [submission, setSubmission] = useState(null);

  const updateSubmissionState = (e) => {
    e.preventDefault();
    setSubmission(e.target.value);
  };

  const handleFormSubmission = async () => {
    try {
      const { data, error } = await supabase.from("poll_submissions").insert([
        {
          uid: userID,
          submission: submission,
        },
      ]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log(submission);
  }, [submission]);
  return (
    <div className={stl.submissionsstate}>
      <h2 className={stl.hero}>Submissions</h2>
      <form className={stl.submitForm}>
        <span className={stl.inputSpan}>
          What feature does OSRS Help need next?
        </span>
        <input
          type="text"
          className={stl.formInput}
          placeholder="Ex. Pyramid Plunder calculator"
          onChange={updateSubmissionState}
        />
        <button className={stl.submitCta} onClick={handleFormSubmission}>
          Vote
        </button>
      </form>
    </div>
  );
};

export default SubmissionsState;
