import stl from "./Contact.module.css";
import HomeButton from "../../../utils/homebutton/HomeButton";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import supabase from "../../../utils/supabase/supabase";

const Contact = () => {
  const [anonForm, setAnonForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(true);
  const [error, setError] = useState("");

  const emailError = "Please enter your email or submit as anon";
  const subjectError = "Please enter a subject";
  const messageError = "Please enter a message";

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

  const submitForm = async () => {
    setError("");
    if (formState.subject.length === 0) {
      setError(subjectError);
      return;
    }
    if (!anonForm && formState.email.length === 0) {
      setError(emailError);
      return;
    }

    if (formState.message.length < 10) {
      setError(messageError);
      return;
    }

    const now = new Date().toLocaleString();

    try {
      const { error } = await supabase.from("contact_form").insert([
        {
          email: formState.email,
          subject: formState.subject,
          message: formState.message,
          time: now.toString(),
        },
      ]);

      if (error) {
        throw new Error(error);
      }
    } catch (err) {
      console.error(err.message);
    }

    setFormSubmitted(true);
  };

  const toggleAnonForm = () => {
    setAnonForm(!anonForm);
    if (error === emailError) {
      setError("");
    }
  };

  useEffect(() => {
    setFormSubmitted(false);
  }, []);

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
        {!formSubmitted && (
          <form className={stl.innerModal}>
            <div className={stl.subjectBar}>
              <span className={stl.inputSpan}>Subject</span>
              <input
                type="text"
                className={stl.inputStl}
                placeholder="What do you want to let us know?"
                onChange={(e) => updateFormState("subject", e.target.value)}
                style={{
                  border: error === subjectError ? "2px solid red" : "",
                }}
              />
            </div>
            <div className={stl.subjectBar}>
              <span className={stl.inputSpan}>Email</span>
              <div className={stl.inputWrapper}>
                {!anonForm && (
                  <input
                    type="email"
                    className={stl.inputStl}
                    placeholder="osrsuser@email.com"
                    onChange={(e) => updateFormState("email", e.target.value)}
                    style={{
                      border: error === emailError ? "2px solid red" : "",
                    }}
                  />
                )}
                <button
                  className={stl.anonBtn}
                  onClick={toggleAnonForm}
                  style={{ left: !anonForm ? "initial" : "0" }}
                >
                  Anon
                </button>
              </div>
            </div>
            <span className={stl.inputSpan}>Message</span>
            <div className={stl.textAreaWrap}>
              <textarea
                maxLength="500"
                className={stl.textAreaInput}
                placeholder="Leave your message here"
                onChange={(e) => updateFormState("message", e.target.value)}
                style={{
                  border: error === messageError ? "2px solid red" : "",
                }}
              ></textarea>
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
            <h2 className={stl.msgReceived}>Your message was received!</h2>
            <img
              src="./random/Squid2.png"
              alt="Gnome child Squid"
              className={stl.squid}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
