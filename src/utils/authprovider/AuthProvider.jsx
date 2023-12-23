import { useEffect, useState, useCallback } from "react";
import { createContext } from "react";
import supabase from "../supabase/supabase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [premiumUser, setPremiumUser] = useState(false);
  const [userID, setUserID] = useState(null);

  const getPremium = useCallback(async (uid) => {
    const { data } = await supabase
      .from("users")
      .select("premium")
      .eq("uid", uid)
      .single();

    if (data.premium) {
      setPremiumUser(true);
      console.log("--Premium User--");
    }
  }, []);

  useEffect(() => {
    if (userID) {
      getPremium(userID);
    }
  }, [userID, getPremium]);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        console.log(event);
        if (event === "INITIAL_SESSION") {
          setLoggedInUser(true);
          setUserID(session.user["id"]);
        }
        if (event === "SIGNED_OUT") {
          setLoggedInUser(false);
          setUserID(null);
        }
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ loggedInUser, setLoggedInUser, premiumUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
