import stl from "./ConfigBar.module.css";
import { useRef, useEffect, useState, useCallback } from "react";
import HELMS from "../../../../utils/gearcalculator/helms";
import CAPES from "../../../../utils/gearcalculator/capes";
import NECKLACE from "../../../../utils/gearcalculator/necklace";
import AMUNITION from "../../../../utils/gearcalculator/amunition";
import WEAPONS from "../../../../utils/gearcalculator/weapons";
import BODIES from "../../../../utils/gearcalculator/bodies";
import SHIELDS from "../../../../utils/gearcalculator/shields";
import TypeFilter from "./typefilter/TypeFilter";

import defenceIcon from "../../../../assets/skillicons/Defence.webp";
import strengthicon from "../../../../assets/skillicons/Strength.png";
import magicIcon from "../../../../assets/skillicons/Magic.webp";
import rangedIcon from "../../../../assets/skillicons/Ranged.webp";
import prayerIcon from "../../../../assets/skillicons/Prayer.webp";
import attackIcon from "../../../../assets/skillicons/Attack.webp";
import hitpointsIcon from "../../../../assets/skillicons/Hitpoints.webp";

const ConfigBar = ({ activeSlot, setBonusState }) => {
  const searchRef = useRef(null);
  const [itemList, setItemList] = useState([]);
  const [listCopy, setListCopy] = useState([]);
  const [gearFilter, setGearFilter] = useState("All");
  const [activeNames, setActiveNames] = useState({});
  const [searchValue, setSearchValue] = useState("");

  const setActiveItemList = useCallback(() => {
    clearSeachInput();
    if (activeSlot === "Headpiece") {
      setItemList(HELMS);
      setListCopy(HELMS);
    }
    if (activeSlot === "Cape") {
      setItemList(CAPES);
      setListCopy(CAPES);
    }
    if (activeSlot === "Necklace") {
      setItemList(NECKLACE);
      setListCopy(NECKLACE);
    }
    if (activeSlot === "Amunition") {
      setItemList(AMUNITION);
      setListCopy(AMUNITION);
    }
    if (activeSlot === "Weapon") {
      setItemList(WEAPONS);
      setListCopy(WEAPONS);
    }
    if (activeSlot === "Body") {
      setItemList(BODIES);
      setListCopy(BODIES);
    }
    if (activeSlot === "Shield") {
      setItemList(SHIELDS);
      setListCopy(SHIELDS);
    }
    if (!activeSlot) {
      setItemList([]);
    }
  }, [activeSlot]);

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
      {activeSlot && (
        <>
          <TypeFilter gearFilter={gearFilter} setGearFilter={setGearFilter} />
          <input
            ref={searchRef}
            type="search"
            className={stl.searchbar}
            placeholder={`Search ${activeSlot}`}
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
                    {item.rangedLvl > 0 && (
                      <span className={stl.microSpan}>
                        <img
                          src={rangedIcon}
                          alt="Ranged Skill Icon"
                          className={stl.microIcon}
                        />
                        {item.rangedLvl}
                      </span>
                    )}
                    {item.strengthLvl > 0 && (
                      <span className={stl.microSpan}>
                        <img
                          src={strengthicon}
                          alt="Strength Skill Icon"
                          className={stl.microIcon}
                        />
                        {item.strengthLvl}
                      </span>
                    )}
                    {item.prayerLvl > 0 && (
                      <span className={stl.microSpan}>
                        <img
                          src={prayerIcon}
                          alt="Prayer Skill Icon"
                          className={stl.microIcon}
                        />
                        {item.prayerLvl}
                      </span>
                    )}
                    {item.magicLvl > 0 && (
                      <span className={stl.microSpan}>
                        <img
                          src={magicIcon}
                          alt="Magic Skill Icon"
                          className={stl.microIcon}
                        />
                        {item.magicLvl}
                      </span>
                    )}
                    {item.defLvl > 0 && (
                      <span className={stl.microSpan}>
                        <img
                          src={defenceIcon}
                          alt="Defence Skill Icon"
                          className={stl.microIcon}
                        />
                        {item.defLvl}
                      </span>
                    )}
                    {item.hitpointsLvl > 0 && (
                      <span className={stl.microSpan}>
                        <img
                          src={hitpointsIcon}
                          alt="Hitpoints Skill Icon"
                          className={stl.microIcon}
                        />
                        {item.hitpointsLvl}
                      </span>
                    )}
                    {item.attackLvl > 0 && (
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
                  <img
                    src={item.src}
                    alt="Gear item"
                    className={stl.gearIcon}
                  />
                  <span>{item.name}</span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
};

export default ConfigBar;
