import stl from "./PremiumBuilds.module.css";
import PremiumBanner from "../PremiumBanner/PremiumBanner";
import { useState } from "react";

const PremiumBuilds = ({ premiumUser }) => {
  const [activeBtn, setActiveBtn] = useState("All");

  const switchButton = (newBtn) => {
    setActiveBtn(newBtn);
  };

  return (
    <div className={stl.premiumBox}>
      <h3 className={stl.subHero}>Premium</h3>
      {!premiumUser && <PremiumBanner />}
      <div className={stl.filterBar}>
        <button
          className={`${stl.btn} ${activeBtn === "All" ? stl.active : ""}`}
          onClick={() => switchButton("All")}
        >
          All
        </button>
        <button
          className={`${stl.btn} ${activeBtn === "PVM" ? stl.active : ""}`}
          onClick={() => switchButton("PVM")}
        >
          PVM
        </button>
        <button
          className={`${stl.btn} ${activeBtn === "PVP" ? stl.active : ""}`}
          onClick={() => switchButton("PVP")}
        >
          PVP
        </button>
        <button
          className={`${stl.btn} ${activeBtn === "Skilling" ? stl.active : ""}`}
          onClick={() => switchButton("Skilling")}
        >
          Skilling
        </button>

        <button
          className={`${stl.btn} ${activeBtn === "Wildy" ? stl.active : ""}`}
          onClick={() => switchButton("Wildy")}
        >
          Wildy
        </button>
        <button
          className={`${stl.btn} ${activeBtn === "Budget" ? stl.active : ""}`}
          onClick={() => switchButton("Budget")}
        >
          Budget
        </button>
      </div>
      <div className={stl.premiumWrapper}></div>
    </div>
  );
};

export default PremiumBuilds;
