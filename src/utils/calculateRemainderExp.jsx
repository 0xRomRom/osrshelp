import { osrsXpTable } from "./playerStats";

const CalculateRemainderExp = (props) => {
  const calculateExpUntilNextLevel = () => {
    const skill = props.skillname;

    const currentLvl = +props.currentLvl;
    const currentExp = +props.currentExp[skill];
    const nextLevelStartExp = osrsXpTable[currentLvl + 1];

    const remainder = nextLevelStartExp - currentExp;
    const result = isNaN(+remainder) ? "?" : remainder.toLocaleString();
    return result;
  };

  const remainder = calculateExpUntilNextLevel();

  return <>{remainder}</>;
};

export default CalculateRemainderExp;
