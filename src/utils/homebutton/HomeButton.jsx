import stl from "./HomeButton.module.css";
import { useNavigate } from "react-router-dom";
import mainLogo from "../../assets/characters/Ancient_staff_equipped_male.webp";

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <div className={stl.homeBox} onClick={() => navigate("/")}>
      <div className={stl.logoWrapper}>
        <img src={mainLogo} alt="OSRS Help logo" className={stl.osrshelpLogo} />
        <span className={stl.navLogoSpan}>OSRS Help</span>
      </div>
    </div>
  );
};

export default HomeButton;
