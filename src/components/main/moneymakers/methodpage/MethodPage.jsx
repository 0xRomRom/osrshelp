import stl from "./MethodPage.module.css";
import Pagination from "../../pagination/Pagination";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import MONEYMAKERPAGES from "../../../../utils/moneymakers/moneymakerpages";
import SKILLICONOBJECT from "../../../../utils/skilliconobject";
import mills from "../../../../assets/icons/Mills.webp";
import { PaginationContext } from "../../../../utils/paginationstate/PaginationProvider";
import MainCanvas from "../../home/canvas/MainCanvas";

const ctaButtons = ["Skills", "Items", "Quests", "Other"];
const MethodPage = ({ moneyMaker }) => {
  const { setSubState } = useContext(PaginationContext);
  const [methodState, setMethodState] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  const methodName = location.pathname.replaceAll("_", " ").slice(13);
  const [activeTab, setActiveTab] = useState("Skills");

  useEffect(() => {
    if (!moneyMaker) {
      navigate("/moneymakers");
    }
    console.log(moneyMaker);
    MONEYMAKERPAGES.forEach((item) => {
      if (item.title === methodName) {
        setMethodState(item);
      }
    });
  }, [methodName, moneyMaker, navigate]);

  const navigateBack = () => {
    navigate("/moneymakers");
    setSubState(null);
  };

  const items = methodState.items;
  const quests = methodState.quests;
  const other = methodState.other;
  const notes = methodState.notes;

  return (
    <div className={stl.methodpage}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination navTo={"/moneymakers"} />
      <div className={stl.modal}>
        <FaLongArrowAltLeft className={stl.closeBtn} onClick={navigateBack} />
        <div className={stl.headerBox}>
          <h1 className={stl.heroTitle}>{methodState.title}</h1>
          <div className={stl.headerBannerWrap}>
            {moneyMaker?.imgSrc && (
              <MainCanvas
                sourceImgs={moneyMaker.imgSrc}
                minSpeed={0.2}
                maxSpeed={0.3}
                renderCount={10}
              />
            )}
          </div>
        </div>
        <div className={stl.contentWrapper}>
          <div className={stl.reqsBox}>
            <div className={stl.topWrapper}>
              <div className={stl.toggleBox}>
                {ctaButtons.map((btn) => (
                  <button
                    className={`${stl.toggleCta} ${
                      activeTab === btn ? stl.ctaActive : ""
                    }`}
                    key={btn}
                    onClick={() => setActiveTab(btn)}
                  >
                    {btn}
                  </button>
                ))}
              </div>
              {activeTab === "Skills" && (
                <div className={stl.reqBox}>
                  <div className={stl.skillsList}>
                    {methodState &&
                      methodState.skills &&
                      Object.keys(methodState.skills).length > 0 && (
                        <div className={stl.skillsBox}>
                          {methodState &&
                            Object.entries(methodState.skills).map(
                              (skill, index) => {
                                const skillNames = Object.keys(skill[1])[0];
                                const skillLevels = Object.values(skill[1])[0];

                                return (
                                  <div key={index} className={stl.resultRow}>
                                    <div className={stl.imgWrapper}>
                                      <img
                                        src={SKILLICONOBJECT[skillNames]}
                                        alt="Skillicon"
                                        className={stl.miniSkillIcon}
                                      />
                                    </div>
                                    <span className={stl.reqLvl}>
                                      {skillLevels}
                                    </span>
                                  </div>
                                );
                              }
                            )}
                        </div>
                      )}
                    {(!methodState.skills ||
                      Object.keys(methodState.skills).length === 0) && (
                      <span className={stl.noRequirements}>
                        No requirements
                      </span>
                    )}
                  </div>
                </div>
              )}

              {activeTab === "Items" && (
                <div className={stl.reqBox}>
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
                                {skillLevels > 0 ? "x" + skillLevels : ""}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </div>
              )}
              {activeTab === "Quests" && (
                <div className={stl.reqBox}>
                  <div className={stl.skillsList}>
                    {Object.keys(methodState).length > 0 && (
                      <div className={stl.columnWrap}>
                        {Object.entries(quests).map(([index, skillLevel]) => {
                          return (
                            <div key={index} className={stl.skillList}>
                              <span className={stl.questName}>
                                {skillLevel}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {Object.keys(methodState).length === 0 ||
                      (Object.keys(methodState.quests).length === 0 && (
                        <span className={stl.noRequirements}>
                          No requirements
                        </span>
                      ))}
                  </div>
                </div>
              )}
              {activeTab === "Other" && (
                <div className={stl.reqBox}>
                  <div className={stl.skillsList}>
                    {Object.keys(methodState).length > 0 && (
                      <div className={stl.columnWrap}>
                        {Object.entries(other).map(([index, skillLevel]) => {
                          return (
                            <div key={index} className={stl.skillList}>
                              <span className={stl.otherReqsSpan}>
                                {skillLevel}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                    {Object.keys(methodState).length === 0 ||
                      (Object.keys(methodState.other).length === 0 && (
                        <span className={stl.noRequirements}>
                          No requirements
                        </span>
                      ))}
                  </div>
                </div>
              )}
            </div>
            <div className={stl.profitBox}>
              <h2 className={stl.profitSpan}>Profit</h2>
              <div className={stl.profitCenter}>
                <img
                  src={mills}
                  alt="Millions of Oldschool Runescape gold"
                  className={stl.millsImg}
                />
                {moneyMaker && (
                  <span>{moneyMaker.profit.toLocaleString()}/h</span>
                )}
              </div>
            </div>
          </div>
          <div className={stl.storyBox}>
            <div className={stl.topWrap}>
              <div className={stl.locationBox}>
                <span className={stl.locationSpan}>{methodState.location}</span>
              </div>
              <div className={stl.instructionsBox}>
                {methodState &&
                  methodState.notes &&
                  Object.keys(methodState.instructions).length > 0 && (
                    <>
                      {methodState.instructions.map((story, index) => {
                        return (
                          <ul key={index} className={stl.mappedTaskList}>
                            <li className={stl.storyItem}>{story}</li>
                          </ul>
                        );
                      })}
                    </>
                  )}
              </div>
            </div>
            {methodState &&
              methodState.notes &&
              Object.keys(methodState.notes).length > 0 && (
                <div className={stl.notesBox}>
                  {notes.length > 0 && (
                    <>
                      <h2 className={stl.methodHero}>Notes</h2>
                      {methodState.notes.map((story, index) => {
                        return (
                          <ul key={index} className={stl.mappedTaskList}>
                            <li className={stl.storyItem}>{story}</li>
                          </ul>
                        );
                      })}
                    </>
                  )}
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodPage;
