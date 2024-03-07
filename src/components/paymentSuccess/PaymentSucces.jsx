import stl from "./PaymentSucces.module.css";
import { useNavigate } from "react-router-dom";
import parthat from "../../assets/random/Blue_partyhat.webp";
import { useEffect } from "react";
import Spinner from "../../utils/loadingspinner/Spinner";
import { useState } from "react";

const PaymentSucces = () => {
  const [loadingDone, setLoadingDone] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.href.includes("intent")) {
      window.location.href = `${window.location.origin}/successful-payment`;
    }
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingDone(true);
    }, 12500);

    return () => clearTimeout(timeout);
  }, [setLoadingDone]);

  return (
    <div className={stl.paymentSucces}>
      <div className={stl.modal}>
        <div className={stl.innerModal}>
          <img src={parthat} alt="Blue parthat" className={stl.phat} />
          <h1 className={stl.enjoy}>
            Enjoy <span className={stl.rune}>lifetime</span> access to all{" "}
            <br />
            OSRS Help features!
          </h1>
          {!loadingDone && (
            <button
              className={stl.goHome}
              style={{
                backgroundColor: !loadingDone ? "rgb(189, 41, 189)" : "white",
                pointerEvents: !loadingDone ? "none" : "initial",
              }}
            >
              <Spinner />
              <span className={stl.upgrading}> Upgrading</span>
            </button>
          )}

          {loadingDone && (
            <button className={stl.goHome} onClick={() => navigate("/")}>
              Home
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaymentSucces;
