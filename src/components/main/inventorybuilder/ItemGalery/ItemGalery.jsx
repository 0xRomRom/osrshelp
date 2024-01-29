import stl from "./ItemGalery.module.css";
import SelectBar from "./SelectBar/SelectBar";

import { useState } from "react";
import AmountBar from "./AmountBar/AmountBar";

import Armor from "./ActiveGallery/Armor/Armor";

const ItemGalery = () => {
  const [activeGallery, setActiveGallery] = useState("Armor");
  return (
    <div className={stl.itemGalery}>
      <SelectBar
        activeGallery={activeGallery}
        setActiveGallery={setActiveGallery}
      />
      {activeGallery === "Armor" && <Armor />}
      <AmountBar />
    </div>
  );
};

export default ItemGalery;
