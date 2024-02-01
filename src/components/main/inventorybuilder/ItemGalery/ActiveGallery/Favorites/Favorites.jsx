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
  const [error, setError] = useState("");

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
            setFetchedTabs(JSON.parse(data[0].favitems));
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

  const addToFavoriteTab = async (tab) => {
    setError("");
    const cachedState = { ...fetchedTabs };

    let exists = false;
    cachedState[tab].forEach((item) => {
      const dotPngIndex = item.indexOf(".png");
      const result = item.substring(0, dotPngIndex + 4);

      if (result === favoritesImgSrc) {
        exists = true;
      }
    });
    if (exists) {
      setError("Item is already in tab");
      return;
    }

    cachedState[tab].push(favoritesImgSrc);
    console.log(JSON.stringify(cachedState));
    try {
      const { error } = await supabase
        .from("item_favorites")
        .update({
          favitems: JSON.stringify(cachedState),
        })
        .eq("uid", userID);

      if (error) {
        setError("Failed to add item");
        return;
      }
    } catch (err) {
      console.error(err);
    }

    setFetchedTabs(cachedState);
    setActiveTab(tab);
    setAddingFavorite(false);
    console.log(cachedState);
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
            <span className={stl.error}>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
