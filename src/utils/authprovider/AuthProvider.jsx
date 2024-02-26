import { useEffect, useState, useCallback } from "react";
import { createContext } from "react";
import supabase from "../supabase/supabase";

export const AuthContext = createContext();
const AuthProvider = ({ children, ...props }) => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [premiumUser, setPremiumUser] = useState(null);
  const [userID, setUserID] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [storedUsername, setStoredUsername] = useState(null);
  const [storedColor, setStoredColor] = useState("#808080");
  const [lobsterDonateCount, setLobsterDonateCount] = useState(null);
  const [ethereumDonateCount, setEthereumDonateCount] = useState(null);
  const [runeCredits, setRuneCredits] = useState(null);

  const getPremium = useCallback(async (uid) => {
    console.log(uid);
    try {
      const { data } = await supabase
        .from("users")
        .select("*")
        .eq("uid", uid)
        .single();

      if (data) {
        setEthereumDonateCount(data.etherdonate);
        setLobsterDonateCount(data.lobsterdonate);
        setRuneCredits(data.runecredits);
      }
      if (data?.premium) {
        setPremiumUser(true);
      } else {
        setPremiumUser(false);
      }
    } catch (err) {
      console.error(err);
    }

    try {
      const { data } = await supabase
        .from("users_meta")
        .select("*")
        .eq("uid", uid)
        .single();
      console.log(data);

      if (data) {
        props.setPlayerName(data.username);
        setStoredUsername(data.username);
        setStoredColor(data.usercolor);
      }
    } catch (err) {
      console.error(err);
      props.setPlayerName("");
      setStoredUsername("");
      setStoredColor("#808080");
    }
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        if (event === "INITIAL_SESSION") {
          setLoggedInUser(true);
          getPremium(session.user["id"]);
          setUserID(session.user["id"]);
          setUserEmail(session.user.email);
        }
        if (event === "SIGNED_OUT") {
          setLoggedInUser(false);
          setUserID(null);
        }
        if (event === "SIGNED_IN") {
          setLoggedInUser(true);
          getPremium(session.user["id"]);
          setUserID(session.user["id"]);
          setUserEmail(session.user.email);
        }
      }
    });
  }, [getPremium]);

  return (
    <AuthContext.Provider
      value={{
        loggedInUser,
        setLoggedInUser,
        premiumUser,
        userID,
        userEmail,
        storedUsername,
        setStoredUsername,
        storedColor,
        setStoredColor,
        lobsterDonateCount,
        ethereumDonateCount,
        runeCredits,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
