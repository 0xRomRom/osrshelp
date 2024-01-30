import stl from "./AmountBar.module.css";
import { useState, useRef, useEffect } from "react";

const AmountBar = ({ setNotedAmount }) => {
  const [amount, setAmount] = useState("1");
  const [notedState, setNotedState] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    if (notedState) {
      inputRef.current?.focus();
      return;
    }
    setAmount("1");
  }, [notedState]);

  return (
    <div className={stl.amountbar}>
      {!notedState && (
        <div className={stl.amountButtonWrap}>
          <button
            className={`${stl.amountCta} ${
              amount === "1" ? stl.activeCta : ""
            }`}
            onClick={() => setAmount("1")}
          >
            1
          </button>
          <button
            className={`${stl.amountCta} ${
              amount === "5" ? stl.activeCta : ""
            }`}
            onClick={() => setAmount("5")}
          >
            5
          </button>
          <button
            className={`${stl.amountCta} ${
              amount === "10" ? stl.activeCta : ""
            }`}
            onClick={() => setAmount("10")}
          >
            10
          </button>
          <button
            className={`${stl.amountCta} ${
              amount === "Fill" ? stl.activeCta : ""
            }`}
            onClick={() => setAmount("Fill")}
          >
            Fill
          </button>
        </div>
      )}
      {notedState && (
        <div className={stl.inputWrapper}>
          <input
            type="number"
            className={stl.noteAmountInput}
            placeholder="Amount"
            ref={inputRef}
            onChange={(e) => setNotedAmount(+e.target.value)}
          />
        </div>
      )}
      <button
        className={`${stl.amountCta} ${stl.lastCta} ${
          amount === "Noted" ? stl.activeCta : ""
        }`}
        onClick={() => {
          setAmount("Noted");
          setNotedState(!notedState);
        }}
      >
        {notedState ? "Unnoted" : "Noted"}
      </button>
    </div>
  );
};

export default AmountBar;
