import stl from "./PremiumBanner.module.css";
import { useContext } from "react";
import { AuthContext } from "../../../../../utils/authprovider/AuthProvider";
import { useNavigate } from "react-router-dom";

const PremiumBanner = () => {
  const navigate = useNavigate();

  const { premiumUser, userID } = useContext(AuthContext);

  const handleNavigate = () => {
    console.log("clicked");
    if (!userID) {
      navigate("/login");
      return;
    }

    navigate("/checkout");
  };

  return (
    <div className={stl.premiumbanner}>
      <h2 className={stl.saveInvs}>
        Save inventories as a <span className={stl.rune}>Rune</span> user
      </h2>
      <div className={stl.chestrow}>
        <img src="./random/Chest.png" alt="Bank chest" className={stl.chest} />
        <button className={stl.upgradecta} onClick={handleNavigate}>
          Upgrade
        </button>
        <img
          src="./random/Chest.png"
          alt="Bank chest"
          className={`${stl.chest} ${stl.flipChest}`}
        />
      </div>
    </div>
  );
};

export default PremiumBanner;
