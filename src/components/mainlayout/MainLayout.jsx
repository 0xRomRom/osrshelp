import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import stl from "./MainLayout.module.css";
import { useState } from "react";

const MainLayout = ({ children, ...props }) => {
  const [navFolded, setNavFolded] = useState(false);

  const hidden = props.hideScroll || (!navFolded && window.innerWidth < 1200);

  return (
    <>
      <Nav
        setMainState={props.setMainState}
        setSubState={props.setSubState}
        playerName={props.playerName}
        navFolded={navFolded}
        setNavFolded={setNavFolded}
      />
      <div className={`${stl.colWrap} ${hidden ? stl.noScroll : ""}`}>
        <div className={stl.app}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
