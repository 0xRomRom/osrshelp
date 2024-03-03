import stl from "./Nav.module.css";
import hometeleport from "../../assets/icons/Hometeleport.webp";
import stats from "../../assets/icons/Stats.webp";
import combatoptions from "../../assets/icons/Combatoptions.webp";
import gear from "../../assets/icons/Gear.webp";
import xptable from "../../assets/icons/Xptable.webp";
import mills from "../../assets/icons/Mills.webp";
import worldicon from "../../assets/icons/World_map_icon.webp";
import inventory from "../../assets/icons/Inventory.webp";
import scroll from "../../assets/icons/Scroll.webp";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { PaginationContext } from "../../utils/paginationstate/PaginationProvider";
import mainlogo from "../../assets/characters/Ancient_staff_equipped_male.webp";
import { IoIosArrowBack } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Nav = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("/");
  const { setMainState, setSubState } = useContext(PaginationContext);
  const [navFolded, setNavFolded] = useState(false);

  const path = location.pathname;

  useEffect(() => {
    if (
      window.location.href.includes("payment_intent") ||
      window.location.href.includes("secret")
      // || window.location.href.includes("access_token")
    ) {
      window.location.href = `${window.location.origin}/#/`;
    }
  }, []);

  useEffect(() => {
    setSubState(null);

    if (path === "/" || path === "/home") {
      setActiveTab("/");
      setMainState("Home");
      setSubState(null);
    }
    if (path.includes("/skillcalculators")) {
      setActiveTab("skills");
      setMainState("Skill Calculators");
    }
    if (path.includes("/blog")) {
      setActiveTab("blog");
      setMainState("Blog");
    }
    if (path.includes("/inventorybuilder")) {
      setActiveTab("inventorybuilder");
      setMainState("Inventory Builder");
    }
    if (path.includes("/gearcalculator")) {
      setActiveTab("gearcalculator");
      setMainState("Gear Calculator");
    }
    if (path.includes("/xptable")) {
      setActiveTab("xptable");
      setMainState("XP Table");
    }
    if (path.includes("/moneymakers")) {
      setActiveTab("moneymakers");
      setMainState("Money Makers");
    }
    if (path.includes("/combatcalculator")) {
      setActiveTab("combatcalculator");
      setMainState("Combat Calculator");
    }
    if (path.includes("/worldmap")) {
      setActiveTab("worldmap");
      setMainState("World map");
    }
    if (path.includes("/profitalching")) {
      setActiveTab("profitalching");
      setMainState("Profit Alching");
    }
    if (path.includes("/supportosrshelp")) {
      setActiveTab("supportosrshelp");
      setMainState("Support OSRS Help");
    }

    window.scrollTo(0, 0);
  }, [path, props, setMainState, setSubState]);

  const handleTabSwitch = (path) => {
    navigate(path);
  };

  const toggleNavFold = () => {
    setNavFolded(!navFolded);
  };

  return (
    <div className={`${stl.modal}  ${navFolded ? stl.foldedNav : ""}`}>
      <div className={stl.homeBox} onClick={() => navigate("/")}>
        <div className={stl.logoWrapper}>
          <img
            src={mainlogo}
            alt="OSRS Help logo"
            className={stl.osrshelpLogo}
          />
          <span
            className={stl.navLogoSpan}
            style={{ opacity: navFolded ? "0" : "1" }}
          >
            OSRS Help
          </span>
        </div>
      </div>

      <div
        className={stl.loggedUser}
        style={{
          opacity: props.playerName ? "1" : "0",
        }}
      >
        {!navFolded && (
          <>
            <div className={stl.blueDot}></div>
            <span className={stl.loggedInUser}>{props.playerName}</span>
          </>
        )}
      </div>
      <nav className={stl.nav}>
        <div
          className={stl.borderHugger}
          style={{ right: navFolded ? "-34px" : "-31px" }}
        >
          <div className={stl.foldNavBtn} onClick={toggleNavFold}>
            <IoIosArrowBack
              className={stl.foldNav}
              style={{
                transform: navFolded ? "rotate(180deg)" : "rotate(0deg)",
              }}
            />
          </div>
        </div>
        <ul className={`${stl.navlist} ${navFolded ? stl.foldedList : ""}`}>
          <Link to="/" className={stl.link}>
            <li
              className={`${stl.navitem} ${navFolded ? stl.navFold : ""} ${
                activeTab === "/" ? stl.active : ""
              }`}
              onClick={() => handleTabSwitch("/")}
            >
              <img
                src={hometeleport}
                alt="Home Teleport Icon"
                className={stl.icon}
              />
              <span
                className={`${stl.navTxt} ${navFolded ? stl.textHidden : ""}`}
              >
                Home
              </span>
            </li>
          </Link>
          <Link to="/skillcalculators" className={stl.link}>
            <li
              className={`${stl.navitem} ${navFolded ? stl.navFold : ""} ${
                activeTab === "skills" ? stl.active : ""
              }`}
              onClick={() => handleTabSwitch("/skillcalculators")}
            >
              <img src={stats} alt="Skills Icon" className={stl.icon} />
              <span
                className={`${stl.navTxt} ${navFolded ? stl.textHidden : ""}`}
              >
                Skill Calculators
              </span>
            </li>
          </Link>

          <Link to="/gearcalculator" className={stl.link}>
            <li
              className={`${stl.navitem} ${navFolded ? stl.navFold : ""} ${
                activeTab === "gearcalculator" ? stl.active : ""
              }`}
              onClick={() =>
                handleTabSwitch("gearcalculator", "Gear Calculator")
              }
            >
              <img src={gear} alt="Gear Icon" className={stl.icon} />
              <span
                className={`${stl.navTxt} ${navFolded ? stl.textHidden : ""}`}
              >
                Gear Calculator
              </span>
            </li>
          </Link>

          <Link to="/inventorybuilder" className={stl.link}>
            <li
              className={`${stl.navitem} ${navFolded ? stl.navFold : ""} ${
                activeTab === "inventorybuilder" ? stl.active : ""
              }`}
              onClick={() =>
                handleTabSwitch("inventorybuilder", "Inventory Builder")
              }
            >
              <img src={inventory} alt="Inventory Icon" className={stl.icon} />
              <span
                className={`${stl.navTxt} ${navFolded ? stl.textHidden : ""}`}
              >
                Inventory Builder
              </span>
            </li>
          </Link>

          <Link to="/combatcalculator" className={stl.link}>
            <li
              className={`${stl.navitem} ${navFolded ? stl.navFold : ""} ${
                activeTab === "combatcalculator" ? stl.active : ""
              }`}
              onClick={() =>
                handleTabSwitch("combatcalculator", "Combat Calculator")
              }
            >
              <img src={combatoptions} alt="Combat Icon" className={stl.icon} />
              <span
                className={`${stl.navTxt} ${navFolded ? stl.textHidden : ""}`}
              >
                Combat Calculator
              </span>
            </li>
          </Link>
          <Link to="/moneymakers" className={stl.link}>
            <li
              className={`${stl.navitem} ${navFolded ? stl.navFold : ""} ${
                activeTab === "moneymakers" ? stl.active : ""
              }`}
              onClick={() => handleTabSwitch("moneymakers", "Money Makers")}
            >
              <img src={mills} alt="Millions Icon" className={stl.icon} />
              <span
                className={`${stl.navTxt} ${navFolded ? stl.textHidden : ""}`}
              >
                Money Makers
              </span>
            </li>
          </Link>
          <Link to="/profitalching" className={stl.link}>
            <li
              className={`${stl.navitem} ${navFolded ? stl.navFold : ""} ${
                activeTab === "profitalching" ? stl.active : ""
              }`}
              onClick={() => handleTabSwitch("profitalching", "Profit Alching")}
            >
              <img
                src="/staves/Staff_of_fire.webp"
                alt="Staff of fire icon"
                className={stl.icon}
              />
              <span
                className={`${stl.navTxt} ${navFolded ? stl.textHidden : ""}`}
              >
                Profit Alching
              </span>
            </li>
          </Link>

          <Link to="/xptable" className={stl.link}>
            <li
              className={`${stl.navitem} ${navFolded ? stl.navFold : ""} ${
                activeTab === "xptable" ? stl.active : ""
              }`}
              onClick={() => handleTabSwitch("xptable", "XP Table")}
            >
              <img src={xptable} alt="XP Icon" className={stl.icon} />
              <span
                className={`${stl.navTxt} ${navFolded ? stl.textHidden : ""}`}
              >
                XP Table
              </span>
            </li>
          </Link>
          <Link to="/worldmap" className={stl.link}>
            <li
              className={`${stl.navitem} ${navFolded ? stl.navFold : ""} ${
                activeTab === "worldmap" ? stl.active : ""
              }`}
              onClick={() => handleTabSwitch("worldmap", "World map")}
            >
              <img src={worldicon} alt="World map icon" className={stl.icon} />
              <span
                className={`${stl.navTxt} ${navFolded ? stl.textHidden : ""}`}
              >
                World map
              </span>
            </li>
          </Link>
          <Link to="/blog" className={stl.link}>
            <li
              className={`${stl.navitem} ${navFolded ? stl.navFold : ""} ${
                activeTab === "blog" ? stl.active : ""
              }`}
              onClick={() => handleTabSwitch("blog", "Blog")}
            >
              <img src={scroll} alt="Blog icon" className={stl.icon} />
              <span
                className={`${stl.navTxt} ${navFolded ? stl.textHidden : ""}`}
              >
                Blog
              </span>
            </li>
          </Link>
          <Link to="/supportosrshelp" className={stl.link}>
            <li
              className={`${stl.navitem} ${navFolded ? stl.navFold : ""} ${
                activeTab === "supportosrshelp" ? stl.active : ""
              }`}
              onClick={() =>
                handleTabSwitch("supportosrshelp", "Support OSRS Help")
              }
            >
              <img
                src="/skillicons/Hitpoints.webp"
                alt="World map icon"
                className={stl.icon}
              />
              <span
                className={`${stl.navTxt} ${navFolded ? stl.textHidden : ""}`}
              >
                Support OSRS Help
              </span>
            </li>
          </Link>
        </ul>
      </nav>
      <div className={`${stl.fixedBox} ${navFolded ? stl.colCtas : ""}`}>
        <a
          href="https://twitter.com/OldschoolRSHelp"
          target="_blank"
          rel="noreferrer"
        >
          <button className={stl.fixedCta}>
            <RiTwitterXLine className={stl.twitter} />
          </button>
        </a>

        <a
          href="https://www.buymeacoffee.com/osrshelp"
          target="_blank"
          rel="noreferrer"
        >
          <button className={stl.fixedCta}>
            <img
              src="./foods/Lobster.webp"
              alt="Lobster"
              className={stl.lobsterIcon}
            />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Nav;
