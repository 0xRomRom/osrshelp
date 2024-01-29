import stl from "./SelectBar.module.css";

import member from "../../../../../assets/icons/Member.webp";
const galleryItems = [
  {
    id: "Armor",
    imageSrc:
      "https://oldschool.runescape.wiki/images/Dharok%27s_helm.png?3043c",
    alt: "Dharok's Helm",
  },
  {
    id: "Potions",
    imageSrc:
      "https://oldschool.runescape.wiki/images/Saradomin_brew%284%29.png",
    alt: "Saradomin brew",
  },
  {
    id: "Food",
    imageSrc: "https://oldschool.runescape.wiki/images/Shark.png",
    alt: "Shark",
  },
  {
    id: "Runes",
    imageSrc: "https://oldschool.runescape.wiki/images/Blood_rune.png?3d4c6",
    alt: "Blood rune",
  },
  { id: "Favorites", imageSrc: member, alt: "Favorites" },
];
const SelectBar = ({ activeGallery, setActiveGallery }) => {
  return (
    <div className={stl.toggleBar}>
      {galleryItems.map((item, index) => (
        <button
          key={index}
          className={`${stl.toggleCta} ${
            index === galleryItems.length - 1 ? stl.lastCta : ""
          } ${activeGallery === item.id ? stl.activeCta : ""}`}
          onClick={() => setActiveGallery(item.id)}
        >
          <img src={item.imageSrc} alt={item.alt} className={stl.btnIcon} />
        </button>
      ))}
    </div>
  );
};

export default SelectBar;
