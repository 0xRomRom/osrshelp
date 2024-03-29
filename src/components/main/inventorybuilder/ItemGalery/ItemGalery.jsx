import stl from "./ItemGalery.module.css";
import SelectBar from "./SelectBar/SelectBar";

import { useEffect, useState } from "react";
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
  addingFavorite,
  setAddingFavorite,
  favoritesImgSrc,
  box4Disabled,
  setBox4Disabled,
}) => {
  const [activeGallery, setActiveGallery] = useState("Armor");
  const [slotState, setSlotState] = useState("Helm");
  const [runesAmount, setRunesAmount] = useState(null);
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    if (addingFavorite) {
      setActiveGallery("Favorites");
    }
  }, [addingFavorite, setAddingFavorite, activeGallery]);

  useEffect(() => {
    setActiveTab(1);
  }, [activeGallery]);

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
      {activeGallery === "Favorites" && (
        <Favorites
          addingFavorite={addingFavorite}
          setAddingFavorite={setAddingFavorite}
          favoritesImgSrc={favoritesImgSrc}
          setBox4Disabled={setBox4Disabled}
          setNotedAmount={setNotedAmount}
          setNotedState={setNotedState}
          box4Disabled={box4Disabled}
          setActiveTab={setActiveTab}
          activeTab={activeTab}
          setAmountToAdd={setAmountToAdd}
          setCurrentGrid={setCurrentGrid}
          currentGrid={currentGrid}
          notedState={notedState}
          runesAmount={runesAmount}
          setRunesAmount={setRunesAmount}
          amountToAdd={amountToAdd}
          notedAmount={notedAmount}
        />
      )}
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
        setSlotState={setSlotState}
        activeTab={activeTab}
      />
    </div>
  );
};

export default ItemGalery;
