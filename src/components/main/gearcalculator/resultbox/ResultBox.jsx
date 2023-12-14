import stl from "./ResultBox.module.css";
import slayerIcon from "../../../../assets/skillicons/Slayer.png";
import { useEffect, useState } from "react";
import { INITIALSTATE as emptyState } from "../../../../utils/gearcalculator/initialState";

const ResultBox = ({ bonusState }) => {
  const [resultState, setResultState] = useState(emptyState);

  useEffect(() => {
    // Create a copy of the current state to avoid mutating the state directly
    setResultState(() => {
      let newState = { ...emptyState };
      for (const values of Object.values(bonusState)) {
        if (Object.keys(values).length > 0) {
          newState.stab += values.stats[0].Stab;
          newState.slash += values.stats[0].Slash;
          newState.crush += values.stats[0].Crush;
          newState.magic += values.stats[0].Magic;
          newState.range += values.stats[0].Range;

          newState.stabDef += values.stats[1].Stab;
          newState.slashDef += values.stats[1].Slash;
          newState.crushDef += values.stats[1].Crush;
          newState.magicDef += values.stats[1].Magic;
          newState.rangeDef += values.stats[1].Range;
          newState.magicDamage += values.stats[2]["Magic damage"];
          newState.rangedDamage += values.stats[2]["Ranged strength"];
          newState.strengthDamage += values.stats[2]["Melee strength"];
          newState.prayer += values.stats[2]["Prayer"];
          newState.slayer += values.stats[2]["Slayer Bonus"];
          newState.weight += values.stats[2]["Weight"];
        }
      }

      return newState;
    });
  }, [bonusState]);

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
            <span className={stl.titleDef}>Defence bonus</span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/White_dagger.webp"
                alt="Stab attack"
                className={stl.miniIconDef}
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
                className={stl.miniIconDef}
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
                className={stl.miniIconDef}
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
                className={stl.miniIconDef}
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
                className={stl.miniIconDef}
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
        <div className={stl.otherWrap}>
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
            Magic damage: +{resultState.magicDamage}%
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
        </div>
      </ul>
    </div>
  );
};

export default ResultBox;
