import stl from "./WorldMap.module.css";
import Pagination from "../pagination/Pagination";

import { MapContainer, ImageOverlay } from "react-leaflet";

const WorldMap = (props) => {
  // Define the bounds for your image
  const bounds = [
    [0, 0],
    [2000, 400],
  ]; // Replace with your image's bounds

  return (
    <div className={stl.worldmap}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={props.mainState}
        subState={props.subState}
        setSubState={props.setSubState}
      />
      <div className={stl.mapContainers}>
        <MapContainer
          center={[50, 50]}
          zoom={1}
          style={{ height: "100%", width: "100%", position: "relative" }} // Adjust dimensions as needed
        >
          <ImageOverlay url="./worldmap/Worldmap.png" bounds={bounds} />
          {/* Add your draggable elements or markers here */}
        </MapContainer>
      </div>
    </div>
  );
};

export default WorldMap;
