import { useEffect, useState, useCallback } from "react";
import { createContext } from "react";
import supabase from "../supabase/supabase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [userID, setUserID] = useState(null);

  const getPremium = useCallback(async (uid) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("premium")
        .eq("uid", uid)
        .single();

      console.log(data);

      if (error) {
        throw new Error(error);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    if (userID) {
      getPremium(userID);
    }
  }, [userID, getPremium]);

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN") {
        console.log("SIGNED IN");

        // setLoggedInUser(session.user);
        setUserID(session.user["id"]);

        return;
      }
    });
  }, [setLoggedInUser, getPremium]);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
