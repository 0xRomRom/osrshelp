import stl from "./Favorites.module.css";
import PremiumBanner from "./premiumbanner/PremiumBanner";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../../../utils/authprovider/AuthProvider";

const tabNames = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];
const tabs = {
  1: [
    "https://oldschool.runescape.wiki/images/Shark.png?4b960",
    "https://oldschool.runescape.wiki/images/Dragon_spear.png?cc5f3",
  ],
  2: [],
  3: [],
  4: [],
};

const Favorites = () => {
  const { premiumUser } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className={stl.favorites}>
      {!premiumUser && <PremiumBanner />}
      <div className={stl.favoritesWrap}>
        {premiumUser && (
          <>
            <div className={stl.tabBar}>
              {tabNames.map((tab, index) => (
                <button
                  key={index}
                  className={`${stl.tabCta} ${
                    activeTab === index + 1 ? stl.activeCta : ""
                  } ${index === 0 ? stl.firstButton : ""} ${
                    index === tabNames.length - 1 ? stl.lastButton : ""
                  }`}
                  onClick={() => setActiveTab(index + 1)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className={stl.iconGrid}>
              {Object.values(tabs)[0].map((item, index) => {
                console.log(item);
                return (
                  <div className={stl.gridItem} key={index}>
                    <img src={item} alt={item} className={stl.tileImg} />
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Favorites;
