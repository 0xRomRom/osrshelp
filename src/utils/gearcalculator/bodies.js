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
        Prayer: 0,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/3rd_age_platebody.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "3rd age range top",
    defLvl: 45,
    rangedLvl: 65,
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
        Magic: -15,
        Range: 30,
      },
      // Defence
      {
        Stab: 55,
        Slash: 47,
        Crush: 60,
        Magic: 60,
        Range: 55,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 4,
      },
    ],
    src: "./gearcalculator/bodies/3rd_age_range_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "3rd age robe top",
    defLvl: 30,
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
        Magic: 24,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 24,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.7,
      },
    ],
    src: "./gearcalculator/bodies/3rd_age_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Adamant platebody",
    defLvl: 30,
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
        Magic: -30,
        Range: -15,
      },
      // Defence
      {
        Stab: 65,
        Slash: 63,
        Crush: 55,
        Magic: -6,
        Range: 63,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 11.339,
      },
    ],
    src: "./gearcalculator/bodies/Adamant_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Adamant platebody (g)",
    defLvl: 30,
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
        Magic: -30,
        Range: -15,
      },
      // Defence
      {
        Stab: 65,
        Slash: 63,
        Crush: 55,
        Magic: -6,
        Range: 63,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 11.339,
      },
    ],
    src: "./gearcalculator/bodies/Adamant_platebody_(g).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Adamant platebody (t)",
    defLvl: 30,
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
        Magic: -30,
        Range: -15,
      },
      // Defence
      {
        Stab: 65,
        Slash: 63,
        Crush: 55,
        Magic: -6,
        Range: 63,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 11.339,
      },
    ],
    src: "./gearcalculator/bodies/Adamant_platebody_(t).webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Ahrim's robetop",
    defLvl: 70,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 70,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 30,
        Range: -10,
      },
      // Defence
      {
        Stab: 52,
        Slash: 37,
        Crush: 63,
        Magic: 30,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 4.535,
      },
    ],
    src: "./gearcalculator/bodies/Ahrim's_robetop.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Ancestral robetop",
    defLvl: 65,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 75,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 35,
        Range: -8,
      },
      // Defence
      {
        Stab: 42,
        Slash: 31,
        Crush: 51,
        Magic: 28,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 2,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/bodies/Ancestral_robe_top.webp",
    slot: "Body",
  },
];

export default BODIES;
