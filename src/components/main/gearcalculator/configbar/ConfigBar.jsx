import stl from "./ConfigBar.module.css";
import { useRef, useEffect, useState, useCallback } from "react";
import HELMS from "../../../../utils/gearcalculator/helms";
import TypeFilter from "./typefilter/TypeFilter";

const ConfigBar = ({ activeSlot }) => {
  const searchRef = useRef(null);
  const [itemList, setItemList] = useState([]);
  const [gearFilter, setGearFilter] = useState("all");

  const setActiveItemList = useCallback(() => {
    if (activeSlot === "Headpiece") {
      setItemList(HELMS);
    } else {
      setItemList([]);
    }
  }, [activeSlot]);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
    setActiveItemList();
  }, [activeSlot, setActiveItemList]);

  return (
    <div className={stl.configbar}>
      {activeSlot && (
        <>
          <input
            ref={searchRef}
            type="search"
            className={stl.searchbar}
            placeholder={`Search ${activeSlot}`}
          />
          <TypeFilter gearFilter={gearFilter} setGearFilter={setGearFilter} />
          <ul className={stl.resultList}>
            {itemList.map((item) => {
              return (
                <li key={item.src} className={stl.resultItem}>
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
