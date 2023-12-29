import stl from "./Nav.module.css";
import logo from "../../assets/characters/Ancient_staff_equipped_male.webp";
import hometeleport from "../../assets/icons/Hometeleport.webp";
import stats from "../../assets/icons/Stats.webp";
import combatoptions from "../../assets/icons/Combatoptions.webp";
import gear from "../../assets/icons/Gear.webp";
import xptable from "../../assets/icons/Xptable.webp";
import donate from "../../assets/icons/Donate.webp";
import mills from "../../assets/icons/Mills.webp";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Nav = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;

    if (path === "/" || path === "/home") {
      props.setActiveTab("/");
      props.setMainState("Home");
      props.setSubState(null);
    }
    if (path === "/skillcalculators") {
      props.setActiveTab("skills");
      props.setMainState("Skillcalculators");
    }
    if (path === "/gearcalculator") {
      props.setActiveTab("gearcalculator");
      props.setMainState("Gearcalculator");
      props.setSubState(null);
    }
    if (path === "/xptable") {
      props.setActiveTab("xptable");
      props.setMainState("XP Table");
      props.setSubState(null);
    }
    window.scrollTo(0, 0);
  }, [location, props]);

  const handleTabSwitch = (path) => {
    navigate(path);
  };

  return (
    <div className={stl.modal}>
      <div className={stl.logo} onClick={() => handleTabSwitch("/")}>
        <img src={logo} alt="OSRS Help logo" className={stl.logoIcon} />
        <span className={stl.logoSpan}>OSRS Help</span>
      </div>

      <div className={stl.loggedUser}>
        {props.playerName && (
          <>
            <div className={stl.blueDot}></div>
            <span className={stl.loggedInUser}>{props.playerName}</span>
          </>
        )}
      </div>
      <nav className={stl.nav}>
        <ul className={stl.navlist}>
          <Link to="/" className={stl.link}>
            <li
              className={`${stl.navitem} ${
                props.activeTab === "/" ? stl.active : ""
              }`}
              onClick={() => handleTabSwitch("/")}
            >
              <img
                src={hometeleport}
                alt="Home Teleport Icon"
                className={stl.icon}
              />
              Home
            </li>
          </Link>
          <Link to="/skillcalculators" className={stl.link}>
            <li
              className={`${stl.navitem} ${
                props.activeTab === "skills" ? stl.active : ""
              }`}
              onClick={() => handleTabSwitch("/skillcalculators")}
            >
              <img src={stats} alt="Skills Icon" className={stl.icon} />
              Skill Calculators
            </li>
          </Link>

          <Link to="/gearcalculator" className={stl.link}>
            <li
              className={`${stl.navitem} ${
                props.activeTab === "gearcalculator" ? stl.active : ""
              }`}
              onClick={() =>
                handleTabSwitch("gearcalculator", "Gear Calculator")
              }
            >
              <img src={gear} alt="Gear Icon" className={stl.icon} />
              Gear Calculator
            </li>
          </Link>
          <li
            className={`${stl.navitem} ${
              props.activeTab === "moneymakers" ? stl.active : ""
            }`}
            onClick={() => handleTabSwitch("moneymakers", "Money Makers")}
          >
            <img src={mills} alt="Millions Icon" className={stl.icon} />
            Money Makers
          </li>
          <li
            className={`${stl.navitem} ${
              props.activeTab === "xptable" ? stl.active : ""
            }`}
            onClick={() => handleTabSwitch("xptable", "XP Table")}
          >
            <img src={xptable} alt="XP Icon" className={stl.icon} />
            XP Table
          </li>
          <li
            className={`${stl.navitem} ${
              props.activeTab === "combat" ? stl.active : ""
            }`}
            onClick={() => handleTabSwitch("combat", "Combat Calculators")}
          >
            <img src={combatoptions} alt="Combat Icon" className={stl.icon} />
            Combat Calculator
          </li>
          <li
            className={`${stl.navitem} ${
              props.activeTab === "donate" ? stl.active : ""
            }`}
            onClick={() => handleTabSwitch("donate", "Donate")}
          >
            <img src={donate} alt="Donate Icon" className={stl.icon} />
            Donate
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
