import stl from "./Checkout.module.css";

import { Elements } from "@stripe/react-stripe-js";
import { useState } from "react";

import CheckoutForm from "./checkoutForm/CheckoutForm";
import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";

import { useContext } from "react";
import { AuthContext } from "../../utils/authprovider/AuthProvider";
import HomeButton from "../../utils/homebutton/HomeButton";

const Checkout = () => {
  const { userID } = useContext(AuthContext);

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(
      "https://osrshelpstripe.netlify.app/.netlify/functions/server/config"
    ).then(async (r) => {
      const { publishableKey } = await r.json();
      console.log(publishableKey);
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    const uid = userID;
    console.log(uid);
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
      console.log(clientSecret);
      setClientSecret(clientSecret);
    });
  }, [userID]);

  return (
    <div className={stl.signup}>
      <HomeButton />
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
