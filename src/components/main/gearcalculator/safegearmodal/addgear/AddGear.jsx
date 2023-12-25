import { useEffect } from "react";
import stl from "./AddGear.module.css";

const AddGear = ({ bonusState }) => {
  useEffect(() => {
    console.log(bonusState);
  }, [bonusState]);

  return <div className={stl.addGear}></div>;
};

export default AddGear;
