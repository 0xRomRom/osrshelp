import stl from "./Donations.module.css";
import { useNavigate } from "react-router-dom";

const Donations = ({ setShowUserProfile }) => {
  const navigate = useNavigate();

  const handleDonateEther = () => {
    setShowUserProfile(false);
    navigate("/supportosrshelp");
  };

  return (
    <div className={stl.tile}>
      <span className={stl.graySpan}>Donations</span>
      <div className={stl.donationsCountBox}>
        <div
          className={`${stl.donateBlock} ${stl.lobsterBlock}`}
          onClick={() =>
            window.open("https://www.buymeacoffee.com/osrshelp", "_blank")
          }
        >
          <img
            src="./foods/Lobster.webp"
            alt="Lobster"
            className={stl.lobstericon}
          />
          <span className={stl.donateCount}>x 0</span>
        </div>

        <div
          className={`${stl.donateBlock} ${stl.etherBlock}`}
          onClick={handleDonateEther}
        >
          <img
            src="./random/Ethereum.svg"
            alt="Ethereum"
            className={stl.ethericon}
          />
          <span className={stl.ethCount}>0 ETH</span>
        </div>
      </div>
    </div>
  );
};

export default Donations;
