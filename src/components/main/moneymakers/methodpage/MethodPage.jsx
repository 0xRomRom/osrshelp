import stl from "./MethodPage.module.css";
import Pagination from "../../pagination/Pagination";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import MONEYMAKERPAGES from "../../../../utils/moneymakers/moneymakerpages";
import SKILLICONOBJECT from "../../../../utils/skilliconobject";

const MethodPage = ({ setSubState }) => {
  const [methodState, setMethodState] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const methodName = location.pathname.replaceAll("_", " ").slice(13);

  useEffect(() => {
    MONEYMAKERPAGES.map((item) => {
      console.log(item.title);
      if (item.title === methodName) {
        setMethodState(item);
      }
    });
  }, [methodName]);

  const navigateBack = () => {
    navigate("/moneymakers");
  };

  const skills = methodState.skills;
  const items = methodState.items;
  const quests = methodState.quests;
  const other = methodState.other;

  return (
    <div className={stl.methodpage}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={"Money Makers"}
        setSubState={setSubState}
        subState={methodName}
        navTo={"/moneymakers"}
      />
      <div className={stl.modal}>
        <FaLongArrowAltLeft className={stl.closeBtn} onClick={navigateBack} />
        <div className={stl.headerBox}>
          <h1 className={stl.heroTitle}>{methodState.title}</h1>
          <img
            src={methodState.iconSrc}
            alt={methodState.title}
            className={stl.miniIcon}
          />
          <img
            src={methodState.headerImg}
            alt="Skill training location"
            className={stl.headerBanner}
          />
        </div>
        <div className={stl.reqsBox}>
          <span className={stl.reqsTitle}>Requirements</span>
          <div className={stl.reqBox}>
            <span className={stl.reqTitle}>Skills</span>
            <div className={stl.skillsList}>
              {Object.keys(methodState).length > 0 && (
                <>
                  {Object.entries(skills).map(([index, skillLevel]) => {
                    const skillNames = Object.keys(skillLevel);
                    const skillLevels = Object.entries(skillLevel)[0][1];

                    return (
                      <div key={index} className={stl.resultRow}>
                        <div className={stl.imgWrapper}>
                          <img
                            src={SKILLICONOBJECT[skillNames]}
                            alt="Skillicon"
                            className={stl.miniSkillIcon}
                          />
                        </div>
                        <span className={stl.reqLvl}>{skillLevels}</span>
                      </div>
                    );
                  })}
                </>
              )}
              {Object.keys(methodState).length === 0 ||
                (Object.keys(methodState.skills).length === 0 && (
                  <span className={stl.noRequirements}>No requirements</span>
                ))}
            </div>
          </div>

          <div className={stl.reqBox}>
            <span className={stl.reqTitle}>Items</span>
            <div className={stl.skillsList}>
              {Object.keys(methodState).length > 0 && (
                <div className={stl.columnWrap}>
                  {Object.entries(items).map(([index, skillLevel]) => {
                    const skillNames = Object.keys(skillLevel);
                    const skillLevels = Object.entries(skillLevel)[0][1];

                    return (
                      <div key={index} className={stl.skillList}>
                        <span className={stl.reqLvl}>{skillNames}</span>
                        <span className={stl.reqAmount}>
                          {skillLevels > 0 ? skillLevels + "x" : ""}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className={stl.reqBox}>
            <span className={stl.reqTitle}>Quests</span>
            <div className={stl.skillsList}>
              {Object.keys(methodState).length > 0 && (
                <div className={stl.columnWrap}>
                  {Object.entries(quests).map(([index, skillLevel]) => {
                    return (
                      <div key={index} className={stl.skillList}>
                        <span className={stl.reqAmount}>{skillLevel}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              {Object.keys(methodState).length === 0 ||
                (Object.keys(methodState.quests).length === 0 && (
                  <span className={stl.noRequirements}>No requirements</span>
                ))}
            </div>
          </div>
          <div className={stl.reqBox}>
            <span className={stl.reqTitle}>Other</span>
            <div className={stl.skillsList}>
              {Object.keys(methodState).length > 0 && (
                <div className={stl.columnWrap}>
                  {Object.entries(other).map(([index, skillLevel]) => {
                    return (
                      <div key={index} className={stl.skillList}>
                        <span className={stl.reqAmount}>{skillLevel}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              {Object.keys(methodState).length === 0 ||
                (Object.keys(methodState.other).length === 0 && (
                  <span className={stl.noRequirements}>No requirements</span>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodPage;
