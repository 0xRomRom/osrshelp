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
          src="./gearcalculator/shields/Mage's_book.webp"
          alt="Mage's book"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/weapons/Dragon_claws.webp"
          alt="Dragon claws"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/necklace/Occult_necklace_(or).webp"
          alt="Occult necklace (or)"
          className={stl.weaponIcon}
        />

        <img
          src="./gearcalculator/weapons/Tzhaar-ket-om.webp"
          alt="Tzhaar ket om"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/bodies/Fighter_torso.webp"
          alt="Fighter torso"
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
        <img
          src="./gearcalculator/helms/Berserker_helm.webp"
          alt="Berserker helm"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/weapons/Dark_bow.webp"
          alt="Dark bow"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/gloves/Tormented_bracelet.webp"
          alt="Tormented bracelet"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/rings/Berserker_ring_(i).webp"
          alt="Berserker ring"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/helms/Torva_full_helm.webp"
          alt="Torva full helm"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/weapons/Twisted_bow.webp"
          alt="Twisted bow"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/shields/Elysian_spirit_shield.webp"
          alt="Elysian spirit shield"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/boots/Primordial_boots.webp"
          alt="Primordial boots"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/gloves/Barrows_gloves.webp"
          alt="Barrows gloves"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/helms/Ancestral_hat.webp"
          alt="Ancestral hat"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/necklace/Necklace_of_anguish_(or).webp"
          alt="Necklace of anguish (or)"
          className={stl.weaponIcon}
        />
        <img
          src="./gearcalculator/helms/Robin_hood_hat.webp"
          alt="Robinhood hat"
          className={stl.weaponIcon}
        />
      </div>
      <img src={dharok} alt="Dharok the wretched" className={stl.dharokGhost} />
    </div>
  );
};

export default PremiumBanner;
