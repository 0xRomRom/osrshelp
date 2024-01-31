import stl from "./Favorites.module.css";
import PremiumBanner from "./premiumbanner/PremiumBanner";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../../../utils/authprovider/AuthProvider";

const tabNames = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];

const Favorites = () => {
  const { premiumUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className={stl.favorites}>
      {!premiumUser && <PremiumBanner />}
      <div className={stl.favoritesWrap}>
        <div className={stl.tabBar}>
          {tabNames.map((tab, index) => (
            <button
              key={index}
              className={`${stl.tabCta} ${
                activeTab === index + 1 ? stl.activeCta : ""
              }`}
              onClick={() => setActiveTab(index + 1)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
