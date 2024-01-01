const MONEYMAKERS = [
  /*
   * Pure essence serves as placeholder for gp
   */

  {
    title: "Smithing iron knives",
    inputs: {
      "Iron bar": 950,
    },
    outputs: {
      "Iron knife": 4750,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Iron_knife.webp",
  },
  {
    title: "Crafting diamond bracelets",
    inputs: {
      "Gold bar": 1200,
      Diamond: 1200,
    },
    outputs: {
      "Diamond bracelet": 1200,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/500px-Diamond_bracelet_detail.webp",
  },
  {
    title: "Cleaning grimy tarromin",
    inputs: {
      "Grimy tarromin": 5000,
    },
    outputs: {
      Tarromin: 5000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Grimy_tarromin.webp",
  },
  {
    title: "Baking potatoes",
    inputs: {
      Potato: 1120,
    },
    outputs: {
      "Baked potato": 1120,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/400px-Baked_potato_detail.webp",
  },
  {
    title: "Collecting red spiders' eggs",
    inputs: {
      "Iron sword": 15,
      "Law rune": 15,
      "Fire rune": 15,
      "Energy potion(4)": 37.5,
    },
    outputs: {
      "Red spiders' eggs": 390,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/300px-Red_spiders'_eggs_detail.webp",
  },
  {
    title: "Mining adamantite ore",
    inputs: {},
    outputs: {
      "Adamantite ore": 166,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/420px-Adamantite_ore_detail.webp",
  },
  {
    title: "Collecting wine of zamorak",
    inputs: {
      "Law rune": 216,
      Cake: 32,
      "Restore potion(4)": 4,
      "Water rune": 4,
      "Ring of dueling(8)": 0.5,
    },
    outputs: {
      "Wine of zamorak": 212,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Wine_of_zamorak.webp",
  },
  {
    title: "Cooking raw monkfish",
    inputs: {
      "Raw monkfish": 1300,
    },
    outputs: {
      Monkfish: 1300,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/500px-Monkfish_detail.webp",
  },
  {
    title: "Killing chaos druids",
    inputs: {},
    outputs: {
      "Pure essence": 164000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/260px-Chaos_druid.webp",
  },
  {
    title: "Making oak planks",
    inputs: {
      "Oak logs": 2106,
      "Willow logs": 78,
      "Ring of dueling(8)": 9.75,
      "Pure essence": 526500,
    },
    outputs: {
      "Oak plank": 2106,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Oak_plank.webp",
  },
  {
    title: "Cooking plain pizzas",
    inputs: {
      "Pizza base": 540,
      Tomato: 540,
      Cheese: 540,
    },
    outputs: {
      "Plain pizza": 540,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Plain_pizza.webp",
  },
  {
    title: "Collecting jangerberries",
    inputs: {
      Rope: 20,
      "Ring of dueling(8)": 2.5,
    },
    outputs: {
      Jangerberries: 560,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/260px-Jangerberries_detail.webp",
  },
  {
    title: "Collecting fish food",
    inputs: {},
    outputs: {
      "Fish food": 240,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Fish_food.webp",
  },
  {
    title: "Buying bronze bars",
    inputs: {
      "Pure essence": 6400,
    },
    outputs: {
      "Bronze bar": 800,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Bronze_bar.webp",
  },
  {
    title: "Mining iron ore",
    inputs: {},
    outputs: {
      "Iron ore": 1700,
      "Pure essence": 19050,
      "Uncut sapphire": 4.94,
      "Uncut emerald": 2.47,
      "Uncut ruby": 1.24,
      "Uncut diamond": 0.31,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/600px-Iron_ore_detail.webp",
  },
  {
    title: "Making pizza bases",
    inputs: {
      "Jug of water": 2400,
      "Pot of flour": 2400,
    },
    outputs: {
      "Pizza base": 2400,
      Jug: 2400,
      Pot: 2400,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Pizza_base.webp",
  },
  {
    title: "Picking bananas",
    inputs: {
      Basket: 345,
      "Ring of dueling(8)": 1.88,
      "Amulet of glory(4)": 3.75,
    },
    outputs: {
      "Bananas(5)": 345,
      "Amulet of glory": 3.75,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Bananas(5).webp",
  },
  {
    title: "Buying team capes",
    inputs: {
      "Pure essence": 225037,
      "Energy potion(4)": 83,
    },
    outputs: {
      "Team-6 cape": 4000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/300px-Team-46_cape_detail.webp",
  },
  {
    title: "Cleaning grimy dwarf weed",
    inputs: {
      "Grimy dwarf weed": 5000,
    },
    outputs: {
      "Dwarf weed": 5000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Grimy_dwarf_weed.webp",
  },
  {
    title: "Cooking raw anglerfish",
    inputs: {
      "Raw anglerfish": 1300,
    },
    outputs: {
      Anglerfish: 1300,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/400px-Raw_anglerfish_detail.webp",
  },
  {
    title: "Cleaning grimy lantadyme",
    inputs: {
      "Grimy lantadyme": 5000,
    },
    outputs: {
      Lantadyme: 5000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Grimy_lantadyme.webp",
  },
  {
    title: "Charging earth orbs",
    inputs: {
      "Unpowered orb": 513,
      "Cosmic rune": 1539,
      "Amulet of glory(4)": 4.75,
      "Stamina potion(1)": 19,
    },
    outputs: {
      "Earth orb": 513,
      "Amulet of glory": 4.75,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Earth_orb.webp",
  },
  {
    title: "Making pastry dough",
    inputs: {
      "Bucket of water": 2400,
      "Pot of flour": 2400,
    },
    outputs: {
      "Pastry dough": 2400,
      Bucket: 2400,
      Pot: 2400,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/280px-Pastry_dough_detail.webp",
  },
  {
    title: "Creating teleport to house tablets",
    inputs: {
      "Soft clay": 1100,
      "Law rune": 1100,
      "Earth rune": 1100,
    },
    outputs: {
      "Teleport to house (tablet)": 1100,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Teleport_to_house_(tablet).webp",
  },
  {
    title: "Climbing the Agility Pyramid",
    inputs: {},
    outputs: {
      "Pure essence": 200000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/500px-Agility_Pyramid.webp",
  },
  {
    title: "Creating bones to peaches tablets",
    inputs: {
      "Pure essence": 4750,
      "Soft clay": 750,
      "Nature rune": 1500,
    },
    outputs: {
      "Bones to peaches (tablet)": 750,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Bones_to_peaches_(tablet).webp",
  },
];

export default MONEYMAKERS;
