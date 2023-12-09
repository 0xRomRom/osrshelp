const BODIES = [
  {
    type: "Melee",
    name: "3rd age druidic robe top",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 65,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 8,
        Weight: 1.5,
      },
    ],
    src: "./gearcalculator/bodies/3rd_age_druidic_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "3rd age platebody",
    defLvl: 65,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: -20,
        Range: 0,
      },
      // Defence
      {
        Stab: 96,
        Slash: 108,
        Crush: 113,
        Magic: -4,
        Range: 97,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 8,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/3rd_age_platebody.webp",
    slot: "Body",
  },
];

export default BODIES;
