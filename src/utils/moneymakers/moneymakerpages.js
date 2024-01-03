const MONEYMAKERPAGES = [
  {
    title: "Smithing iron knives",
    headerImg: "./moneymakers/headerbanners/SmithingIronKnifes.webp",
    iconSrc: "./moneymakers/icons/Iron_knife.webp",
    skills: [{ Smithing: 22 }],
    items: [{ "Iron Bars": 0 }, { Hammer: 0 }],
    quests: [],
    other: [],
    location: "Varrock west bank",
    instructions: [
      "Grab a hammer and fill the rest of your inventory with iron bars.",
      "Walk to the anvil south of varrock west bank and smith all bars into knifes.",
      "Get new bars from the bank and repeat.",
    ],
    notes: [
      "Varrock west bank should be used as it's the closest bank to an anvil in Oldschool Runescape.",
    ],
  },
  {
    title: "Baking potatoes",
    headerImg: "./moneymakers/headerbanners/BakingPotatoes.webp",
    iconSrc: "./moneymakers/icons/400px-Baked_potato_detail.webp",
    skills: [{ Cooking: 7 }],
    items: [{ Potato: 0 }],
    quests: [],
    other: [],
    location: "Cooking guild or Myth's guild",
    instructions: [
      "Potatoes can only be baked on a range.",
      "Fill your inventory with potatoes and cook on the range nearby.",
      "A higher cooking level burns less food, which is highly recommended.",
    ],
    notes: ["41+ Cooking recommended"],
  },
  {
    title: "Collecting wine of zamorak",
    headerImg: "./moneymakers/headerbanners/CollectingWines.webp",
    iconSrc: "./moneymakers/icons/Wine_of_zamorak.webp",
    skills: [{ Magic: 33 }, { Hitpoints: 20 }, { Total: 500 }],
    items: [
      { "Staff of air": 0 },
      { "Law rune": 216 },
      { Cake: 32 },
      { "Restore potion(4)": 4 },
      { "Water rune": 4 },
      { "Ring of dueling(8)": 0.5 },
    ],
    quests: [],
    other: [],
    location:
      "Chaos Temple north-west of Goblin Village, guarded by Monks of Zamorak.",
    instructions: [
      "Equip Zamorak robes and the staff of air.",
      "Enter the Chaos Temple, north from Falador (members can use games necklaces for a faster route).",
      "Climb the ladder inside the temple.",
      "Use Telekinetic Grab on the wine on the table.",
      "Quickly grab the other Wine of Zamorak across the room with Telekinetic Grab.",
      "Return upstairs to wait for the first wine to respawn (25 seconds).",
      "Repeat the process.",
      "If using a looting bag, fill it in the Wilderness just north of the temple.",
    ],
    notes: ["500 total level is required."],
  },
  {
    title: "Collecting red spiders' eggs",
    headerImg: "./moneymakers/headerbanners/CollectingSpidersEggs.webp",
    iconSrc: "./moneymakers/icons/300px-Red_spiders'_eggs_detail.webp",
    skills: [{ Combat: 69 }],
    items: [
      { "Staff of air": 0 },
      { "Iron sword": 15 },
      { "Law rune": 15 },
      { "Fire rune": 15 },
      { "Energy potion(4)": 37.5 },
    ],
    quests: [],
    other: [],
    location: "Varrock sewers",
    instructions: [
      "Gather required items from the bank.",
      "Head to the manhole at the eastern exit of Varrock Palace.",
      "Move through the sewers until reaching the spider web.",
      "Use the slash item to cut through the web (drop if using Varrock Teleport method).",
      "Gather all Red Spiders' Eggs in the southernmost part of the sewer.",
      "Find a safe spot if needed and switch worlds or teleport back to Varrock.",
      "Continue the process until your inventory is full.",
      "Teleport back to Varrock and bank the collected eggs.",
    ],
    notes: ["Slash weapon is required."],
  },
  {
    title: "Crafting diamond bracelets",
    headerImg: "./moneymakers/headerbanners/CraftingDiamondBracelets.webp",
    iconSrc: "./moneymakers/icons/500px-diamond_bracelet_detail.webp",
    skills: [{ Crafting: 58 }],
    items: [
      { "Gold bar": 1200 },
      { Diamond: 1200 },
      { "Bracelet mould": 0 },
      { "Weight reducing clothing": 0 },
    ],
    quests: [],
    other: [],
    location: "Edgeville",
    instructions: [
      "Grab a bracelet mould and equal amounts of gold bars and diamonds.",
      "Smelt into bracelets at the furnace east of the bank",
      "Bank the crafted bracelets and replenish supplies.",
    ],
    notes: [],
  },
  {
    title: "Killing chaos druids",
    headerImg: "./moneymakers/headerbanners/KillingChaosDruids.webp",
    iconSrc: "./moneymakers/icons/260px-Chaos_druid.webp",
    skills: [{ Combat: 40 }, { Prayer: 25 }],
    items: [
      { "A decent weapon and gear": 0 },
      { "Amulet of glory": 0 },
      { "Some food": 0 },
      { "Looting bag/herb sack": 0 },
    ],
    quests: [],
    other: [],
    location: "Edgeville",
    instructions: [
      "Equip your desired combat style.",
      "Head over to the edgeville dungeon through the trapdoor south of the bank.",
      "Find the chaos druis and start killing them. Be aware of player killers.",
      "Once your inventory is full, teleport to edgeville bank and repeat.",
    ],
    notes: [
      "Wilderness area. Don't bring any valuables you're not willing to lose.",
    ],
  },
  {
    title: "Mining adamantite ore",
    headerImg: "./moneymakers/headerbanners/MiningGuild.webp",
    iconSrc: "./moneymakers/icons/420px-Adamantite_ore_detail.webp",
    skills: [{ Mining: 70 }],
    items: [
      { "Dragon/Crystal pickaxe": 0 },
      { "Varrock armor 3": 0 },
      { "Superior/Export mining gloves": 0 },
      { "Celestial ring": 0 },
      { "Celestial/Elven signet": 0 },
    ],
    quests: [],
    other: [],
    location: "Mining guild",
    instructions: [
      "Equip your mining gear and head over to the mining guild.",
      "Locate the adamant ore spawns and start mining.",
      "Ores respawn every 2 minutes, hop worlds to find unmined rocks.",
      "Deposit your ores in the mining guild's bank.",
    ],
    notes: [],
  },
  {
    title: "Cleaning grimy guam leaves",
    headerImg: "./moneymakers/headerbanners/OneClickBank.webp",
    iconSrc: "./moneymakers/icons/Grimy_guam_leaf.webp",
    skills: [{ Herblore: 3 }],
    items: [{ "Grimy guam leaves": 5000 }],
    quests: ["Druidic ritual"],
    other: [],
    location: "1 click bank (castlewars)",
    instructions: [
      "Fill your inventory with grimy guam leaves.",
      "Click on every guam leave to clean it.",
      "Once all herbs are cleaned, bank for new grimy leaves.",
      "An inventory should take around 10-15 seconds.",
    ],
    notes: [],
  },
  {
    title: "Cooking raw monkfish",
    headerImg: "./moneymakers/headerbanners/AlkharidRange.webp",
    iconSrc: "./moneymakers/icons/500px-Monkfish_detail.webp",
    skills: [{ Cooking: 62 }],
    items: [{ "Raw monkfish": 1300 }, { "Cooking gauntlets": 0 }],
    quests: [],
    other: [],
    location: "Al-kharid",
    instructions: [
      "Fill your inventory with raw monkfish.",
      "Run over to the range north of the bank.",
      "Cook all monkfish and bank afterwards.",
    ],
    notes: [
      "80+ Cooking is recommended.",
      "Safe the burned fish as there's people that collect burned fish, and are willing to pay for them.",
    ],
  },
  {
    title: "Cooking plain pizzas",
    headerImg: "./moneymakers/headerbanners/OneClickBank.webp",
    iconSrc: "./moneymakers/icons/Plain_pizza.webp",
    skills: [{ Cooking: 35 }],
    items: [{ "Pizza base": 540 }, { Tomato: 540 }, { Cheese: 540 }],
    quests: [],
    other: [],
    location: "1 click bank (castlewars)",
    instructions: [
      "Fill your inventory with 14 pizza bases and 14 tomato's.",
      "Use the pizza base on the tomato to create 14 tomato bases.",
      "Grab 14 cheese from the bank and add them to the pizza's.",
    ],
    notes: [],
  },
  {
    title: "Collecting fish food",
    headerImg: "./moneymakers/headerbanners/CollectingFishFood.webp",
    iconSrc: "./moneymakers/icons/Fish_food.webp",
    skills: [],
    items: [{ "Amulet of glory": 0 }],
    quests: [],
    other: [],
    location: "Draynor manor 1st floor",
    instructions: [
      "Pick up the fish food and hop to the next world.",
      "Respawn takes 60 seconds.",
      "If your inventory is full, glory teleport to draynor village.",
    ],
    notes: [],
  },
  {
    title: "Collecting jangerberries",
    headerImg: "./moneymakers/headerbanners/CollectingJangerberries.webp",
    iconSrc: "./moneymakers/icons/260px-Jangerberries_detail.webp",
    skills: [{ Agility: 10 }],
    items: [{ Rope: 20 }, { "Ring of dueling(8)": 2.5 }],
    quests: [],
    other: [],
    location: "Island west of Yanille",
    instructions: [
      "Start in the castle wars bank with a rope in your inventory.",
      "Run to the island and use your rope on the tree to swing over.",
      "Berries spawn as fast as you can collect.",
      "Collect a full inventory and teleport to castle wars using the duel rings.",
    ],
    notes: [],
  },
  {
    title: "Cleaning grimy dwarf weed",
    headerImg: "./moneymakers/headerbanners/OneClickBank.webp",
    iconSrc: "./moneymakers/icons/Grimy_guam_leaf.webp",
    skills: [{ Herblore: 70 }],
    items: [{ "Grimy dwarf weed": 5000 }],
    quests: ["Druidic ritual"],
    other: [],
    location: "1 click bank (castlewars)",
    instructions: [
      "Fill your inventory with dwarf weed.",
      "Click on every guam leave to clean it.",
      "Once all herbs are cleaned, bank for new grimy leaves.",
      "An inventory should take around 10-15 seconds.",
    ],
    notes: [],
  },
  {
    title: "Creating bones to peaches tablets",
    headerImg: "./moneymakers/headerbanners/HousePortal.webp",
    iconSrc: "./moneymakers/icons/Bones_to_peaches_(tablet).webp",
    skills: [{ Magic: 60 }, { Attack: 30 }],
    items: [
      { "Mud battlestaff": 0 },
      { "Soft clay": 750 },
      { "Nature runes": 1500 },
      { Coins: 3750 },
    ],
    quests: [],
    other: ["Unlock bones to peaches from the mage training arena"],
    location: "House (rimmington)",
    instructions: [
      "Get nature runes, noted soft clay and some coins from the bank.",
      "Enter any player owned house with a mahogany demon or marble lectern.",
      "Select bones to peaches tablets and create a full inventory worth.",
      "Leave the POH and vind phials to unnote your soft clay (if using Rimmington).",
    ],
    notes: ["67 Construction is required if you want to use your own house."],
  },
  {
    title: "Mining iron ore",
    headerImg: "./moneymakers/headerbanners/MiningGuild.webp",
    iconSrc: "./moneymakers/icons/600px-Iron_ore_detail.webp",
    skills: [{ Mining: 15 }],
    items: [
      { "Rune/Dragon pickaxe": 0 },
      { "Varrock armor 1": 0 },
      { "Amulet of glory": 0 },
      { "Celestial ring": 0 },
      { "Gem bag": 0 },
    ],
    quests: [],
    other: [],
    location: "Mining guild",
    instructions: ["Mine iron rocks and bank at the mining guild's bank."],
    notes: ["60+ Mining is recommended."],
  },
];

export default MONEYMAKERPAGES;