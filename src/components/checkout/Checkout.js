import stl from "./Checkout.module.css";
import { useNavigate } from "react-router-dom";
import mainLogo from "../../assets/characters/Ancient_staff_equipped_male.webp";

import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";

import CheckoutForm from "./checkoutForm/CheckoutForm";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { getAuth } from "firebase/auth";
import firebase from "../../utils/firebase";

const auth = getAuth(firebase);

const Checkout = () => {
  const navigate = useNavigate();

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(
      "https://osrshelpstripe.netlify.app/.netlify/functions/server/config"
    ).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    const uid = auth.currentUser.uid;
    fetch(
      "https://osrshelpstripe.netlify.app/.netlify/functions/server/create-payment-intent",
      {
        method: "POST",
        body: JSON.stringify({ uid: uid }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div className={stl.signup}>
      <div className={stl.homeBox} onClick={() => navigate("/")}>
        <img src={mainLogo} alt="OSRS Help logo" className={stl.osrshelpLogo} />
        <span className={stl.navLogoSpan}>OSRS Help</span>
      </div>
      <div className={stl.modal}>
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default Checkout;
