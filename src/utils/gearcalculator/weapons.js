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
    type: "Magic",
    name: "3rd age wand",
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
    src: "./gearcalculator/weapons/3rd_age_wand.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Abyssal dagger (bh)",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 70,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 85,
        Slash: 40,
        Crush: -4,
        Magic: 1,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 1,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 75,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Abyssal_dagger_(bh).webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Abyssal dagger",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 70,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 75,
        Slash: 40,
        Crush: -4,
        Magic: 1,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 1,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 75,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Abyssal_dagger.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Abyssal tentacle",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 70,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 90,
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
        "Melee strength": 86,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Abyssal_tentacle.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Abyssal whip",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 70,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 82,
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
        "Melee strength": 82,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Abyssal_whip.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Accursed sceptre",
    defLvl: 0,
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
        Magic: 22,
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
        "Melee strength": 82,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.198,
      },
    ],
    src: "./gearcalculator/weapons/Accursed_sceptre.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Adamant axe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 30,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -2,
        Slash: 17,
        Crush: 15,
        Magic: 22,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 19,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_axe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Adamant battleaxe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 30,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -2,
        Slash: 31,
        Crush: 26,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 0,
        Range: -1,
      },
      // Other
      {
        "Melee strength": 41,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 3.175,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_battleaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Adamant cane",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 30,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 13,
        Slash: -2,
        Crush: 25,
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
        "Melee strength": 23,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 3,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_cane.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Adamant crossbow",
    defLvl: 0,
    rangedLvl: 46,
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
        Range: 78,
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
        Weight: 6,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_crossbow.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Adamant dagger",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 30,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 15,
        Slash: 8,
        Crush: -4,
        Magic: 1,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 1,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 14,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.51,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_dagger.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Adamant dart",
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
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 17,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_dart.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Adamant hasta",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 30,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 24,
        Slash: 24,
        Crush: 24,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: -6,
        Slash: -7,
        Crush: -5,
        Magic: 0,
        Range: -6,
      },
      // Other
      {
        "Melee strength": 28,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_hasta.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Adamant knife",
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
        Range: 15,
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
        "Ranged strength": 14,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_knife.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Adamant longsword",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 30,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 20,
        Slash: 29,
        Crush: -2,
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
        "Melee strength": 31,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.041,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_longsword.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Adamant mace",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 30,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 13,
        Slash: -2,
        Crush: 25,
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
        "Melee strength": 31,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.041,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_mace.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Adamant pickaxe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 30,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 17,
        Slash: -2,
        Crush: 15,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 19,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_pickaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Adamant scimitar",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 30,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 6,
        Slash: 29,
        Crush: -2,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 28,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.041,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_scimitar.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Adamant sword",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 30,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 23,
        Slash: 18,
        Crush: -2,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 2,
        Crush: 1,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 24,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.041,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_sword.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Adamant thrownaxe",
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
        Range: 17,
      },
      // Defence
      {
        Stab: 0,
        Slash: 2,
        Crush: 1,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 23,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_thrownaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Adamant warhammer",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 30,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -4,
        Slash: -4,
        Crush: 35,
        Magic: -4,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 2,
        Crush: 1,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 39,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.041,
      },
    ],
    src: "./gearcalculator/weapons/Adamant_warhammer.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Ahrim's staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 70,
    strengthLvl: 0,
    attackLvl: 70,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 12,
        Slash: -1,
        Crush: 65,
        Magic: 15,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 12,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 68,
        "Magic damage": 5,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Ahrim's_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Air battlestaff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 30,
    strengthLvl: 0,
    attackLvl: 30,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 7,
        Slash: -1,
        Crush: 28,
        Magic: 12,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 12,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 35,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Air_battlestaff.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Amethyst dart",
    defLvl: 0,
    rangedLvl: 50,
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
        "Ranged strength": 28,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Amethyst_dart.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Amy's saw",
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
        Stab: 2,
        Slash: 5,
        Crush: -2,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 2,
        Crush: 1,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 5,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.8,
      },
    ],
    src: "./gearcalculator/weapons/Amy's_saw.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Ancient crozier",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 60,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 7,
        Slash: -1,
        Crush: 25,
        Magic: 10,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 10,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 32,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 6,
        Weight: 0.005,
      },
    ],
    src: "./gearcalculator/weapons/Ancient_crozier.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Ancient mace",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 25,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 15,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: -2,
        Crush: 16,
        Magic: 10,
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
        "Melee strength": 14,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 3,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Ancient_mace.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Ancient sceptre",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 70,
    strengthLvl: 60,
    attackLvl: 50,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 20,
        Slash: -1,
        Crush: 50,
        Magic: 20,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 15,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 60,
        "Ranged strength": 0,
        "Magic damage": 5,
        "Slayer Bonus": 0,
        Prayer: -1,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Ancient_sceptre.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Ancient staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 50,
    strengthLvl: 0,
    attackLvl: 50,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: -1,
        Crush: 40,
        Magic: 15,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 15,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 50,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: -1,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Ancient_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Apprentice wand",
    defLvl: 0,
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
        Magic: 10,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 10,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.255,
      },
    ],
    src: "./gearcalculator/weapons/Apprentice_wand.webp",
    slot: "Weapon",
  },
];

export default WEAPONS;
