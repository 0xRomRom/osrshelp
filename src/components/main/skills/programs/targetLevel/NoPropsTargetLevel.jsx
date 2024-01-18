import stl from "./NoPropsTargetLevel.module.css";
import { osrsXpTable } from "../../../../../utils/playerStats";
import { useCallback, useEffect, useState } from "react";

const NoPropsTargetLevel = ({ setRemainingExp, remainingExp }) => {
  const [selectedLvl, setSelectedLvl] = useState(1);
  const [targetLevel, setTargetLevel] = useState(2);
  const [currentExp, setCurrentExp] = useState(0);

  const calcXpToGo = useCallback(() => {
    if (selectedLvl === "") return;
    if (selectedLvl === 99) {
      setTargetLevel(99);
      return;
    }

    const currLevelExp = osrsXpTable[selectedLvl];
    const nextLevelExp = osrsXpTable[selectedLvl + 1];
    const expDiff = +nextLevelExp - +currLevelExp;

    setRemainingExp(expDiff);
  }, [selectedLvl, setRemainingExp]);

  useEffect(() => {
    calcXpToGo();
  }, [selectedLvl, calcXpToGo]);

  const handleNumbersOnly = (e) => {
    const key = e.key;
    if (
      !/^[0-9]$/.test(key) &&
      !["Backspace", "ArrowLeft", "ArrowRight", "Delete", "Tab"].includes(key)
    ) {
      e.preventDefault();
    }
  };

  const updateSelectedLvl = (e) => {
    const newValue = e.target.value;

    if (
      newValue === "" ||
      (parseInt(newValue) > 0 && parseInt(newValue) <= 98)
    ) {
      setSelectedLvl(parseInt(newValue));
      setTargetLevel(parseInt(newValue) + 1);
      setCurrentExp(+osrsXpTable[parseInt(newValue)]);
    }
  };

  const updateTargetLvl = (e) => {
    const newValue = e.target.value;

    if (newValue === "" || parseInt(newValue) <= 99) {
      setTargetLevel(parseInt(newValue));
      const maths = +osrsXpTable[parseInt(newValue)] - +currentExp;
      const result = parseInt(maths) > 0 ? parseInt(maths) : "?";
      setRemainingExp(result);
    }
  };

  const updateCurrentExp = (e) => {
    const newValue = e.target.value;

    setCurrentExp(parseInt(newValue));

    const remainder = parseInt(osrsXpTable[targetLevel]) - parseInt(newValue);

    const result = remainder > 0 ? remainder : "?";
    setRemainingExp(result);
  };

  return (
    <div className={stl.modal}>
      <div className={stl.userLvlBox}>
        <div className={stl.levelRow}>
          <div className={stl.targetRow}>
            <div className={stl.currLvlRow}>
              <span className={stl.targetlvl}>Current level:</span>
              <input
                type="text"
                className={stl.currentLvlInput}
                onKeyDown={handleNumbersOnly}
                onChange={updateSelectedLvl}
                value={selectedLvl || ""}
              />
            </div>
            {selectedLvl && (
              <div className={stl.xpDiv}>
                <span className={stl.toGoExp}>Exp:</span>
                <input
                  type="text"
                  className={stl.curExpInput}
                  value={currentExp || 0}
                  onKeyDown={handleNumbersOnly}
                  onChange={updateCurrentExp}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={stl.userDefined}>
        <div className={stl.levelRow}>
          <div className={stl.targetRow}>
            <span className={stl.targetlvl}>
              Target level:{" "}
              <input
                type="text"
                className={stl.currentLvlInput}
                onKeyDown={handleNumbersOnly}
                onChange={updateTargetLvl}
                value={targetLevel || ""}
              />
            </span>
          </div>
          <div className={stl.remainderRow}>
            <span className={stl.requiredExp}>
              {remainingExp ? remainingExp.toLocaleString() : ""} {""}EXP
              Remaining
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPropsTargetLevel;
