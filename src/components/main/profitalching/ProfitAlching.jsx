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
      <div className={stl.modalWrap}></div>
    </div>
  );
};

export default ProfitAlching;
