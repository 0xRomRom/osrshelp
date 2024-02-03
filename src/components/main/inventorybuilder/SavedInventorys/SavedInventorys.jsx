import stl from "./SavedInventorys.module.css";
import PremiumBanner from "./PremiumBanner/PremiumBanner";
import { useContext } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";

const SavedInventorys = () => {
  const { premiumUser } = useContext(AuthContext);

  return (
    <div className={stl.savedinventorys}>
      {!premiumUser && <PremiumBanner />}
    </div>
  );
};

export default SavedInventorys;
