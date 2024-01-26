import stl from "./InventoryBuilder.module.css";

import Pagination from "../pagination/Pagination";

import { useState, useRef } from "react";
import { useEffect } from "react";

const InventoryBuilder = () => {
  return (
    <>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination />
    </>
  );
};

export default InventoryBuilder;
