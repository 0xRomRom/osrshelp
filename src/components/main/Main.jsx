import stl from "./Main.module.css";
import Home from "./home/Home";
import SkillsTab from "./skills/SkillsTab";
import Pagination from "./pagination/Pagination";
import MoneyMakers from "./moneymakers/MoneyMakers";
import GearCalculator from "./gearcalculator/GearCalculator";

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
        {props.activeTab === "moneymakers" && (
          <MoneyMakers
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
        {props.activeTab === "gearcalculator" && (
          <GearCalculator
            setSkills={props.setSkills}
            skills={props.skills}
            setSkillsExp={props.setSkillsExp}
            skillsExp={props.skillsExp}
            setPlayerName={props.setPlayerName}
            playerName={props.playerName}
          />
        )}
      </div>
    </div>
  );
};

export default Main;
