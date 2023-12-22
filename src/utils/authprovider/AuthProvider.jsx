import { useEffect, useState } from "react";
import { createContext } from "react";
import supabase from "../supabase/supabase";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({});

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        console.log("SIGNED_IN", session);
        setLoggedInUser(session.user);
        return;
      }
      setLoggedInUser({});
    });
  }, [setLoggedInUser]);

  useEffect(() => {
    console.log(loggedInUser);
  }, [loggedInUser]);

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
