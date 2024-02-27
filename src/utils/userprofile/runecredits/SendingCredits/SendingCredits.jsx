import stl from "./SendingCredits.module.css";
import { IoSend } from "react-icons/io5";
import { useState, useContext } from "react";
import supabase from "../../../supabase/supabase";
import { AuthContext } from "../../../authprovider/AuthProvider";

const SendingCredits = ({ setSendingCredits }) => {
  const { userID, runeCredits } = useContext(AuthContext);
  const [amountToSend, setAmountToSend] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [error, setError] = useState("");

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

    try {
      //Check if user exists before sending credits
      const { data, error } = await supabase.from("users_meta").select("*");

      if (error) {
        throw new Error(error);
      }

      data.forEach((addy) => {
        if (addy.username.toLowerCase() === receiverName.toLowerCase()) {
          recipientUID = addy.uid;
        }
      });

      if (!recipientUID) {
        setError("No username");
        return;
      }

      //User exists, continue
    } catch (error) {
      console.error(error);
      alert("Error fetching username");
    }

    const transferObject = {
      sender: userID,
      recipient: recipientUID,
      amount: +amountToSend,
    };

    try {
      await fetch(`netlifyurl`, {
        method: "POST",
        body: JSON.stringify(transferObject),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={stl.sendingcredits}>
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
              error === "No amount" || error === "Both" ? "1px solid red" : "",
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
        >
          Cancel
        </button>
        <button className={stl.bottCta} onClick={handleCreditTransfer}>
          <IoSend />
        </button>
      </div>
    </div>
  );
};

export default SendingCredits;
