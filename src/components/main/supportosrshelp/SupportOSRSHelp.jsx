import stl from "./SupportOSRSHelp.module.css";
import Pagination from "../pagination/Pagination";

const SupportOSRSHelp = () => {
  return (
    <div className={stl.supportOsrsHelp}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination />
      <div className={stl.modalWrap}>
        <div className={stl.supportModal}></div>
      </div>
    </div>
  );
};

export default SupportOSRSHelp;
