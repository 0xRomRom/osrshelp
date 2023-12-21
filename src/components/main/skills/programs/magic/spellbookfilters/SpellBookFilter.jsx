import stl from "./SpellBookFilter.module.css";

const SpellBookFilter = ({ setActiveSpellbook, activeSpellbook }) => {
  const handleSpellbookChange = (spellbook) => {
    setActiveSpellbook(spellbook);
  };

  // Toggle styling classes
  const getSpellbookClassName = (spellbook) => {
    return activeSpellbook === spellbook ? stl.activeSpellbook : "";
  };

  return (
    <div className={stl.modal}>
      <div className={stl.innerWrap}>
        <div
          className={`${stl.spellChoice} ${getSpellbookClassName("All")}`}
          onClick={() => handleSpellbookChange("All")}
        >
          <span>All</span>
        </div>
        <div
          className={`${stl.spellChoice} ${getSpellbookClassName("Standard")}`}
          onClick={() => handleSpellbookChange("Standard")}
        >
          <img
            src="/spellbooks/Standard_spellbook.webp"
            alt="Standard spellbook"
            className={stl.bookIcon}
          />
          <span>Standard</span>
        </div>
        <div
          className={`${stl.spellChoice} ${getSpellbookClassName("Ancient")}`}
          onClick={() => handleSpellbookChange("Ancient")}
        >
          <img
            src="/spellbooks/Ancient_spellbook.webp"
            alt="Ancient spellbook"
            className={stl.bookIcon}
          />
          <span>Ancient</span>
        </div>
        <div
          className={`${stl.spellChoice} ${getSpellbookClassName("Lunar")}`}
          onClick={() => handleSpellbookChange("Lunar")}
        >
          <img
            src="/spellbooks/Lunar_spellbook.webp"
            alt="Lunar spellbook"
            className={stl.bookIcon}
          />
          <span>Lunar</span>
        </div>
        <div
          className={`${stl.spellChoice} ${getSpellbookClassName("Arceuus")}`}
          onClick={() => handleSpellbookChange("Arceuus")}
        >
          <img
            src="/spellbooks/Arceuus_spellbook.png"
            alt="Arceuus spellbook"
            className={stl.bookIcon}
          />
          <span>Arceuus</span>
        </div>
      </div>
    </div>
  );
};

export default SpellBookFilter;
