import stl from "./EtherDonateForm.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { BsCopy } from "react-icons/bs";
import { useState } from "react";

const EtherDonateForm = ({ setEtherModal }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyClick = () => {
    const textarea = document.createElement("textarea");
    textarea.value = "0x53a227b9f5B95ca870F5b3cec30c378aEa59Cb09";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const submitDonateForm = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const resetModals = () => {
    setEtherModal(false);
    setFormSubmitted(false);
  };

  return (
    <div className={stl.etherModal}>
      <FaLongArrowAltLeft className={stl.homeArrow} onClick={resetModals} />
      {!formSubmitted && (
        <div className={stl.etherInfoBox}>
          <span className={stl.addressSpan}>Donation address</span>
          <div className={stl.copiedBox}>
            <span className={stl.donateAddy} onClick={handleCopyClick}>
              0x53a227b9f5... <BsCopy />
            </span>
            {isCopied && <span className={stl.copied}>Copied</span>}
          </div>
          <form className={stl.userInputs}>
            <span className={stl.formSpan}>Your wallet address</span>
            <input
              type="text"
              className={stl.addyInput}
              placeholder="0xf65ab3..."
            />
            <span className={stl.formSpan}>Your RSN</span>
            <input
              type="text"
              className={stl.addyInput}
              placeholder="i.e. King Rom II"
            />
            <button className={stl.submitCta} onClick={submitDonateForm}>
              Submit Donation
            </button>
          </form>
        </div>
      )}
      {formSubmitted && (
        <div className={stl.thanksBox}>
          <div className={stl.supportersList}>
            <h1 className={stl.thanksHero}>Thanks for supporting OSRS Help!</h1>
            <div className={stl.heartWrapper}>
              <img
                src="/skillicons/Hitpoints.webp"
                alt="Hitpoints"
                className={stl.thanksHeart}
              />
              <div className={stl.sphere}></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EtherDonateForm;
