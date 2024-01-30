import stl from "./ItemGalery.module.css";
import SelectBar from "./SelectBar/SelectBar";

import { useState } from "react";
import AmountBar from "./AmountBar/AmountBar";

import Armor from "./ActiveGallery/Armor/Armor";

const ItemGalery = ({
  setNotedAmount,
  setAmountToAdd,
  amountToAdd,
  setCurrentGrid,
  currentGrid,
}) => {
  const [activeGallery, setActiveGallery] = useState("Armor");
  return (
    <div className={stl.itemGalery}>
      <SelectBar
        activeGallery={activeGallery}
        setActiveGallery={setActiveGallery}
      />
      {activeGallery === "Armor" && (
        <Armor
          amountToAdd={amountToAdd}
          setCurrentGrid={setCurrentGrid}
          currentGrid={currentGrid}
        />
      )}
      <AmountBar
        setNotedAmount={setNotedAmount}
        setAmountToAdd={setAmountToAdd}
        amountToAdd={amountToAdd}
      />
    </div>
  );
};

export default ItemGalery;
