import stl from "./TypeFilter.module.css";

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
          src="/skillicons/Attack.webp"
          className={stl.skillIcon}
          alt="Oldschool Runescape Attack Skill Icon"
        />
      </button>

      <button
        onClick={() => toggleActiveButton("Ranged")}
        className={`${stl.cta} ${gearFilter === "Ranged" ? stl.active : ""}`}
      >
        <img
          src="/skillicons/Ranged.webp"
          className={stl.skillIcon}
          alt="Oldschool Runescape Ranged Skill Icon"
        />
      </button>

      <button
        onClick={() => toggleActiveButton("Magic")}
        className={`${stl.cta} ${gearFilter === "Magic" ? stl.active : ""}`}
      >
        <img
          src="/skillicons/Magic.webp"
          className={stl.skillIcon}
          alt="Oldschool Runescape Magic Skill Icon"
        />
      </button>
    </div>
  );
};

export default TypeFilter;
