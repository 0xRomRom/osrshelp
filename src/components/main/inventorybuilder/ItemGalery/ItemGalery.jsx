import stl from "./ItemGalery.module.css";
import SelectBar from "./SelectBar/SelectBar";

import { useState } from "react";
import AmountBar from "./AmountBar/AmountBar";

import Armor from "./ActiveGallery/Armor/Armor";
import Potions from "./ActiveGallery/Potions/Potions";
import Food from "./ActiveGallery/Food/Food";

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
      {activeGallery === "Potions" && (
        <Potions
          amountToAdd={amountToAdd}
          setCurrentGrid={setCurrentGrid}
          currentGrid={currentGrid}
        />
      )}
      {activeGallery === "Food" && (
        <Food
          amountToAdd={amountToAdd}
          setCurrentGrid={setCurrentGrid}
          currentGrid={currentGrid}
        />
      )}
      <AmountBar
        setNotedAmount={setNotedAmount}
        setAmountToAdd={setAmountToAdd}
        amountToAdd={amountToAdd}
        activeGallery={activeGallery}
      />
    </div>
  );
};

export default ItemGalery;
