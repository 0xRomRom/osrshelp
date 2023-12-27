import stl from "./UpgradeBanner.module.css";
import { useNavigate } from "react-router-dom";

const UpgradeBanner = () => {
  const navigate = useNavigate();
  return (
    <div className={stl.upgradeBanner}>
      <div className={stl.bannerBG}>
        <img
          src="./premiummodal/PremiumBG.webp"
          alt="Oldschool Runescape background"
          className={stl.modalBgImg}
        />
      </div>
      <div className={stl.bannerContent}>
        <h3 className={stl.bannerHero}>
          Explore storage slots <br />
          as a <span className={stl.rune}>rune</span> user
        </h3>
        <button className={stl.cta} onClick={() => navigate("/checkout")}>
          Upgrade
        </button>
      </div>
    </div>
  );
};

export default UpgradeBanner;
