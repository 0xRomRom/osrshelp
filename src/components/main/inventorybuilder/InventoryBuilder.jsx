import stl from "./InventoryBuilder.module.css";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import SearchItem from "./SearchItem/SearchItem";

const InventoryBuilder = () => {
  const [imgSrc, setImgSrc] = useState(
    "https://oldschool.runescape.wiki/images/Lobster.png"
  );

  return (
    <>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination />
      <div className={stl.mainContainer}>
        <SearchItem setImgSrc={setImgSrc} imgSrc={imgSrc} />
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
