import stl from "./Contact.module.css";
import HomeButton from "../../utils/homebutton/HomeButton";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [anonForm, setAnonForm] = useState(false);

  const [formState, setFormState] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const updateFormState = (key, val) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [key]: val,
      };
    });
  };

  const submitForm = () => {
    console.log(formState);
  };

  const navigate = useNavigate();
  return (
    <div className={stl.contact}>
      <HomeButton />
      <div className={stl.contactModal}>
        <span className={stl.homeSpan} onClick={() => navigate("/")}>
          <FaLongArrowAltLeft className={stl.homeArrow} />
          <span className={stl.homeTxt}>Home</span>
        </span>
        <h1 className={stl.contactHero}>Contact</h1>
        <form className={stl.innerModal}>
          <div className={stl.subjectBar}>
            <span className={stl.inputSpan}>Subject</span>
            <input
              type="text"
              className={stl.inputStl}
              placeholder="What do you want to let us know?"
              onChange={(e) => updateFormState("subject", e.target.value)}
            />
          </div>
          <div className={stl.subjectBar}>
            <span className={stl.inputSpan}>Email</span>
            <div className={stl.inputWrapper}>
              {anonForm && (
                <input
                  type="email"
                  className={stl.inputStl}
                  placeholder="osrsuser@email.com"
                />
              )}
              <button
                className={stl.anonBtn}
                onClick={() => setAnonForm(!anonForm)}
                style={{ left: anonForm ? "initial" : "0" }}
              >
                Anon
              </button>
            </div>
          </div>
          <span className={stl.inputSpan}>Message</span>
          <div className={stl.textAreaWrap}>
            <textarea
              className={stl.textAreaInput}
              placeholder="Leave your message here"
            ></textarea>
          </div>
          <div className={stl.submitBox}>
            <button className={stl.submitCta} onClick={submitForm}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
