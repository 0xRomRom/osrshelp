import stl from "./ItemGalery.module.css";
import SelectBar from "./SelectBar/SelectBar";

import { useState } from "react";
import AmountBar from "./AmountBar/AmountBar";

import Armor from "./ActiveGallery/Armor/Armor";
import Potions from "./ActiveGallery/Potions/Potions";
import Food from "./ActiveGallery/Food/Food";
import Runes from "./ActiveGallery/Runes/Runes";
import Favorites from "./ActiveGallery/Favorites/Favorites";

const ItemGalery = ({
  setNotedAmount,
  setAmountToAdd,
  amountToAdd,
  setCurrentGrid,
  currentGrid,
  notedAmount,
  notedState,
  setNotedState,
}) => {
  const [activeGallery, setActiveGallery] = useState("Armor");
  const [slotState, setSlotState] = useState("Helm");
  const [runesAmount, setRunesAmount] = useState(null);

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
          setAmountToAdd={setAmountToAdd}
          notedState={notedState}
          notedAmount={notedAmount}
          setNotedAmount={setNotedAmount}
          setNotedState={setNotedState}
          setSlotState={setSlotState}
          slotState={slotState}
          activeGallery={activeGallery}
          runesAmount={runesAmount}
          setRunesAmount={setRunesAmount}
        />
      )}
      {activeGallery === "Potions" && (
        <Potions
          amountToAdd={amountToAdd}
          setCurrentGrid={setCurrentGrid}
          currentGrid={currentGrid}
          setAmountToAdd={setAmountToAdd}
          notedState={notedState}
          notedAmount={notedAmount}
          setNotedAmount={setNotedAmount}
          setNotedState={setNotedState}
        />
      )}
      {activeGallery === "Food" && (
        <Food
          amountToAdd={amountToAdd}
          setCurrentGrid={setCurrentGrid}
          currentGrid={currentGrid}
          setAmountToAdd={setAmountToAdd}
          notedState={notedState}
          notedAmount={notedAmount}
          setNotedAmount={setNotedAmount}
          setNotedState={setNotedState}
        />
      )}
      {activeGallery === "Runes" && (
        <Runes
          amountToAdd={amountToAdd}
          setCurrentGrid={setCurrentGrid}
          currentGrid={currentGrid}
          runesAmount={runesAmount}
          setRunesAmount={setRunesAmount}
        />
      )}
      {activeGallery === "Favorites" && <Favorites />}
      <AmountBar
        setNotedAmount={setNotedAmount}
        setAmountToAdd={setAmountToAdd}
        amountToAdd={amountToAdd}
        activeGallery={activeGallery}
        slotState={slotState}
        currentGrid={currentGrid}
        notedState={notedState}
        setNotedState={setNotedState}
        notedAmount={notedAmount}
        setRunesAmount={setRunesAmount}
        runesAmount={runesAmount}
      />
    </div>
  );
};

export default ItemGalery;
