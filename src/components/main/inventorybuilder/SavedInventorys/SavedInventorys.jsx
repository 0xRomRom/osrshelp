import stl from "./SavedInventorys.module.css";
import PremiumBanner from "./PremiumBanner/PremiumBanner";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";
import { BsGearFill } from "react-icons/bs";
import supabase from "../../../../utils/supabase/supabase";

const SavedInventorys = ({
  setSavingInventory,
  savingInventory,
  setCurrentGrid,
}) => {
  const { premiumUser, userID } = useContext(AuthContext);
  const [invList, setInvList] = useState([]);

  useEffect(() => {
    const listFetcher = async () => {
      const { data } = await supabase
        .from("saved_inventories")
        .select("*")
        .eq("uid", userID);

      if (data) {
        const result = JSON.parse(data[0].saved_invs);
        setInvList(result);
      }
    };

    if (
      (invList.length === 0 && userID) ||
      (savingInventory === false && userID)
    ) {
      listFetcher();
    }
  }, [invList.length, userID, savingInventory]);

  const displayInventory = (item) => {
    setCurrentGrid(item.data);
  };

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
          <div className={stl.storedInvsList}>
            {invList.map((item, index) => {
              return (
                <div
                  className={stl.listItem}
                  key={index}
                  style={{
                    display: item[index].length === 0 ? "none" : "flex",
                  }}
                  onClick={() => displayInventory(item)}
                >
                  {item[index]}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SavedInventorys;
