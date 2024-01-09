import { useEffect, useState, useCallback } from "react";
import { createContext } from "react";
import supabase from "../supabase/supabase";

export const PaginationContext = createContext();
const PaginationProvider = ({ children }) => {
  const [mainState, setMainState] = useState("Home");
  const [subState, setSubState] = useState(null);

  return (
    <PaginationContext.Provider
      value={{ mainState, setMainState, subState, setSubState }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationProvider;
