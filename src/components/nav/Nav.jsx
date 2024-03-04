import stl from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { PaginationContext } from "../../utils/paginationstate/PaginationProvider";
import { IoIosArrowBack } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import hometeleport from "../../assets/icons/Hometeleport.webp";
import stats from "../../assets/icons/Stats.webp";
import combatoptions from "../../assets/icons/Combatoptions.webp";
import gear from "../../assets/icons/Gear.webp";
import xptable from "../../assets/icons/Xptable.webp";
import mills from "../../assets/icons/Mills.webp";
import worldicon from "../../assets/icons/World_map_icon.webp";
import inventory from "../../assets/icons/Inventory.webp";
import scroll from "../../assets/icons/Scroll.webp";
import mainlogo from "../../assets/characters/Ancient_staff_equipped_male.webp";
const navItems = [
  {
    path: "/",
    label: "Home",
    icon: hometeleport,
  },
  {
    path: "/skillcalculators",
    label: "Skill Calculators",
    icon: stats,
  },
  {
    path: "/gearcalculator",
    label: "Gear Calculator",
    icon: gear,
  },
  {
    path: "/inventorybuilder",
    label: "Inventory Builder",
    icon: inventory,
  },
  {
    path: "/combatcalculator",
    label: "Combat Calculator",
    icon: combatoptions,
  },
  {
    path: "/moneymakers",
    label: "Money Makers",
    icon: mills,
  },
  {
    path: "/profitalching",
    label: "Profit Alching",
    icon: "/staves/Staff_of_fire.webp",
  },
  {
    path: "/xptable",
    label: "XP Table",
    icon: xptable,
  },
  {
    path: "/worldmap",
    label: "World map",
    icon: worldicon,
  },
  {
    path: "/blog",
    label: "Blog",
    icon: scroll,
  },
  {
    path: "/supportosrshelp",
    label: "Support OSRS Help",
    icon: "/skillicons/Hitpoints.webp",
  },
];

const Nav = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("/");
  const { setMainState, setSubState } = useContext(PaginationContext);
  const [navFolded, setNavFolded] = useState(false);

  const path = location.pathname;
  const width = +window.innerWidth;

  useEffect(() => {
    setSubState(null);

    navItems.forEach((item) => {
      if (path.includes(item.path)) {
        setActiveTab(item.path);
        setMainState(item.label);
      }
    });

    window.scrollTo(0, 0);
  }, [path, setMainState, setSubState]);

  const handleTabSwitch = (path, label) => {
    setActiveTab(path);
    setMainState(label);
    navigate(path);
  };

  const toggleNavFold = () => {
    setNavFolded(!navFolded);
  };

  const renderNavItems = () => {
    return navItems.map((item, index) => (
      <Link to={item.path} className={stl.link} key={index}>
        <li
          className={`${stl.navitem} ${navFolded ? stl.navFold : ""} ${
            activeTab === item.path ? stl.active : ""
          }`}
          onClick={() => handleTabSwitch(item.path, item.label)}
        >
          <img
            src={item.icon}
            alt={`${item.label} Icon`}
            className={stl.icon}
          />
          <span className={`${stl.navTxt} ${navFolded ? stl.textHidden : ""}`}>
            {item.label}
          </span>
        </li>
      </Link>
    ));
  };

  return (
    <div className={`${stl.modal} ${navFolded ? stl.foldedNav : ""}`}>
      <div className={stl.homeBox} onClick={() => navigate("/")}>
        <div className={stl.logoWrapper}>
          <img
            src={mainlogo}
            alt="OSRS Help logo"
            className={`${stl.osrshelpLogo} ${navFolded ? stl.imgHidden : ""}`}
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
      <div
        className={`${stl.borderHugger} ${!navFolded ? stl.foldedRight : ""}`}
      >
        <div
          className={`${stl.foldNavBtn} ${
            navFolded ? stl.ctaLeft : stl.ctaRight
          }`}
          onClick={toggleNavFold}
        >
          <IoIosArrowBack
            className={stl.foldNav}
            style={{
              transform: navFolded ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </div>
      <nav className={stl.nav}>
        <ul
          className={`${stl.navlist} ${navFolded ? stl.foldedList : ""} ${
            navFolded && width < 800 ? stl.noInteract : ""
          }`}
        >
          {renderNavItems()}
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
              src="/foods/Lobster.webp"
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
