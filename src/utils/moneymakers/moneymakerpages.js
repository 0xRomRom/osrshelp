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
];

export default MONEYMAKERPAGES;
