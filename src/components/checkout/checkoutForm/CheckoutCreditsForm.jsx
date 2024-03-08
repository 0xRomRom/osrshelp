import { PaymentElement } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import stl from "./CheckoutCreditsForm.module.css";

const paymentPlans = {
  1000: "9.99",
  3000: "24.99",
  7000: "49.99",
};

const CheckoutCreditsForm = ({ purchaseAmount }) => {
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
          return_url: `${window.location.origin}/successful-payment`,
        },
      });
    } catch (err) {
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
        Purchase <span className={stl.purple}>{purchaseAmount}</span> Credits
      </span>
      <span className={stl.totalPrice}>
        For ${paymentPlans[purchaseAmount]}
      </span>
      <PaymentElement id="payment-element" className={stl.payElement} />
      <button
        disabled={isProcessing || !stripe || !elements}
        id="submit"
        className={stl.cta}
      >
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {message && (
        <div id="payment-message" className={stl.errorMsg}>
          {message}
        </div>
      )}
    </form>
  );
};

export default CheckoutCreditsForm;

// pi_3Okwj6IAQEobM5ok1zKdz4FB_secret_khyqMP9vEjWSXjaQYD7I0CSHu
