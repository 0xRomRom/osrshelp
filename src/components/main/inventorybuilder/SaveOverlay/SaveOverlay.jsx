import stl from "./SaveOverlay.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { useState } from "react";
import { ImBin } from "react-icons/im";

const grid = [
  {
    0: "Agility runs",
    data: [
      {
        0: "https://oldschool.runescape.wiki/images/Shark.png",
        noted: false,
        amount: 0,
      },
      {
        1: "",
        noted: false,
        amount: 0,
      },
      {
        2: "",
        noted: false,
        amount: 0,
      },
      {
        3: "",
        noted: false,
        amount: 0,
      },
      {
        4: "",
        noted: false,
        amount: 0,
      },
      {
        5: "",
        noted: false,
        amount: 0,
      },
      {
        6: "",
        noted: false,
        amount: 0,
      },
      {
        7: "",
        noted: false,
        amount: 0,
      },
      {
        8: "",
        noted: false,
        amount: 0,
      },
      {
        9: "",
        noted: false,
        amount: 0,
      },
      {
        10: "",
        noted: false,
        amount: 0,
      },
      {
        11: "",
        noted: false,
        amount: 0,
      },
      {
        12: "",
        noted: false,
        amount: 0,
      },
      {
        13: "",
        noted: false,
        amount: 0,
      },
      {
        14: "",
        noted: false,
        amount: 0,
      },
      {
        15: "",
        noted: false,
        amount: 0,
      },
      {
        16: "",
        noted: false,
        amount: 0,
      },
      {
        17: "",
        noted: false,
        amount: 0,
      },
      {
        18: "",
        noted: false,
        amount: 0,
      },
      {
        19: "",
        noted: false,
        amount: 0,
      },
      {
        20: "",
        noted: false,
        amount: 0,
      },
      {
        21: "",
        noted: false,
        amount: 0,
      },
      {
        22: "",
        noted: false,
        amount: 0,
      },
      {
        23: "",
        noted: false,
        amount: 0,
      },
      {
        24: "",
        noted: false,
        amount: 0,
      },
      {
        25: "",
        noted: false,
        amount: 0,
      },
      {
        26: "",
        noted: false,
        amount: 0,
      },
      {
        27: "",
        noted: false,
        amount: 0,
      },
    ],
  },
  {
    1: "",
    data: [],
  },
  {
    2: "",
    data: [],
  },
  {
    3: "",
    data: [],
  },
  {
    4: "",
    data: [],
  },
  {
    5: "",
    data: [],
  },
  {
    6: "",
    data: [],
  },
  {
    7: "",
    data: [],
  },
  {
    8: "",
    data: [],
  },
  {
    9: "",
    data: [],
  },
  {
    10: "",
    data: [],
  },
  {
    11: "",
    data: [],
  },
  {
    12: "",
    data: [],
  },
  {
    13: "",
    data: [],
  },
  {
    14: "",
    data: [],
  },
  {
    15: "",
    data: [],
  },
  {
    16: "",
    data: [],
  },
  {
    17: "",
    data: [],
  },
  {
    18: "",
    data: [],
  },
  {
    19: "",
    data: [],
  },
  {
    20: "",
    data: [],
  },
  {
    21: "",
    data: [],
  },
  {
    22: "",
    data: [],
  },
  {
    23: "",
    data: [],
  },
];

const SaveOverlay = ({ setSavingInventory, currentGrid }) => {
  const [selected, setSelected] = useState(null);
  const [savedBuilds, setSavedBuilds] = useState(grid);
  const closeModal = () => {
    setSavingInventory(false);
  };

  const handleSelect = (index) => {
    console.log(selected);
    console.log(index);
    if (index === selected) {
      setSelected(null);
      return;
    }
    setSelected(index);
  };

  return (
    <div className={stl.saveoverlay}>
      <div className={stl.modal}>
        <FaLongArrowAltLeft className={stl.closeBtn} onClick={closeModal} />
        {selected !== null && savedBuilds[selected][selected].length > 0 && (
          <ImBin className={stl.bin} />
        )}
        <div className={stl.upperBlock}>
          <div className={stl.inventoryGrid}>
            {savedBuilds.map((item, index) => {
              return (
                <div
                  className={`${stl.gridTile} ${
                    item[index].length > 0 ? stl.filled : ""
                  } ${selected === index ? stl.active : ""}`}
                  key={index}
                  onClick={() => handleSelect(index)}
                >
                  {item[index].length > 0 ? (
                    item[index]
                  ) : (
                    <CiSquarePlus className={stl.squareIcon} />
                  )}
                </div>
              );
            })}
          </div>
          <div className={stl.addBar}>
            <input
              type="text"
              className={stl.nameInput}
              placeholder="New inventory name"
            />
          </div>
          <div className={stl.savedBar}></div>
        </div>
      </div>
    </div>
  );
};

export default SaveOverlay;
