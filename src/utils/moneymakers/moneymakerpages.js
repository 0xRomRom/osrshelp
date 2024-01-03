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
];

export default MONEYMAKERPAGES;
