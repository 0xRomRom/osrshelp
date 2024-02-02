import stl from "./SearchItem.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import inventory from "../../../../assets/icons/Inventory.webp";
import member from "../../../../assets/icons/Member.webp";
import { useState, useEffect } from "react";

const SearchItem = ({
  setCurrentGrid,
  currentGrid,
  setNotedState,
  setAddingFavorite,
  setFavoritesImgSrc,
  setBox4Disabled,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [imageError, setImageError] = useState(false);
  const [typing, setTyping] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  const [addNoted, setAddNoted] = useState(false);
  const [amountToAdd, setAmountToAdd] = useState(1);

  const amountHandler = (e) => {
    const input = e.target.value;
    if (input <= 1) {
      setAmountToAdd(null);
      return;
    }
    if (!isNaN(input) && parseInt(input) <= 2147483647) {
      setAmountToAdd(parseInt(input));
    }
  };

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

    const res = encoded.split("_");
    console.log(res);
    console.log(encoded);
    if (
      res[1] === "bolts" ||
      res[1] === "arrow" ||
      res[res.length - 1] === "knife" ||
      res[res.length - 1] === "rune" ||
      res[res.length - 1] === "dart" ||
      res[res.length - 1] === "javelin" ||
      res[1] === "rack" ||
      res[res.length - 1] === "tar" ||
      res[res.length - 1] === "bolts" ||
      res[2] === "bolts"
    ) {
      setBox4Disabled(false);
    } else {
      setBox4Disabled(true);
    }

    if (!isNaN(res[res.length - 1])) {
      setBox4Disabled(false);
    }

    setImgSrc(imgSrc);
  }, [searchTerm, setImgSrc, setBox4Disabled]);

  const saveToInv = () => {
    if (!amountToAdd) {
      return;
    }
    let updatedGrid = [...currentGrid];

    if (addNoted) {
      // Check if entry exists and increment
      for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
        const gridValue = updatedGrid[i][i];
        if (gridValue === imgSrc && updatedGrid[i].noted) {
          updatedGrid[i].amount += amountToAdd;
          setCurrentGrid(updatedGrid);
          setAddNoted(false);
          setAmountToAdd(1);

          return;
        }
      }

      // Create new entry
      for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
        const gridValue = updatedGrid[i][i];
        if (gridValue.length === 0) {
          updatedGrid[i].amount += amountToAdd;
          updatedGrid[i].noted = true;
          updatedGrid[i][i] = imgSrc;

          setCurrentGrid(updatedGrid);
          setAddNoted(false);
          setAmountToAdd(1);
          return;
        }
      }
    }

    // Add unnoted amount
    for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
      const gridValue = updatedGrid[i][i];
      if (gridValue.length === 0) {
        const cacheIndex = i;
        for (let j = cacheIndex; j < cacheIndex + +amountToAdd; j++) {
          if (j >= 28) {
            setCurrentGrid(updatedGrid);
            break;
          }
          if (updatedGrid[j][j] !== "") {
            continue;
          }
          updatedGrid[j][j] = imgSrc;
        }
        setCurrentGrid(updatedGrid);
        setNotedState(false);
        setAmountToAdd(1);
        break;
      }
    }
  };

  const addToFavorites = () => {
    setAddingFavorite(true);
    setFavoritesImgSrc(imgSrc);
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
              <div className={stl.leftWrapper}>
                <button className={stl.searchCta} onClick={saveToInv}>
                  <img
                    src={inventory}
                    alt="Inventory"
                    className={stl.inventoryImg}
                  />
                </button>
                <div className={stl.addConfig}>
                  <button
                    className={`${stl.notedBtn} ${
                      addNoted ? stl.notedActive : ""
                    }`}
                    onClick={() => setAddNoted(!addNoted)}
                  >
                    Noted
                  </button>
                  <input
                    type="number"
                    className={stl.searchAmountInput}
                    value={amountToAdd || ""}
                    onChange={amountHandler}
                  />
                </div>
              </div>
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
              <button className={stl.searchCta} onClick={addToFavorites}>
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
