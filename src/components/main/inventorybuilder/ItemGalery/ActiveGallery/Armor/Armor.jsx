import { useEffect, useState } from "react";
import stl from "./Armor.module.css";
import ARMORITEMS from "../../../../../../utils/inventorybuilder/armoritems";

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

const combatStyles = [
  { style: "Melee", icon: "./skillicons/Attack.webp" },
  { style: "Magic", icon: "./skillicons/Magic.webp" },
  { style: "Ranged", icon: "./skillicons/Ranged.webp" },
];

const Armor = ({
  amountToAdd,
  setCurrentGrid,
  currentGrid,
  setAmountToAdd,
  notedState,
  notedAmount,
  setNotedAmount,
  setNotedState,
  slotState,
  setSlotState,
  activeGallery,
  runesAmount,
  setRunesAmount,
}) => {
  const [activeStyle, setActiveStyle] = useState("Melee");
  const [currentCombatStyles, setCurrentCombatStyles] = useState(combatStyles);

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

  const addToInventory = (imgSrc) => {
    if (notedState) {
      addNotedItems(imgSrc);
      return;
    }

    let updatedGrid = [...currentGrid];

    if (slotState === "Amunition" && activeGallery === "Armor") {
      if (!runesAmount) return;
      for (let j = 0; j < 28; j++) {
        const gridValue = updatedGrid[j][j];

        if (j >= 28) {
          setCurrentGrid(updatedGrid);
          return;
        }
        if (gridValue === imgSrc) {
          updatedGrid[j].amount += +runesAmount;
          setCurrentGrid(updatedGrid);
          setNotedState(false);
          setNotedAmount(null);
          setRunesAmount(null);
          return;
        }
      }
      for (let j = 0; j < 28; j++) {
        const gridValue = updatedGrid[j][j];
        if (updatedGrid[j][j] !== imgSrc) {
          if (gridValue.length !== 0) {
            continue;
          }
          updatedGrid[j].amount += +runesAmount;
          updatedGrid[j][j] = imgSrc;
          setCurrentGrid(updatedGrid);
          setNotedState(false);
          setNotedAmount(null);
          setRunesAmount(null);
          return;
        }
      }
    }

    for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
      const gridValue = updatedGrid[i][i];

      if (gridValue.length === 0) {
        const cacheIndex = i;

        if (amountToAdd === "Fill") {
          for (let j = cacheIndex; j < 28; j++) {
            if (updatedGrid[j][j] !== "") {
              continue;
            }
            updatedGrid[j][j] = imgSrc;
          }
          setNotedState(false);
          setNotedAmount(null);
          setCurrentGrid(updatedGrid);
          break;
        }

        let added = 0;
        for (let j = cacheIndex; j < 28; j++) {
          if (j >= 28) {
            setNotedState(false);
            setNotedAmount(null);
            setCurrentGrid(updatedGrid);
            break;
          }
          if (updatedGrid[j][j] !== "") {
            continue;
          }
          if (added >= +amountToAdd) {
            setNotedState(false);
            setNotedAmount(null);
            setCurrentGrid(updatedGrid);
            break;
          }
          added++;
          updatedGrid[j][j] = imgSrc;
        }
        setNotedState(false);
        setNotedAmount(null);
        setCurrentGrid(updatedGrid);
        break;
      }
    }
    setNotedState(false);
    setNotedAmount(null);
    setAmountToAdd("1");
  };

  const addNotedItems = (imgSrc) => {
    console.log(notedAmount);
    if (!notedAmount) {
      return;
    }
    let updatedGrid = [...currentGrid];
    console.log(updatedGrid);

    // Check for existing item to increment rather than duplicate
    for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
      const gridValue = updatedGrid[i][i];
      if (gridValue === imgSrc && updatedGrid[i].noted) {
        updatedGrid[i].amount += +notedAmount;

        setCurrentGrid(updatedGrid);
        setNotedAmount(null);
        setNotedState(false);

        return;
      }
    }

    // If no existing item, create new item
    for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
      const gridValue = updatedGrid[i][i];

      if (gridValue.length === 0) {
        const cacheIndex = i;

        updatedGrid[cacheIndex][cacheIndex] = imgSrc;
        updatedGrid[cacheIndex].noted = true;
        updatedGrid[cacheIndex].amount += +notedAmount;

        setCurrentGrid(updatedGrid);
        setNotedAmount(null);
        setNotedState(false);
        break;
      }
    }
  };

  useEffect(() => {
    if (slotState === "Amunition" && activeGallery === "Armor") {
      const newArray = [];
      newArray.push(combatStyles[2]);
      setCurrentCombatStyles(newArray);
      setActiveStyle("Ranged");
    } else {
      const baseStyles = [...combatStyles];
      setCurrentCombatStyles(baseStyles);
      setActiveStyle("Melee");
    }
  }, [slotState, activeGallery]);

  return (
    <div className={stl.armor}>
      <div className={stl.itemGrid}>
        <div className={stl.combatStyle}>
          {currentCombatStyles.map(({ style, icon }) => (
            <button
              key={style}
              className={`${stl.combatCta} ${
                activeStyle === style ? stl.activeCombat : ""
              } ${
                slotState === "Amunition" && activeGallery === "Armor"
                  ? stl.maxWidth
                  : stl.baseWidth
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
              <div
                key={item.name}
                className={stl.gridItem}
                onClick={() => addToInventory(item.src)}
              >
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
