import stl from "./Faq.module.css";

import HomeButton from "../../../utils/homebutton/HomeButton";
import { useState } from "react";

const FAQS = {
  0: {
    text: ["Welcome to OSRS Help's Frequently Asked Questions."],
  },
  1: {
    text: [
      "OSRS Help's goal is to provide the best user interface & user experience when calculating your ingame goals.",
      "Other utility sites are boring, old or simply ugly. Yes we said it.",
      "While providing an intuitive experience, we did not skip over the aesthetics of our tools.",
      "We hope you enjoy them as much as we enjoy creating them!",
    ],
  },
};

const FAQ = () => {
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
          <span className={stl.question}>Who maintains this site?</span>
          <span className={stl.question}>What do rune users get?</span>
          <span className={stl.question}>Can I request a feature?</span>
          <span className={stl.question}>Where to report an issue?</span>
          <span className={stl.question}>How do I get in contact?</span>
          <span className={stl.question}>How can I contribute?</span>
          <span className={stl.question}>Do you collect data?</span>
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
