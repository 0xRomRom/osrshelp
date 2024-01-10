import stl from "./Faq.module.css";
import FAQS from "../../../utils/faqs";
import { FaLongArrowAltLeft } from "react-icons/fa";
import HomeButton from "../../../utils/homebutton/HomeButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();
  const [faqState, setFaqState] = useState(FAQS[0]);

  const updateFaqState = (newState) => {
    setFaqState(newState);
  };

  const [spanData, setSpanData] = useState(null);

  const handleSwitch = (event) => {
    const datasetValue = event.target.dataset.value;
    setSpanData(datasetValue);
  };

  return (
    <div className={stl.faq}>
      <HomeButton />
      <div className={stl.faqModal}>
        <span className={stl.homeSpan} onClick={() => navigate("/")}>
          <FaLongArrowAltLeft className={stl.homeArrow} />
          <span className={stl.homeTxt}>Home</span>
        </span>
        <h1 className={stl.faqHero}>FAQ</h1>
        <div className={stl.questionsBlock}>
          <span
            data-value="1"
            className={`${stl.question} ${
              spanData === "1" ? stl.activeQuestion : ""
            }`}
            onClick={(e) => {
              updateFaqState(FAQS[1]);
              handleSwitch(e);
            }}
          >
            What is OSRS Help's goal?
          </span>
          <span
            data-value="2"
            className={`${stl.question} ${
              spanData === "2" ? stl.activeQuestion : ""
            }`}
            onClick={(e) => {
              updateFaqState(FAQS[2]);
              handleSwitch(e);
            }}
          >
            Who maintains this site?
          </span>
          <span
            data-value="3"
            className={`${stl.question} ${
              spanData === "3" ? stl.activeQuestion : ""
            }`}
            onClick={(e) => {
              updateFaqState(FAQS[3]);
              handleSwitch(e);
            }}
          >
            What do rune users get?
          </span>
          <span
            data-value="4"
            className={`${stl.question} ${
              spanData === "4" ? stl.activeQuestion : ""
            }`}
            onClick={(e) => {
              updateFaqState(FAQS[4]);
              handleSwitch(e);
            }}
          >
            Can I request a feature?
          </span>
          <span
            data-value="5"
            className={`${stl.question} ${
              spanData === "5" ? stl.activeQuestion : ""
            }`}
            onClick={(e) => {
              updateFaqState(FAQS[5]);
              handleSwitch(e);
            }}
          >
            Where to report an issue?
          </span>
          <span
            data-value="6"
            className={`${stl.question} ${
              spanData === "6" ? stl.activeQuestion : ""
            }`}
            onClick={(e) => {
              updateFaqState(FAQS[6]);
              handleSwitch(e);
            }}
          >
            How do I get in contact?
          </span>
          <span
            data-value="7"
            className={`${stl.question} ${
              spanData === "7" ? stl.activeQuestion : ""
            }`}
            onClick={(e) => {
              updateFaqState(FAQS[7]);
              handleSwitch(e);
            }}
          >
            How can I contribute?
          </span>
          <span
            data-value="8"
            className={`${stl.question} ${
              spanData === "8" ? stl.activeQuestion : ""
            }`}
            onClick={(e) => {
              updateFaqState(FAQS[8]);
              handleSwitch(e);
            }}
          >
            Do you collect data?
          </span>
        </div>

        <div className={stl.answerBlock}>
          <p className={stl.answerPar}>
            {faqState.text.map((textItem, index) => {
              return (
                <span key={index} className={stl.answerMappedSpan}>
                  {textItem}
                </span>
              );
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
