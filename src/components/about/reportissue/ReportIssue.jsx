import stl from "./ReportIssue.module.css";
import HomeButton from "../../../utils/homebutton/HomeButton";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import supabase from "../../../utils/supabase/supabase";

const ReportIssue = () => {
  const [formSubmitted, setFormSubmitted] = useState(true);
  const [error, setError] = useState("");

  const issueError = "Please enter your email or submit as anon";
  const urlError = "Please enter a subject";
  const messageError = "Please enter a message";

  const [formState, setFormState] = useState({
    url: "",
    issue: "",
    steps: "",
  });

  const updateFormState = (key, val) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [key]: val,
      };
    });
  };

  const submitForm = async () => {
    setError("");
    if (formState.url.length === 0) {
      setError(urlError);
      return;
    }
    if (formState.issue.length === 0) {
      setError(issueError);
      return;
    }

    if (formState.steps.length < 10) {
      setError(messageError);
      return;
    }

    try {
      const { error } = await supabase.from("issues_form").insert([formState]);

      if (error) {
        throw new Error(error);
      }
    } catch (err) {
      console.error(err.message);
    }

    setFormSubmitted(true);
  };

  useEffect(() => {
    setFormSubmitted(false);
  }, []);

  const navigate = useNavigate();
  return (
    <div className={stl.reportissue}>
      <HomeButton />
      <div className={stl.contactModal}>
        <span className={stl.homeSpan} onClick={() => navigate("/")}>
          <FaLongArrowAltLeft className={stl.homeArrow} />
          <span className={stl.homeTxt}>Home</span>
        </span>
        <h1 className={stl.contactHero}>Report Issue</h1>
        {!formSubmitted && (
          <form className={stl.innerModal}>
            <div className={stl.subjectBar}>
              <span className={stl.inputSpan}>URL</span>
              <input
                type="text"
                className={stl.inputStl}
                placeholder="https://www.osrshelp/#/profitalching"
                onChange={(e) => updateFormState("url", e.target.value)}
                style={{
                  border: error === urlError ? "2px solid red" : "",
                }}
              />
            </div>
            <div className={stl.subjectBar}>
              <span className={stl.inputSpan}>Issue</span>
              <div className={stl.inputWrapper}>
                <input
                  type="text"
                  className={stl.inputStl}
                  placeholder="Incorrect calculation"
                  onChange={(e) => updateFormState("issue", e.target.value)}
                  style={{
                    border: error === issueError ? "2px solid red" : "",
                  }}
                />
              </div>
            </div>
            <div className={stl.bottombox}>
              <span className={stl.inputSpan}>Steps to reproduce</span>
              <div className={stl.textAreaWrap}>
                <textarea
                  maxLength="500"
                  className={stl.textAreaInput}
                  placeholder="How can we reproduce the issue?"
                  onChange={(e) => updateFormState("steps", e.target.value)}
                  style={{
                    border: error === messageError ? "2px solid red" : "",
                  }}
                ></textarea>
              </div>
            </div>
            <div className={stl.submitBox}>
              <button className={stl.submitCta} onClick={submitForm}>
                Submit
              </button>
            </div>
          </form>
        )}
        {formSubmitted && (
          <div className={stl.thanksBox}>
            <h2 className={stl.msgReceived}>
              Our engineers are sent off to work!
            </h2>
            <img src="./random/Dwarf.webp" alt="Dwarf" className={stl.dwarf} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportIssue;
