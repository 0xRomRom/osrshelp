import stl from "./PaymentModal.module.css";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../authprovider/AuthProvider";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutCreditsForm from "../../../../../components/checkout/checkoutForm/CheckoutCreditsForm";

const PaymentModal = () => {
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
    const amount = 999;
    console.log(uid);
    fetch(
      "https://osrshelpstripe.netlify.app/.netlify/functions/server/create-payment-intent",
      {
        method: "POST",
        body: JSON.stringify({ uid: uid, amount: amount }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(async (result) => {
      const { clientSecret } = await result.json();
      console.log(clientSecret);
      setClientSecret(clientSecret);
    });
  }, [userID]);

  return (
    <div className={stl.paymentmodal}>
      <div className={stl.modal}>
        {clientSecret && stripePromise && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutCreditsForm />
          </Elements>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
