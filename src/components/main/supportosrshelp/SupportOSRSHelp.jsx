import stl from "./SupportOSRSHelp.module.css";
import Pagination from "../pagination/Pagination";

import { useState } from "react";
import OptionTiles from "./optiontiles/OptionTiles";
import SupportersModal from "./supportersmodal/SupportersModal";

import EtherDonateForm from "./etherdonateform/EtherDonateForm";

// import TopAdBar from "../../../utils/adbars/topadbar/TopAdBar";
// import BottomAdBar from "../../../utils/adbars/bottomadbar/BottomAdBar";

const SupportOSRSHelp = () => {
  const [etherModal, setEtherModal] = useState(false);

  return (
    <div className={stl.supportOsrsHelp}>
      {/* <TopAdBar /> */}
      <Pagination />
      <div className={stl.modalWrap}>
        <div className={stl.supportModal}>
          <h1 className={stl.hero}>Support OSRS Help</h1>
          <p className={stl.supportPar}>Contribute to keep this site alive!</p>
          {!etherModal && <OptionTiles setEtherModal={setEtherModal} />}
          {etherModal && <EtherDonateForm setEtherModal={setEtherModal} />}
        </div>
        <SupportersModal />
      </div>
      {/* <BottomAdBar /> */}
    </div>
  );
};

export default SupportOSRSHelp;
