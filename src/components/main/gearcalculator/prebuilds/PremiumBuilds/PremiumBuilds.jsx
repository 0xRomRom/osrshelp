import stl from "./PremiumBuilds.module.css";
import PremiumBanner from "../PremiumBanner/PremiumBanner";
import { useState } from "react";
// import PREMIUMBUILDS from "../../../../../utils/gearcalculator/prebuilds/premium/premiumBuilds";
import PVMBUILDS from "../../../../../utils/gearcalculator/prebuilds/premium/pvmBuilds";
import PVPBUILDS from "../../../../../utils/gearcalculator/prebuilds/premium/pvpBuilds";

const PremiumBuilds = ({ premiumUser, handlePrebuildSetup }) => {
  const [activeBtn, setActiveBtn] = useState("All");

  const switchButton = (newBtn) => {
    setActiveBtn(newBtn);
  };

  return (
    <div className={stl.premiumBox}>
      <h3 className={stl.subHero}>Premium</h3>
      {!premiumUser && <PremiumBanner />}
      <div className={stl.filterBar}>
        <button
          className={`${stl.btn} ${activeBtn === "All" ? stl.active : ""}`}
          onClick={() => switchButton("All")}
        >
          All
        </button>
        <button
          className={`${stl.btn} ${activeBtn === "PVM" ? stl.active : ""}`}
          onClick={() => switchButton("PVM")}
        >
          PVM
        </button>
        <button
          className={`${stl.btn} ${activeBtn === "PVP" ? stl.active : ""}`}
          onClick={() => switchButton("PVP")}
        >
          PVP
        </button>
        <button
          className={`${stl.btn} ${activeBtn === "Skilling" ? stl.active : ""}`}
          onClick={() => switchButton("Skilling")}
        >
          Skilling
        </button>

        <button
          className={`${stl.btn} ${activeBtn === "Wildy" ? stl.active : ""}`}
          onClick={() => switchButton("Wildy")}
        >
          Wildy
        </button>
        <button
          className={`${stl.btn} ${activeBtn === "Fashion" ? stl.active : ""}`}
          onClick={() => switchButton("Fashion")}
        >
          Fashion
        </button>
        <button
          className={`${stl.btn} ${activeBtn === "Recovery" ? stl.active : ""}`}
          onClick={() => switchButton("Recovery")}
        >
          Recovery
        </button>
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
                    key={build.src}
                    onClick={() => handlePrebuildSetup(itemState)}
                  >
                    <div className={stl.imgCenter}>
                      <img
                        src={build.src}
                        alt={build.alt}
                        className={stl.tileGear}
                      />
                      {build.src2 && (
                        <img
                          src={build.src2}
                          alt={build.alt}
                          className={stl.tileGear2}
                        />
                      )}
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
                    key={build.src}
                    onClick={() => handlePrebuildSetup(itemState)}
                  >
                    <div className={stl.imgCenter}>
                      <img
                        src={build.src}
                        alt={build.alt}
                        className={stl.tileGear}
                      />
                      {build.src2 && (
                        <img
                          src={build.src2}
                          alt={build.alt}
                          className={stl.tileGear2}
                        />
                      )}
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
                  key={build.src}
                  onClick={() => handlePrebuildSetup(itemState)}
                >
                  <div className={stl.imgCenter}>
                    <img
                      src={build.src}
                      alt={build.alt}
                      className={stl.tileGear}
                    />
                    {build.src2 && (
                      <img
                        src={build.src2}
                        alt={build.alt}
                        className={stl.tileGear2}
                      />
                    )}
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
                  key={build.src}
                  onClick={() => handlePrebuildSetup(itemState)}
                >
                  <div className={stl.imgCenter}>
                    <img
                      src={build.src}
                      alt={build.alt}
                      className={stl.tileGear}
                    />
                    {build.src2 && (
                      <img
                        src={build.src2}
                        alt={build.alt}
                        className={stl.tileGear2}
                      />
                    )}
                  </div>

                  <span className={stl.gearName}>{build.name}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default PremiumBuilds;
