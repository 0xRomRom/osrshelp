const PREMIUMMONEYMAKERS = [
  {
    title: "Smelting steel bars at Blast Furnace",
    inputs: {
      "Iron ore": 5400,
      "Onion seed": 72000,
      Coal: 5400,
      "Stamina potion(4)": 9,
    },
    outputs: {
      "Steel bar": 5400,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Steel_bar.webp",
  },
  {
    title: "Mining gemstones",
    inputs: {},
    outputs: {
      "Uncut opal": 445,
      "Uncut jade": 221,
      "Uncut red topaz": 112,
      "Uncut sapphire": 67.83,
      "Uncut emerald": 37.43,
      "Uncut ruby": 36.96,
      "Uncut diamond": 29.93,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Uncut_diamond.webp",
  },
  {
    title: "Making irit potions",
    inputs: {
      "Irit leaf": 4000,
      "Vial of water": 4000,
    },
    outputs: {
      "Irit potion (unf)": 4000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Irit_potion_(unf).webp",
  },
  {
    title: "Killing gargoyles",
    inputs: {},
    outputs: {
      "Onion seed": 600000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/500px-Gargoyle.webp",
  },
  {
    title: "Killing Ents",
    inputs: {
      "Prayer potion(4)": 2,
      "Stamina potion(4)": 1,
      Lobster: 20,
    },
    outputs: {
      "Magic logs": 540,
      "Yew logs": 171,
      "Maple logs": 89.6,
      "Willow logs": 109,
      "Oak logs": 81.2,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/360px-Ent_(lv_86).webp",
  },
  {
    title: "Charging and alchemising bracelets of ethereum",
    inputs: {
      "Bracelet of ethereum (uncharged)": 459,
      "Revenant ether": 459,
      "Nature rune": 459,
    },
    outputs: {
      "Onion seed": 20655000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Bracelet_of_ethereum_(uncharged).webp",
  },
  {
    title: "Crafting cosmic runes",
    inputs: {
      "Pure essence": 2160,
    },
    outputs: {
      "Cosmic rune": 6918,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Cosmic_rune.webp",
  },
  {
    title: "Fletching diamond bolts",
    inputs: {
      "Adamant bolts": 27000,
      "Diamond bolt tips": 27000,
    },
    outputs: {
      "Diamond bolts": 27000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Diamond_bolts_5.webp",
  },
  {
    title: "Making weapon poison(++)",
    inputs: {
      "Poison ivy berries": 150,
      "Coconut milk": 150,
    },
    outputs: {
      "Weapon poison(++)": 150,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Weapon_poison(++).webp",
  },
  {
    title: "Mining runite ore",
    inputs: {},
    outputs: {
      "Runite ore": 65,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/400px-Runite_rocks.webp",
  },
  {
    title: "Making Guthix rests",
    inputs: {
      "Bowl of hot water": 560,
      "Empty cup": 560,
      "Guam leaf": 1120,
      Marrentill: 560,
      Harralander: 560,
    },
    outputs: {
      "Guthix rest(4)": 420,
      "Empty cup": 140,
      Bowl: 560,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/400px-Guthix_rest(4)_detail.webp",
  },
  {
    title: "Making lantadyme potions",
    inputs: {
      Lantadyme: 4000,
      "Vial of water": 4000,
    },
    outputs: {
      "Lantadyme potion (unf)": 4000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Lantadyme_potion_(unf).webp",
  },
  {
    title: "Making raw wild pies",
    inputs: {
      "Pie shell": 740,
      "Raw bear meat": 740,
      "Raw rabbit": 740,
      "Raw chompy": 740,
    },
    outputs: {
      "Raw wild pie": 740,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Raw_wild_pie.webp",
  },
  {
    title: "Making avantoe potions",
    inputs: {
      Avantoe: 4000,
      "Vial of water": 4000,
    },
    outputs: {
      "Avantoe potion (unf)": 4000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Avantoe_potion_(unf).webp",
  },
  {
    title: "Fletching ruby bolts",
    inputs: {
      "Adamant bolts": 27000,
      "Ruby bolt tips": 27000,
    },
    outputs: {
      "Ruby bolts": 27000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Ruby_bolts_5.webp",
  },
  {
    title: "Making ranarr potions",
    inputs: {
      "Ranarr weed": 4000,
      "Vial of water": 4000,
    },
    outputs: {
      "Ranarr potion (unf)": 4000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Ranarr_potion_(unf).webp",
  },
  {
    title: "Making ultracompost",
    inputs: {
      Supercompost: 2700,
      "Volcanic ash": 5400,
    },
    outputs: {
      Ultracompost: 2700,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Ultracompost.webp",
  },
  {
    title: "Casting Tan Leather",
    inputs: {
      "Nature rune": 1600,
      "Astral rune": 3200,
      "Red dragonhide": 8000,
    },
    outputs: {
      "Red dragon leather": 8000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Red_dragon_leather.webp",
  },
  {
    title: "Making toadflax potions",
    inputs: {
      Toadflax: 4000,
      "Vial of water": 4000,
    },
    outputs: {
      "Toadflax potion (unf)": 4000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Toadflax_potion_(unf).webp",
  },
  {
    title: "Making kwuarm potions",
    inputs: {
      Kwuarm: 4000,
      "Vial of water": 4000,
    },
    outputs: {
      "Kwuarm potion (unf)": 4000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Kwuarm_potion_(unf).webp",
  },
  {
    title: "Killing the Giant Mole (Dharok's)",
    inputs: {
      "Onion seed": 180000,
    },
    outputs: {
      "Mole claw": 60,
      "Mole skin": 110,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/500px-Giant_Mole_(Christmas).webp",
  },
  {
    title: "Crafting astral runes",
    inputs: {
      "Pure essence": 4818,
      "Law rune": 73,
      "Cosmic rune": 9.13,
      "Stamina potion(1)": 30,
    },
    outputs: {
      "Astral rune": 15272,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Astral_rune.webp",
  },
  {
    title: "Crushing bird nests",
    inputs: {
      "Bird nest (empty)": 5000,
    },
    outputs: {
      "Crushed nest": 5000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/400px-Crushed_nest_detail.webp",
  },
  {
    title: "Making snapdragon potions",
    inputs: {
      Snapdragon: 4000,
      "Vial of water": 4000,
    },
    outputs: {
      "Snapdragon potion (unf)": 4000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Snapdragon_potion_(unf).webp",
  },
  {
    title: "Hunting black chinchompas",
    inputs: {},
    outputs: {
      "Black chinchompa": 300,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/200px-Black_chinchompa_detail.webp",
  },
  {
    title: "Crafting blood runes",
    inputs: {
      "Pure essence": 4620,
      "Stamina potion(4)": 4,
      "Blood essence": 2.31,
      "Amulet of glory(6)": 11.67,
    },
    outputs: {
      "Blood rune": 9709,
      "Amulet of glory": 11.67,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Blood_rune.webp",
  },
  {
    title: "Crafting Xerician robes",
    inputs: {
      "Xerician fabric": 7600,
      Thread: 380,
    },
    outputs: {
      "Xerician robe": 1900,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/400px-Xerician_robe_detail.webp",
  },
  {
    title: "Pickpocketing vyres",
    inputs: {
      "Dodgy necklace": 6.04,
      "Cosmic rune": 300,
    },
    outputs: {
      "Blood shard": 0.29,
      "Onion seed": 300000,
      "Death rune": 175,
      "Blood rune": 87.27,
      "Blood pint": 65.45,
      "Uncut ruby": 54.55,
      Diamond: 10.91,
      "Cooked mystery meat": 10.91,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/300px-Caninelle_Draynar.webp",
  },
];

export default PREMIUMMONEYMAKERS;
