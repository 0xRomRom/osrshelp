import stl from "./PaymentSucces.module.css";
import { useNavigate } from "react-router-dom";
import mainLogo from "../../assets/characters/Ancient_staff_equipped_male.webp";
import parthat from "../../assets/random/Blue_partyhat.webp";

const PaymentSucces = () => {
  const navigate = useNavigate();

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
