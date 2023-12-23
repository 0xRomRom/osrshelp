import { useEffect, useState, useCallback } from "react";
import { createContext } from "react";
import supabase from "../supabase/supabase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [premiumUser, setPremiumUser] = useState(false);

  const getPremium = useCallback(async (uid) => {
    const { data } = await supabase
      .from("users")
      .select("premium")
      .eq("uid", uid)
      .single();
    if (data.premium) {
      setPremiumUser(true);
    } else {
      setPremiumUser(false);
    }
  }, []);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (session) {
        if (event === "INITIAL_SESSION") {
          setLoggedInUser(true);
          getPremium(session.user["id"]);
        }
        if (event === "SIGNED_OUT") {
          setLoggedInUser(false);
        }
        if (event === "SIGNED_IN") {
          setLoggedInUser(true);
          getPremium(session.user["id"]);
        }
      }
    });
  }, [getPremium]);

  return (
    <AuthContext.Provider
      value={{ loggedInUser, setLoggedInUser, premiumUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
