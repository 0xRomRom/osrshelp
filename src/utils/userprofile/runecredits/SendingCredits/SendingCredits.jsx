import stl from "./SendingCredits.module.css";
import { IoSend } from "react-icons/io5";
import { useState, useContext } from "react";
import supabase from "../../../supabase/supabase";
import { AuthContext } from "../../../authprovider/AuthProvider";
import Spinner from "../../../loadingspinner/Spinner";
const SendingCredits = ({ setSendingCredits, setCachedCredits }) => {
  const { userID, runeCredits } = useContext(AuthContext);
  const [amountToSend, setAmountToSend] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [error, setError] = useState("");
  const [transferSuccess, setTransferSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCreditTransfer = async () => {
    if (amountToSend === "" && receiverName === "") {
      setError("Both");
      return;
    }

    if (amountToSend === "") {
      setError("No amount");
      return;
    }

    if (runeCredits < +amountToSend) {
      setError("No amount");
      return;
    }
    setError("");

    let recipientUID = "";
    setLoading(true);
    try {
      //Check if user exists before sending credits
      const { data, error } = await supabase.from("users_meta").select("*");

      if (error) {
        throw new Error(error);
      }

      data.forEach((addy) => {
        if (
          addy.username &&
          addy.username.toLowerCase() === receiverName.toLowerCase()
        ) {
          recipientUID = addy.uid;
        }
      });

      if (!recipientUID) {
        setError("No username");
        setLoading(false);
        return;
      }

      //User exists, continue
    } catch (error) {
      console.error(error);
      alert("Error fetching username");
      setLoading(false);
    }

    const transferObject = {
      sender: userID,
      recipient: recipientUID,
      amount: +amountToSend,
    };

    try {
      await fetch(
        `https://tokentransferapi.netlify.app/.netlify/functions/server/transferfunds`,
        {
          method: "POST",
          body: JSON.stringify(transferObject),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setCachedCredits((prevState) => prevState - +amountToSend);
      setLoading(false);
      setTransferSuccess(true);
      setTimeout(() => {
        setTransferSuccess(true);
        setSendingCredits(false);
      }, 2500);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className={stl.sendingcredits}>
      {!transferSuccess && (
        <>
          <div className={stl.sendWrap}>
            <span className={stl.graySpan}>Send </span>
            <input
              type="number"
              placeholder="100"
              className={stl.inputStl}
              value={amountToSend}
              onChange={(e) => setAmountToSend(e.target.value)}
              style={{
                borderBottom:
                  error === "No amount" || error === "Both"
                    ? "1px solid red"
                    : "",
              }}
            />
          </div>
          <div className={stl.sendWrap}>
            <span className={stl.graySpan}>To</span>
            <input
              type="text"
              className={stl.inputStl}
              placeholder="King Rom II"
              value={receiverName}
              onChange={(e) => {
                setReceiverName(e.target.value);
                setError("");
              }}
              style={{
                borderBottom:
                  error === "No username" || error === "Both"
                    ? "1px solid red"
                    : "",
              }}
            />
          </div>
          <div className={stl.sendWrap}>
            <button
              className={`${stl.bottCta} ${stl.cancelCta}`}
              onClick={() => setSendingCredits(false)}
              disabled={loading ? true : false}
            >
              Cancel
            </button>

            <button className={stl.bottCta} onClick={handleCreditTransfer}>
              {loading ? (
                <div className={stl.spinnerWrapper}>
                  <Spinner className={stl.loadSpinner} />
                </div>
              ) : (
                <IoSend />
              )}
            </button>
          </div>
        </>
      )}
      {transferSuccess && (
        <div className={stl.success}>
          <span className={stl.credits}>Credits Transfered</span>
        </div>
      )}
    </div>
  );
};

export default SendingCredits;
