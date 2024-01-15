import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useContext } from "react";
import { PaginationContext } from "../../../utils/paginationstate/PaginationProvider";
import stl from "./SkillsTab.module.css";
import SKILLSGRIDLIST from "../../../utils/skillsgridlist";
import Pagination from "../pagination/Pagination";
import SKILLSROUTELIST from "../../../utils/skillsroutelist";

const SkillsTab = (props) => {
  const { setSubState } = useContext(PaginationContext);

  const routeComponents = SKILLSROUTELIST.map((skill) => (
    <Route
      key={skill.name}
      path={`${skill.path}`}
      element={React.createElement(skill.component, {
        skills: props.skills,
        skillsExp: props.skillsExp,
        playerName: props.playerName,
        setSkills: props.setSkills,
        setSkillsExp: props.setSkillsExp,
        setPlayerName: props.setPlayerName,
      })}
    />
  ));

  const handleTabOpen = (path) => {
    setSubState(path);
  };

  return (
    <>
      <Routes>
        {routeComponents}

        <Route
          path="/*"
          element={
            <>
              <div className={stl.adBar}>[ Advertisements ]</div>
              <Pagination />
              <div className={stl.modal}>
                <div className={stl.modalInner}>
                  {SKILLSGRIDLIST.map((skill) => (
                    <Link
                      key={skill.name}
                      onClick={() => handleTabOpen(skill.name)}
                      to={`${skill.path}`}
                      className={stl.skill}
                    >
                      <img
                        src={skill.icon}
                        alt={`${skill.name} Icon`}
                        className={stl.iconImg}
                      />
                      <span className={stl.skillName}>{skill.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
};

export default SkillsTab;
