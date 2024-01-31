import stl from "./PremiumBanner.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../../../../utils/authprovider/AuthProvider";

const PremiumBanner = () => {
  const navigate = useNavigate();

  const { premiumUser, userID } = useContext(AuthContext);

  const handleNavigate = () => {
    if (!userID) {
      navigate("/login");
      return;
    }
    if (!premiumUser) {
      navigate("/checkout");
    }
  };

  return (
    <div className={stl.premiumbanner}>
      <h3 className={stl.exploreHero}>
        Explore favorites
        <br /> as a <span className={stl.rune}>Rune</span> user{" "}
      </h3>
      <button className={stl.upgrade} onClick={handleNavigate}>
        Upgrade
      </button>
      <img
        src="https://oldschool.runescape.wiki/images/Gnome_child_chathead.png?16a86"
        alt="Gnome child"
        className={stl.gnomechild}
      />
    </div>
  );
};

export default PremiumBanner;
