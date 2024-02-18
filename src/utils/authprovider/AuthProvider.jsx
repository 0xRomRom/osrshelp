import { useEffect, useState, useCallback } from "react";
import { createContext } from "react";
import supabase from "../supabase/supabase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(false);
  const [premiumUser, setPremiumUser] = useState(null);
  const [userID, setUserID] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [storedUsername, setStoredUsername] = useState(null);

  const getPremium = useCallback(async (uid) => {
    const { data } = await supabase
      .from("users")
      .select("*")
      .eq("uid", uid)
      .single();
    if (data) {
      setStoredUsername(data.username);
    }
    if (data?.premium) {
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
