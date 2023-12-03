import stl from "./ConfigBar.module.css";
import { useRef, useEffect, useState, useCallback } from "react";
import HELMS from "../../../../utils/gearcalculator/helms";
import TypeFilter from "./typefilter/TypeFilter";

const ConfigBar = ({ activeSlot }) => {
  const searchRef = useRef(null);
  const [itemList, setItemList] = useState([]);
  const [listCopy, setListCopy] = useState([]);
  const [gearFilter, setGearFilter] = useState("All");

  const setActiveItemList = useCallback(() => {
    if (activeSlot === "Headpiece") {
      setItemList(HELMS);
      setListCopy(HELMS);
    }
    if (!activeSlot) {
      setItemList([]);
    }
  }, [activeSlot]);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
    setActiveItemList();
  }, [activeSlot, setActiveItemList]);

  useEffect(() => {
    console.log(gearFilter);
    if (gearFilter === "All") {
      setListCopy(itemList);
      return;
    }

    const filteredList = itemList.filter((item) => item.type === gearFilter);
    setListCopy(filteredList);
  }, [gearFilter, itemList]);

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
            {listCopy.map((item) => {
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
