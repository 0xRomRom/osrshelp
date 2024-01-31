import stl from "./Favorites.module.css";
import PremiumBanner from "./premiumbanner/PremiumBanner";

const Favorites = () => {
  return (
    <div className={stl.favorites}>
      <PremiumBanner />
    </div>
  );
};

export default Favorites;
