import stl from "./TopAdBar.module.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../authprovider/AuthProvider";

const TopAdBar = () => {
  const { premiumUser } = useContext(AuthContext);

  useEffect(() => {
    console.log(premiumUser);
  }, [premiumUser]);
  return (
    <>
      <div
        className={stl.adbar}
        style={{ height: premiumUser === true ? "10px" : "105px" }}
      >
        {premiumUser === false && "[Advertisements]"}
      </div>
    </>
  );
};

export default TopAdBar;
