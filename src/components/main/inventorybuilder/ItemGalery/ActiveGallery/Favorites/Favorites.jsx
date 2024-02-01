import stl from "./Favorites.module.css";
import PremiumBanner from "./premiumbanner/PremiumBanner";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../../../utils/authprovider/AuthProvider";
import supabase from "../../../../../../utils/supabase/supabase";
import { FaLongArrowAltLeft } from "react-icons/fa";

const tabNames = ["Tab 1", "Tab 2", "Tab 3", "Tab 4"];
const tabs = {
  1: [],
  2: [],
  3: [],
  4: [],
};

const Favorites = ({ addingFavorite, setAddingFavorite, favoritesImgSrc }) => {
  const { premiumUser, userID } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState(1);
  const [fetchedTabs, setFetchedTabs] = useState({});

  useEffect(() => {
    if (Object.entries(fetchedTabs).length === 0) {
      const fetchTables = async () => {
        try {
          const { data, error } = await supabase
            .from("item_favorites")
            .select("*")
            .eq("uid", userID);
          console.log(data);
          if (error) {
            console.error("Supabase error:", error.message);
            setFetchedTabs(tabs);
          } else {
            console.log(data[0].favitems);
            setFetchedTabs(data[0].favitems);
          }
        } catch (err) {
          console.error("Fetch error:", err);
        }
      };
      fetchTables();
    }
  }, [fetchedTabs, userID]);

  useEffect(() => {
    console.log(addingFavorite);
  }, [addingFavorite]);

  const addToFavoriteTab = (tab = 1) => {
    const cachedState = { ...fetchedTabs };
    cachedState[tab].forEach((item) => {
      let dotPngIndex = item.indexOf(".png");
      let result = item.substring(0, dotPngIndex + 4);
      console.log(result);

      if (result === favoritesImgSrc) {
        // alert("exists");
      }
    });
  };

  return (
    <div className={stl.favorites}>
      {!premiumUser && <PremiumBanner />}
      <div className={stl.favoritesWrap}>
        {premiumUser && !addingFavorite && (
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
              {Object.entries(fetchedTabs).length > 0 && (
                <>
                  {fetchedTabs[activeTab].map((item, index) => {
                    return (
                      <div className={stl.gridItem} key={index}>
                        <img src={item} alt={item} className={stl.tileImg} />
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </>
        )}
        {premiumUser && addingFavorite && (
          <div className={stl.addOverlay}>
            <FaLongArrowAltLeft
              className={stl.closeAddModal}
              onClick={() => setAddingFavorite(false)}
            />
            <span className={stl.chooseTab}>Choose tab</span>
            <div className={stl.tabWrapper}>
              <div className={stl.tabBox} onClick={() => addToFavoriteTab(1)}>
                Tab 1
              </div>
              <div className={stl.tabBox} onClick={() => addToFavoriteTab(2)}>
                Tab 2
              </div>
              <div className={stl.tabBox} onClick={() => addToFavoriteTab(3)}>
                Tab 3
              </div>
              <div className={stl.tabBox} onClick={() => addToFavoriteTab(4)}>
                Tab 4
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
