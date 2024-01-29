import stl from "./ItemGalery.module.css";
import member from "../../../../assets/icons/Member.webp";
import { useState } from "react";

const ItemGalery = () => {
  const [activeGallery, setActiveGallery] = useState("Armor");
  return (
    <div className={stl.itemGalery}>
      <div className={stl.toggleBar}>
        <button
          className={`${stl.toggleCta} ${
            activeGallery === "Armor" ? stl.activeCta : ""
          }`}
          onClick={() => setActiveGallery("Armor")}
        >
          <img
            src="https://oldschool.runescape.wiki/images/Dharok%27s_helm.png?3043c"
            alt="Dharok's Helm"
            className={stl.btnIcon}
          />
        </button>
        <button
          className={`${stl.toggleCta} ${
            activeGallery === "Potions" ? stl.activeCta : ""
          }`}
          onClick={() => setActiveGallery("Potions")}
        >
          <img
            src="https://oldschool.runescape.wiki/images/Saradomin_brew%284%29.png"
            alt="Saradomin brew"
            className={stl.btnIcon}
          />
        </button>

        <button
          className={`${stl.toggleCta} ${
            activeGallery === "Food" ? stl.activeCta : ""
          }`}
          onClick={() => setActiveGallery("Food")}
        >
          <img
            src="https://oldschool.runescape.wiki/images/Shark.png"
            alt="Shark"
            className={stl.btnIcon}
          />
        </button>
        <button
          className={`${stl.toggleCta} ${
            activeGallery === "Runes" ? stl.activeCta : ""
          }`}
          onClick={() => setActiveGallery("Runes")}
        >
          <img
            src="https://oldschool.runescape.wiki/images/Blood_rune.png?3d4c6"
            alt="Blood rune"
            className={stl.btnIcon}
          />
        </button>
        <button
          className={`${stl.toggleCta} ${stl.lastCta} ${
            activeGallery === "Favorites" ? stl.activeCta : ""
          }`}
          onClick={() => setActiveGallery("Favorites")}
        >
          <img src={member} alt="Favorites" className={stl.btnIcon} />
        </button>
      </div>
    </div>
  );
};

export default ItemGalery;
