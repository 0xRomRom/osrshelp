import stl from "./InventoryGrid.module.css";
import { useEffect, useState, useRef } from "react";
import html2canvas from "html2canvas";

const InventoryGrid = ({
  currentGrid,
  setCurrentGrid,
  screenshotting,
  setScreenshotting,
}) => {
  const [selectedTile, setSelectedTile] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const targetDivRef = useRef(null);

  const deleteGridItem = (e) => {
    const deleteIndex = +e.target.dataset.index;
    let newGrid = [...currentGrid];

    newGrid[deleteIndex][deleteIndex] = "";
    newGrid[deleteIndex].noted = false;
    newGrid[deleteIndex].amount = 0;
    setCurrentGrid(newGrid);
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

  const swapTiles = (e, newItem) => {
    const currentTarget = +e.target.dataset.index;
    const newGrid = [...currentGrid];

    if (Object.values(newItem)[0] === Object.values(selectedTile)[0]) {
      unselectTile();
      return;
    }

    const temp = newGrid[selectedIndex];
    newGrid[selectedIndex] = newGrid[currentTarget];
    newGrid[currentTarget] = temp;

    const tempKey = Object.keys(newGrid[selectedIndex])[0];

    newGrid[selectedIndex] = {
      [Object.keys(newGrid[currentTarget])[0]]: Object.values(
        newGrid[selectedIndex]
      )[0],
      noted: Object.values(newGrid[currentTarget])[1],
      amount: Object.values(newGrid[currentTarget])[2],
    };

    newGrid[currentTarget] = {
      [tempKey]: Object.values(newGrid[currentTarget])[0],
      noted: Object.values(newGrid[currentTarget])[1],
      amount: Object.values(newGrid[currentTarget])[2],
    };

    setCurrentGrid(newGrid);
    setSelectedTile(null);
  };

  useEffect(() => {
    if (screenshotting) {
      const captureScreenshot = () => {
        if (targetDivRef.current) {
          html2canvas(targetDivRef.current, {
            logging: true,
            letterRendering: 1,
            allowTaint: false,
            useCORS: true,
          })
            .then((canvas) => {
              const imgData = canvas.toDataURL("image/webp");

              const downloadLink = document.createElement("a");
              downloadLink.href = imgData;
              downloadLink.download = "Inventory.webp";

              document.body.appendChild(downloadLink);
              downloadLink.click();

              document.body.removeChild(downloadLink);
            })
            .catch((error) => {
              console.error("Error capturing screenshot:", error);
            });
          setScreenshotting(false);
        }
      };
      captureScreenshot();
    }
  }, [screenshotting, setScreenshotting]);

  return (
    <div className={stl.inventorygrid} ref={targetDivRef}>
      <div className={stl.innerWrap}>
        {currentGrid.map((item, index) => {
          const imageSource = Object.values(item)[0];

          return (
            <div
              key={index}
              data-index={index}
              className={stl.itemSlot}
              onClick={(e) =>
                selectedTile ? swapTiles(e, item) : selectTile(e, item)
              }
              onDoubleClick={(e) => deleteGridItem(e)}
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
              {imageSource.length > 0 && !item.noted && (
                <img
                  src={imageSource}
                  alt={imageSource}
                  className={stl.tileImg}
                  data-index={index}
                />
              )}
              {imageSource.length > 0 && item.noted && (
                <div className={stl.imgTile} data-index={index}>
                  <span className={stl.noteAmount} data-index={index}>
                    {item.amount}
                  </span>
                  <img
                    src={imageSource}
                    alt={imageSource}
                    className={stl.tileImgNoted}
                    data-index={index}
                  />
                  <img
                    src="https://oldschool.runescape.wiki/images/Bank_note.png?b3d96"
                    alt="Banknote"
                    className={stl.tileImg}
                    data-index={index}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      <img
        src="./backgrounds/Inventory.png"
        alt="Oldschool Runescape Inventory"
        className={stl.inventory}
      />
    </div>
  );
};

export default InventoryGrid;
