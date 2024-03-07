import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import stl from "./MainLayout.module.css";

const MainLayout = ({ children, ...props }) => {
  return (
    <>
      <Nav
        setMainState={props.setMainState}
        setSubState={props.setSubState}
        playerName={props.playerName}
      />
      <div className={`${stl.colWrap} ${props.hideScroll ? stl.noScroll : ""}`}>
        <div className={stl.app}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
