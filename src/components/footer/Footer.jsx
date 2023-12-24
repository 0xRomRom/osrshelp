import stl from "./Footer.module.css";
import logo from "../../assets/characters/Ancient_staff_equipped_male.webp";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const navTo = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <footer className={stl.footer}>
      <div className={stl.leftBlock}>
        <div className={stl.logo}>
          <img src={logo} alt="OSRS Help logo" className={stl.logoIcon} />
          <span className={stl.logoSpan}>OSRS Help</span>
        </div>
      </div>
      <div className={stl.rightBlock}>
        <ul className={stl.footCol}>
          <span className={stl.footTitle}>About</span>
          <li className={stl.footLink}>FAQ</li>
          <li className={stl.footLink}>Privacy policy</li>
          <li className={stl.footLink}>Terms & Conditions</li>
          <li className={stl.footLink}>Help</li>
          <li className={stl.footLink}>Report issue</li>
        </ul>
        <ul className={stl.footCol}>
          <span className={stl.footTitle}>Sitemap</span>
          <li className={stl.footLink} onClick={() => navTo("/home")}>
            Home
          </li>
          <li
            className={stl.footLink}
            onClick={() => navTo("/skillcalculators")}
          >
            Skill Calculators
          </li>
          <li className={stl.footLink} onClick={() => navTo("/gearcalculator")}>
            Gear Calculator
          </li>
          <li className={stl.footLink}>Money Makers</li>
          <li className={stl.footLink}>XP Table</li>
          <li className={stl.footLink}>Combat calculator</li>
          <li className={stl.footLink}>Donate</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
