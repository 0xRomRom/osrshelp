import stl from "./GearCalculator.module.css";

import GearGrid from "./geargrid/GearGrid";
import ConfigBar from "./configbar/ConfigBar";

import { useState } from "react";

const GearCalculator = () => {
  const [activeSlot, setActiveSlot] = useState(null);

  return (
    <div className={stl.gearcalculator}>
      <GearGrid activeSlot={activeSlot} setActiveSlot={setActiveSlot} />
      <ConfigBar activeSlot={activeSlot} />
    </div>
  );
};

export default GearCalculator;
