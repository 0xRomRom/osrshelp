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
  const [selectedTile, setSelectedTile] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const fetchTables = async () => {
      try {
        const { data, error } = await supabase
          .from("item_favorites")
          .select("*")
          .eq("uid", userID);

        if (error) {
          console.error("Supabase error:", error.message);
          setFetchedTabs(tabs);
        } else {
          if (data.length === 0) {
            await supabase.from("item_favorites").insert([
              {
                uid: userID,
                favitems: JSON.stringify(tabs),
              },
            ]);
            setFetchedTabs(tabs);
          } else {
            setFetchedTabs(JSON.parse(data[0].favitems));
          }
        }
      } catch (err) {
        console.error("Fetch error:", err);
      }
    };

    if (Object.entries(fetchedTabs).length === 0) {
      fetchTables();
    }
  }, [userID, fetchedTabs]);

  const addToFavoriteTab = async (tab) => {
    setError("");

    const cachedState = { ...fetchedTabs };
    let exists = false;
    console.log(cachedState);
    cachedState[tab].forEach((item) => {
      const dotPngIndex = item.src.indexOf(".png");
      const result = item.src.substring(0, dotPngIndex + 4);

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
    const itemName = filteredString.replaceAll("_", " ");
    cachedState[tab].push({ src: favoritesImgSrc, name: itemName });
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
  };

  const deleteGridItem = (e) => {};

  const selectTile = (e, newItem) => {
    const currentTarget = +e.target.dataset.index;
    setSelectedTile(newItem);
    setSelectedIndex(currentTarget);
  };

  const unselectTile = () => {
    setSelectedTile(null);
    setSelectedIndex(null);
  };

  const swapTiles = (e, newItem) => {
    const currentTarget = +e.target.dataset.index;
    const newGrid = { ...fetchedTabs };
    const currentArray = newGrid[activeTab];
    const startImg = selectedTile.src;
    const endImg = newItem.src;
    let startIndex = 0;
    let endIndex = 0;

    currentArray.forEach((item, index) => {
      if (item.src === startImg) {
        startIndex = index;
      }
      if (item.src === endImg) {
        endIndex = index;
      }
    });
    console.log(currentArray);
    currentArray[startIndex] = { src: newItem.src, name: newItem.name };
    currentArray[endIndex] = { src: selectedTile.src, name: selectedTile.name };
    console.log(startIndex);
    console.log(endIndex);
    console.log(currentArray);

    if (
      selectedTile.src === newItem.src &&
      selectedTile.name === newItem.name
    ) {
      unselectTile();
      return;
    }
    setFetchedTabs(newGrid);
    setSelectedTile(null);
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
                      <div
                        className={stl.gridItem}
                        key={index}
                        onClick={(e) =>
                          selectedTile
                            ? swapTiles(e, item)
                            : selectTile(e, item)
                        }
                        onDoubleClick={(e) => deleteGridItem(e)}
                        data-index={index}
                        style={{
                          border:
                            selectedTile === item &&
                            selectedIndex === index &&
                            selectedTile
                              ? "1px solid rgb(33, 40, 54)"
                              : "",
                          backgroundColor:
                            selectedTile === item &&
                            selectedIndex === index &&
                            selectedTile
                              ? "rgba(55, 47, 42, 0.342)"
                              : "",
                          boxShadow:
                            selectedTile === item &&
                            selectedIndex === index &&
                            selectedTile
                              ? "0px 0px 3px rgba(55, 47, 42, 0.92)"
                              : "",
                        }}
                      >
                        <img
                          src={item.src}
                          alt={item.name}
                          className={stl.tileImg}
                          data-index={index}
                        />
                        <span className={stl.itemName} data-index={index}>
                          {item.name}
                        </span>
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
