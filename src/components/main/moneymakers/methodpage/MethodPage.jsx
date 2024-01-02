import stl from "./MethodPage.module.css";
import Pagination from "../../pagination/Pagination";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const MethodPage = ({ mainState, setSubState, subState }) => {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const navigateBack = () => {
    navigate("/moneymakers");
  };

  return (
    <div className={stl.methodpage}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={"Money Makers"}
        setSubState={setSubState}
        subState={location.pathname.replaceAll("_", " ").slice(13)}
        navTo={"/moneymakers"}
      />
      <div className={stl.modal}>
        <FaLongArrowAltLeft className={stl.closeBtn} onClick={navigateBack} />
      </div>
    </div>
  );
};

export default MethodPage;
