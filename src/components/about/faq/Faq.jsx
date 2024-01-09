import stl from "./Faq.module.css";

import HomeButton from "../../../utils/homebutton/HomeButton";

const FAQ = () => {
  return (
    <div className={stl.faq}>
      <HomeButton />
      <div className={stl.faqModal}>
        <h1 className={stl.faqHero}>FAQ</h1>
        <div className={stl.questionsBlock}>
          <span className={stl.question}>What is OSRS Help's goal?</span>
          <span className={stl.question}>Who maintains this site?</span>
          <span className={stl.question}>What do rune users get?</span>
          <span className={stl.question}>Can I request a feature?</span>
          <span className={stl.question}>Where to report an issue?</span>
          <span className={stl.question}>How do I get in contact?</span>
          <span className={stl.question}>How can I contribute?</span>
          <span className={stl.question}>Do you collect data?</span>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
