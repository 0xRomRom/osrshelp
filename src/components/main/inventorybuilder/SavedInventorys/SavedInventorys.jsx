import stl from "./SavedInventorys.module.css";
import PremiumBanner from "./PremiumBanner/PremiumBanner";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";

const SavedInventorys = () => {
  const navigate = useNavigate();

  const { premiumUser, userID } = useContext(AuthContext);

  return (
    <div className={stl.savedinventorys}>
      {!premiumUser && <PremiumBanner />}
    </div>
  );
};

export default SavedInventorys;
