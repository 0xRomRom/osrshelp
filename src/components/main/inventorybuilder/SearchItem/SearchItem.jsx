import stl from "./SearchItem.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import inventory from "../../../../assets/icons/Inventory.webp";
import member from "../../../../assets/icons/Member.webp";
import { useState, useEffect } from "react";

const SearchItem = ({ setCurrentGrid, currentGrid, setNotedState }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [imageError, setImageError] = useState(false);
  const [typing, setTyping] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    if (searchTerm.length > 0) {
      setTyping(true);
    } else {
      setTyping(false);
    }
    const formattedSearch =
      searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);

    const encoded = formattedSearch
      .replace(/\(/g, "%28")
      .replace(/\)/g, "%29")
      .replace(/'/g, "%27")
      .replaceAll(" ", "_");

    const imgSrc = `https://oldschool.runescape.wiki/images/${encoded}.png`;
    setImgSrc(imgSrc);
  }, [searchTerm, setImgSrc]);

  const saveToInv = () => {
    for (let i = 0; i < Object.keys(currentGrid).length; i++) {
      const gridValue = currentGrid[i][i];
      if (gridValue.length === 0) {
        const newGrid = [...currentGrid];
        newGrid[i][i] = imgSrc;
        newGrid[i].noted = false;
        newGrid[i].amount = 0;
        setNotedState(false);
        setCurrentGrid(newGrid);
        break;
      }
    }
  };

  return (
    <div className={stl.imgSearchBox}>
      <div className={stl.inputWrapper}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search item"
          className={stl.searchInput}
        />
        <FaMagnifyingGlass
          className={`${stl.magnify} ${typing ? stl.rotate : ""}`}
        />
      </div>
      <div className={stl.searchResult}>
        {imgSrc && (
          <div className={stl.resultFlex}>
            {!imageError && (
              <button className={stl.searchCta} onClick={saveToInv}>
                <img
                  src={inventory}
                  alt="Inventory"
                  className={stl.inventoryImg}
                />
              </button>
            )}
            <div className={stl.imgWrapper}>
              <img
                src={imgSrc}
                className={stl.smallImg}
                onError={() => setImageError(true)}
                onLoad={() => {
                  setImageError(false);
                  setTyping(false);
                }}
                alt=""
                style={{ opacity: imageError ? "0" : "1" }}
              />
            </div>
            {!imageError && (
              <button className={stl.searchCta}>
                <img
                  src={member}
                  alt="Member star"
                  className={stl.memberStar}
                />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchItem;
