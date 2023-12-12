import stl from "./GearCalculator.module.css";

import GearGrid from "./geargrid/GearGrid";
import ConfigBar from "./configbar/ConfigBar";
import ResultBox from "./resultbox/ResultBox";
import CtaBar from "./ctabar/CtaBar";

import { useState } from "react";

const GearCalculator = () => {
  const [activeSlot, setActiveSlot] = useState(null);
  const [gridActive, setGridActive] = useState(false);
  const [gearFilter, setGearFilter] = useState("All");
  const [bonusState, setBonusState] = useState({
    Headpiece: {},
    Cape: {},
    Necklace: {},
    Amunition: {},
    Weapon: {},
    Body: {},
    Shield: {},
    Legs: {},
    Gloves: {},
    Boots: {},
    Ring: {},
  });

  return (
    <div className={stl.gearcalculator}>
      <CtaBar />
      <div className={stl.midBlock}>
        <GearGrid
          activeSlot={activeSlot}
          setActiveSlot={setActiveSlot}
          bonusState={bonusState}
          setBonusState={setBonusState}
          setGridActive={setGridActive}
          setGearFilter={setGearFilter}
        />
        <ConfigBar
          activeSlot={activeSlot}
          setBonusState={setBonusState}
          gridActive={gridActive}
          setGearFilter={setGearFilter}
          gearFilter={gearFilter}
        />
        <ResultBox bonusState={bonusState} />
      </div>
    </div>
  );
};

export default GearCalculator;
