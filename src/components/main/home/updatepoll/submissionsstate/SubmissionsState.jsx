import { useEffect, useState } from "react";
import stl from "./SubmissionsState.module.css";

const SubmissionsState = () => {
  const [submission, setSubmission] = useState(null);

  const updateSubmissionState = (e) => {
    setSubmission(e.target.value);
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
        <button className={stl.submitCta}>Vote</button>
      </form>
    </div>
  );
};

export default SubmissionsState;
