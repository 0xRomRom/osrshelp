import stl from "./InventoryBuilder.module.css";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import SearchItem from "./SearchItem/SearchItem";
import InventoryGrid from "./InventoryGrid/InventoryGrid";
import EMPTYGRID from "../../../utils/emptyinventory";
import CtaBar from "./CtaBar/CtaBar";

const InventoryBuilder = () => {
  const [currentGrid, setCurrentGrid] = useState(EMPTYGRID);
  const [screenshotting, setScreenshotting] = useState(false);

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
            screenshotting={screenshotting}
            setScreenshotting={setScreenshotting}
          />
        </div>
        <CtaBar
          setCurrentGrid={setCurrentGrid}
          setScreenshotting={setScreenshotting}
        />
      </div>
    </>
  );
};

export default InventoryBuilder;
