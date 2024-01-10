import stl from "./SupportOSRSHelp.module.css";
import Pagination from "../pagination/Pagination";

import { useState } from "react";
import OptionTiles from "./optiontiles/OptionTiles";

import EtherDonateForm from "./etherdonateform/EtherDonateForm";

const SupportOSRSHelp = () => {
  const [etherModal, setEtherModal] = useState(false);

  return (
    <div className={stl.supportOsrsHelp}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination />
      <div className={stl.modalWrap}>
        <div className={stl.supportModal}>
          <h1 className={stl.hero}>Support OSRS Help</h1>
          <p className={stl.supportPar}>
            Players like you help support the upkeep of this site.
            <br />
            Every contribution will be highly appreciated!
          </p>
          {!etherModal && <OptionTiles setEtherModal={setEtherModal} />}
          {etherModal && <EtherDonateForm setEtherModal={setEtherModal} />}
        </div>
      </div>
    </div>
  );
};

export default SupportOSRSHelp;
