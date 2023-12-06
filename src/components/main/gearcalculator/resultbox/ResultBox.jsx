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
    let currentState = resultState;

    for (const values of Object.entries(overlayImages)) {
      if (Object.keys(values[1]).length > 0) {
        const stats = values[1].stats;
        console.log(stats);
        currentState.stab += stats[0].Stab;
        currentState.slash += stats[0].Slash;
        currentState.crush += stats[0].Crush;
        currentState.magic += stats[0].Magic;
        currentState.range += stats[0].Range;

        currentState.stabDef += stats[1].Stab;
        currentState.slashDef += stats[1].Slash;
        currentState.crushDef += stats[1].Crush;
        currentState.magicDef += stats[1].Magic;
        currentState.rangeDef += stats[1].Range;

        currentState.magicDamage += stats[2]["Magic damage"];
        currentState.rangedDamage += stats[2]["Ranged damage"];
        currentState.strengthDamage += stats[2]["Melee damage"];
        currentState.prayer += stats[2].Prayer;
        currentState.weight += stats[2].Weight;

        console.log(values[1].stats);
        console.log(currentState);
      }
    }
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
              Stab: +{resultState["stab"]}
            </span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/White_scimitar.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              Slash: +0
            </span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/White_warhammer.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              Crush: +0
            </span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/Magic_icon.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              Magic: +0
            </span>
            <span className={stl.statValue}>
              <img
                src="./gearcalculator/icons/Ranged_icon.webp"
                alt="Stab attack"
                className={stl.miniIcon}
              />
              Range: +0
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
              Stab: +0
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
              Slash: +0
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
              Crush: +0
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
              Magic: +0
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
              Range: +0
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
          Ranged strength: +0
        </span>
        <span className={stl.statValue}>
          <img
            src="./gearcalculator/icons/Magic_Damage_icon.webp"
            alt="Stab attack"
            className={stl.miniIcon}
          />
          Magic damage: +%
        </span>
        <span className={stl.statValue}>
          <img
            src="./gearcalculator/icons/Strength_icon.webp"
            alt="Stab attack"
            className={stl.miniIcon}
          />
          Melee strength: +0
        </span>
        <span className={stl.statValue}>
          <img
            src="./gearcalculator/icons/Prayer_icon.webp"
            alt="Stab attack"
            className={stl.miniIcon}
          />
          Prayer: +0
        </span>
        <span className={stl.statValue}>
          <img src={slayerIcon} alt="Slayer Icon" className={stl.miniIcon} />
          Slayer: +0
        </span>

        <span className={stl.statValue}>
          <img
            src="./gearcalculator/icons/Weight_icon.webp"
            alt="Stab attack"
            className={stl.miniIcon}
          />
          Weight: +{resultState.weight}
        </span>
      </ul>
    </div>
  );
};

export default ResultBox;
