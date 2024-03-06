import stl from "./OptionTiles.module.css";
import { FaXTwitter } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";
import { useNavigate } from "react-router-dom";

const OptionTiles = ({ setEtherModal }) => {
  const navigate = useNavigate();
  const { userID } = useContext(AuthContext);

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
    <div className={stl.optionsBlock}>
      <div className={stl.option} onClick={handleBuyMeALobster}>
        <img
          src="/foods/Lobster.webp"
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
          src="/gearcalculator/helms/Saradomin_full_helm.webp"
          alt="Ethereum"
          className={stl.runeHelm}
        />
        <span className={stl.optionSpan}>
          Become a <span className={stl.rune}>Rune</span> user
        </span>
      </div>
    </div>
  );
};

export default OptionTiles;
