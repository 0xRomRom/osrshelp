import { useEffect } from "react";
import { useState } from "react";
import stl from "./ResultBox.module.css";

const ResultBox = () => {
  return (
    <div className={stl.resultbox}>
      <span className={stl.currentLvls}>Next level</span>
      <div className={stl.togoRow}>
        <div className={stl.togoSkill}></div>
      </div>
    </div>
  );
};

export default ResultBox;
