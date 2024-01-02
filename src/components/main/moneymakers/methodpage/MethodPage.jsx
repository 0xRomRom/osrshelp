import stl from "./MethodPage.module.css";
import Pagination from "../../pagination/Pagination";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MethodPage = () => {
  const navigate = useNavigate();

  const navigateBack = () => {
    navigate("/moneymakers");
  };

  return (
    <div className={stl.methodpage}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination />
      <div className={stl.modal}>
        <FaLongArrowAltLeft className={stl.closeBtn} onClick={navigateBack} />
      </div>
    </div>
  );
};

export default MethodPage;
