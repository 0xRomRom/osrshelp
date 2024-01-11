import { useState } from "react";
import stl from "./SupportersModal.module.css";

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
      <div className={stl.supportersList}>
        <div className={stl.supporter}>
          <img src="./random/Mod.webp" alt="Mod" className={stl.modCrown} />
          <span className={stl.userName}>King Rom II</span>
          <span className={stl.amount}>x12</span>
          <img
            src="./foods/Lobster.webp"
            alt="Lobster"
            className={stl.lobsterImg}
          />
        </div>
        <div className={stl.supporter}>
          <img src="./random/Mod.webp" alt="Mod" className={stl.modCrown} />
          <span className={stl.userName}>Adnres M</span>
          <span className={stl.amount}>x9</span>
          <img
            src="./foods/Lobster.webp"
            alt="Lobster"
            className={stl.lobsterImg}
          />
        </div>
        <div className={stl.supporter}>
          <img src="./random/Mod.webp" alt="Mod" className={stl.modCrown} />
          <span className={stl.userName}>DarkCharger55</span>
          <span className={stl.amount}>x0</span>
          <img
            src="./foods/Lobster.webp"
            alt="Lobster"
            className={stl.lobsterImg}
          />
        </div>
      </div>
    </div>
  );
};

export default SupportersModal;
