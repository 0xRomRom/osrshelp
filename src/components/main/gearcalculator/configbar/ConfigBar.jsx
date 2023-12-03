import stl from "./ConfigBar.module.css";
import { useRef, useEffect } from "react";

const ConfigBar = ({ activeSlot }) => {
  const searchRef = useRef(null);

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
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
        </>
      )}
    </div>
  );
};

export default ConfigBar;
