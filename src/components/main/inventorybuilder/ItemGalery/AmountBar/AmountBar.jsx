import stl from "./AmountBar.module.css";
import { useRef, useEffect } from "react";

const AmountBar = ({
  setNotedAmount,
  amountToAdd,
  setAmountToAdd,
  activeGallery,
  currentGrid,
  notedState,
  setNotedState,
  notedAmount,
  setRunesAmount,
  runesAmount,
  slotState,
}) => {
  const inputRef = useRef(null);
  const runesInputRef = useRef(null);

  useEffect(() => {
    if (notedState) {
      inputRef.current?.focus();
      return;
    }
    setAmountToAdd("1");
  }, [notedState, setAmountToAdd]);

  useEffect(() => {
    setAmountToAdd("1");
    setNotedState(false);
    runesInputRef.current?.focus();
  }, [activeGallery, setAmountToAdd, setNotedState]);

  useEffect(() => {
    runesInputRef.current?.focus();
  }, [currentGrid, slotState]);

  return (
    <div className={stl.amountbar}>
      {activeGallery !== "Runes" && slotState !== "Amunition" && (
        <>
          {!notedState && (
            <div className={stl.amountButtonWrap}>
              <button
                className={`${stl.amountCta} ${
                  amountToAdd === "1" ? stl.activeCta : ""
                }`}
                onClick={() => setAmountToAdd("1")}
              >
                1
              </button>
              <button
                className={`${stl.amountCta} ${
                  amountToAdd === "5" ? stl.activeCta : ""
                }`}
                onClick={() => setAmountToAdd("5")}
              >
                5
              </button>
              <button
                className={`${stl.amountCta} ${
                  amountToAdd === "10" ? stl.activeCta : ""
                }`}
                onClick={() => setAmountToAdd("10")}
              >
                10
              </button>
              <button
                className={`${stl.amountCta} ${
                  amountToAdd === "Fill" ? stl.activeCta : ""
                }`}
                onClick={() => setAmountToAdd("Fill")}
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
                value={notedAmount || ""}
                onChange={(e) => setNotedAmount(+e.target.value)}
              />
            </div>
          )}
          <button
            className={`${stl.amountCta} ${stl.lastCta} ${
              amountToAdd === "Noted" ? stl.activeCta : ""
            }`}
            onClick={() => {
              setAmountToAdd("Noted");
              setNotedState(!notedState);
            }}
          >
            {notedState ? "Unnoted" : "Noted"}
          </button>
        </>
      )}
      {activeGallery === "Runes" && slotState !== "Amunition" && (
        <div className={stl.amountBox}>
          <input
            type="number"
            className={stl.runesAmountInput}
            placeholder="Amount"
            ref={runesInputRef}
            onChange={(e) => setRunesAmount(+e.target.value)}
            value={runesAmount || ""}
          />
        </div>
      )}
      {activeGallery === "Armor" && slotState === "Amunition" && (
        <div className={stl.amountBox}>
          <input
            type="number"
            className={stl.runesAmountInput}
            placeholder="Amount"
            ref={runesInputRef}
            onChange={(e) => setRunesAmount(+e.target.value)}
            value={runesAmount || ""}
          />
        </div>
      )}
    </div>
  );
};

export default AmountBar;
