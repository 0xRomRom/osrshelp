import stl from "./SupportOSRSHelp.module.css";
import Pagination from "../pagination/Pagination";
import { FaXTwitter } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../../utils/authprovider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import EtherDonateForm from "./etherdonateform/EtherDonateForm";

const SupportOSRSHelp = () => {
  const navigate = useNavigate();
  const { userID } = useContext(AuthContext);
  const [etherModal, setEtherModal] = useState(true);

  const handleSignUp = () => {
    if (!userID) {
      navigate("/login");
      return;
    }
    navigate("/checkout");
  };

  const handleBuyMeALobster = () => {
    window.open("https://www.buymeacoffee.com/osrshelp", "_blank");
  };

  const handleTweet = () => {
    const tweetText = encodeURIComponent(
      "Check out https://www.osrshelp.com\nThey have great tools for #OSRS!"
    );
    const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

    window.open(tweetUrl, "_blank");
  };

  const openEtherModal = () => {
    setEtherModal(true);
  };

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
          {!etherModal && (
            <div className={stl.optionsBlock}>
              <div className={stl.option} onClick={handleBuyMeALobster}>
                <img
                  src="./foods/Lobster.webp"
                  alt="Lobster"
                  className={stl.lobsterImg}
                />
                <span className={stl.optionSpan}>Buy me a lobster</span>
              </div>
              <div className={stl.option} onClick={handleTweet}>
                <FaXTwitter className={stl.xIcon} />
                <span className={stl.optionSpan}>Tweet about us</span>
              </div>
              <div className={stl.option} onClick={openEtherModal}>
                <img
                  src="./random/Ethereum.svg"
                  alt="Ethereum"
                  className={stl.etherIcon}
                />
                <span className={stl.optionSpan}>Donate Ethereum</span>
              </div>
              <div className={stl.option} onClick={handleSignUp}>
                <img
                  src="./gearcalculator/helms/Saradomin_full_helm.webp"
                  alt="Ethereum"
                  className={stl.runeHelm}
                />
                <span className={stl.optionSpan}>
                  Become a <span className={stl.rune}>Rune</span> user
                </span>
              </div>
            </div>
          )}
          {etherModal && <EtherDonateForm setEtherModal={setEtherModal} />}
        </div>
        <div className={stl.supportersList}></div>
      </div>
    </div>
  );
};

export default SupportOSRSHelp;
