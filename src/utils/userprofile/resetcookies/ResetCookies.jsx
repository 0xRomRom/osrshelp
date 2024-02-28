import stl from "./ResetCookies.module.css";
import { FaDatabase } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const ResetCookies = () => {
  const handleCookieReset = () => {
    document.cookie = "cookieConsent=false; max-age=0";
    window.location.reload();
  };

  return (
    <div className={stl.tile} onClick={handleCookieReset}>
      <span className={stl.graySpan}>Cookie Settings</span>
      <div className={stl.cookiesBox}>
        <span>Clear</span>
        <FaArrowRightLong className={stl.arrow} />
        <FaDatabase className={stl.cache} />
      </div>
    </div>
  );
};

export default ResetCookies;
