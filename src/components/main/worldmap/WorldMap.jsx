import stl from "./WorldMap.module.css";
import Pagination from "../pagination/Pagination";

import { MapContainer, ImageOverlay } from "react-leaflet";
import { RiFullscreenFill } from "react-icons/ri";
import { useState } from "react";

const WorldMap = () => {
  const [fullScreen, setFullScreen] = useState(false);
  // Define the bounds for your image
  const bounds = [
    [0, 0],
    [400, 400],
  ]; // Replace with your image's bounds

  const handleFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <div className={stl.worldmap}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination />
      <div
        className={`${stl.mapContainers} ${fullScreen ? stl.fullScreen : ""}`}
      >
        <MapContainer center={[70, 250]} zoom={4} className={stl.mapBox}>
          <ImageOverlay url="./worldmap/Worldmap.png" bounds={bounds} />
        </MapContainer>
        <RiFullscreenFill
          className={stl.fullScreenBtn}
          onClick={handleFullScreen}
        />
      </div>
    </div>
  );
};

export default WorldMap;
