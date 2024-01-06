import stl from "./LevelInputs.module.css";

const LevelInputs = () => {
  return (
    <div className={stl.levelinputs}>
      <div className={stl.inputWrap}>
        <img
          src="./skillicons/Attack.webp"
          className={stl.inputIcon}
          alt="Attack skill"
        />
        <input
          type="number"
          max="99"
          className={stl.numberInput}
          placeholder="Attack level"
        />
      </div>
      <div className={stl.inputWrap}>
        <img
          src="./skillicons/Strength.png"
          className={stl.inputIcon}
          alt="Strength skill"
        />
        <input
          type="number"
          max="99"
          className={stl.numberInput}
          placeholder="Strength level"
        />
      </div>
      <div className={stl.inputWrap}>
        <img
          src="./skillicons/Defence.webp"
          className={stl.inputIcon}
          alt="Defence skill"
        />
        <input
          type="number"
          max="99"
          className={stl.numberInput}
          placeholder="Defence level"
        />
      </div>
      <div className={stl.inputWrap}>
        <img
          src="./skillicons/Hitpoints.webp"
          className={stl.inputIcon}
          alt="Hitpoints skill"
        />
        <input
          type="number"
          max="99"
          className={stl.numberInput}
          placeholder="Hitpoints level"
        />
      </div>
      <div className={stl.inputWrap}>
        <img
          src="./skillicons/Ranged.webp"
          className={stl.inputIcon}
          alt="Ranged skill"
        />
        <input
          type="number"
          max="99"
          className={stl.numberInput}
          placeholder="Ranged level"
        />
      </div>
      <div className={stl.inputWrap}>
        <img
          src="./skillicons/Magic.webp"
          className={stl.inputIcon}
          alt="Magic skill"
        />
        <input
          type="number"
          max="99"
          className={stl.numberInput}
          placeholder="Magic level"
        />
      </div>
      <div className={stl.inputWrap}>
        <img
          src="./skillicons/Prayer.webp"
          className={stl.inputIcon}
          alt="Prayer skill"
        />
        <input
          type="number"
          max="99"
          className={stl.numberInput}
          placeholder="Prayer level"
        />
      </div>
    </div>
  );
};

export default LevelInputs;
