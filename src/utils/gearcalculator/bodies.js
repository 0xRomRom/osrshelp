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
    name: "Saradomin d'hide body",
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
    src: "./gearcalculator/bodies/Saradomin_d'hide_body.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Guthix d'hide body",
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
    src: "./gearcalculator/bodies/Guthix_d'hide_body.webp",
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
    name: "Saradomin platebody",
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
    src: "./gearcalculator/bodies/Saradomin_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Guthix platebody",
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
    src: "./gearcalculator/bodies/Guthix_platebody.webp",
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
    name: "Saradomin robe top",
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
    src: "./gearcalculator/bodies/Saradomin_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Shade robe top",
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
        Prayer: 5,
        Weight: 0.907,
      },
    ],
    src: "./gearcalculator/bodies/Shade_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Guthix robe top",
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
    src: "./gearcalculator/bodies/Guthix_robe_top.webp",
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
    name: "Pink robe top",
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
    src: "./gearcalculator/bodies/Pink_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Red robe top",
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
    src: "./gearcalculator/bodies/Red_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Purple robe top",
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
    src: "./gearcalculator/bodies/Purple_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Green robe top",
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
    src: "./gearcalculator/bodies/Green_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Grey robe top",
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
    src: "./gearcalculator/bodies/Grey_robe_top.webp",
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
  {
    type: "Ranged",
    name: "Decorative armour (Ranged top)",
    defLvl: 0,
    rangedLvl: 30,
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
    src: "./gearcalculator/bodies/Decorative_armour_(ranged_top).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Decorative armour (Red platebody)",
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
        Stab: 32,
        Slash: 31,
        Crush: 24,
        Magic: -6,
        Range: 31,
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
    src: "./gearcalculator/bodies/Decorative_armour_(red_platebody).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Decorative armour (White platebody)",
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
        Stab: 46,
        Slash: 44,
        Crush: 38,
        Magic: -6,
        Range: 44,
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
    src: "./gearcalculator/bodies/Decorative_armour_(white_platebody).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Desert camo top",
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
        Stab: 10,
        Slash: 15,
        Crush: 19,
        Magic: 0,
        Range: 12,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.226,
      },
    ],
    src: "./gearcalculator/bodies/Desert_camo_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Dharok's platebody",
    defLvl: 70,
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
        Range: -10,
      },
      // Defence
      {
        Stab: 122,
        Slash: 120,
        Crush: 107,
        Magic: -6,
        Range: 132,
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
    src: "./gearcalculator/bodies/Dharok's_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Dragon chainbody",
    defLvl: 60,
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
        Stab: 81,
        Slash: 93,
        Crush: 98,
        Magic: -3,
        Range: 82,
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
    src: "./gearcalculator/bodies/Dragon_chainbody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Dragon chainbody (g)",
    defLvl: 60,
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
        Stab: 81,
        Slash: 93,
        Crush: 98,
        Magic: -3,
        Range: 82,
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
    src: "./gearcalculator/bodies/Dragon_chainbody_(g).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Dragon platebody",
    defLvl: 60,
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
        Stab: 109,
        Slash: 107,
        Crush: 97,
        Magic: -6,
        Range: 106,
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
    src: "./gearcalculator/bodies/Dragon_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Dragon platebody (g)",
    defLvl: 60,
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
        Stab: 109,
        Slash: 107,
        Crush: 97,
        Magic: -6,
        Range: 106,
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
    src: "./gearcalculator/bodies/Dragon_platebody_(g).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Dragonstone platebody",
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
        Prayer: 0,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/Dragonstone_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Druid's robe top",
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
        Prayer: 4,
        Weight: 0.907,
      },
    ],
    src: "./gearcalculator/bodies/Druid's_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Elder chaos top",
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
        Magic: 10,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 8,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.2,
      },
    ],
    src: "./gearcalculator/bodies/Elder_chaos_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Elite void top",
    defLvl: 42,
    rangedLvl: 42,
    prayerLvl: 22,
    magicLvl: 42,
    strengthLvl: 42,
    attackLvl: 42,
    hitpointsLvl: 42,
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
        Stab: 45,
        Slash: 45,
        Crush: 45,
        Magic: 45,
        Range: 45,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 3,
        Weight: 6.803,
      },
    ],
    src: "./gearcalculator/bodies/Elite_void_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Enchanted top",
    defLvl: 20,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
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
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/bodies/Enchanted_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Fighter torso",
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
        Magic: -40,
        Range: 0,
      },
      // Defence
      {
        Stab: 62,
        Slash: 85,
        Crush: 62,
        Magic: -10,
        Range: 67,
      },
      // Other
      {
        "Melee strength": 4,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 4,
      },
    ],
    src: "./gearcalculator/bodies/Fighter_torso.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Fremennik robe",
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
    src: "./gearcalculator/bodies/Fremennik_beige_shirt.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Frog-leather body",
    defLvl: 25,
    rangedLvl: 25,
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
        Magic: -5,
        Range: 10,
      },
      // Defence
      {
        Stab: 23,
        Slash: 26,
        Crush: 30,
        Magic: 15,
        Range: 32,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 5,
      },
    ],
    src: "./gearcalculator/bodies/Frog-leather_body.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Ghostly robe top",
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
        Magic: 5,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 5,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.001,
      },
    ],
    src: "./gearcalculator/bodies/Ghostly_robe_(top).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Gilded chainbody",
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
        Magic: -15,
        Range: 0,
      },
      // Defence
      {
        Stab: 63,
        Slash: 72,
        Crush: 78,
        Magic: -3,
        Range: 65,
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
    src: "./gearcalculator/bodies/Gilded_chainbody.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Gilded d'hide body",
    defLvl: 40,
    rangedLvl: 40,
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
        Range: 15,
      },
      // Defence
      {
        Stab: 40,
        Slash: 32,
        Crush: 45,
        Magic: 20,
        Range: 40,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 6,
      },
    ],
    src: "./gearcalculator/bodies/Gilded_d'hide_body.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Gilded platebody",
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
        Prayer: 0,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/Gilded_d'hide_body.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Graahk top",
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
        Stab: 10,
        Slash: 15,
        Crush: 19,
        Magic: 0,
        Range: 12,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.226,
      },
    ],
    src: "./gearcalculator/bodies/Graahk_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Graceful top",
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
        Weight: -5,
      },
    ],
    src: "./gearcalculator/bodies/Graceful_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Granite body",
    defLvl: 50,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 50,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: -22,
        Range: -5,
      },
      // Defence
      {
        Stab: 87,
        Slash: 84,
        Crush: 79,
        Magic: -6,
        Range: 97,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 22.679,
      },
    ],
    src: "./gearcalculator/bodies/Granite_body.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Green d'hide body",
    defLvl: 50,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 50,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: -15,
        Range: 15,
      },
      // Defence
      {
        Stab: 18,
        Slash: 27,
        Crush: 24,
        Magic: 20,
        Range: 35,
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
    src: "./gearcalculator/bodies/Green_d'hide_body.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Green d'hide body (g)",
    defLvl: 50,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 50,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: -15,
        Range: 15,
      },
      // Defence
      {
        Stab: 18,
        Slash: 27,
        Crush: 24,
        Magic: 20,
        Range: 35,
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
    src: "./gearcalculator/bodies/Green_d'hide_body_(g).webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Green d'hide body (t)",
    defLvl: 50,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 50,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: -15,
        Range: 15,
      },
      // Defence
      {
        Stab: 18,
        Slash: 27,
        Crush: 24,
        Magic: 20,
        Range: 35,
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
    src: "./gearcalculator/bodies/Green_d'hide_body_(t).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Group iron platebody",
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
        Weight: 4.535,
      },
    ],
    src: "./gearcalculator/bodies/Group_iron_platebody_(V).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Guthan's platebody",
    defLvl: 70,
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
        Range: -10,
      },
      // Defence
      {
        Stab: 122,
        Slash: 120,
        Crush: 107,
        Magic: -6,
        Range: 132,
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
    src: "./gearcalculator/bodies/Guthan's_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Ham shirt",
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
    src: "./gearcalculator/bodies/Ham_shirt.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Hardcore group iron platebody",
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
        Weight: 4.535,
      },
    ],
    src: "./gearcalculator/bodies/Hardcore_group_iron_platebody_(V).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Hardcore ironman platebody",
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
        Weight: 4.535,
      },
    ],
    src: "./gearcalculator/bodies/Hardcore_ironman_platebody.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Hardleather body",
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
        Magic: -4,
        Range: 8,
      },
      // Defence
      {
        Stab: 12,
        Slash: 15,
        Crush: 18,
        Magic: 6,
        Range: 15,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 3.628,
      },
    ],
    src: "./gearcalculator/bodies/Hardleather_body.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Infinity top",
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
    src: "./gearcalculator/bodies/Infinity_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Initiate hauberk",
    defLvl: 20,
    rangedLvl: 0,
    prayerLvl: 10,
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
        Stab: 46,
        Slash: 44,
        Crush: 38,
        Magic: -6,
        Range: 44,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 6,
        Weight: 8.618,
      },
    ],
    src: "./gearcalculator/bodies/Initiate_hauberk.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Inquisitor's hauberk",
    defLvl: 30,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 70,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -3,
        Slash: -3,
        Crush: 12,
        Magic: -11,
        Range: -10,
      },
      // Defence
      {
        Stab: 67,
        Slash: 55,
        Crush: 71,
        Magic: 0,
        Range: 35,
      },
      // Other
      {
        "Melee strength": 4,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 2,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/Inquisitor's_hauberk.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Iron chainbody",
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
        Stab: 10,
        Slash: 15,
        Crush: 19,
        Magic: -3,
        Range: 12,
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
    src: "./gearcalculator/bodies/Iron_chainbody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Iron platebody",
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
    src: "./gearcalculator/bodies/Iron_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Iron platebody (g)",
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
    src: "./gearcalculator/bodies/Iron_platebody_(g).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Iron platebody (t)",
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
    src: "./gearcalculator/bodies/Iron_platebody_(t).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Ironman platebody",
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
        Weight: 4.535,
      },
    ],
    src: "./gearcalculator/bodies/Ironman_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Jungle camo top",
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
        Stab: 10,
        Slash: 15,
        Crush: 19,
        Magic: 0,
        Range: 12,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.226,
      },
    ],
    src: "./gearcalculator/bodies/Jungle_camo_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Justiciar chestguard",
    defLvl: 75,
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
        Magic: -40,
        Range: -20,
      },
      // Defence
      {
        Stab: 132,
        Slash: 130,
        Crush: 117,
        Magic: -16,
        Range: 142,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 4,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/Justiciar_chestguard.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Karil's leathertop",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: -15,
        Range: 30,
      },
      // Defence
      {
        Stab: 47,
        Slash: 42,
        Crush: 50,
        Magic: 65,
        Range: 57,
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
    src: "./gearcalculator/bodies/Karil's_leathertop.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Khazard armour",
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
        Stab: 9,
        Slash: 11,
        Crush: 10,
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
        Weight: 0.566,
      },
    ],
    src: "./gearcalculator/bodies/Khazard_armour.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Kyatt top",
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
        Stab: 10,
        Slash: 15,
        Crush: 19,
        Magic: 0,
        Range: 12,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.226,
      },
    ],
    src: "./gearcalculator/bodies/Kyatt_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Larupia top",
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
        Stab: 10,
        Slash: 15,
        Crush: 19,
        Magic: 0,
        Range: 12,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.226,
      },
    ],
    src: "./gearcalculator/bodies/Larupia_top.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Leather body",
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
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/bodies/Leather_body.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Leather body (g)",
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
        Weight: 5.443,
      },
    ],
    src: "./gearcalculator/bodies/Leather_body_(g).webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Light infinity top",
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
    src: "./gearcalculator/bodies/Light_infinity_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Lunar torso",
    defLvl: 40,
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
        Magic: 10,
        Range: -10,
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
        Weight: 4.535,
      },
    ],
    src: "./gearcalculator/bodies/Lunar_torso.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Masori body",
    defLvl: 30,
    rangedLvl: 80,
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
        Magic: -4,
        Range: 43,
      },
      // Defence
      {
        Stab: 37,
        Slash: 35,
        Crush: 38,
        Magic: 25,
        Range: 33,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 4,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 8,
      },
    ],
    src: "./gearcalculator/bodies/Masori_body.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Mithril chainbody",
    defLvl: 20,
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
        Stab: 25,
        Slash: 35,
        Crush: 42,
        Magic: -3,
        Range: 27,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 5.896,
      },
    ],
    src: "./gearcalculator/bodies/Mithril_chainbody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Mithril platebody",
    defLvl: 20,
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
        Stab: 46,
        Slash: 44,
        Crush: 38,
        Magic: -6,
        Range: 44,
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
    src: "./gearcalculator/bodies/Mithril_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Mithril platebody (g)",
    defLvl: 20,
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
        Stab: 46,
        Slash: 44,
        Crush: 38,
        Magic: -6,
        Range: 44,
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
    src: "./gearcalculator/bodies/Mithril_platebody_(g).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Mithril platebody (t)",
    defLvl: 20,
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
        Stab: 46,
        Slash: 44,
        Crush: 38,
        Magic: -6,
        Range: 44,
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
    src: "./gearcalculator/bodies/Mithril_platebody_(t).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Monk's robe top",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 31,
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
        Weight: 0.907,
      },
    ],
    src: "./gearcalculator/bodies/Monk's_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Monk's robe top (g)",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 31,
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
        Weight: 0.907,
      },
    ],
    src: "./gearcalculator/bodies/Monk's_robe_top_(g).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Monk's robe top (t)",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 31,
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
        Weight: 0.907,
      },
    ],
    src: "./gearcalculator/bodies/Monk's_robe_top_(t).webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Moonclan armour",
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
        Magic: 5,
        Range: -10,
      },
      // Defence
      {
        Stab: 5,
        Slash: 5,
        Crush: 5,
        Magic: 5,
        Range: -10,
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
    src: "./gearcalculator/bodies/Moonclan_armour.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Morrigan's leather body",
    defLvl: 78,
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
        Range: 36,
      },
      // Defence
      {
        Stab: 61,
        Slash: 53,
        Crush: 66,
        Magic: 75,
        Range: 62,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 6,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 6.803,
      },
    ],
    src: "./gearcalculator/bodies/Morrigan's_leather_body_(bh).webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Mystic robe top",
    defLvl: 20,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
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
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/bodies/Mystic_robe_top.webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Mystic robe top (dark)",
    defLvl: 20,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
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
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/bodies/Mystic_robe_top_(dark).webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Mystic robe top (dusk)",
    defLvl: 20,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
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
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/bodies/Mystic_robe_top_(dusk).webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Mystic robe top (light)",
    defLvl: 20,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
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
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/bodies/Mystic_robe_top_(light).webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Mystic robe top (or)",
    defLvl: 20,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
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
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/bodies/Mystic_robe_top_(or).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Obsidian platebody",
    defLvl: 60,
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
        Stab: 55,
        Slash: 78,
        Crush: 56,
        Magic: -15,
        Range: 60,
      },
      // Other
      {
        "Melee strength": 3,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/Obsidian_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Polar camo top",
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
        Stab: 10,
        Slash: 15,
        Crush: 19,
        Magic: 0,
        Range: 12,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.226,
      },
    ],
    src: "./gearcalculator/bodies/Polar_camo_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Priest gown (top)",
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
        Prayer: 3,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/bodies/Priest_gown_(top).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Proselyte hauberk",
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
        Prayer: 8,
        Weight: 8.618,
      },
    ],
    src: "./gearcalculator/bodies/Proselyte_hauberk.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Rangers' tunic",
    defLvl: 0,
    rangedLvl: 40,
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
        Range: 15,
      },
      // Defence
      {
        Stab: 6,
        Slash: 9,
        Crush: 12,
        Magic: 6,
        Range: 6,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 3,
      },
    ],
    src: "./gearcalculator/bodies/Rangers'_tunic.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Red d'hide body",
    defLvl: 40,
    rangedLvl: 60,
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
        Range: 25,
      },
      // Defence
      {
        Stab: 26,
        Slash: 34,
        Crush: 36,
        Magic: 36,
        Range: 45,
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
    src: "./gearcalculator/bodies/Red_d'hide_body.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Red d'hide body (g)",
    defLvl: 40,
    rangedLvl: 60,
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
        Range: 25,
      },
      // Defence
      {
        Stab: 26,
        Slash: 34,
        Crush: 36,
        Magic: 36,
        Range: 45,
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
    src: "./gearcalculator/bodies/Red_d'hide_body_(g).webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Red d'hide body (t)",
    defLvl: 40,
    rangedLvl: 60,
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
        Range: 25,
      },
      // Defence
      {
        Stab: 26,
        Slash: 34,
        Crush: 36,
        Magic: 36,
        Range: 45,
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
    src: "./gearcalculator/bodies/Red_d'hide_body_(t).webp",
    slot: "Body",
  },
  {
    type: "Magic",
    name: "Robe top of darkness",
    defLvl: 20,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
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
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/bodies/Robe_top_of_darkness.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Rock-shell plate",
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
        Range: -10,
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
        Prayer: 0,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/Rock-shell_plate.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Rogue top",
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
        Stab: 10,
        Slash: 10,
        Crush: 10,
        Magic: 10,
        Range: 10,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/bodies/Rogue_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Rune chainbody",
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
        Magic: -15,
        Range: 0,
      },
      // Defence
      {
        Stab: 63,
        Slash: 72,
        Crush: 78,
        Magic: -3,
        Range: 65,
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
    src: "./gearcalculator/bodies/Rune_chainbody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Rune platebody",
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
        Prayer: 0,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/Rune_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Rune platebody (g)",
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
        Prayer: 0,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/Rune_platebody_(g).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Rune platebody (t)",
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
        Prayer: 0,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/Rune_platebody_(t).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Sanguine torva platebody",
    defLvl: 80,
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
        Magic: -18,
        Range: -14,
      },
      // Defence
      {
        Stab: 117,
        Slash: 111,
        Crush: 117,
        Magic: -11,
        Range: 142,
      },
      // Other
      {
        "Melee strength": 6,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 1,
        Weight: 9.979,
      },
    ],
    src: "./gearcalculator/bodies/Sanguine_torva_platebody.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Shayzien platebody 1",
    defLvl: 20,
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
        Magic: -5,
        Range: 0,
      },
      // Defence
      {
        Stab: 16,
        Slash: 20,
        Crush: 22,
        Magic: -2,
        Range: 16,
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
    src: "./gearcalculator/bodies/Shayzien_platebody_(1).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Shayzien platebody 2",
    defLvl: 20,
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
        Magic: -7,
        Range: 0,
      },
      // Defence
      {
        Stab: 20,
        Slash: 25,
        Crush: 30,
        Magic: -3,
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
    src: "./gearcalculator/bodies/Shayzien_platebody_(2).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Shayzien platebody 3",
    defLvl: 20,
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
        Magic: -8,
        Range: 0,
      },
      // Defence
      {
        Stab: 25,
        Slash: 32,
        Crush: 35,
        Magic: -3,
        Range: 22,
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
    src: "./gearcalculator/bodies/Shayzien_platebody_(3).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Shayzien platebody 4",
    defLvl: 20,
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
        Magic: -9,
        Range: 0,
      },
      // Defence
      {
        Stab: 28,
        Slash: 35,
        Crush: 37,
        Magic: -4,
        Range: 25,
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
    src: "./gearcalculator/bodies/Shayzien_platebody_(4).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Shayzien platebody 5",
    defLvl: 20,
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
        Magic: -10,
        Range: 10,
      },
      // Defence
      {
        Stab: 20,
        Slash: 24,
        Crush: 28,
        Magic: -4,
        Range: 27,
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
    src: "./gearcalculator/bodies/Shayzien_platebody_(5).webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Silly jester top",
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
        Magic: 5,
        Range: -5,
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
    src: "./gearcalculator/bodies/Silly_jester_top.webp",
    slot: "Body",
  },
  {
    type: "Melee",
    name: "Skeletal top",
    defLvl: 40,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 8,
        Range: -10,
      },
      // Defence
      {
        Stab: 35,
        Slash: 25,
        Crush: 42,
        Magic: 15,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 4.989,
      },
    ],
    src: "./gearcalculator/bodies/Skeletal_top.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Snakeskin body",
    defLvl: 30,
    rangedLvl: 30,
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
        Magic: -5,
        Range: 12,
      },
      // Defence
      {
        Stab: 25,
        Slash: 28,
        Crush: 32,
        Magic: 15,
        Range: 35,
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
    src: "./gearcalculator/bodies/Snakeskin_body.webp",
    slot: "Body",
  },
  {
    type: "Ranged",
    name: "Spined body",
    defLvl: 40,
    rangedLvl: 40,
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
        Range: 15,
      },
      // Defence
      {
        Stab: 40,
        Slash: 32,
        Crush: 45,
        Magic: 20,
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
    src: "./gearcalculator/bodies/Snakeskin_body.webp",
    slot: "Body",
  },
];

export default BODIES;
