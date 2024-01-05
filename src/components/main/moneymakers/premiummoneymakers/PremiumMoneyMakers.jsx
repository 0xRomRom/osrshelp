import stl from "./PremiumMoneyMakers.module.css";
import { useState, useEffect } from "react";
import PREMIUMMONEYMAKERS from "../../../../utils/moneymakers/premiummoneymakers";
import { useCallback } from "react";
import mills from "../../../../assets/icons/Mills.webp";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../utils/authprovider/AuthProvider";

const PremiumMoneyMakers = ({ setMoneyMaker }) => {
  const { premiumUser, userID } = useContext(AuthContext);
  const [itemPrices, setItemPrices] = useState({});
  const [methodsArray, setMethodsArray] = useState([]);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const priceFetcher = async () => {
    const query1 =
      "Iron_ore|Coal|Stamina_potion(4)|Onion_seed|Steel_bar|Uncut_opal|Uncut_jade|Uncut_red_topaz|Uncut_sapphire|Uncut_emerald|Uncut_ruby|Uncut_diamond|Irit_leaf|Vial_of_water|Irit_potion_(unf)|Topaz_amulet|Cosmic_rune|Burning_amulet(5)|Prayer_potion(4)|Lobster|Stamina_potion(4)|Magic_logs|Yew_logs|Maple_logs|Willow_logs|Oak_logs|Bracelet_of_ethereum_(uncharged)|Revenant_ether|Nature_rune|Pure_essence|Adamant_bolts|Diamond_bolt_tips|Diamond_bolts|Poison_ivy_berries|Coconut_milk|Weapon_poison(++)|Runite_ore|Bowl_of_hot_water|Empty_cup|Guam_leaf|Marrentill|Harralander|Guthix_rest(4)|Bowl|Lantadyme|Vial_of_water|Lantadyme_potion_(unf)|Pie_shell|Raw_bear_meat|Raw_rabbit|Raw_chompy|Raw_wild_pie|Avantoe|Avantoe_potion_(unf)|Ruby_bolt_tips|Ruby_bolts|Ranarr_weed|Ranarr_potion_(unf)|Supercompost|Volcanic_ash|Ultracompost|Astral_rune|Red_dragonhide|Red_dragon_leather|Toadflax|Toadflax_potion_(unf)|Kwuarm|Kwuarm_potion_(unf)|Mole_claw|Mole_skin|Law_rune|Stamina_potion(1)|Bird_nest_(empty)|Crushed_nest|Snapdragon|Snapdragon_potion_(unf)|Black_chinchompa|Blood_essence|Amulet_of_glory(6)|Blood_rune|Amulet_of_glory|Xerician_fabric|Thread|Xerician_robe|Dodgy_necklace|Blood_shard|Death_rune|Blood_pint|Diamond|Cooked_mystery_meat";
    const query1Encoded = encodeURIComponent(query1);
    const fetcher = await fetch(
      `https://api.weirdgloop.org/exchange/history/osrs/latest?name=${query1Encoded}`
    );
    const result = await fetcher.json();
    const fetcher2 = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Arrow_shaft"
    );
    const result2 = await fetcher2.json();
    setItemPrices({ ...result, ...result2 });
  };

  const setMethodProfits = useCallback(() => {
    const setPrices = PREMIUMMONEYMAKERS.map((item) => {
      let profits = 0;
      const inputs = item.inputs;
      const outputs = item.outputs;

      if (Object.keys(inputs).length > 0) {
        Object.entries(inputs).forEach(([key, value]) => {
          const itemPrice = itemPrices[key].price;
          const totalCosts = itemPrice * value;

          profits -= totalCosts;
        });
      }
      Object.entries(outputs).forEach(([key, value]) => {
        const itemPrice = itemPrices[key].price;
        const totalCosts = itemPrice * value;

        profits += totalCosts;
      });

      return { ...item, profit: Math.ceil(profits / 1000) * 1000 };
    });
    const profitSorting = setPrices.sort((a, b) => a.profit - b.profit);
    setMethodsArray(profitSorting);
  }, [itemPrices]);

  useEffect(() => {
    if (Object.keys(itemPrices).length === 0 && premiumUser) {
      console.log(premiumUser);
      priceFetcher();
    }
    if (Object.keys(itemPrices).length > 0) {
      setMethodProfits();
    }
  }, [itemPrices, setMethodProfits, premiumUser]);

  const handleNavigate = () => {
    if (!userID) {
      navigate("/login");
      return;
    }
    navigate("/checkout");
  };

  return (
    <>
      {!premiumUser && (
        <div className={stl.premiumBanner}>
          <div className={stl.heroCenter}>
            <span className={stl.bannerSpan}>
              Discover methods up to 2M+ as a <br />
              <span className={stl.runeUser}>rune</span> user
            </span>
            <button className={stl.upgradeCta} onClick={handleNavigate}>
              Upgrade
            </button>
          </div>
          <img
            src="./moneymakers/headerbanners/PremiumBG.webp"
            alt="Nightmare zone"
            className={stl.premiumBannerImg}
          />
        </div>
      )}

      {premiumUser && (
        <div className={stl.grid}>
          {methodsArray.map((method) => {
            return (
              <div
                className={stl.gridTile}
                key={method.title}
                onClick={() => {
                  navigate(`${pathname}/${method.title.replaceAll(" ", "_")}`);
                  setMoneyMaker(method);
                }}
              >
                <img
                  src={method.imgSrc}
                  alt={method.title}
                  className={stl.methodImg}
                />
                <span className={stl.gridTitle}>{method.title}</span>
                <span className={stl.tileProfit}>
                  <img
                    src={mills}
                    alt="Oldschool Runescape gold"
                    className={stl.mills}
                  />{" "}
                  {method.profit.toLocaleString()} {"/ h"}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PremiumMoneyMakers;
