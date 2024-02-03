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
  activeTab,
  setActiveTab,
  setNotedAmount,
  setNotedState,
  setAmountToAdd,
  currentGrid,
  setCurrentGrid,
  notedState,
  runesAmount,
  setRunesAmount,
  amountToAdd,
  notedAmount,
}) => {
  const { premiumUser, userID } = useContext(AuthContext);

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
    let res = filteredString.split("_");

    if (
      res[1] === "bolts" ||
      res[1] === "arrow" ||
      res[res.length - 1] === "knife" ||
      res[res.length - 1] === "rune" ||
      res[res.length - 1] === "dart" ||
      res[res.length - 1] === "javelin" ||
      res[1] === "rack" ||
      res[res.length - 1] === "tar" ||
      res[res.length - 1] === "bolts" ||
      res[2] === "bolts" ||
      !isNaN(res[res.length - 1])
    ) {
      if (res.length === 3) {
        if (!isNaN(res[res.length - 1])) {
          res.pop();
        }
      }
      if (res.length === 4) {
        res.pop();
      }
      if (res.length === 5) {
        res.pop();
        res.pop();
        res.push("(e)");
      }

      setBox4Disabled(true);
    } else {
      setBox4Disabled(false);
    }
    const itemName = res.join(" ");
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
    setBox4Disabled(true);
  };

  const deleteGridItem = async (deleteItem) => {
    const currentTabs = { ...fetchedTabs };
    const itemSrc = deleteItem.src;
    for (let i = 0; i < currentTabs[activeTab].length; i++) {
      if (currentTabs[activeTab][i].src === itemSrc) {
        currentTabs[activeTab].splice(i, 1);
      }
    }

    try {
      const { error } = await supabase
        .from("item_favorites")
        .update({
          favitems: JSON.stringify(currentTabs),
        })
        .eq("uid", userID);

      if (error) {
        alert("Failed to delete item");
        return;
      }
    } catch (err) {
      console.error(err);
    }
    setFetchedTabs(currentTabs);
  };

  const selectTile = (e, newItem) => {
    const currentTarget = +e.target.dataset.index;
    setSelectedTile(newItem);
    setSelectedIndex(currentTarget);
  };

  const unselectTile = () => {
    setSelectedTile(null);
    setSelectedIndex(null);
  };

  const swapTiles = async (e, newItem) => {
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
    currentArray[startIndex] = { src: newItem.src, name: newItem.name };
    currentArray[endIndex] = { src: selectedTile.src, name: selectedTile.name };

    if (
      selectedTile.src === newItem.src &&
      selectedTile.name === newItem.name
    ) {
      addToInv(newItem);
      unselectTile();
      return;
    }

    await supabase
      .from("item_favorites")
      .update({
        uid: userID,
        favitems: JSON.stringify(newGrid),
      })
      .eq("uid", userID);

    setFetchedTabs(newGrid);
    setSelectedTile(null);
  };

  const addToInv = (newItem) => {
    let updatedGrid = [...currentGrid];
    if (activeTab === 4) {
      addStackedItems(newItem);
      return;
    }

    if (notedState) {
      addNotedItems(newItem);
      return;
    }

    for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
      const gridValue = updatedGrid[i][i];

      if (gridValue.length === 0) {
        const cacheIndex = i;

        if (amountToAdd === "Fill") {
          for (let j = cacheIndex; j < 28; j++) {
            if (updatedGrid[j][j] !== "") {
              continue;
            }
            updatedGrid[j][j] = newItem.src;
          }
          setNotedState(false);
          setNotedAmount(null);
          setCurrentGrid(updatedGrid);
          break;
        }

        let added = 0;
        for (let j = cacheIndex; j < 28; j++) {
          if (j >= 28) {
            setNotedState(false);
            setNotedAmount(null);
            setCurrentGrid(updatedGrid);
            break;
          }
          if (updatedGrid[j][j] !== "") {
            continue;
          }
          if (added >= +amountToAdd) {
            setNotedState(false);
            setNotedAmount(null);
            setCurrentGrid(updatedGrid);
            break;
          }
          added++;
          updatedGrid[j][j] = newItem.src;
        }
        setNotedState(false);
        setNotedAmount(null);
        setCurrentGrid(updatedGrid);
        break;
      }
    }
    setNotedState(false);
    setNotedAmount(null);
    setAmountToAdd("1");
  };

  const addNotedItems = (newItem) => {
    if (!notedAmount) {
      return;
    }
    let updatedGrid = [...currentGrid];

    // Check for existing item to increment rather than duplicate
    for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
      const gridValue = updatedGrid[i][i];
      if (gridValue === newItem.src && updatedGrid[i].noted) {
        updatedGrid[i].amount += +notedAmount;

        setCurrentGrid(updatedGrid);
        setNotedAmount(null);
        setNotedState(false);

        return;
      }
    }

    // If no existing item, create new item
    for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
      const gridValue = updatedGrid[i][i];

      if (gridValue.length === 0) {
        const cacheIndex = i;

        updatedGrid[cacheIndex][cacheIndex] = newItem.src;
        updatedGrid[cacheIndex].noted = true;
        updatedGrid[cacheIndex].amount += +notedAmount;

        setCurrentGrid(updatedGrid);
        setNotedAmount(null);
        setNotedState(false);
        break;
      }
    }
  };

  const addStackedItems = (newItem) => {
    let updatedGrid = [...currentGrid];

    // Check for existing item to increment rather than duplicate
    for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
      const gridValue = updatedGrid[i][i];
      if (gridValue === newItem.src && updatedGrid[i].amount > 0) {
        updatedGrid[i].amount += +runesAmount;

        setCurrentGrid(updatedGrid);
        setNotedAmount(null);
        setNotedState(false);
        setRunesAmount(null);

        return;
      }
    }

    // If no existing item, create new item
    for (let i = 0; i < Object.keys(updatedGrid).length; i++) {
      const gridValue = updatedGrid[i][i];

      if (gridValue.length === 0) {
        const cacheIndex = i;

        updatedGrid[cacheIndex][cacheIndex] = newItem.src;
        updatedGrid[cacheIndex].noted = false;
        updatedGrid[cacheIndex].amount += +runesAmount;

        setCurrentGrid(updatedGrid);
        setNotedAmount(null);
        setNotedState(false);
        setRunesAmount(null);
        break;
      }
    }
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
                        onDoubleClick={() => deleteGridItem(item)}
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
