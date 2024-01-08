import stl from "./ProfitAlching.module.css";
import Pagination from "../pagination/Pagination";

const ProfitAlching = ({ mainState, subState, setSubState }) => {
  return (
    <div className={stl.profitalching}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={mainState}
        setSubState={setSubState}
        subState={subState}
      />
      <div className={stl.modalWrap}>
        <div className={stl.heroBlock}>
          <h1 className={stl.hero}>
            <img
              src="./staves/Staff_of_fire.webp"
              alt="Staff of fire"
              className={stl.heroImg}
            />{" "}
            Profit Alching
          </h1>
          <p className={stl.descPar}>
            Calculations in the table below are based on realtime G.E. prices.
          </p>
        </div>
        <div className={stl.itemsGrid}>
          <div className={stl.configRow}>
            <div className={stl.imgWrapper}></div>
            <span>Item</span>
            <span>Price</span>
            <span>G.E. Limit</span>
            <span>Alch Price</span>
            <span>Profit</span>
          </div>
          <div className={stl.innerGrid}>
            <div className={stl.griditem}>
              <div className={stl.imgWrapper}>
                <img
                  src="./gearcalculator/helms/Dragon_med_helm.webp"
                  alt="Dragon med helm"
                  className={stl.gridIcon}
                />
              </div>
              <span>Dragon Med helm </span>
              <span>32,433</span>
              <span>800/4h</span>
              <span>32,000</span>
              <span>450</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitAlching;
