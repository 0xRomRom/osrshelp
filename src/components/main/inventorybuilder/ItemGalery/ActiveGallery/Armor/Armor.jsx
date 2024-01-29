import { useState } from "react";
import stl from "./Armor.module.css";

import Head from "../../../../../../assets/gearslots/Head.png";
import Cape from "../../../../../../assets/gearslots/Cape.png";
import Necklace from "../../../../../../assets/gearslots/Neck.png";
import Amunition from "../../../../../../assets/gearslots/Amunition.png";
import Weapon from "../../../../../../assets/gearslots/Weapon.png";
import Body from "../../../../../../assets/gearslots/Body.png";
import Shield from "../../../../../../assets/gearslots/Shield.png";
import Legs from "../../../../../../assets/gearslots/Legs.png";
import Gloves from "../../../../../../assets/gearslots/Gloves.png";
import Boots from "../../../../../../assets/gearslots/Boots.png";
import Ring from "../../../../../../assets/gearslots/Ring.png";

const Armor = () => {
  const [slotState, setSlotState] = useState("Head");

  const gearSlotIcons = {
    Head,
    Cape,
    Necklace,
    Amunition,
    Weapon,
    Shield,
    Body,
    Legs,
    Boots,
    Gloves,
    Ring,
  };

  return (
    <div className={stl.armor}>
      <div className={stl.itemGrid}></div>
      <div className={stl.selectBar}>
        {Object.keys(gearSlotIcons).map((slot) => (
          <button
            key={slot}
            className={`${stl.gearCta} ${
              slotState === slot ? stl.activeCta : ""
            }`}
            onClick={() => setSlotState(slot)}
          >
            <img
              src={gearSlotIcons[slot]}
              alt={`${slot} slot`}
              className={stl.gearIcon}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Armor;
