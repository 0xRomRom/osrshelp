import { useContext } from "react";
import stl from "./CtaBar.module.css";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import mainlogo from "../../../../assets/characters/Ancient_staff_equipped_male.webp";

const CtaBar = ({ spanData }) => {
  const { userID, premiumUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (!userID) {
      navigate("/login");
      return;
    }
    navigate("/checkout");
  };

  const handleContactPage = () => {
    navigate("/contact");
  };

  const handleReportIssue = () => {
    navigate("/reportissue");
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

  return (
    <div className={stl.ctaBar}>
      {!spanData && (
        <img src={mainlogo} alt="OSRS Help logo" className={stl.mainLogo} />
      )}
      {spanData === "3" && !premiumUser && (
        <button className={stl.signUpCta} onClick={handleSignUp}>
          Sign Up
        </button>
      )}
      {spanData === "4" && (
        <button className={stl.signUpCta} onClick={handleContactPage}>
          Contact Page
        </button>
      )}
      {spanData === "5" && (
        <button className={stl.signUpCta} onClick={handleReportIssue}>
          Report issue
        </button>
      )}
      {spanData === "6" && (
        <button className={stl.signUpCta} onClick={handleContactPage}>
          Contact Page
        </button>
      )}
      {spanData === "7" && (
        <div className={stl.btnWrapper}>
          <button className={stl.shareOnXCta} onClick={handleTweet}>
            <span className={stl.shareOnX}>Share on</span>
            <FaXTwitter className={stl.xIcon} />
          </button>
          <button className={stl.buyLobsterCta} onClick={handleBuyMeALobster}>
            <img
              src="./foods/Lobster.webp"
              alt="Lobster image"
              className={stl.lobsterIcon}
            />
            Buy me a lobster
          </button>
        </div>
      )}
    </div>
  );
};

export default CtaBar;
