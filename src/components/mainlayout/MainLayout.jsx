import Nav from "../nav/Nav";
import Footer from "../footer/Footer";
import stl from "./MainLayout.module.css";

const MainLayout = ({ children, ...props }) => {
  return (
    <div className={stl.colWrap}>
      <div className={stl.flexWrap}>
        <Nav
          setActiveTab={props.setActiveTab}
          setMainState={props.setMainState}
          setSubState={props.setSubState}
          activeTab={props.ctiveTab}
          playerName={props.playerName}
        />
        <div className={stl.app}>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
