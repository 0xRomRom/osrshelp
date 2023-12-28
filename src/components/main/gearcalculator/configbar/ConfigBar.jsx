import stl from "./ConfigBar.module.css";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
import HELMS from "../../../../utils/gearcalculator/helms";
import CAPES from "../../../../utils/gearcalculator/capes";
import NECKLACE from "../../../../utils/gearcalculator/necklace";
import AMUNITION from "../../../../utils/gearcalculator/amunition";
import WEAPONS from "../../../../utils/gearcalculator/weapons";
import BODIES from "../../../../utils/gearcalculator/bodies";
import SHIELDS from "../../../../utils/gearcalculator/shields";
import LEGS from "../../../../utils/gearcalculator/legs";
import GLOVES from "../../../../utils/gearcalculator/gloves";
import BOOTS from "../../../../utils/gearcalculator/boots";
import RINGS from "../../../../utils/gearcalculator/rings";
import TypeFilter from "./typefilter/TypeFilter";

import defenceIcon from "../../../../assets/skillicons/Defence.webp";
import strengthicon from "../../../../assets/skillicons/Strength.png";
import magicIcon from "../../../../assets/skillicons/Magic.webp";
import rangedIcon from "../../../../assets/skillicons/Ranged.webp";
import prayerIcon from "../../../../assets/skillicons/Prayer.webp";
import attackIcon from "../../../../assets/skillicons/Attack.webp";
import hitpointsIcon from "../../../../assets/skillicons/Hitpoints.webp";

const ConfigBar = ({
  activeSlot,
  setBonusState,
  gridActive,
  setGearFilter,
  gearFilter,
  setActiveSlot,
  setGridActive,
}) => {
  const searchRef = useRef(null);
  const [itemList, setItemList] = useState([]);
  const [listCopy, setListCopy] = useState([]);

  const [activeNames, setActiveNames] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const hideConfig = () => {
    setActiveSlot(null);
    setGridActive(false);
  };

  const slotMappings = useMemo(
    () => ({
      Headpiece: HELMS,
      Cape: CAPES,
      Necklace: NECKLACE,
      Amunition: AMUNITION,
      Weapon: WEAPONS,
      Body: BODIES,
      Shield: SHIELDS,
      Legs: LEGS,
      Gloves: GLOVES,
      Boots: BOOTS,
      Ring: RINGS,
    }),
    []
  );

  // State to add styling to the selected equipment
  const addSelectedGear = (slot, name, item) => {
    setActiveNames((prevState) => {
      return {
        ...prevState,
        [slot]: name,
      };
    });

    setBonusState((prevState) => {
      return {
        ...prevState,
        [slot]: item,
      };
    });
  };

  const setActiveItemList = useCallback(() => {
    clearSeachInput();
    const selectedItems = slotMappings[activeSlot] || [];

    setItemList(selectedItems);
    setListCopy(selectedItems);
  }, [activeSlot, slotMappings]);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }

    setActiveItemList();
  }, [activeSlot, setActiveItemList]);

  useEffect(() => {
    if (gearFilter === "All") {
      setListCopy(itemList);
      return;
    }
    if (searchRef.current) {
      searchRef.current.focus();
    }
    const filteredList = itemList.filter((item) => item.type === gearFilter);
    setListCopy(filteredList);
  }, [gearFilter, itemList]);

  const searchFilter = useCallback(() => {
    const filteredValues = itemList.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setListCopy(filteredValues);
  }, [itemList, searchValue]);

  useEffect(() => {
    searchFilter();
  }, [searchFilter]);

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const clearSeachInput = () => {
    setSearchValue("");
  };

  return (
    <div className={stl.configbar}>
      {gridActive && (
        <div className={stl.activeWrapper}>
          <TypeFilter gearFilter={gearFilter} setGearFilter={setGearFilter} />
          <input
            ref={searchRef}
            type="search"
            className={stl.searchbar}
            placeholder={activeSlot ? `Search ${activeSlot}` : "Select gear"}
            onChange={handleSearch}
            value={searchValue}
          />
          <ul className={stl.resultList}>
            {listCopy.map((item) => {
              return (
                <li
                  key={item.src}
                  className={`${stl.resultItem} ${
                    item.name === activeNames[item.slot] ? stl.selected : ""
                  }`}
                  onClick={() => addSelectedGear(item.slot, item.name, item)}
                >
                  <div className={stl.microCol}>
                    {item.rangedLvl > 1 && (
                      <span className={stl.microSpan}>
                        <img
                          src={rangedIcon}
                          alt="Ranged Skill Icon"
                          className={stl.microIcon}
                        />
                        {item.rangedLvl}
                      </span>
                    )}
                    {item.strengthLvl > 1 && (
                      <span className={stl.microSpan}>
                        <img
                          src={strengthicon}
                          alt="Strength Skill Icon"
                          className={stl.microIcon}
                        />
                        {item.strengthLvl}
                      </span>
                    )}
                    {item.prayerLvl > 1 && (
                      <span className={stl.microSpan}>
                        <img
                          src={prayerIcon}
                          alt="Prayer Skill Icon"
                          className={stl.microIcon}
                        />
                        {item.prayerLvl}
                      </span>
                    )}
                    {item.magicLvl > 1 && (
                      <span className={stl.microSpan}>
                        <img
                          src={magicIcon}
                          alt="Magic Skill Icon"
                          className={stl.microIcon}
                        />
                        {item.magicLvl}
                      </span>
                    )}
                    {item.defLvl > 1 && (
                      <span className={stl.microSpan}>
                        <img
                          src={defenceIcon}
                          alt="Defence Skill Icon"
                          className={stl.microIcon}
                        />
                        {item.defLvl}
                      </span>
                    )}
                    {item.hitpointsLvl > 1 && (
                      <span className={stl.microSpan}>
                        <img
                          src={hitpointsIcon}
                          alt="Hitpoints Skill Icon"
                          className={stl.microIcon}
                        />
                        {item.hitpointsLvl}
                      </span>
                    )}
                    {item.attackLvl > 1 && (
                      <span className={stl.microSpan}>
                        <img
                          src={attackIcon}
                          alt="Attack Skill Icon"
                          className={stl.microIcon}
                        />
                        {item.attackLvl}
                      </span>
                    )}
                  </div>
                  <div className={stl.itemWrap}>
                    <div className={stl.imgWrap}>
                      <img
                        src={item.src}
                        alt="Gear item"
                        className={stl.gearIcon}
                      />
                    </div>
                    <span>{item.name}</span>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className={stl.hideBox} onClick={hideConfig}>
            Hide
          </div>
        </div>
      )}
      {!gridActive && <></>}
    </div>
  );
};

export default ConfigBar;
