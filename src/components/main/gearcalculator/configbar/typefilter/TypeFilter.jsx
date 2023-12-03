import stl from "./TypeFilter.module.css";
import magic from "../../../../../assets/skillicons/Magic.webp";
import ranged from "../../../../../assets/skillicons/Ranged.webp";
import attack from "../../../../../assets/skillicons/Attack.webp";
import { useState } from "react";

const TypeFilter = ({ gearFilter, setGearFilter }) => {
  const [activeBtn, setActiveBtn] = useState("All");
  const toggleActiveButton = (selected) => {
    // setGearFilter(selected);
    setActiveBtn(selected);
  };

  return (
    <div className={stl.typefilter}>
      <button
        onClick={() => toggleActiveButton("All")}
        className={`${stl.cta} ${activeBtn === "All" ? stl.active : ""}`}
      >
        All
      </button>
      <button
        onClick={() => toggleActiveButton("Melee")}
        className={`${stl.cta} ${activeBtn === "Melee" ? stl.active : ""}`}
      >
        <img
          src={attack}
          className={stl.skillIcon}
          alt="Oldschool Runescape Attack Skill Icon"
        />
      </button>
      <button
        onClick={() => toggleActiveButton("Magic")}
        className={`${stl.cta} ${activeBtn === "Magic" ? stl.active : ""}`}
      >
        <img
          src={magic}
          className={stl.skillIcon}
          alt="Oldschool Runescape Magic Skill Icon"
        />
      </button>

      <button
        onClick={() => toggleActiveButton("Ranged")}
        className={`${stl.cta} ${activeBtn === "Ranged" ? stl.active : ""}`}
      >
        <img
          src={ranged}
          className={stl.skillIcon}
          alt="Oldschool Runescape Ranged Skill Icon"
        />
      </button>
    </div>
  );
};

export default TypeFilter;
