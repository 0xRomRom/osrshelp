import stl from "./SaveOverlay.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { useEffect, useState } from "react";
import { ImBin } from "react-icons/im";
import supabase from "../../../../utils/supabase/supabase";
import { useContext } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";

const grid = [
  {
    0: "",
    data: [],
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
  const { userID } = useContext(AuthContext);
  const [selected, setSelected] = useState(null);
  const [savedBuilds, setSavedBuilds] = useState([]);
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

  useEffect(() => {
    const gridFetcher = async () => {
      try {
        const { data, error } = await supabase
          .from("saved_inventories")
          .select("*")
          .eq("uid", userID);

        if (error) {
          throw new Error(error);
        }

        if (data.length === 0) {
          await supabase.from("saved_inventories").insert([
            {
              uid: userID,
              saved_invs: JSON.stringify(grid),
            },
          ]);
        }

        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (savedBuilds.length === 0) {
      gridFetcher();
    }
  }, []);

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
