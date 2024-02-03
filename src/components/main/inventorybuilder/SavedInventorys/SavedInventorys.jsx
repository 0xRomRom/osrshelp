import stl from "./SavedInventorys.module.css";
import PremiumBanner from "./PremiumBanner/PremiumBanner";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";
import { BsGearFill } from "react-icons/bs";
import supabase from "../../../../utils/supabase/supabase";

const SavedInventorys = ({ setSavingInventory }) => {
  const { premiumUser, userID } = useContext(AuthContext);
  const [invList, setInvList] = useState([]);

  useEffect(() => {
    const listFetcher = async () => {
      try {
        const { data, error } = await supabase
          .from("saved_inventories")
          .select("*")
          .eq("uid", userID);

        if (error) {
          throw new Error(error);
        }
        if (data) {
          const result = JSON.parse(data[0].saved_invs);
          console.log(result);
          setInvList(result);
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (invList.length === 0) {
      listFetcher();
    }
  });

  useEffect(() => {
    console.log(invList);
  }, [invList]);

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
              console.log(item);
              console.log(index);
              return (
                <div
                  className={stl.listItem}
                  key={index}
                  style={{
                    display: item[index].length === 0 ? "none" : "flex",
                  }}
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
