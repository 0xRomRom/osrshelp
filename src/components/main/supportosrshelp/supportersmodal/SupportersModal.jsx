import { useState } from "react";
import stl from "./SupportersModal.module.css";
import { LOBSTERSUPPORTERS, ETHEREUMSUPPORTERS } from "./supporterslist";

const SupportersModal = () => {
  const [activeList, setActiveList] = useState("Lobster");
  return (
    <div className={stl.supportersmodal}>
      <h2 className={stl.supportersHero}>Supporters</h2>
      <div className={stl.typeFilter}>
        <button
          className={`${stl.filterCta} ${
            activeList === "Lobster" ? stl.actBtn : ""
          }`}
          onClick={() => setActiveList("Lobster")}
        >
          <img
            src="./foods/Lobster.webp"
            alt="Lobster"
            className={stl.lobsterCta}
          />
        </button>
        <button
          className={`${stl.filterCta} ${
            activeList === "Ethereum" ? stl.actBtn : ""
          }`}
          onClick={() => setActiveList("Ethereum")}
        >
          <img
            src="./random/Ethereum.svg"
            alt="Ethereum"
            className={stl.etherCta}
          />
        </button>
      </div>
      {activeList === "Lobster" && (
        <div className={stl.supportersList}>
          {LOBSTERSUPPORTERS.map((item) => {
            return (
              <div className={stl.supporter} key={item.name}>
                <img
                  src="./random/Mod.webp"
                  alt="Mod"
                  className={stl.modCrown}
                />
                <span className={stl.userName}>{item.name}</span>
                <span className={stl.amount}>x{item.amount}</span>
                <img
                  src="./foods/Lobster.webp"
                  alt="Lobster"
                  className={stl.lobsterImg}
                />
              </div>
            );
          })}
        </div>
      )}
      {activeList === "Ethereum" && (
        <div className={stl.supportersList}>
          {ETHEREUMSUPPORTERS.map((item) => {
            return (
              <div className={stl.supporter} key={item.name}>
                <img
                  src="./random/Mod.webp"
                  alt="Mod"
                  className={stl.modCrown}
                />
                <span className={stl.userName}>{item.name}</span>
                <span className={stl.etherAmount}>
                  {item.amount}
                  <img
                    src="./random/Ethereum.svg"
                    alt="Ethereum"
                    className={stl.etherCta}
                  />
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SupportersModal;
