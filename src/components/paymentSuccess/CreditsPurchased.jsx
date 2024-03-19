import stl from "./CreditsPurchased.module.css";
import { useNavigate } from "react-router-dom";
import parthat from "../../assets/random/Blue_partyhat.webp";
import { useEffect } from "react";

const CreditsPurchased = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.href.includes("intent")) {
      window.location.href = `${window.location.origin}/credits-purchased`;
    }
  }, []);

  return (
    <div className={stl.paymentSucces}>
      <div className={stl.modal}>
        <div className={stl.innerModal}>
          <img src={parthat} alt="Blue parthat" className={stl.phat} />
          <h1 className={stl.enjoy}>Credits Purchased Successfully</h1>

          <button className={stl.goHome} onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreditsPurchased;
