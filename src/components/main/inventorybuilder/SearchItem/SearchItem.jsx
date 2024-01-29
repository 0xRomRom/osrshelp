import stl from "./SearchItem.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import inventory from "../../../../assets/icons/Inventory.webp";
import member from "../../../../assets/icons/Member.webp";
import { useState, useEffect } from "react";

const SearchItem = ({ setCurrentGrid, currentGrid }) => {
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

    const encoded = formattedSearch.replace(/\(/g, "%28").replace(/\)/g, "%29");

    console.log(encoded);
    const finalString = encoded.replaceAll(" ", "_");
    console.log(finalString);
    const imgSrc = `https://oldschool.runescape.wiki/images/${finalString}.png`;
    setImgSrc(imgSrc);
  }, [searchTerm, setImgSrc]);

  const saveToInv = () => {
    console.log("Img to add: ", imgSrc);

    for (let i = 0; i < Object.keys(currentGrid).length; i++) {
      console.log(currentGrid[i]);
      const gridValue = currentGrid[i];
      console.log(gridValue);
      if (gridValue.length === 0) {
        console.log(i);
        const newGrid = { ...currentGrid };
        newGrid[i] = imgSrc;
        console.log("Updated currentGrid:", newGrid);
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
