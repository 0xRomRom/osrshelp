import stl from "./PremiumBuilds.module.css";
import PremiumBanner from "../PremiumBanner/PremiumBanner";
import { useState } from "react";
// import PREMIUMBUILDS from "../../../../../utils/gearcalculator/prebuilds/premium/premiumBuilds";
import PVMBUILDS from "../../../../../utils/gearcalculator/prebuilds/premium/pvmBuilds";
import PVPBUILDS from "../../../../../utils/gearcalculator/prebuilds/premium/pvpBuilds";
import SKILLBUILDS from "../../../../../utils/gearcalculator/prebuilds/premium/skillBuilds";
import WILDYBUILDS from "../../../../../utils/gearcalculator/prebuilds/premium/wildyBuilds";
import RECOVERYBUILDS from "../../../../../utils/gearcalculator/prebuilds/premium/recoveryBuilds";

const PremiumBuilds = ({ premiumUser, handlePrebuildSetup }) => {
  const [activeBtn, setActiveBtn] = useState("All");

  const switchButton = (newBtn) => {
    setActiveBtn(newBtn);
  };

  return (
    <>
      {!premiumUser && (
        <div className={stl.premiumBlock}>
          <h3 className={stl.subHero}>Premium</h3>
          <PremiumBanner />
        </div>
      )}

      <div className={stl.premiumBox}>
        {premiumUser && (
          <>
            <div className={stl.topBar}>
              <h3 className={stl.subHero}>Premium</h3>
              <div className={stl.filterBar}>
                <button
                  className={`${stl.btn} ${
                    activeBtn === "All" ? stl.active : ""
                  }`}
                  onClick={() => switchButton("All")}
                >
                  All
                </button>
                <button
                  className={`${stl.btn} ${
                    activeBtn === "PVM" ? stl.active : ""
                  }`}
                  onClick={() => switchButton("PVM")}
                >
                  PVM
                </button>
                <button
                  className={`${stl.btn} ${
                    activeBtn === "PVP" ? stl.active : ""
                  }`}
                  onClick={() => switchButton("PVP")}
                >
                  PVP
                </button>
                <button
                  className={`${stl.btn} ${
                    activeBtn === "Skilling" ? stl.active : ""
                  }`}
                  onClick={() => switchButton("Skilling")}
                >
                  Skilling
                </button>

                <button
                  className={`${stl.btn} ${
                    activeBtn === "Wildy" ? stl.active : ""
                  }`}
                  onClick={() => switchButton("Wildy")}
                >
                  Wildy
                </button>
                <button
                  className={`${stl.btn} ${
                    activeBtn === "Recovery" ? stl.active : ""
                  }`}
                  onClick={() => switchButton("Recovery")}
                >
                  Recovery
                </button>
              </div>
            </div>
            <div className={stl.premiumWrapper}>
              {activeBtn === "All" && (
                <>
                  <div className={stl.typeBlock}>
                    <span className={stl.typeTitle}>PVM</span>
                    {PVMBUILDS.map((build) => {
                      const { itemState } = build;
                      return (
                        <div
                          className={stl.gridTile}
                          key={build.src + Math.random().toString()}
                          onClick={() => handlePrebuildSetup(itemState)}
                        >
                          <div className={stl.imgCenter}>
                            <img
                              src={build.src}
                              alt={build.alt}
                              className={stl.tileGear}
                            />
                          </div>

                          <span className={stl.gearName}>{build.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className={stl.typeBlock}>
                    <span className={stl.typeTitle}>PVP</span>
                    {PVPBUILDS.map((build) => {
                      const { itemState } = build;
                      return (
                        <div
                          className={stl.gridTile}
                          key={build.src + Math.random().toString()}
                          onClick={() => handlePrebuildSetup(itemState)}
                        >
                          <div className={stl.imgCenter}>
                            <img
                              src={build.src}
                              alt={build.alt}
                              className={stl.tileGear}
                            />
                          </div>

                          <span className={stl.gearName}>{build.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className={stl.typeBlock}>
                    <span className={stl.typeTitle}>Skilling</span>
                    {SKILLBUILDS.map((build) => {
                      const { itemState } = build;
                      return (
                        <div
                          className={stl.gridTile}
                          key={build.src + Math.random().toString()}
                          onClick={() => handlePrebuildSetup(itemState)}
                        >
                          <div className={stl.imgCenter}>
                            <img
                              src={build.src}
                              alt={build.alt}
                              className={stl.tileGear}
                            />
                          </div>

                          <span className={stl.gearName}>{build.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className={stl.typeBlock}>
                    <span className={stl.typeTitle}>Wildy</span>
                    {WILDYBUILDS.map((build) => {
                      const { itemState } = build;
                      return (
                        <div
                          className={stl.gridTile}
                          key={build.src + Math.random().toString()}
                          onClick={() => handlePrebuildSetup(itemState)}
                        >
                          <div className={stl.imgCenter}>
                            <img
                              src={build.src}
                              alt={build.alt}
                              className={stl.tileGear}
                            />
                          </div>

                          <span className={stl.gearName}>{build.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className={stl.typeBlock}>
                    <span className={stl.typeTitle}>Recovery</span>
                    {RECOVERYBUILDS.map((build) => {
                      const { itemState } = build;
                      return (
                        <div
                          className={stl.gridTile}
                          key={build.src + Math.random().toString()}
                          onClick={() => handlePrebuildSetup(itemState)}
                        >
                          <div className={stl.imgCenter}>
                            <img
                              src={build.src}
                              alt={build.alt}
                              className={stl.tileGear}
                            />
                          </div>

                          <span className={stl.gearName}>{build.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
              {activeBtn === "PVM" && (
                <div className={stl.typeBlock}>
                  <span className={stl.typeTitle}>PVM</span>
                  {PVMBUILDS.map((build) => {
                    const { itemState } = build;
                    return (
                      <div
                        className={stl.gridTile}
                        key={build.src + Math.random().toString()}
                        onClick={() => handlePrebuildSetup(itemState)}
                      >
                        <div className={stl.imgCenter}>
                          <img
                            src={build.src}
                            alt={build.alt}
                            className={stl.tileGear}
                          />
                        </div>

                        <span className={stl.gearName}>{build.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeBtn === "PVP" && (
                <div className={stl.typeBlock}>
                  <span className={stl.typeTitle}>PVP</span>
                  {PVPBUILDS.map((build) => {
                    const { itemState } = build;
                    return (
                      <div
                        className={stl.gridTile}
                        key={build.src + Math.random().toString()}
                        onClick={() => handlePrebuildSetup(itemState)}
                      >
                        <div className={stl.imgCenter}>
                          <img
                            src={build.src}
                            alt={build.alt}
                            className={stl.tileGear}
                          />
                        </div>

                        <span className={stl.gearName}>{build.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeBtn === "Skilling" && (
                <div className={stl.typeBlock}>
                  <span className={stl.typeTitle}>Skilling</span>
                  {SKILLBUILDS.map((build) => {
                    const { itemState } = build;
                    return (
                      <div
                        className={stl.gridTile}
                        key={build.src + Math.random().toString()}
                        onClick={() => handlePrebuildSetup(itemState)}
                      >
                        <div className={stl.imgCenter}>
                          <img
                            src={build.src}
                            alt={build.alt}
                            className={stl.tileGear}
                          />
                        </div>

                        <span className={stl.gearName}>{build.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeBtn === "Wildy" && (
                <div className={stl.typeBlock}>
                  <span className={stl.typeTitle}>Wildy</span>
                  {WILDYBUILDS.map((build) => {
                    const { itemState } = build;
                    return (
                      <div
                        className={stl.gridTile}
                        key={build.src + Math.random().toString()}
                        onClick={() => handlePrebuildSetup(itemState)}
                      >
                        <div className={stl.imgCenter}>
                          <img
                            src={build.src}
                            alt={build.alt}
                            className={stl.tileGear}
                          />
                        </div>

                        <span className={stl.gearName}>{build.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {activeBtn === "Recovery" && (
                <div className={stl.typeBlock}>
                  <span className={stl.typeTitle}>Recovery</span>
                  {RECOVERYBUILDS.map((build) => {
                    const { itemState } = build;
                    return (
                      <div
                        className={stl.gridTile}
                        key={build.src + Math.random().toString()}
                        onClick={() => handlePrebuildSetup(itemState)}
                      >
                        <div className={stl.imgCenter}>
                          <img
                            src={build.src}
                            alt={build.alt}
                            className={stl.tileGear}
                          />
                        </div>

                        <span className={stl.gearName}>{build.name}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default PremiumBuilds;
