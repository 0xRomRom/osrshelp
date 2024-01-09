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
      "Other utility sites are boring, old or simply ugly. Yes I said it.",
      "While providing an intuitive experience, we did not skip over the aesthetics of our tools.",
      "We hope you enjoy them as much as we enjoy creating them!",
    ],
  },
  2: {
    text: [
      "OSRS Help is build and maintained by me, a single software developer and Runescape geek from The Netherlands!",
      "I'm leveraging my technical skills to contribute to the OSRS community by providing best in class tooling.",
      "I could have been writing bots, instead we're building the greatest utility site of all!",
    ],
  },
  3: {
    text: [
      "Lifetime for only $9.99:",
      "~ Ad free experience",
      "~ Access to premium features",
      "~ Access to future premium features",
      "~ Access to hidden content",
      "~ Supports the upkeep of OSRS Help",
    ],
  },
  4: {
    text: [
      "Certainly!",
      "Head over to our contact page and submit the form with your suggestion.",
      "User feedback is highly appreciated and every submission will be treated as such.",
    ],
  },
  5: {
    text: [
      "Navigate to our Report Issue page.",
      "Submit the form and please specify your issue details.",
      "We won't reply to your email, unless additional information is required.",
      "Thanks in advance!",
    ],
  },
  6: {
    text: [
      "Visit our Contact page to find our contact information.",
      "Feel free to submit the form with any question you might have.",
    ],
  },
  7: {
    text: [
      "Thanks for asking, that's nice of you!",
      "If you want to contribute to the growth of OSRS Help, the easiest way is by letting others know about our tools.",
      "Additionally if you're feeling rich, supporting our site financially is also highly appreciated.",
      "We will always be free to use, thanks to our supporters.",
    ],
  },
  8: {
    text: [
      "Simply no data is collected.",
      "We only use cookies to improve user experience by storing user configured settings.",
      "No data is recorded, stored or shared with 3rd parties.",
      "We take your privacy serious and don't aim to export any personal information.",
      "Ever.",
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
