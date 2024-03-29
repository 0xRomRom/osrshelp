import stl from "./Footer.module.css";
import logo from "../../assets/characters/Ancient_staff_equipped_male.webp";
import { Link } from "react-router-dom";

const Footer = () => {
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
          <Link to="/faq" className={stl.link}>
            <li className={stl.footLink}>FAQ</li>
          </Link>
          <Link to="/privacypolicy" className={stl.link}>
            <li className={stl.footLink}>Privacy policy</li>
          </Link>
          <Link to="/terms&conditions" className={stl.link}>
            <li className={stl.footLink}>Terms & Conditions</li>
          </Link>
          <Link to="/contact" className={stl.link}>
            <li className={stl.footLink}>Contact</li>
          </Link>
          <Link to="/reportissue" className={stl.link}>
            <li className={stl.footLink}>Report issue</li>
          </Link>
        </ul>
        <div className={stl.siteMapWrapper}>
          <span className={stl.footTitleSitemap}>Sitemap</span>
          <div className={stl.linksRow}>
            <ul className={stl.footCol}>
              <Link to="/" className={stl.link}>
                <li className={stl.footLink}>Home</li>
              </Link>
              <Link to="/skillcalculators" className={stl.link}>
                <li className={stl.footLink}>Skill Calculators</li>
              </Link>
              <Link to="/gearcalculator" className={stl.link}>
                <li className={stl.footLink}>Gear Calculator</li>
              </Link>
              <Link to="/inventorybuilder" className={stl.link}>
                <li className={stl.footLink}>Inventory Builder</li>
              </Link>
              <Link to="/combatcalculator" className={stl.link}>
                <li className={stl.footLink}>Combat Calculator</li>
              </Link>
            </ul>
            <ul className={stl.footCol}>
              <Link to="/moneymakers" className={stl.link}>
                <li className={stl.footLink}>Money Makers</li>
              </Link>
              <Link to="/profitalching" className={stl.link}>
                <li className={stl.footLink}>Profit Alching</li>
              </Link>

              <Link to="/xptable" className={stl.link}>
                <li className={stl.footLink}>XP Table</li>
              </Link>
              <Link to="/worldmap" className={stl.link}>
                <li className={stl.footLink}>World map</li>
              </Link>
              <Link to="/supportosrshelp" className={stl.link}>
                <li className={stl.footLink}>Support OSRS Help</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
