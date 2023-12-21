import stl from "./FiremakingGrid.module.css";
import LOGSLIST from "../../../../../../utils/logslist";
import expLogo from "../../../../../../assets/random/Stats_icon.webp";
import rsgp from "../../../../../../assets/icons/Donate.webp";

import { useEffect, useState, useCallback } from "react";

const FiremakingGrid = (props) => {
  const [logsDB, setLogsDB] = useState(LOGSLIST);
  const [filteredLogsDB, setFilteredLogsDB] = useState(LOGSLIST);
  const [bonesSorted, setBonesSorted] = useState(false);
  const [logPrices, setLogPrices] = useState({});
  const [xpSorted, setXPSorted] = useState(false);
  const [amountSorted, setAmountSorted] = useState(false);
  const [costSorted, setCostSorted] = useState(false);

  const priceFetcher = async () => {
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Logs|Bucket|Achey_tree_logs|Oak_logs|Willow_logs|Teak_logs|Arctic_pine_logs|Maple_logs|Mahogany_logs|Yew_logs|Magic_logs|Redwood_logs|Pyre_logs|Oak_pyre_logs|Willow_pyre_logs|Teak_pyre_logs|Arctic_pyre_logs|Maple_pyre_logs|Mahogany_pyre_logs|Yew_pyre_logs|Magic_pyre_logs|Redwood_pyre_logs"
    );
    const result = await fetcher.json();
    setLogPrices(result);
  };

  useEffect(() => {
    if (Object.keys(logPrices).length === 0) {
      priceFetcher();
    }
  }, [logPrices]);

  const calculateLogsToBurn = useCallback(
    (logs) => {
      const expToGo = props.remainingExp;
      const result = Math.ceil(expToGo / logs.exp);
      return result ? result : "?";
    },
    [props.remainingExp]
  );

  useEffect(() => {
    if (Object.keys(logPrices).length > 0) {
      let newDB = logsDB;
      newDB.forEach((log, index) => {
        let logName = log.name;
        log.price = logPrices[logName].price;
        log.toGo = Math.ceil(+props.remainingExp / log.exp);

        if (logName === "Arctic pine pyre logs") {
          logName = "Arctic pyre logs";
          log.price = +logPrices[logName].price;
        }
        if (logName === "Blisterwood logs") {
          logName = "Bucket";
          log.price = 0;
        }
      });

      setLogsDB(newDB);
      setFilteredLogsDB(newDB);
    }
  }, [logPrices, logsDB, props.remainingExp]);

  const sortBones = () => {
    setBonesSorted(!bonesSorted);
    let sorter = [...logsDB];
    sorter.sort((a, b) =>
      bonesSorted ? a.level - b.level : b.level - a.level
    );
    setLogsDB(sorter);
  };

  const sortAmount = () => {
    setAmountSorted(!amountSorted);
    let sorter = [...logsDB];
    sorter.sort((a, b) => (amountSorted ? b.exp - a.exp : a.exp - b.exp));
    setLogsDB(sorter);
  };

  const sortExp = () => {
    setXPSorted(!xpSorted);
    let sorter = [...logsDB];
    sorter.sort((a, b) => (xpSorted ? a.exp - b.exp : b.exp - a.exp));
    setLogsDB(sorter);
  };

  const sortCost = () => {
    setCostSorted(!costSorted);
    let sorter = [...logsDB];
    sorter.sort((a, b) =>
      costSorted
        ? a.price * a.toGo - b.price * b.toGo
        : b.price * b.toGo - a.price * a.toGo
    );
    setLogsDB(sorter);
  };

  const filterSpells = useCallback(() => {
    if (props.searchState) {
      const filteredSpells = logsDB.filter((item) =>
        item.name.toLowerCase().includes(props.searchState.toLowerCase())
      );
      setFilteredLogsDB(filteredSpells);
    } else {
      // If search state is empty, reset to the original data
      setFilteredLogsDB(logsDB);
    }
  }, [props.searchState, logsDB]);

  useEffect(() => {
    filterSpells();
  }, [filterSpells]);

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortBones}>
          <img
            src="/logs/Logs.webp"
            alt="Bones Logo"
            className={stl.miniLogo}
          />{" "}
          Logs
        </span>
        <span onClick={sortExp}>
          <img src={expLogo} alt="Experience Logo" className={stl.miniLogo} />{" "}
          Exp
        </span>
        <span onClick={sortAmount}>
          <img
            src="/logs/Tinderbox.webp"
            alt="Amount Logo"
            className={stl.miniLogo}
          />{" "}
          Amount
        </span>
        <span onClick={sortCost}>
          <img src={rsgp} alt="Cost Logo" className={stl.miniLogo} /> Cost
        </span>
      </div>
      <div className={stl.resultGrid}>
        {filteredLogsDB.map((logs) => {
          const logsAmount = calculateLogsToBurn(logs);
          return (
            <div className={stl.row} key={logs.name}>
              <span className={`${stl.rowItem} ${stl.monsterRow}`}>
                <span className={stl.lvlSpan}>Lvl {logs.level}</span>
                <img
                  src={logs.src}
                  alt="Runescape Logs"
                  className={stl.boneMiniImg}
                />
                <span className={stl.bonename}>
                  {logs.name === "Bucket" ? "Blisterwood logs" : logs.name}
                </span>
              </span>
              <span className={`${stl.rowItem} ${stl.prayerRow}`}>
                {+props.multiplier === 0 && logs.exp}
                {+props.multiplier > 0 &&
                  (logs.exp / (1 + 2.5 / 100)).toFixed(1)}

                <span className={stl.gpperxp}>
                  {+props.multiplier === 0 &&
                    (logs.price / logs.exp).toFixed(1)}
                  {+props.multiplier > 0 &&
                    ((logs.price * (1 + 2.5 / 100)) / logs.exp).toFixed(1)}
                  gp/exp
                </span>
              </span>
              <span className={`${stl.rowItem} ${stl.amountRow}`}>
                {+props.multiplier === 0 &&
                  Math.ceil(+props.remainingExp / logs.exp).toLocaleString()}
                {+props.multiplier > 0 &&
                  Math.ceil(
                    +props.remainingExp / logs.exp / (1 + 2.5 / 100)
                  ).toLocaleString()}
              </span>
              <span className={`${stl.rowItem} ${stl.costRow}`}>
                {+props.multiplier > 0 &&
                  Math.round(
                    ((logsAmount * logs.price) / (1 + 2.5 / 100)).toFixed(0)
                  ).toLocaleString()}
                {+props.multiplier === 0 &&
                  (logsAmount * logs.price).toLocaleString()}
                <span className={stl.gpcost}>gp</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiremakingGrid;
