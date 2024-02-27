import stl from "./SendingCredits.module.css";
import { IoSend } from "react-icons/io5";
import { useState } from "react";

const SendingCredits = ({ setSendingCredits }) => {
  const [amountToSend, setAmountToSend] = useState("");
  const [receiverName, setReceiverName] = useState("");

  const handleCreditTransfer = () => {};

  return (
    <div className={stl.sendingcredits}>
      <div className={stl.sendWrap}>
        <span className={stl.graySpan}>Send </span>
        <input
          type="number"
          placeholder="100"
          className={stl.inputStl}
          value={amountToSend}
          onChange={(e) => setAmountToSend(e.target.value)}
        />
      </div>
      <div className={stl.sendWrap}>
        <span className={stl.graySpan}>To</span>
        <input
          type="text"
          className={stl.inputStl}
          placeholder="King Rom II"
          value={receiverName}
          onChange={(e) => setReceiverName(e.target.value)}
        />
      </div>
      <div className={stl.sendWrap}>
        <button
          className={`${stl.bottCta} ${stl.cancelCta}`}
          onClick={() => setSendingCredits(false)}
        >
          Cancel
        </button>
        <button className={stl.bottCta} onClick={handleCreditTransfer}>
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default SendingCredits;
