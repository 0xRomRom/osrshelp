import stl from "./InventoryBuilder.module.css";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import SearchItem from "./SearchItem/SearchItem";
import InventoryGrid from "./InventoryGrid/InventoryGrid";
import EMPTYGRID from "../../../utils/emptyinventory";

const InventoryBuilder = () => {
  const [currentGrid, setCurrentGrid] = useState(EMPTYGRID);

  return (
    <>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination />
      <div className={stl.mainContainer}>
        <SearchItem setCurrentGrid={setCurrentGrid} currentGrid={currentGrid} />
        <div className={stl.inventoryWrapper}>
          <InventoryGrid
            currentGrid={currentGrid}
            setCurrentGrid={setCurrentGrid}
          />
        </div>
      </div>
    </>
  );
};

export default InventoryBuilder;
