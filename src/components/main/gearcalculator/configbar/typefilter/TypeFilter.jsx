import stl from "./TypeFilter.module.css";
import magic from "../../../../../assets/skillicons/Magic.webp";
import ranged from "../../../../../assets/skillicons/Ranged.webp";
import attack from "../../../../../assets/skillicons/Attack.webp";

const TypeFilter = ({ gearFilter, setGearFilter }) => {
  const toggleActiveButton = (selected) => {
    setGearFilter(selected);
  };

  return (
    <div className={stl.typefilter}>
      <button
        onClick={() => toggleActiveButton("All")}
        className={`${stl.cta} ${gearFilter === "All" ? stl.active : ""}`}
      >
        All
      </button>
      <button
        onClick={() => toggleActiveButton("Melee")}
        className={`${stl.cta} ${gearFilter === "Melee" ? stl.active : ""}`}
      >
        <img
          src={attack}
          className={stl.skillIcon}
          alt="Oldschool Runescape Attack Skill Icon"
        />
      </button>

      <button
        onClick={() => toggleActiveButton("Ranged")}
        className={`${stl.cta} ${gearFilter === "Ranged" ? stl.active : ""}`}
      >
        <img
          src={ranged}
          className={stl.skillIcon}
          alt="Oldschool Runescape Ranged Skill Icon"
        />
      </button>

      <button
        onClick={() => toggleActiveButton("Magic")}
        className={`${stl.cta} ${gearFilter === "Magic" ? stl.active : ""}`}
      >
        <img
          src={magic}
          className={stl.skillIcon}
          alt="Oldschool Runescape Magic Skill Icon"
        />
      </button>
    </div>
  );
};

export default TypeFilter;
