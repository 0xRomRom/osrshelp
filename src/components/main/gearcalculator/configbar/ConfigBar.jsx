import stl from "./ConfigBar.module.css";
import { useRef, useEffect, useState } from "react";
import HELMS from "../../../../utils/gearcalculator/helms";

const ConfigBar = ({ activeSlot }) => {
  const searchRef = useRef(null);
  const [itemList, setItemList] = useState([]);

  const setActiveItemList = () => {
    if (activeSlot === "Headpiece") {
      setItemList(HELMS);
    }
  };

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
    setActiveItemList();
  }, [activeSlot]);

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
