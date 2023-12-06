import stl from "./ResultBox.module.css";
import slayerIcon from "../../../../assets/skillicons/Slayer.png";
import { useEffect, useState } from "react";

const ResultBox = ({ overlayImages }) => {
  const [resultState, setResultState] = useState({
    // Attack
    stab: 0,
    slash: 0,
    crush: 0,
    magic: 0,
    range: 0,

    // Defence
    stabDef: 0,
    slashDef: 0,
    crushDef: 0,
    magicDef: 0,
    rangeDef: 0,

    //Bonus

    magicDamage: 0,
    rangedDamage: 0,
    strengthDamage: 0,
    prayer: 0,
    slayer: 0,
    weight: 0,
  });

  useEffect(() => {
    // Create a copy of the current state to avoid mutating the state directly
    setResultState((currentState) => {
      let newState = { ...currentState };

      for (const values of Object.entries(overlayImages)) {
        if (Object.keys(values[1]).length > 0) {
          const stats = values[1].stats;

          newState.stab = stats[0].Stab;
          newState.slash = stats[0].Slash;
          newState.crush = stats[0].Crush;
          newState.magic = stats[0].Magic;
          newState.range = stats[0].Range;

          newState.stabDef = stats[1].Stab;
          newState.slashDef = stats[1].Slash;
          newState.crushDef = stats[1].Crush;
          newState.magicDef = stats[1].Magic;
          newState.rangeDef = stats[1].Range;

          newState.magicDamage = stats[2]["Magic damage"];
          newState.rangedDamage = stats[2]["Ranged strength"];
          newState.strengthDamage = stats[2]["Melee strength"];
          newState.prayer = stats[2].Prayer;
          newState.weight = stats[2].Weight;
        }
      }

      return newState;
    });
  }, [overlayImages]);

  return (
    <div className={stl.resultbox}>
      <ul className={stl.statsList}>
        <div className={stl.topBlock}>
          <div className={stl.half}>
            <span className={stl.title}>Attack bonus</span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/White_dagger.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              Stab: +{resultState.stab}
            </span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/White_scimitar.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              Slash: +{resultState.slash}
            </span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/White_warhammer.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              Crush: +{resultState.crush}
            </span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/Magic_icon.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              Magic: +{resultState.magic}
            </span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/Ranged_icon.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              Range: +{resultState.range}
            </span>
          </div>
          <div className={stl.half}>
            <span className={stl.title}>Defence bonus</span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/White_dagger.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              <img
                src="./gearcalculator/icons/Defence_icon.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              Stab: +{resultState.stabDef}
            </span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/White_scimitar.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              <img
                src="./gearcalculator/icons/Defence_icon.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              Slash: +{resultState.slashDef}
            </span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/White_warhammer.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              <img
                src="./gearcalculator/icons/Defence_icon.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              Crush: +{resultState.crushDef}
            </span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/Magic_icon.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              <img
                src="./gearcalculator/icons/Defence_icon.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              Magic: +{resultState.magicDef}
            </span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/Ranged_icon.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              <img
                src="./gearcalculator/icons/Defence_icon.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              Range: +{resultState.rangeDef}
            </span>
          </div>
        </div>
        <span className={stl.title}>Other bonuses</span>
        <span className={stl.statValue}>
          <img
            src="./gearcalculator/icons/Ranged_Strength_icon.webp"
            alt="Stab attack"
            className={stl.miniIcon}
          />
          Ranged strength: +{resultState.rangedDamage}
        </span>
        <span className={stl.statValue}>
          <img
            src="./gearcalculator/icons/Magic_Damage_icon.webp"
            alt="Stab attack"
            className={stl.miniIcon}
          />
          Magic damage: +% {resultState.magicDamage}
        </span>
        <span className={stl.statValue}>
          <img
            src="./gearcalculator/icons/Strength_icon.webp"
            alt="Stab attack"
            className={stl.miniIcon}
          />
          Melee strength: +{resultState.strengthDamage}
        </span>
        <span className={stl.statValue}>
          <img
            src="./gearcalculator/icons/Prayer_icon.webp"
            alt="Stab attack"
            className={stl.miniIcon}
          />
          Prayer: +{resultState.prayer}
        </span>
        <span className={stl.statValue}>
          <img src={slayerIcon} alt="Slayer Icon" className={stl.miniIcon} />
          Slayer: +{resultState.slayer}
        </span>

        <span className={stl.statValue}>
          <img
            src="./gearcalculator/icons/Weight_icon.webp"
            alt="Stab attack"
            className={stl.miniIcon}
          />
          Weight: +{resultState.weight.toFixed(2)}
        </span>
      </ul>
    </div>
  );
};

export default ResultBox;
