import stl from "./GearCalculator.module.css";

import GearGrid from "./geargrid/GearGrid";
import ConfigBar from "./configbar/ConfigBar";

import { useState, useEffect } from "react";

const GearCalculator = () => {
  const [activeSlot, setActiveSlot] = useState(null);
  const [overlayImages, setOverlayImages] = useState({
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

  useEffect(() => {
    console.log(overlayImages);
  }, [overlayImages]);

  return (
    <div className={stl.gearcalculator}>
      <GearGrid activeSlot={activeSlot} setActiveSlot={setActiveSlot} />
      <ConfigBar activeSlot={activeSlot} setOverlayImages={setOverlayImages} />
    </div>
  );
};

export default GearCalculator;
