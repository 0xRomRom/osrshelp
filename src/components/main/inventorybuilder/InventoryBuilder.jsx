import stl from "./InventoryBuilder.module.css";
import Pagination from "../pagination/Pagination";
import { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const InventoryBuilder = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [imgSrc, setImgSrc] = useState(
    "https://oldschool.runescape.wiki/images/Lobster.png"
  );
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    console.log(imageError);
  }, [imageError]);

  useEffect(() => {
    const formattedSearch = (
      searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)
    )
      .split(" ")
      .join("_");
    const imgSrc = `https://oldschool.runescape.wiki/images/${formattedSearch}.png`;

    setImgSrc(imgSrc);
  }, [searchTerm]);

  return (
    <>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination />
      <div className={stl.mainContainer}>
        <div className={stl.imgSearchBox}>
          <div className={stl.inputWrapper}>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search item"
              className={stl.searchInput}
            />
            <FaMagnifyingGlass className={stl.magnify} />
          </div>
          <div className={stl.searchResult}>
            {!imgSrc && <span className={stl.errorText}>Item not found</span>}
            {imgSrc && (
              <img
                src={imgSrc}
                className={stl.smallImg}
                onError={() => setImageError(true)}
                onLoad={() => setImageError(false)}
                alt=""
                style={{ opacity: imageError ? "0" : "1" }}
              />
            )}
          </div>
        </div>
        <div className={stl.inventoryWrapper}>
          <img
            src="./backgrounds/Inventory.png"
            alt="Oldschool Runescape Inventory"
            className={stl.inventory}
          />
        </div>
      </div>
    </>
  );
};

export default InventoryBuilder;
