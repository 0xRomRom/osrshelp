import stl from "./SendingCredits.module.css";
import { IoSend } from "react-icons/io5";

const SendingCredits = ({ setSendingCredits }) => {
  return (
    <div className={stl.sendingcredits}>
      <div className={stl.sendWrap}>
        <span className={stl.graySpan}>Send </span>
        <input type="number" placeholder="100" className={stl.inputStl} />
      </div>
      <div className={stl.sendWrap}>
        <span className={stl.graySpan}>To</span>
        <input type="text" className={stl.inputStl} placeholder="King Rom II" />
      </div>
      <div className={stl.sendWrap}>
        <button
          className={`${stl.bottCta} ${stl.cancelCta}`}
          onClick={() => setSendingCredits(false)}
        >
          Cancel
        </button>
        <button className={stl.bottCta}>
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default SendingCredits;
