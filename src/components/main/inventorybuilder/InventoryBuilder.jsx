import stl from "./InventoryBuilder.module.css";
import Pagination from "../pagination/Pagination";
import { useState } from "react";
import SearchItem from "./SearchItem/SearchItem";
import InventoryGrid from "./InventoryGrid/InventoryGrid";
import EMPTYGRID from "../../../utils/emptyinventory";
import CtaBar from "./CtaBar/CtaBar";
import ItemGalery from "./ItemGalery/ItemGalery";
import SavedInventorys from "./SavedInventorys/SavedInventorys";
import SaveOverlay from "./SaveOverlay/SaveOverlay";
import TopAdBar from "../../../utils/adbars/topadbar/TopAdBar";
import BottomAdBar from "../../../utils/adbars/bottomadbar/BottomAdBar";
import inventory from "../../../assets/icons/Inventory.webp";

const InventoryBuilder = () => {
  const [currentGrid, setCurrentGrid] = useState(EMPTYGRID);
  const [screenshotting, setScreenshotting] = useState(false);
  const [notedAmount, setNotedAmount] = useState(null);
  const [amountToAdd, setAmountToAdd] = useState("1");
  const [notedState, setNotedState] = useState(false);
  const [addingFavorite, setAddingFavorite] = useState(false);
  const [favoritesImgSrc, setFavoritesImgSrc] = useState(null);
  const [box4Disabled, setBox4Disabled] = useState(false);
  const [savingInventory, setSavingInventory] = useState(false);

  return (
    <>
      <TopAdBar />
      <Pagination />
      <div className={stl.mainContainer}>
        {savingInventory && (
          <SaveOverlay
            setSavingInventory={setSavingInventory}
            currentGrid={currentGrid}
          />
        )}
        <div className={stl.innerWrapper}>
          <div className={stl.leftBar}>
            <SearchItem
              setCurrentGrid={setCurrentGrid}
              currentGrid={currentGrid}
              setNotedState={setNotedState}
              setAddingFavorite={setAddingFavorite}
              setFavoritesImgSrc={setFavoritesImgSrc}
              setBox4Disabled={setBox4Disabled}
              box4Disabled={box4Disabled}
            />
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
              setSavingInventory={setSavingInventory}
              currentGrid={currentGrid}
            />
          </div>
          <div className={stl.rightBar}>
            <ItemGalery
              setNotedAmount={setNotedAmount}
              setAmountToAdd={setAmountToAdd}
              amountToAdd={amountToAdd}
              currentGrid={currentGrid}
              setCurrentGrid={setCurrentGrid}
              notedAmount={notedAmount}
              setNotedState={setNotedState}
              notedState={notedState}
              addingFavorite={addingFavorite}
              setAddingFavorite={setAddingFavorite}
              favoritesImgSrc={favoritesImgSrc}
              setBox4Disabled={setBox4Disabled}
              box4Disabled={box4Disabled}
            />
            <SavedInventorys
              setSavingInventory={setSavingInventory}
              savingInventory={savingInventory}
              setCurrentGrid={setCurrentGrid}
            />
          </div>
        </div>
      </div>

      <div className={stl.modalWrapper}>
        <div className={stl.infoModal}>
          <div className={stl.lanternWrap}>
            <img
              src={inventory}
              alt="General Graardor"
              className={stl.lantern}
            />
          </div>
          <p>
            Inventory Builder lets you compose all sorts of inventories using
            our suggested items or through search functionality. Save your
            inventory builds as a Rune user.
          </p>
        </div>
      </div>
      <BottomAdBar />
    </>
  );
};

export default InventoryBuilder;
