import { PaymentElement } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import stl from "./CheckoutForm.module.css";
import partyhat from "../../../assets/random/Blue_partyhat.webp";

const CheckoutForm = () => {
  useEffect(() => {}, []);

  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsProcessing(true);
    try {
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          // Make sure to change this to your payment completion page
          // return_url: `https://osrshelp.netlify.app/#/successful-payment`,
          return_url: `${window.location.origin}#/successful-payment`,
        },
      });
      console.log(error);
    } catch (err) {
      console.error(err);
      if (err.type === "card_error" || err.type === "validation_error") {
        setMessage(err.message);
      } else {
        setMessage("An unexpected error occured.");
      }
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className={stl.payform}>
      <span className={stl.lifetime}>
        Lifetime for only <span className={stl.purple}>$9.99</span>
        <img src={partyhat} alt="Blue partyhat" className={stl.phat} />
      </span>
      <PaymentElement id="payment-element" />
      <button
        disabled={isProcessing || !stripe || !elements}
        id="submit"
        className={stl.cta}
      >
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {/* Show any error or success messages */}
      {message && (
        <div id="payment-message" className={stl.errorMsg}>
          {message}
        </div>
      )}
    </form>
  );
};

export default CheckoutForm;

// pi_3Okwj6IAQEobM5ok1zKdz4FB_secret_khyqMP9vEjWSXjaQYD7I0CSHu
