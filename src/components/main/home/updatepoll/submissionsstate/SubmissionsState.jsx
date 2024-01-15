import { useEffect, useState } from "react";
import stl from "./SubmissionsState.module.css";
import supabase from "../../../../../utils/supabase/supabase";
import { FaArrowDownLong } from "react-icons/fa6";

const SubmissionsState = ({ userID }) => {
  const [submission, setSubmission] = useState(null);
  const [alreadySubmitted, setAlreadySubmitted] = useState(null);

  const updateSubmissionState = (e) => {
    setSubmission(e.target.value);
  };

  useEffect(() => {
    const initialFetch = async () => {
      try {
        const { data, error } = await supabase
          .from("poll_submissions")
          .select()
          .eq("uid", userID)
          .single();
        if (!data) {
          return;
        }
        if (data.submission) {
          setAlreadySubmitted(data.submission);
        }

        if (error) {
          throw new Error(error);
        }
      } catch (err) {}
    };
    initialFetch();
  }, [userID]);

  const handleFormSubmission = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.from("poll_submissions").insert([
        {
          uid: userID,
          submission: submission,
        },
      ]);
      if (error) {
        throw new Error(error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    console.log(submission);
    console.log(alreadySubmitted);
  }, [submission, alreadySubmitted]);
  return (
    <div className={stl.submissionsstate}>
      <h2 className={stl.hero}>Submissions</h2>
      {!alreadySubmitted && (
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
      )}
      {alreadySubmitted && (
        <div className={stl.alreadySubmittedBox}>
          <h2 className={stl.thanksHero}>Thanks for submitting</h2>
          <FaArrowDownLong className={stl.downArrow} />
          <span className={stl.submissionSpan}>{alreadySubmitted}</span>
          <p className={stl.submitCopy}>
            Most popular entries will be polled soon!
          </p>
        </div>
      )}
    </div>
  );
};

export default SubmissionsState;
