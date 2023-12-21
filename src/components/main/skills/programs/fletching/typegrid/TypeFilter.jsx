import stl from "./TypeFilter.module.css";

const TypeFilter = ({ setActiveFilter, activeFilter }) => {
  const handleTypeSwitch = (filter) => {
    setActiveFilter(filter);
  };

  // Toggle styling classes
  const getTypeClassName = (type) => {
    return activeFilter === type ? stl.activeFilter : "";
  };

  return (
    <div className={stl.modal}>
      <div className={stl.innerWrap}>
        <div className={stl.innerRow1}>
          <div
            className={`${stl.spellChoice} ${getTypeClassName("All")}`}
            onClick={() => handleTypeSwitch("All")}
          >
            <span>All</span>
          </div>
          <div
            className={`${stl.spellChoice} ${getTypeClassName("Arrows")}`}
            onClick={() => handleTypeSwitch("Arrows")}
          >
            <img
              src="/fletching/Dragon_arrow_5.webp"
              alt="Arrows"
              className={stl.bookIcon}
            />
            <span>Arrows</span>
          </div>
          <div
            className={`${stl.spellChoice} ${getTypeClassName("Javelins")}`}
            onClick={() => handleTypeSwitch("Javelins")}
          >
            <img
              src="/fletching/Dragon_javelin.webp"
              alt="Javelins"
              className={stl.bookIcon}
            />
            <span>Javelins</span>
          </div>
          <div
            className={`${stl.spellChoice} ${getTypeClassName("Darts")}`}
            onClick={() => handleTypeSwitch("Darts")}
          >
            <img
              src="/fletching/Dragon_dart.webp"
              alt="Darts"
              className={stl.bookIcon}
            />
            <span>Darts</span>
          </div>
          <div
            className={`${stl.spellChoice} ${getTypeClassName("Bolts")}`}
            onClick={() => handleTypeSwitch("Bolts")}
          >
            <img
              src="/fletching/Diamond_bolts_(e)_5.webp"
              alt="Bolts"
              className={stl.bookIcon}
            />
            <span>Bolts</span>
          </div>
        </div>
        <div className={stl.innerRow2}>
          <div
            className={`${stl.spellChoice} ${getTypeClassName("Crossbows")}`}
            onClick={() => handleTypeSwitch("Crossbows")}
          >
            <img
              src="/fletching/Dragon_crossbow.webp"
              alt="Crossbows"
              className={stl.bookIcon}
            />
            <span>Cbows</span>
          </div>
          <div
            className={`${stl.spellChoice} ${getTypeClassName("Shields")}`}
            onClick={() => handleTypeSwitch("Shields")}
          >
            <img
              src="/fletching/Redwood_shield.webp"
              alt="Shields"
              className={stl.bookIcon}
            />
            <span>Shields</span>
          </div>
          <div
            className={`${stl.spellChoice} ${getTypeClassName("Strung")}`}
            onClick={() => handleTypeSwitch("Strung")}
          >
            <img
              src="/fletching/Magic_shortbow.webp"
              alt="Strung"
              className={stl.bookIcon}
            />
            <span>Strung</span>
          </div>
          <div
            className={`${stl.spellChoice} ${getTypeClassName("Stringless")}`}
            onClick={() => handleTypeSwitch("Stringless")}
          >
            <img
              src="/fletching/Magic_shortbow_(u).webp"
              alt="Unstrung"
              className={stl.bookIcon}
            />
            <span>Unstrung</span>
          </div>
          <div
            className={`${stl.spellChoice} ${getTypeClassName("Misc")}`}
            onClick={() => handleTypeSwitch("Misc")}
          >
            <img
              src="/fletching/Toxic_blowpipe.webp"
              alt="Misc"
              className={stl.bookIcon}
            />
            <span>Misc</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeFilter;
