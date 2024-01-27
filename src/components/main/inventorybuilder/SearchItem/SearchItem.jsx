import stl from "./SearchItem.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import inventory from "../../../../assets/icons/Inventory.webp";
import member from "../../../../assets/icons/Member.webp";
import { useState, useEffect } from "react";

const SearchItem = ({ setCurrentGrid, currentGrid }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [imageError, setImageError] = useState(false);
  const [typing, setTyping] = useState(false);
  const [imgSrc, setImgSrc] = useState(
    "https://oldschool.runescape.wiki/images/Lobster.png"
  );

  useEffect(() => {}, []);

  useEffect(() => {
    if (searchTerm.length > 0) {
      setTyping(true);
    } else {
      setTyping(false);
    }
    const formattedSearch = (
      searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)
    )
      .split(" ")
      .join("_");
    const imgSrc = `https://oldschool.runescape.wiki/images/${formattedSearch}.png`;

    setImgSrc(imgSrc);
  }, [searchTerm, setImgSrc]);

  const saveToInv = () => {
    setCurrentGrid((prevGrid) => {
      let newGrid = [...prevGrid];
      for (let i = 0; i < newGrid.length; i++) {
        const keys = +Object.keys(newGrid[i]);
        if (Object.values(newGrid[i])[0].length === 0) {
          newGrid[i][keys] = imgSrc;
          break;
        }
      }
      return newGrid;
    });
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
