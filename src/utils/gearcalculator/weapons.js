const WEAPONS = [
  {
    type: "Melee",
    name: "'24-carat'_sword",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -100,
        Slash: -100,
        Crush: -50,
        Magic: 2,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 2,
        Range: 0,
      },
      // Other
      {
        "Melee strength": -10,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/'24-carat'_sword.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "3rd age axe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 65,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -2,
        Slash: 38,
        Crush: 32,
        Magic: 2,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 0,
        Magic: 2,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 42,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/3rd_age_axe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "3rd age longsword",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 65,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 72,
        Crush: 60,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 3,
        Crush: 2,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 75,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1,
      },
    ],
    src: "./gearcalculator/weapons/3rd_age_longsword.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "3rd age pickaxe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 65,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 20,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 20,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 3.175,
      },
    ],
    src: "./gearcalculator/weapons/3rd_age_pickaxe.webp",
    slot: "Weapon",
  },
];

export default WEAPONS;
