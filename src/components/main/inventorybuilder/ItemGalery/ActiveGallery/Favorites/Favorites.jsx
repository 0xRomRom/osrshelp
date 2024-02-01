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

const Favorites = ({
  addingFavorite,
  setAddingFavorite,
  favoritesImgSrc,
  box4Disabled,
  setBox4Disabled,
}) => {
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
            setFetchedTabs(JSON.parse(data[0].favitems));
          }
        } catch (err) {
          console.error("Fetch error:", err);
        }
      };
      fetchTables();
    }
  }, [fetchedTabs, userID]);

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

    //Filter image source down to name
    const dotPngIndex = favoritesImgSrc.indexOf(".png");
    const filteredString = favoritesImgSrc.substring(0, dotPngIndex).slice(40);
    const res = filteredString.split("_");
    console.log(res);

    if (
      res[1] === "bolts" ||
      res[1] === "arrow" ||
      res[res.length - 1] === "knife" ||
      res[res.length - 1] === "rune" ||
      res[res.length - 1] === "dart" ||
      res[res.length - 1] === "javelin" ||
      res[1] === "rack" ||
      res[res.length - 1] === "tar" ||
      res[res.length - 1] === "bolts"
    ) {
      setBox4Disabled(true);
    } else {
      setBox4Disabled(false);
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
              <button
                className={`${stl.tabBox} ${box4Disabled ? "" : stl.grayed}`}
                onClick={() => addToFavoriteTab(1)}
                disabled={box4Disabled ? false : true}
              >
                Tab 1
              </button>
              <button
                className={`${stl.tabBox} ${box4Disabled ? "" : stl.grayed}`}
                onClick={() => addToFavoriteTab(2)}
                disabled={box4Disabled ? false : true}
              >
                Tab 2
              </button>
              <button
                className={`${stl.tabBox} ${box4Disabled ? "" : stl.grayed}`}
                onClick={() => addToFavoriteTab(3)}
                disabled={box4Disabled ? false : true}
              >
                Tab 3
              </button>
              <button
                className={`${stl.tabBox} ${box4Disabled ? stl.grayed : ""}`}
                onClick={() => addToFavoriteTab(4)}
                disabled={box4Disabled ? true : false}
              >
                Tab 4
              </button>
            </div>
            <span className={stl.error}>{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
