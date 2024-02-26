import stl from "./PurchaseCredits.module.css";
import { FaLongArrowAltLeft } from "react-icons/fa";

const PurchaseCredits = ({ setPurchasingCredits }) => {
  return (
    <div className={stl.purchasecredits}>
      <div className={stl.closeRow}>
        <FaLongArrowAltLeft
          className={stl.closeArrow}
          onClick={() => setPurchasingCredits(false)}
        />
      </div>
      <div className={stl.plansRow}>
        <div className={`${stl.card} ${stl.card1}`}>
          <div className={stl.amountBox}>
            <h2 className={stl.amountHero}>
              1000 <span className={stl.creditsSpan}>credits</span>
            </h2>
            <span className={stl.cost}>$9.99</span>
          </div>
          <img
            src="https://oldschool.runescape.wiki/images/Coins_250.png?c2755"
            className={stl.moneyPile}
            alt="Oldschool Runescape Money"
          />
        </div>
        <div className={`${stl.card} ${stl.card2}`}>
          <div className={stl.amountBox}>
            <h2 className={stl.amountHero}>
              3000 <span className={stl.creditsSpan}>credits</span>
            </h2>
            <span className={stl.cost}>$24.99</span>
          </div>
          <img
            src="https://oldschool.runescape.wiki/images/Coins_1000.png?978c8"
            className={stl.moneyPile}
            alt="Oldschool Runescape Money"
          />
        </div>
        <div className={`${stl.card} ${stl.card3}`}>
          <div className={stl.amountBox}>
            <h2 className={stl.amountHero}>
              7000 <span className={stl.creditsSpan}>credits</span>
            </h2>
            <span className={stl.cost}>$49.99</span>
          </div>
          <img
            src="https://oldschool.runescape.wiki/images/Coins_10000.png?7fa38"
            className={stl.moneyPile}
            alt="Oldschool Runescape Money"
          />
        </div>
      </div>
    </div>
  );
};

export default PurchaseCredits;
