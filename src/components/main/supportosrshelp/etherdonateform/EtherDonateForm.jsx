import stl from "./EtherDonateForm.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { BsCopy } from "react-icons/bs";
import { useState } from "react";

const EtherDonateForm = ({ setEtherModal }) => {
  const [isCopied, setIsCopied] = useState(false);
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

  return (
    <div className={stl.etherModal}>
      <FaLongArrowAltLeft
        className={stl.homeArrow}
        onClick={() => setEtherModal(false)}
      />
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
          <button className={stl.submitCta}>Submit Donation</button>
        </form>
      </div>
    </div>
  );
};

export default EtherDonateForm;
