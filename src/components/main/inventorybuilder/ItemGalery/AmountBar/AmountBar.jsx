import stl from "./AmountBar.module.css";
import { useState } from "react";

const AmountBar = () => {
  const [amount, setAmount] = useState("1");

  return (
    <div className={stl.amountbar}>
      <button
        className={`${stl.amountCta} ${amount === "1" ? stl.activeCta : ""}`}
        onClick={() => setAmount("1")}
      >
        1
      </button>
      <button
        className={`${stl.amountCta} ${amount === "5" ? stl.activeCta : ""}`}
        onClick={() => setAmount("5")}
      >
        5
      </button>
      <button
        className={`${stl.amountCta} ${amount === "10" ? stl.activeCta : ""}`}
        onClick={() => setAmount("10")}
      >
        10
      </button>
      <button
        className={`${stl.amountCta} ${stl.lastCta} ${
          amount === "Fill" ? stl.activeCta : ""
        }`}
        onClick={() => setAmount("Fill")}
      >
        Fill
      </button>
    </div>
  );
};

export default AmountBar;
