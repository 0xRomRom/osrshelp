import stl from "./GearCalculator.module.css";
import head from "../../../assets/gearslots/Head.png";
import cape from "../../../assets/gearslots/Cape.png";
import necklace from "../../../assets/gearslots/Neck.png";
import amunition from "../../../assets/gearslots/Amunition.png";
import weapon from "../../../assets/gearslots/Weapon.png";
import body from "../../../assets/gearslots/Body.png";
import shield from "../../../assets/gearslots/Shield.png";
import legs from "../../../assets/gearslots/Legs.png";
import gloves from "../../../assets/gearslots/Gloves.png";
import boots from "../../../assets/gearslots/Boots.png";
import ring from "../../../assets/gearslots/Ring.png";

import { useState } from "react";

const GearCalculator = () => {
  const [activeSlot, setActiveSlot] = useState(null);

  const handleSlotChange = (slot) => {
    setActiveSlot(slot);
  };

  return (
    <div className={stl.gearcalculator}>
      <div className={stl.gearGrid}>
        <div className={`${stl.row} ${stl.rowA}`}>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "head" ? stl.selected : ""
            }`}
            onClick={() => handleSlotChange("head")}
          >
            <img src={head} className={stl.headSlot} alt="Head gear slot" />
          </div>
        </div>
        <div className={`${stl.row} ${stl.rowB}`}>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "cape" ? stl.selected : ""
            }`}
          >
            <img src={cape} className={stl.headSlot} alt="Cape slot" />
          </div>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "necklace" ? stl.selected : ""
            }`}
          >
            <img src={necklace} className={stl.headSlot} alt="Necklace  slot" />
          </div>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "amunition" ? stl.selected : ""
            }`}
          >
            <img
              src={amunition}
              className={stl.headSlot}
              alt="Amunition slot"
            />
          </div>
        </div>
        <div className={`${stl.row} ${stl.rowC}`}>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "weapon" ? stl.selected : ""
            }`}
          >
            <img src={weapon} className={stl.headSlot} alt="Weapon slot" />
          </div>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "body" ? stl.selected : ""
            }`}
          >
            <img src={body} className={stl.headSlot} alt="Body slot" />
          </div>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "shield" ? stl.selected : ""
            }`}
          >
            <img src={shield} className={stl.headSlot} alt="Shield slot" />
          </div>
        </div>
        <div className={`${stl.row} ${stl.rowD}`}>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "legs" ? stl.selected : ""
            }`}
          >
            <img src={legs} className={stl.headSlot} alt="Legs slot" />
          </div>
        </div>
        <div className={`${stl.row} ${stl.rowE}`}>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "gloves" ? stl.selected : ""
            }`}
          >
            <img src={gloves} className={stl.headSlot} alt="Gloves slot" />
          </div>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "boots" ? stl.selected : ""
            }`}
          >
            <img src={boots} className={stl.headSlot} alt="Boots slot" />
          </div>
          <div
            className={`${stl.slotWrap} ${
              activeSlot === "ring" ? stl.selected : ""
            }`}
          >
            <img src={ring} className={stl.headSlot} alt="Ring slot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GearCalculator;
