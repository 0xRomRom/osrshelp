import stl from "./FiremakingGrid.module.css";
import LOGSLIST from "../../../../../../utils/logslist";
import prayerLogo from "../../../../../../assets/skillicons/Prayer.webp";
import expLogo from "../../../../../../assets/random/Stats_icon.webp";
import rsgp from "../../../../../../assets/icons/Donate.webp";

import { useEffect, useState } from "react";

const FiremakingGrid = (props) => {
  const [logsDB, setLogsDB] = useState(LOGSLIST);
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

  useEffect(() => {
    if (Object.keys(logPrices).length > 0) {
      let newDB = logsDB;
      console.log(newDB);
      newDB.forEach((log, index) => {
        let logName = log.name;
        console.log(logName);
        console.log(index);
        log.price = logPrices[logName].price;

        if (logName === "Arctic pine pyre logs") {
          logName = "Arctic pyre logs";
          log.price = logPrices[logName].price;
        }
        if (logName === "Blisterwood logs") {
          logName = "Bucket";
          log.price = 0;
        }
      });
      // console.log(newDB[9].name);
      // newDB[9].name = "Blisterwood logs";
      // newDB[9].price = 0;
      console.log(newDB);
      setLogsDB(newDB);
    }
  }, [logPrices, logsDB]);

  const sortBones = () => {
    setBonesSorted(!bonesSorted);
    let sorter = [...logsDB];
    sorter.sort((a, b) =>
      bonesSorted ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setLogsDB(sorter);
  };

  const sortAmount = () => {
    setAmountSorted(!amountSorted);
    let sorter = [...logsDB];
    sorter.sort((a, b) =>
      amountSorted ? +b.toGo - +a.toGo : +a.toGo - +b.toGo
    );
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

  return (
    <div className={stl.grid}>
      <div className={stl.typeRow}>
        <span className={stl.monsterTitleRow} onClick={sortBones}>
          <img
            src="bones/Bones.webp"
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
          <img src={prayerLogo} alt="Amount Logo" className={stl.miniLogo} />{" "}
          Amount
        </span>
        <span onClick={sortCost}>
          <img src={rsgp} alt="Cost Logo" className={stl.miniLogo} /> Cost
        </span>
      </div>
      <div className={stl.resultGrid}>
        {logsDB.map((logs) => {
          return (
            <div className={stl.row} key={logs.name}>
              <span className={`${stl.rowItem} ${stl.monsterRow}`}>
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
                {logs.exp}
                <span className={stl.gpperxp}>
                  {+props.multiplier === 0 &&
                    (logs.price / logs.exp).toFixed(1)}
                  {+props.multiplier > 0 &&
                    (
                      (logs.price * (+props.multiplier / 100)) /
                      logs.exp
                    ).toFixed(1)}
                  gp/exp
                </span>
              </span>
              <span className={`${stl.rowItem} ${stl.amountRow}`}>
                {Math.ceil(+props.remainingExp / logs.exp).toLocaleString()}
              </span>
              <span className={`${stl.rowItem} ${stl.costRow}`}>
                {(
                  logs.price * Math.ceil(+props.remainingExp / logs.exp)
                ).toLocaleString()}
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
