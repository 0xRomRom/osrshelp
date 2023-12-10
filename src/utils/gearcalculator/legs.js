const LEGS = [
  {
    type: "Melee",
    name: "Amulet of accuracy",
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
        Stab: 4,
        Slash: 4,
        Crush: 4,
        Magic: 4,
        Range: 4,
      },
      // Defence
      {
        Stab: 9,
        Slash: 9,
        Crush: 9,
        Magic: 9,
        Range: 9,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 4,
        Weight: 0.01,
      },
    ],
    src: "./gearcalculator/necklace/Amulet_of_accuracy.webp",
    slot: "Legs",
  },
];

export default LEGS;
