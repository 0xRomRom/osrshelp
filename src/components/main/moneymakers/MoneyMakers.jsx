import stl from "./MoneyMakers.module.css";
import Pagination from "../pagination/Pagination";

const MoneyMakers = (props) => {
  return (
    <div className={stl.moneymakers}>
      <div className={stl.adBar}>[ Advertisements ]</div>
      <Pagination
        mainState={props.mainState}
        subState={props.subState}
        setSubState={props.setSubState}
      />
    </div>
  );
};

export default MoneyMakers;
