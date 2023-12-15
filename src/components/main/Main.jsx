import stl from "./Main.module.css";
import Home from "./home/Home";
import SkillsTab from "./skills/SkillsTab";
import MoneyMakers from "./moneymakers/MoneyMakers";
import GearCalculator from "./gearcalculator/GearCalculator";
import { Routes, Route } from "react-router-dom";

const Main = (props) => {
  return (
    <div className={stl.main}>
      <div className={stl.content}>
        <Routes>
          <Route
            index
            path="/"
            element={
              <Home
                setSkills={props.setSkills}
                skills={props.skills}
                setSkillsExp={props.setSkillsExp}
                skillsExp={props.skillsExp}
                setPlayerName={props.setPlayerName}
                playerName={props.playerName}
                mainState={props.mainState}
                subState={props.subState}
                setSubState={props.setSubState}
              />
            }
          />
          <Route
            path="/skillcalculators"
            element={
              <SkillsTab
                setSkills={props.setSkills}
                skills={props.skills}
                setSkillsExp={props.setSkillsExp}
                skillsExp={props.skillsExp}
                setPlayerName={props.setPlayerName}
                playerName={props.playerName}
                mainState={props.mainState}
                subState={props.subState}
                setSubState={props.setSubState}
              />
            }
          />
          <Route
            path="/gearcalculator"
            element={
              <GearCalculator
                mainState={props.mainState}
                subState={props.subState}
                setSubState={props.setSubState}
              />
            }
          />
          <Route path="/moneymakers" element={<MoneyMakers />} />
        </Routes>
      </div>
    </div>
  );
};

export default Main;
