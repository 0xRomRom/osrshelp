import stl from "./CtaBar.module.css";
import { ImBin } from "react-icons/im";
import { FaCameraRetro, FaSav } from "react-icons/fa";
import { FaSave } from "react-icons/fa";
import { BsFillShareFill } from "react-icons/bs";

const CtaBar = () => {
  return (
    <div className={stl.ctaBar}>
      <button>
        <ImBin className={stl.ctaIcon} />
        <span className={stl.infoSpan}>Clear</span>
      </button>
      <button>
        <FaCameraRetro className={stl.ctaIcon} />
        <span className={stl.infoSpan}>Screenshot</span>
      </button>
      <button>
        <FaSave className={stl.ctaIcon} />
        <span className={stl.infoSpan}>Save</span>
      </button>
      <button>
        <BsFillShareFill className={stl.ctaIcon} />
        <span className={stl.infoSpan}>Share</span>
      </button>
    </div>
  );
};

export default CtaBar;
