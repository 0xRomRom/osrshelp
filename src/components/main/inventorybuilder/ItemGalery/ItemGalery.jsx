import stl from "./ItemGalery.module.css";
import member from "../../../../assets/icons/Member.webp";

const ItemGalery = () => {
  return (
    <div className={stl.itemGalery}>
      <div className={stl.toggleBar}>
        <button className={stl.toggleCta}>
          <img
            src="https://oldschool.runescape.wiki/images/Dharok%27s_helm.png?3043c"
            alt="Dharok's Helm"
            className={stl.btnIcon}
          />
        </button>
        <button className={stl.toggleCta}>
          <img
            src="https://oldschool.runescape.wiki/images/Saradomin_brew%284%29.png"
            alt="Saradomin brew"
            className={stl.btnIcon}
          />
        </button>

        <button className={stl.toggleCta}>
          <img
            src="https://oldschool.runescape.wiki/images/Shark.png"
            alt="Shark"
            className={stl.btnIcon}
          />
        </button>
        <button className={stl.toggleCta}>
          <img
            src="https://oldschool.runescape.wiki/images/Blood_rune.png?3d4c6"
            alt="Blood rune"
            className={stl.btnIcon}
          />
        </button>
        <button className={`${stl.toggleCta} ${stl.lastCta}`}>
          <img src={member} alt="Blood rune" className={stl.btnIcon} />
        </button>
      </div>
    </div>
  );
};

export default ItemGalery;
