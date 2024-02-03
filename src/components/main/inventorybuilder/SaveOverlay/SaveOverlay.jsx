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
  const [newGearName, setNewGearName] = useState("");
  const [error, setError] = useState("");

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
          setSavedBuilds(grid);
          return;
        } else {
          const parsed = JSON.parse(data[0].saved_invs);
          setSavedBuilds(parsed);
        }
      } catch (err) {
        console.error(err);
      }
    };

    if (savedBuilds.length === 0) {
      gridFetcher();
    }
  }, [userID, savedBuilds.length]);

  const saveInventory = () => {
    setError("");
    if (!newGearName) {
      setError("Enter a name");
      return;
    }
    if (newGearName.length < 4) {
      setError("Name too short");
      return;
    }
    if (newGearName.length > 19) {
      setError("Name too long");
      return;
    }

    if (!selected) {
      setError("Select a slot");
      return;
    }
  };

  const setInventoryName = (e) => {
    const name = e.target.value;

    if (name.length > 3 && error === "Name too short") {
      setError("");
      return;
    }
    if (name.length < 20 && error === "Name too long") {
      setError("");
      return;
    }

    setNewGearName(name);
  };

  return (
    <div className={stl.saveoverlay}>
      <div className={stl.modal}>
        <FaLongArrowAltLeft className={stl.closeBtn} onClick={closeModal} />
        {selected !== null && savedBuilds[selected][selected].length > 0 && (
          <ImBin className={stl.bin} />
        )}
        <div className={stl.upperBlock}>
          <span className={stl.noTileError}>
            {error === "Select a slot" ? error : ""}
          </span>
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
            <span className={stl.inputError}>
              {error === "Name too short" ||
              error === "Name too long" ||
              error === "Enter a name"
                ? error
                : ""}
            </span>
            <input
              type="text"
              className={stl.nameInput}
              placeholder="New inventory name"
              onChange={(e) => setInventoryName(e)}
            />
          </div>
          <div className={stl.savedBar}>
            <button className={stl.modalCta} onClick={closeModal}>
              Cancel
            </button>
            <button className={stl.modalCta} onClick={saveInventory}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaveOverlay;
