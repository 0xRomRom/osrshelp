import stl from "./PaymentSucces.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import mainLogo from "../../assets/characters/Ancient_staff_equipped_male.webp";
import parthat from "../../assets/random/Blue_partyhat.webp";
import { useEffect } from "react";

const PaymentSucces = ({ setPremiumUser }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Function to get URL parameters
    const getURLParams = () => {
      const searchParams = new URLSearchParams(location.search); // If using React Router, use location.search

      if (
        searchParams.has("payment_intent") &&
        searchParams.has("payment_intent_client_secret")
      ) {
        console.log("==SECURED==");
        setPremiumUser(true);
      }

      for (const param of searchParams) {
        console.log(`${param[0]}: ${param[1]}`);
      }
    };

    getURLParams();
  }, [location.search, setPremiumUser]);

  return (
    <div className={stl.paymentSucces}>
      <div className={stl.homeBox} onClick={() => navigate("/")}>
        <img src={mainLogo} alt="OSRS Help logo" className={stl.osrshelpLogo} />
        <span className={stl.navLogoSpan}>OSRS Help</span>
      </div>
      <div className={stl.modal}>
        <div className={stl.innerModal}>
          <img src={parthat} alt="Blue parthat" className={stl.phat} />
          <h1 className={stl.enjoy}>
            Enjoy <span className={stl.rune}>lifetime</span> access to all{" "}
            <br />
            OSRS Help features!
          </h1>
          <button className={stl.goHome} onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSucces;
