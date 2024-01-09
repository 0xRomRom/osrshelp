import stl from "./Faq.module.css";

import HomeButton from "../../../utils/homebutton/HomeButton";
import { useState } from "react";

const FAQS = {
  0: { text: " Welcome to OSRS Help's Frequently Asked Questions." },
  1: { text: "To make you a better player." },
};

const FAQ = () => {
  const [faqState, setFaqState] = useState(FAQS[0].text);

  const updateFaqState = (newState) => {
    setFaqState(newState);
  };

  return (
    <div className={stl.faq}>
      <HomeButton />
      <div className={stl.faqModal}>
        <h1 className={stl.faqHero}>FAQ</h1>
        <div className={stl.questionsBlock}>
          <span
            className={stl.question}
            onClick={() => updateFaqState(FAQS[1].text)}
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
          <p className={stl.answerPar}>{faqState}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
