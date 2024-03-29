import stl from "./LevelInputs.module.css";
import { useEffect } from "react";

const LevelInputs = ({ skills, setInputValues, inputValues }) => {
  const handleInputChange = (e, skill) => {
    const enteredValue = e.target.value;

    if (
      enteredValue === "" ||
      (!isNaN(enteredValue) &&
        parseInt(enteredValue) <= 99 &&
        parseInt(enteredValue) >= 1)
    ) {
      setInputValues({ ...inputValues, [skill]: enteredValue });
    }
  };

  useEffect(() => {
    const skill = skills || {};
    if (Object.keys(skill).length > 0) {
      setInputValues((prevState) => {
        return {
          ...prevState,
          attack: skill.attack,
          strength: skill.strength,
          defence: skill.defence,
          hitpoints: skill.hitpoints,
          ranged: skill.ranged,
          magic: skill.magic,
          prayer: skill.prayer,
        };
      });
    }
  }, [skills, setInputValues]);

  return (
    <div className={stl.levelinputs}>
      <span className={stl.currentLvls}>Current stats</span>
      <div className={stl.togoRow}>
        <div className={stl.inputWrap}>
          <img
            src="/skillicons/Attack.webp"
            className={stl.inputIcon}
            alt="Attack skill"
          />
          <input
            type="number"
            className={stl.numberInput}
            value={inputValues.attack}
            onChange={(e) => handleInputChange(e, "attack")}
            min="1"
            placeholder="Attack"
          />
        </div>
        <div className={stl.inputWrap}>
          <img
            src="/skillicons/Strength.png"
            className={stl.inputIcon}
            alt="Strength skill"
          />
          <input
            type="number"
            className={stl.numberInput}
            value={inputValues.strength}
            onChange={(e) => handleInputChange(e, "strength")}
            min="1"
            placeholder="Strength"
          />
        </div>
        <div className={stl.inputWrap}>
          <img
            src="/skillicons/Defence.webp"
            className={stl.inputIcon}
            alt="Defence skill"
          />
          <input
            type="number"
            className={stl.numberInput}
            value={inputValues.defence}
            onChange={(e) => handleInputChange(e, "defence")}
            min="1"
            placeholder="Defence"
          />
        </div>
        <div className={stl.inputWrap}>
          <img
            src="/skillicons/Hitpoints.webp"
            className={stl.inputIcon}
            alt="Hitpoints skill"
          />
          <input
            type="number"
            className={stl.numberInput}
            value={inputValues.hitpoints}
            onChange={(e) => handleInputChange(e, "hitpoints")}
            min="10"
            placeholder="Hitpoints"
          />
        </div>
        <div className={stl.inputWrap}>
          <img
            src="/skillicons/Ranged.webp"
            className={stl.inputIcon}
            alt="Ranged skill"
          />
          <input
            type="number"
            className={stl.numberInput}
            value={inputValues.ranged}
            onChange={(e) => handleInputChange(e, "ranged")}
            min="1"
            placeholder="Strength"
          />
        </div>
        <div className={stl.inputWrap}>
          <img
            src="/skillicons/Magic.webp"
            className={stl.inputIcon}
            alt="Magic skill"
          />
          <input
            type="number"
            className={stl.numberInput}
            value={inputValues.magic}
            onChange={(e) => handleInputChange(e, "magic")}
            min="1"
            placeholder="Magic"
          />
        </div>
        <div className={stl.inputWrap}>
          <img
            src="/skillicons/Prayer.webp"
            className={stl.inputIcon}
            alt="Prayer skill"
          />
          <input
            type="number"
            className={stl.numberInput}
            value={inputValues.prayer}
            onChange={(e) => handleInputChange(e, "prayer")}
            min="1"
            placeholder="Prayer"
          />
        </div>
      </div>
    </div>
  );
};

export default LevelInputs;
