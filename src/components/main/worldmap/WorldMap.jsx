import stl from "./WorldMap.module.css";
import Pagination from "../pagination/Pagination";

const WorldMap = (props) => {
  return (
    <div className={stl.worldmap}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={props.mainState}
        subState={props.subState}
        setSubState={props.setSubState}
      />
    </div>
  );
};

export default WorldMap;
