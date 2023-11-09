import stl from "./AlchemyFilter.module.css";
import { useEffect, useState } from "react";

const AlchemyFilter = () => {
  const [loading, setLoading] = useState(false);
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (e) => {
    console.log(e.target.value);
    // setSearchState(e.target.value);
    setSearchItem(e.target.value);
  };

  const priceFetcher = async () => {
    console.log(searchItem);
    setLoading(true);
    const fetcher = await fetch(
      "https://api.weirdgloop.org/exchange/history/osrs/latest?name=Banana|Unpowered_orb|Water_orb|Earth_orb|Air_orb|Fire_orb|Air_rune|Mind_rune|Water_rune|Earth_rune|Fire_rune|Body_rune|Cosmic_rune|Chaos_rune|Nature_rune|Law_rune|Death_rune|Astral_rune|Blood_rune|Soul_rune|Wrath_rune|Opal_bolts|Opal_bolts_(e)|Sapphire_bolts|Sapphire_bolts_(e)|Pearl_bolts|Pearl_bolts_(e)|Emerald_bolts|Emerald_bolts_(e)|Topaz_bolts|Topaz_bolts_(e)|Ruby_bolts|Ruby_bolts_(e)|Diamond_bolts|Diamond_bolts_(e)|Dragonstone_bolts|Dragonstone_bolts_(e)|Onyx_bolts|Onyx_bolts_(e)"
    );
    const result = await fetcher.json();
    console.log(result);
  };

  useEffect(() => {
    priceFetcher();
  }, [priceFetcher]);
  return (
    <div className={stl.modal}>
      <div className={stl.innerWrap}>
        <img
          src="/staves/Staff_of_fire.webp"
          alt="Staff of fire"
          className={stl.fireStaff}
        />
        <input
          type="text"
          className={stl.monsterInput}
          placeholder="Item to Alch"
          onChange={handleSearch}
        />
        <button
          className={stl.cta}
          onClick={priceFetcher}
          disabled={loading ? true : false}
        >
          {loading ? "Loading" : "Find Item"}
        </button>
      </div>
    </div>
  );
};

export default AlchemyFilter;
