import stl from "./SearchItem.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";
import inventory from "../../../../assets/icons/Inventory.webp";
import member from "../../../../assets/icons/Member.webp";
import { useState, useEffect } from "react";

const SearchItem = ({ setImgSrc, imgSrc }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [imageError, setImageError] = useState(false);
  const [typing, setTyping] = useState(false);

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
  }, [searchTerm]);

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
            <button className={stl.searchCta}>
              <img
                src={inventory}
                alt="Inventory"
                className={stl.inventoryImg}
              />
            </button>
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
            <button className={stl.searchCta}>
              <img src={member} alt="Member star" className={stl.memberStar} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchItem;
