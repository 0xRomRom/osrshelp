import stl from "./XPTable.module.css";
import Pagination from "../pagination/Pagination";
import XPCalculator from "./xpcalculator/XPCalculator";
import { arrayXpTable } from "../../../utils/playerStats";
import cheerio from "cheerio";
import axios from "axios";
import { useState, useEffect } from "react";

const XPTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      console.log(data);
    }
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetcher = await fetch("http://localhost:3001/api/shooting-stars");
        const result = await fetcher.json();
        console.log(result);

        return;
        const url = "https://osrsportal.com/shooting-stars-tracker";
        const response = await axios.get(url);

        if (response.status === 200) {
          const $ = cheerio.load(response.data);

          // Replace '.your-selector' with the appropriate CSS selector for the data you want to scrape
          const scrapedData = $(".styledd-table").text();

          // Update state with the scraped data
          setData(scrapedData);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={stl.xptable}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination />
      <div className={stl.levelsWrap}>
        <h1 className={stl.modalTitle}>OSRS XP Table</h1>
        <XPCalculator />
        <div className={stl.xpGridWrapper}>
          <div className={stl.xpGrid}>
            <div className={stl.configRow}>
              <span>Level</span>
              <span>Exp</span>
              <span>Difference</span>
            </div>
            <div className={stl.levelGrid}>
              {arrayXpTable.map((level, index) => {
                return (
                  <div className={stl.flexGrid} key={index}>
                    <span>{level.level}</span>
                    <span>{level.expRequired.toLocaleString()}</span>
                    <span>{level.expDifference.toLocaleString()}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={stl.adBar2}>[ Advertisements ]</div>
    </div>
  );
};

export default XPTable;
