const MONEYMAKERS = [
  /*
   * Onion seed serves as placeholder for gp
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
      "Onion seed": 164000,
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
      "Onion seed": 526500,
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
      "Onion seed": 6400,
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
      "Onion seed": 19050,
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
      "Onion seed": 225037,
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
      "Onion seed": 200000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/500px-Agility_Pyramid.webp",
  },
  {
    title: "Creating bones to peaches tablets",
    inputs: {
      "Onion seed": 4750,
      "Soft clay": 750,
      "Nature rune": 1500,
    },
    outputs: {
      "Bones to peaches (tablet)": 750,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Bones_to_peaches_(tablet).webp",
  },
  {
    title: "Cutting ruby bolt tips",
    inputs: {
      Ruby: 1150,
    },
    outputs: {
      "Ruby bolt tips": 13800,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Ruby_bolt_tips_5.webp",
  },
  {
    title: "Crafting gold bracelets",
    inputs: {
      "Gold bar": 1400,
    },
    outputs: {
      "Gold bracelet": 1400,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/500px-Gold_bracelet_detail.webp",
  },
  {
    title: "Catching raw karambwan",
    inputs: {},
    outputs: {
      "Raw karambwan": 600,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/500px-Raw_karambwan_detail.webp",
  },
  {
    title: "Killing aviansies",
    inputs: {
      Swordfish: 20,
    },
    outputs: {
      "Adamantite bar": 108,
      "Runite limbs": 0.9,
      "Grimy ranarr weed": 1.16,
      "Blood rune": 19.77,
      "Nature rune": 32.34,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/400px-Aviansie_(level_148).webp",
  },
  {
    title: "Grinding chocolate bars",
    inputs: {
      "Chocolate bar": 9000,
    },
    outputs: {
      "Chocolate dust": 9000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Chocolate_dust.webp",
  },
  {
    title: "Smithing iron dart tips",
    inputs: {
      "Iron bar": 950,
    },
    outputs: {
      "Iron dart tip": 9500,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Iron_dart_tip.webp",
  },
  {
    title: "Smithing cannonballs",
    inputs: {
      "Steel bar": 1080,
    },
    outputs: {
      Cannonball: 4320,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Cannonball.webp",
  },
  {
    title: "Cleaning grimy guam leaves",
    inputs: {
      "Grimy guam leaf": 5000,
    },
    outputs: {
      "Guam leaf": 5000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Grimy_guam_leaf.webp",
  },
  {
    title: "Charging fire orbs",
    inputs: {
      "Unpowered orb": 468,
      "Cosmic rune": 1404,
      "Falador teleport (tablet)": 18,
    },
    outputs: {
      "Fire orb": 468,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Fire_orb.webp",
  },
  {
    title: "Casting Spin Flax",
    inputs: {
      Flax: 5175,
      "Astral rune": 1035,
      "Nature rune": 2070,
    },
    outputs: {
      "Bow string": 5175,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Bow_string.webp",
  },
  {
    title: "Crafting opal bracelets",
    inputs: {
      "Silver bar": 1200,
      Opal: 1200,
    },
    outputs: {
      "Opal bracelet": 1200,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/500px-Opal_bracelet_detail.png",
  },
  {
    title: "Collecting climbing boots",
    inputs: {
      "Onion seed": 7776,
      "Ring of dueling(8)": 3,
      "Games necklace(8)": 3,
    },
    outputs: {
      "Climbing boots": 648,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Climbing_boots.webp",
  },
  {
    title: "Enchanting sapphire rings",
    inputs: {
      "Sapphire ring": 1600,
      "Cosmic rune": 1600,
    },
    outputs: {
      "Ring of recoil": 1600,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Ring_of_recoil.webp",
  },
  {
    title: "Making pie shells",
    inputs: {
      "Pastry dough": 2450,
      "Pie dish": 2450,
    },
    outputs: {
      "Pie shell": 2450,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Pie_shell.webp",
  },
  {
    title: "Fletching headless arrows",
    inputs: {
      "Arrow shaft": 45000,
      Feather: 45000,
    },
    outputs: {
      "Headless arrow": 45000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Headless_arrow.webp",
  },
  {
    title: "Making tarromin potions",
    inputs: {
      Tarromin: 4000,
      "Vial of water": 4000,
    },
    outputs: {
      "Tarromin potion (unf)": 4000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Tarromin_potion_(unf).webp",
  },
  {
    title: "Cleaning grimy irit leaves",
    inputs: {
      "Grimy irit leaf": 5000,
    },
    outputs: {
      "Irit leaf": 5000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Irit_leaf.webp",
  },
  {
    title: "Buying pies",
    inputs: {
      "Onion seed": 85920,
    },
    outputs: {
      "Redberry pie": 1200,
      "Meat pie": 960,
      "Apple pie": 720,
      "Garden pie": 480,
      "Fish pie": 240,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/200px-Romily_Weaklax.webp",
  },
  {
    title: "Charging air orbs",
    inputs: {
      "Unpowered orb": 525,
      "Cosmic rune": 1575,
      "Energy potion(4)": 31.5,
      "Amulet of glory(6)": 3.5,
    },
    outputs: {
      "Air orb": 525,
      "Amulet of glory": 3.5,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Air_orb.webp",
  },
  {
    title: "Collecting black scimitars from Ardougne Castle",
    inputs: {
      "Ardougne teleport (tablet)": 5,
    },
    outputs: {
      "Black scimitar": 135,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Black_scimitar.webp",
  },
  {
    title: "Cleaning grimy harralander",
    inputs: {
      "Grimy harralander": 5000,
    },
    outputs: {
      Harralander: 5000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Harralander.webp",
  },
  {
    title: "Tanning red dragonhide",
    inputs: {
      "Onion seed": 70000,
      "Red dragonhide": 3500,
      "Energy potion(4)": 135,
    },
    outputs: {
      "Red dragon leather": 3500,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Red_dragon_leather.webp",
  },
  {
    title: "Stringing yew longbows",
    inputs: {
      "Yew longbow (u)": 2400,
      "Bow string": 2400,
    },
    outputs: {
      "Yew longbow": 2400,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Yew_longbow.webp",
  },
  {
    title: "Making anchovy pizzas",
    inputs: {
      "Plain pizza": 2500,
      Anchovies: 2500,
    },
    outputs: {
      "Anchovy pizza": 2500,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Anchovy_pizza.webp",
  },
  {
    title: "Cleaning grimy cadantine",
    inputs: {
      "Grimy cadantine": 5000,
    },
    outputs: {
      Cadantine: 5000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Cadantine.webp",
  },
  {
    title: "Killing disciples of Iban",
    inputs: {
      "Ring of dueling(8)": 1.04,
    },
    outputs: {
      "Zamorak monk top": 100,
      "Zamorak monk bottom": 100,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Zamorak_monk_top.webp",
  },
  {
    title: "Recharging rings of wealth",
    inputs: {
      "Ring of wealth": 216,
      "Super energy(4)": 8,
    },
    outputs: {
      "Ring of wealth (5)": 216,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Ring_of_wealth_(5).webp",
  },
  {
    title: "Tanning black dragonhide",
    inputs: {
      "Onion seed": 70000,
      "Black dragonhide": 3500,
      "Energy potion(4)": 135,
    },
    outputs: {
      "Black dragon leather": 3500,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Black_dragon_leather.webp",
  },
  {
    title: "Cleaning grimy snapdragon",
    inputs: {
      "Grimy snapdragon": 5000,
    },
    outputs: {
      Snapdragon: 5000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Snapdragon.webp",
  },
  {
    title: "Tanning green dragonhide",
    inputs: {
      "Onion seed": 70000,
      "Green dragonhide": 3500,
      "Energy potion(4)": 135,
    },
    outputs: {
      "Green dragon leather": 3500,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Green_dragon_leather.webp",
  },
  {
    title: "Humidifying clay",
    inputs: {
      Clay: 22005,
      "Astral rune": 815,
    },
    outputs: {
      "Soft clay": 22005,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Soft_clay.webp",
  },
  {
    title: "Cleaning grimy kwuarm",
    inputs: {
      "Grimy kwuarm": 5000,
    },
    outputs: {
      Kwuarm: 5000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Kwuarm.webp",
  },
  {
    title: "Grinding unicorn horns",
    inputs: {
      "Unicorn horn": 9000,
    },
    outputs: {
      "Unicorn horn dust": 9000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Unicorn_horn.webp",
  },
  {
    title: "Collecting mort myre fungi",
    inputs: {
      "Ring of dueling(8)": 7.5,
      "Teleport to house (tablet)": 60,
    },
    outputs: {
      "Mort myre fungus": 1620,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Mort_myre_fungus.webp",
  },
  {
    title: "Making pineapple pizzas",
    inputs: {
      "Plain pizza": 2500,
      "Pineapple ring": 2500,
    },
    outputs: {
      "Pineapple pizza": 2500,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Pineapple_pizza.webp",
  },
  {
    title: "Casting Superglass Make",
    inputs: {
      "Bucket of sand": 7800,
      Seaweed: 7800,
      "Astral rune": 1200,
    },
    outputs: {
      "Molten glass": 10140,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Molten_glass.webp",
  },
  {
    title: "Making mahogany planks",
    inputs: {
      "Mahogany logs": 2106,
      "Willow logs": 78,
      "Ring of dueling(8)": 9.75,
      "Onion seed": 3159000,
    },
    outputs: {
      "Mahogany plank": 2106,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Mahogany_plank.webp",
  },
  {
    title: "Cleaning grimy avantoe",
    inputs: {
      "Grimy avantoe": 5000,
    },
    outputs: {
      Avantoe: 5000,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Avantoe.webp",
  },
  {
    title: "Stealing cave goblin wire",
    inputs: {
      "Jug of wine": 42,
    },
    outputs: {
      "Cave goblin wire": 420,
    },
    profit: 0,
    imgSrc: "./moneymakers/icons/Cave_goblin_wire.webp",
  },
];

export default MONEYMAKERS;
