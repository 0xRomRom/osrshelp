import stl from "./Main.module.css";
import Home from "./home/Home";
import SkillsTab from "./skills/SkillsTab";
import Pagination from "./pagination/Pagination";

const Main = (props) => {
  return (
    <div className={stl.main}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={props.mainState}
        subState={props.subState}
        setSubState={props.setSubState}
      />
      <div className={stl.content}>
        {props.activeTab === "home" && (
          <Home
            setSkills={props.setSkills}
            skills={props.skills}
            setSkillsExp={props.setSkillsExp}
            skillsExp={props.skillsExp}
            setPlayerName={props.setPlayerName}
            playerName={props.playerName}
          />
        )}
        {props.activeTab === "skills" && (
          <SkillsTab
            setSkills={props.setSkills}
            skills={props.skills}
            setSkillsExp={props.setSkillsExp}
            skillsExp={props.skillsExp}
            setPlayerName={props.setPlayerName}
            playerName={props.playerName}
            setSubState={props.setSubState}
            subState={props.subState}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
