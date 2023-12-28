import stl from "./PremiumBuilds.module.css";
import PremiumBanner from "../PremiumBanner/PremiumBanner";

const PremiumBuilds = ({ premiumUser }) => {
  return (
    <div className={stl.premiumBox}>
      <h3 className={stl.subHero}>Premium</h3>
      {!premiumUser && <PremiumBanner />}
    </div>
  );
};

export default PremiumBuilds;
