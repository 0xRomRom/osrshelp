import { useEffect, useState } from "react";
import stl from "./Armor.module.css";
import ARMORITEMS from "../../../../../../utils/inventorybuilder/armoritems";
import SHIELDS from "../../../../../../utils/gearcalculator/shields";

import Helm from "../../../../../../assets/gearslots/Head.png";
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
  const [slotState, setSlotState] = useState("Helm");
  const [activeStyle, setActiveStyle] = useState("Melee");

  const gearSlotIcons = {
    Helm,
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

  const combatStyles = [
    { style: "Melee", icon: "./skillicons/Attack.webp" },
    { style: "Magic", icon: "./skillicons/Magic.webp" },
    { style: "Ranged", icon: "./skillicons/Ranged.webp" },
  ];

  useEffect(() => {
    const newArr = SHIELDS.map((item) => {
      const formattedSearch =
        item.name.charAt(0).toUpperCase() + item.name.slice(1);

      const encoded = formattedSearch
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/'/g, "%27")
        .replaceAll(" ", "_");

      const imgSrc = `https://oldschool.runescape.wiki/images/${encoded}.png`;

      return {
        type: item.type,
        name: item.name,
        slot: "Shield",
        src: imgSrc,
      };
    });

    console.log(newArr);
  }, [SHIELDS]);

  return (
    <div className={stl.armor}>
      <div className={stl.itemGrid}>
        <div className={stl.combatStyle}>
          {combatStyles.map(({ style, icon }) => (
            <button
              key={style}
              className={`${stl.combatCta} ${
                activeStyle === style ? stl.activeCombat : ""
              }`}
              onClick={() => setActiveStyle(style)}
            >
              <img
                src={icon}
                alt={`${style} style`}
                className={stl.slotMiniIcon}
              />
            </button>
          ))}
        </div>
        <div className={stl.iconGrid}>
          {ARMORITEMS.filter((slot) => slot.type === activeStyle)
            .filter((slot) => slot.slot === slotState)
            .map((item) => (
              <div key={item.name} className={stl.gridItem}>
                <img src={item.src} alt={item.name} className={stl.gridIcon} />
                <span className={stl.gridItemTitle}>{item.name}</span>
              </div>
            ))}
        </div>
      </div>
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
