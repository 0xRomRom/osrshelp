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
  {
    type: "Melee",
    name: "Ancient ceremonial top",
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
        Prayer: 6,
        Weight: 0.9,
      },
    ],
    src: "./gearcalculator/bodies/Ancient_ceremonial_top.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Ancient d'hide body",
    defLvl: 40,
    rangedLvl: 70,
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
        Magic: 50,
        Range: 55,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 1,
        Weight: 6,
      },
    ],
    src: "./gearcalculator/bodies/Ancient_d'hide_body.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Armadyl d'hide body",
    defLvl: 40,
    rangedLvl: 70,
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
        Magic: 50,
        Range: 55,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 1,
        Weight: 6,
      },
    ],
    src: "./gearcalculator/bodies/Armadyl_d'hide_body.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Ancient platebody",
    defLvl: 40,
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
        Stab: 82,
        Slash: 80,
        Crush: 72,
        Magic: -6,
        Range: 80,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 1,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/Ancient_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Bandos platebody",
    defLvl: 40,
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
        Stab: 82,
        Slash: 80,
        Crush: 72,
        Magic: -6,
        Range: 80,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 1,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/Bandos_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Armadyl platebody",
    defLvl: 40,
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
        Stab: 82,
        Slash: 80,
        Crush: 72,
        Magic: -6,
        Range: 80,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 1,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/Armadyl_platebody.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Ancient robe top",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 20,
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
        Magic: -4,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 4,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 6,
        Weight: 0.005,
      },
    ],
    src: "./gearcalculator/bodies/Ancient_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Bandos robe top",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 20,
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
        Magic: -4,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 4,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 6,
        Weight: 0.005,
      },
    ],
    src: "./gearcalculator/bodies/Bandos_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Armadyl robe top",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 20,
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
        Magic: -4,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 4,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 6,
        Weight: 0.005,
      },
    ],
    src: "./gearcalculator/bodies/Armadyl_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Angler top",
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
        Prayer: 0,
        Weight: 1,
      },
    ],
    src: "./gearcalculator/bodies/Angler_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Ankou top",
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
        Prayer: 0,
        Weight: 0.5,
      },
    ],
    src: "./gearcalculator/bodies/Ankou_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Ardougne knight platebody",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: -30,
        Range: -15,
      },
      // Defence
      {
        Stab: 21,
        Slash: 20,
        Crush: 12,
        Magic: -6,
        Range: 20,
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
    src: "./gearcalculator/bodies/Ardougne_knight_platebody.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Armadyl chestplate",
    defLvl: 70,
    rangedLvl: 70,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -7,
        Slash: -7,
        Crush: -5,
        Magic: -15,
        Range: 33,
      },
      // Defence
      {
        Stab: 56,
        Slash: 48,
        Crush: 61,
        Magic: 70,
        Range: 57,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 1,
        Weight: 4,
      },
    ],
    src: "./gearcalculator/bodies/Armadyl_chestplate.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Bandos chestplate",
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
        Magic: -15,
        Range: 10,
      },
      // Defence
      {
        Stab: 98,
        Slash: 93,
        Crush: 105,
        Magic: -6,
        Range: 133,
      },
      // Other
      {
        "Melee strength": 4,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 1,
        Weight: 12,
      },
    ],
    src: "./gearcalculator/bodies/Bandos_chestplate.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Black chainbody",
    defLvl: 10,
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
        Magic: -15,
        Range: 0,
      },
      // Defence
      {
        Stab: 22,
        Slash: 32,
        Crush: 39,
        Magic: -3,
        Range: 24,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 6.803,
      },
    ],
    src: "./gearcalculator/bodies/Black_chainbody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Black d'hide body",
    defLvl: 40,
    rangedLvl: 70,
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
        Stab: 30,
        Slash: 30,
        Crush: 38,
        Magic: 45,
        Range: 45,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 50,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 6.803,
      },
    ],
    src: "./gearcalculator/bodies/Black_d'hide_body.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Black d'hide body (g)",
    defLvl: 40,
    rangedLvl: 70,
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
        Stab: 30,
        Slash: 30,
        Crush: 38,
        Magic: 45,
        Range: 45,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 50,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 6.803,
      },
    ],
    src: "./gearcalculator/bodies/Black_d'hide_body_(g).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Black d'hide body (t)",
    defLvl: 40,
    rangedLvl: 70,
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
        Stab: 30,
        Slash: 30,
        Crush: 38,
        Magic: 45,
        Range: 45,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 50,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 6.803,
      },
    ],
    src: "./gearcalculator/bodies/Black_d'hide_body_(t).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Black platebody",
    defLvl: 10,
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
        Stab: 41,
        Slash: 40,
        Crush: 30,
        Magic: -6,
        Range: 40,
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
    src: "./gearcalculator/bodies/Black_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Black platebody (g)",
    defLvl: 10,
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
        Stab: 41,
        Slash: 40,
        Crush: 30,
        Magic: -6,
        Range: 40,
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
    src: "./gearcalculator/bodies/Black_platebody_(g).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Black platebody (t)",
    defLvl: 10,
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
        Stab: 41,
        Slash: 40,
        Crush: 30,
        Magic: -6,
        Range: 40,
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
    src: "./gearcalculator/bodies/Black_platebody_(t).webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Black robe",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 3,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 3,
        Range: 0,
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
    src: "./gearcalculator/bodies/Black_robe.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Black wizard robe (g)",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 3,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 3,
        Range: 0,
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
    src: "./gearcalculator/bodies/Black_wizard_robe_(g).webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Black wizard robe (t)",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 3,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 3,
        Range: 0,
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
    src: "./gearcalculator/bodies/Black_wizard_robe_(t).webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Bloodbark body",
    defLvl: 60,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 60,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 21,
        Range: 0,
      },
      // Defence
      {
        Stab: 53,
        Slash: 39,
        Crush: 64,
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
        Weight: 4.535,
      },
    ],
    src: "./gearcalculator/bodies/Bloodbark_body.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Blue d'hide body",
    defLvl: 40,
    rangedLvl: 0,
    prayerLvl: 50,
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
        Range: 20,
      },
      // Defence
      {
        Stab: 23,
        Slash: 30,
        Crush: 30,
        Magic: 26,
        Range: 40,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 6.803,
      },
    ],
    src: "./gearcalculator/bodies/Blue_d'hide_body.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Blue d'hide body (g)",
    defLvl: 40,
    rangedLvl: 0,
    prayerLvl: 50,
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
        Range: 20,
      },
      // Defence
      {
        Stab: 23,
        Slash: 30,
        Crush: 30,
        Magic: 26,
        Range: 40,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 6.803,
      },
    ],
    src: "./gearcalculator/bodies/Blue_d'hide_body_(g).webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Blue d'hide body (t)",
    defLvl: 40,
    rangedLvl: 0,
    prayerLvl: 50,
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
        Range: 20,
      },
      // Defence
      {
        Stab: 23,
        Slash: 30,
        Crush: 30,
        Magic: 26,
        Range: 40,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 6.803,
      },
    ],
    src: "./gearcalculator/bodies/Blue_d'hide_body_(t).webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Blue robe top",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 2,
        Crush: 2,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.907,
      },
    ],
    src: "./gearcalculator/bodies/Blue_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Blue wizard robe",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 3,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 3,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.907,
      },
    ],
    src: "./gearcalculator/bodies/Blue_wizard_robe.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Blue wizard robe (g)",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 3,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 3,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.907,
      },
    ],
    src: "./gearcalculator/bodies/Blue_wizard_robe_(g).webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Blue wizard robe (t)",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 3,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 3,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.907,
      },
    ],
    src: "./gearcalculator/bodies/Blue_wizard_robe_(t).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Bronze chainbody",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: -15,
        Range: 0,
      },
      // Defence
      {
        Stab: 7,
        Slash: 11,
        Crush: 13,
        Magic: -3,
        Range: 9,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 6.803,
      },
    ],
    src: "./gearcalculator/bodies/Bronze_chainbody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Bronze platebody",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: -30,
        Range: -15,
      },
      // Defence
      {
        Stab: 15,
        Slash: 14,
        Crush: 9,
        Magic: -6,
        Range: 14,
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
    src: "./gearcalculator/bodies/Bronze_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Bronze platebody (g)",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: -30,
        Range: -15,
      },
      // Defence
      {
        Stab: 15,
        Slash: 14,
        Crush: 9,
        Magic: -6,
        Range: 14,
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
    src: "./gearcalculator/bodies/Bronze_platebody_(g).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Bronze platebody (t)",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: -30,
        Range: -15,
      },
      // Defence
      {
        Stab: 15,
        Slash: 14,
        Crush: 9,
        Magic: -6,
        Range: 14,
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
    src: "./gearcalculator/bodies/Bronze_platebody_(t).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Carnillean armour",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 20,
        Slash: 14,
        Crush: 8,
        Magic: -6,
        Range: 14,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 9.071,
      },
    ],
    src: "./gearcalculator/bodies/Carnillean_armour.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Citizen top",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 2,
        Crush: 2,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.907,
      },
    ],
    src: "./gearcalculator/bodies/Citizen_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Clue hunter garb",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: -2,
        Range: 2,
      },
      // Defence
      {
        Stab: 8,
        Slash: 9,
        Crush: 10,
        Magic: 4,
        Range: 9,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2,
      },
    ],
    src: "./gearcalculator/bodies/Clue_hunter_garb.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Cream robe top",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 8,
        Slash: 2,
        Crush: 2,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.907,
      },
    ],
    src: "./gearcalculator/bodies/Cream_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Dagon'hai robe top",
    defLvl: 40,
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
        Magic: 25,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 21,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 2,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/bodies/Dagon'hai_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Dark infinity top",
    defLvl: 25,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 50,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 22,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 22,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/bodies/Dark_infinity_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Decorative armour (Gold platebody)",
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
        Weight: 8.618,
      },
    ],
    src: "./gearcalculator/bodies/Decorative_armour_(gold_platebody).webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Decorative armour (Magic top)",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 20,
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
        Stab: 20,
        Slash: 20,
        Crush: 20,
        Magic: 20,
        Range: 20,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 6.803,
      },
    ],
    src: "./gearcalculator/bodies/Decorative_armour_(magic_top).webp",
    slot: "Body",
  },
];

export default BODIES;
