import stl from "./SupportOSRSHelp.module.css";
import Pagination from "../pagination/Pagination";

const SupportOSRSHelp = () => {
  return (
    <div className={stl.supportOsrsHelp}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination />
    </div>
  );
};

export default SupportOSRSHelp;
