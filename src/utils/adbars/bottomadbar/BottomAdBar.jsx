import stl from "./BottomAdBar.module.css";
import { useContext } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";

const BottomAdBar = () => {
  const { premiumUser } = useContext(AuthContext);

  return (
    <>
      <div
        className={stl.adbar}
        style={{
          height: premiumUser === true ? "0px" : "105px",
          opacity: premiumUser === true ? "0" : "1",
        }}
      >
        [ Advertisements ]
      </div>
    </>
  );
};

export default BottomAdBar;
