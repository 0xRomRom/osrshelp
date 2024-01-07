import { useEffect } from "react";
import { useState } from "react";
import stl from "./ResultBox.module.css";

const ResultBox = () => {
  return (
    <div className={stl.resultbox}>
      <span className={stl.currentLvls}>Next level</span>
      <div className={stl.togoRow}>
        <div className={stl.togoSkill}>
          <img
            src="./skillicons/Attack.webp"
            className={stl.inputIcon}
            alt="Attack skill"
          />
          <span className={stl.amountToGo}>2</span>
        </div>
        <div className={stl.togoSkill}>
          <img
            src="./skillicons/Strength.png"
            className={stl.inputIcon}
            alt="Strength skill"
          />
          <span className={stl.amountToGo}>2</span>
        </div>
        <div className={stl.togoSkill}>
          <img
            src="./skillicons/Defence.webp"
            className={stl.inputIcon}
            alt="Defence skill"
          />
          <span className={stl.amountToGo}>2</span>
        </div>
        <div className={stl.togoSkill}>
          <img
            src="./skillicons/Hitpoints.webp"
            className={stl.inputIcon}
            alt="Hitpoints skill"
          />
          <span className={stl.amountToGo}>2</span>
        </div>
        <div className={stl.togoSkill}>
          <img
            src="./skillicons/Ranged.webp"
            className={stl.inputIcon}
            alt="Ranged skill"
          />
          <span className={stl.amountToGo}>2</span>
        </div>
        <div className={stl.togoSkill}>
          <img
            src="./skillicons/Magic.webp"
            className={stl.inputIcon}
            alt="Magic skill"
          />
          <span className={stl.amountToGo}>2</span>
        </div>
        <div className={stl.togoSkill}>
          <img
            src="./skillicons/Prayer.webp"
            className={stl.inputIcon}
            alt="Prayer skill"
          />
          <span className={stl.amountToGo}>2</span>
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
