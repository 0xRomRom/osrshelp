import stl from "./SavedInventorys.module.css";
import PremiumBanner from "./PremiumBanner/PremiumBanner";
import { useContext } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";
import { BsGearFill } from "react-icons/bs";

const SavedInventorys = ({ setSavingInventory }) => {
  const { premiumUser } = useContext(AuthContext);

  return (
    <div className={stl.savedinventorys}>
      {!premiumUser && <PremiumBanner />}
      {premiumUser && (
        <div className={stl.storedInvs}>
          <div className={stl.configRow}>
            <BsGearFill
              className={stl.gearicon}
              onClick={() => setSavingInventory(true)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedInventorys;
