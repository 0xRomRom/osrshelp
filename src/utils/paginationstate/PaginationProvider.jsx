import { useState } from "react";
import { createContext } from "react";

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
