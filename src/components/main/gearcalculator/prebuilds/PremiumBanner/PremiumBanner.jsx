import stl from "./PremiumBanner.module.css";

import ahrim from "../../../../../assets/characters/Ahrim.webp";
import dharok from "../../../../../assets/characters/Dharok.webp";

const PremiumBanner = () => {
  return (
    <div className={stl.getPremiumBanner}>
      <img src={ahrim} alt="Ahrim the blighted" className={stl.ahrimGhost} />
      <div className={stl.midblock}>
        <h1 className={stl.bannerHero}>
          Access <span className={stl.white}>100+</span> prebuilds
          <br /> as a <span className={stl.rune}>Rune</span> user
        </h1>
        <button className={stl.cta}>Upgrade</button>
      </div>
      <div className={stl.iconRow}>
        <img
          src="./gearcalculator/helms/Berserker_helm.webp"
          alt="Berserker helm"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/shields/Arcane_spirit_shield.webp"
          alt="Arcane spiritshield"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/weapons/Armadyl_godsword.webp"
          alt="Armadyl godsword"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/weapons/Toxic_staff_of_the_dead.webp"
          alt="Toxic staff of the dead"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/weapons/Armadyl_crossbow.webp"
          alt="Armadyl crossbow"
          className={stl.weaponIcon}
        />
      </div>
      <img src={dharok} alt="Dharok the wretched" className={stl.dharokGhost} />
    </div>
  );
};

export default PremiumBanner;
