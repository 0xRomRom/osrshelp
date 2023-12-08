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
    type: "Magic",
    name: "Mud battlestaff",
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
    src: "./gearcalculator/weapons/Mud_battlestaff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Mist battlestaff",
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
    src: "./gearcalculator/weapons/Mist_battlestaff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Lava battlestaff",
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
    src: "./gearcalculator/weapons/Lava_battlestaff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Fire battlestaff",
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
    src: "./gearcalculator/weapons/Fire_battlestaff.webp",
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
    type: "Melee",
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
        Weight: 2,
      },
    ],
    src: "./gearcalculator/weapons/Ancient_crozier.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Guthix crozier",
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
        Weight: 2,
      },
    ],
    src: "./gearcalculator/weapons/Guthix_crozier.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Armadyl crozier",
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
        Weight: 2,
      },
    ],
    src: "./gearcalculator/weapons/Armadyl_crozier.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Bandos crozier",
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
        Weight: 2,
      },
    ],
    src: "./gearcalculator/weapons/Bandos_crozier.webp",
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
  {
    type: "Melee",
    name: "Arceuus banner",
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
        Stab: 12,
        Slash: 12,
        Crush: 12,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 1,
        Slash: 1,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 12,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Arceuus_banner.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Arclight",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 75,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: 38,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 3,
        Crush: 2,
        Magic: 2,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 8,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Arclight.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Armadyl crossbow",
    defLvl: 0,
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
        Magic: 0,
        Range: 100,
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
        "Melee strength": 8,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 1,
        Weight: 6,
      },
    ],
    src: "./gearcalculator/weapons/Armadyl_crossbow.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Flowers",
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
        Magic: 0,
        Range: 100,
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
        "Melee strength": -10,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.028,
      },
    ],
    src: "./gearcalculator/weapons/Assorted_flowers.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Barb-tail harpoon",
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
        Stab: 9,
        Slash: 4,
        Crush: -4,
        Magic: 0,
        Range: 100,
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
        "Melee strength": 6,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Barb-tail_harpoon.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Barronite mace",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 20,
        Slash: -2,
        Crush: 40,
        Magic: 0,
        Range: 100,
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
        "Melee strength": 40,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 2,
        Weight: 2,
      },
    ],
    src: "./gearcalculator/weapons/Barronite_mace.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Battlestaff",
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
        Crush: 25,
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
        "Melee strength": 32,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Battlestaff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Beginner wand",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 45,
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
        Weight: 0.283,
      },
    ],
    src: "./gearcalculator/weapons/Beginner_wand.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Black axe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 10,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -2,
        Slash: 10,
        Crush: 8,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 0,
        Magic: 5,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 12,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Black_axe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Black battleaxe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 10,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -2,
        Slash: 20,
        Crush: 15,
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
        "Melee strength": 24,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/weapons/Black_battleaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Black cane",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 10,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 8,
        Slash: -2,
        Crush: 16,
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
        "Melee strength": 13,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 2,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Black_cane.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Black chinchompa",
    defLvl: 0,
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
        Magic: 0,
        Range: 80,
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
        "Ranged strength": 30,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Black_chinchompa.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Black dagger",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 10,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: 5,
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
        "Melee strength": 7,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Black_dagger.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Black dart",
    defLvl: 0,
    rangedLvl: 10,
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
        "Ranged strength": 6,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Black_dart.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Black longsword",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 10,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 13,
        Slash: 18,
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
        "Melee strength": 16,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Black_longsword.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Black knife",
    defLvl: 0,
    rangedLvl: 10,
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
        Range: 10,
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
        "Ranged strength": 8,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Black_knife.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Black mace",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 10,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 8,
        Slash: -2,
        Crush: 16,
        Magic: 0,
        Range: 10,
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
        "Ranged strength": 13,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 2,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Black_mace.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Black pickaxe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 10,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: -2,
        Crush: 8,
        Magic: 0,
        Range: 10,
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
        "Melee strength": 11,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.01,
      },
    ],
    src: "./gearcalculator/weapons/Black_pickaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Black scimitar",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 10,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 4,
        Slash: 19,
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
        "Melee strength": 14,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Black_scimitar.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Black sword",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 10,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 14,
        Slash: 10,
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
        "Melee strength": 12,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Black_sword.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Black warhammer",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 10,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -4,
        Slash: -4,
        Crush: 22,
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
        "Melee strength": 22,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Black_warhammer.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Blade of saeldor",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 80,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 55,
        Slash: 94,
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
        "Melee strength": 89,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Blade_of_saeldor.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Blessed axe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 20,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -2,
        Slash: 12,
        Crush: 10,
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
        "Melee strength": 13,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 2,
        Weight: 1.162,
      },
    ],
    src: "./gearcalculator/weapons/Blessed_axe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Blisterwood flail",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 50,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 30,
        Slash: 44,
        Crush: 68,
        Magic: 8,
        Range: 0,
      },
      // Defence
      {
        Stab: 4,
        Slash: 4,
        Crush: 2,
        Magic: 8,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 46,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 0.001,
      },
    ],
    src: "./gearcalculator/weapons/Blisterwood_flail.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Blisterwood sickle",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 50,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 30,
        Slash: 38,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 1,
        Slash: 2,
        Crush: 2,
        Magic: 2,
        Range: 2,
      },
      // Other
      {
        "Melee strength": 32,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Blisterwood_sickle.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Blood ancient sceptre",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 75,
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
    src: "./gearcalculator/weapons/Blood_ancient_sceptre.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Blurite crossbow",
    defLvl: 0,
    rangedLvl: 16,
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
        Range: 30,
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
        Weight: 4,
      },
    ],
    src: "./gearcalculator/weapons/Blurite_crossbow.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Blurite sword",
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
        Stab: 9,
        Slash: 14,
        Crush: -2,
        Magic: 0,
        Range: 30,
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
        "Melee strength": 10,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Blurite_sword.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Bone club",
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
        Stab: -4,
        Slash: -4,
        Crush: 16,
        Magic: -4,
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
        "Melee strength": 15,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.907,
      },
    ],
    src: "./gearcalculator/weapons/Bone_club.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Bone dagger",
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
        Stab: 5,
        Slash: 3,
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
        "Melee strength": 4,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Bone_dagger.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Bone spear",
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
        Stab: 11,
        Slash: 11,
        Crush: 11,
        Magic: 1,
        Range: 0,
      },
      // Defence
      {
        Stab: 1,
        Slash: 1,
        Crush: 0,
        Magic: 1,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 13,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Bone_spear.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Brine sabre",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 7,
        Slash: 47,
        Crush: -2,
        Magic: 1,
        Range: 0,
      },
      // Defence
      {
        Stab: 1,
        Slash: 1,
        Crush: 0,
        Magic: 1,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 46,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Brine_sabre.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Bronze axe",
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
        Stab: -2,
        Slash: 4,
        Crush: 2,
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
        "Melee strength": 5,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Bronze_axe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Bronze battleaxe",
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
        Stab: -2,
        Slash: 6,
        Crush: 3,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 0,
        Magic: 0,
        Range: -1,
      },
      // Other
      {
        "Melee strength": 9,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/weapons/Bronze_battleaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Bronze crossbow",
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
        Range: 18,
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
        "Melee strength": 9,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 4,
      },
    ],
    src: "./gearcalculator/weapons/Bronze_crossbow.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Bronze dagger",
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
        Slash: 2,
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
        "Melee strength": 3,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Bronze_dagger.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Bronze dart",
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
        "Ranged strength": 1,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Bronze_dart.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Bronze hasta",
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
        Stab: 5,
        Slash: 5,
        Crush: 5,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: -1,
        Slash: -1,
        Crush: -1,
        Magic: 0,
        Range: -1,
      },
      // Other
      {
        "Melee strength": 6,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Bronze_hasta.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Bronze knife",
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
        Range: 4,
      },
      // Defence
      {
        Stab: -1,
        Slash: -1,
        Crush: -1,
        Magic: 0,
        Range: -1,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 3,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Bronze_knife.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Bronze longsword",
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
        Slash: 5,
        Crush: -2,
        Magic: 0,
        Range: 4,
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
        "Melee strength": 7,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Bronze_longsword.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Bronze mace",
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
        Stab: 1,
        Slash: -2,
        Crush: 6,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 3,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 5,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 1,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Bronze_mace.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Bronze pickaxe",
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
        Slash: -2,
        Crush: 2,
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
        "Melee strength": 5,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Bronze_pickaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Bronze scimitar",
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
        Stab: 1,
        Slash: 7,
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
        "Melee strength": 6,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Bronze_scimitar.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Bronze sword",
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
        Slash: 3,
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
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Bronze_sword.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Bronze thrownaxe",
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
        Range: 4,
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
        "Ranged strength": 5,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Bronze_thrownaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Bronze warhammer",
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
        Stab: -4,
        Slash: -4,
        Crush: 10,
        Magic: -4,
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
        "Ranged strength": 8,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Bronze_warhammer.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Bryophyta's staff",
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
        Prayer: 0,
        Weight: 1.5,
      },
    ],
    src: "./gearcalculator/weapons/Bryophyta's_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Chinchompa",
    defLvl: 0,
    rangedLvl: 45,
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
        Range: 45,
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
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Chinchompa.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Cleaver",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 7,
        Slash: 45,
        Crush: -2,
        Magic: 0,
        Range: 45,
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
        "Melee strength": 44,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Cleaver.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Crossbow",
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
        Range: 6,
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
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 8,
      },
    ],
    src: "./gearcalculator/weapons/Crossbow.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Crystal axe",
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
        Stab: -2,
        Slash: 38,
        Crush: 32,
        Magic: 0,
        Range: 6,
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
        "Melee strength": 42,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.907,
      },
    ],
    src: "./gearcalculator/weapons/Crystal_axe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Crystal harpoon",
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
        Stab: 38,
        Slash: 32,
        Crush: 0,
        Magic: 0,
        Range: 6,
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
        "Melee strength": 42,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.907,
      },
    ],
    src: "./gearcalculator/weapons/Crystal_harpoon.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Crystal pickaxe",
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
        Stab: 38,
        Slash: -2,
        Crush: 32,
        Magic: 0,
        Range: 6,
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
        "Melee strength": 42,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Crystal_pickaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Crystal sceptre",
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
        Stab: 8,
        Slash: 10,
        Crush: 16,
        Magic: 0,
        Range: 6,
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
        "Melee strength": 20,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.003,
      },
    ],
    src: "./gearcalculator/weapons/Crystal_sceptre.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Cursed goblin hammer",
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
        Crush: -100,
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
        "Melee strength": -100,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Cursed_goblin_hammer.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dark dagger",
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
        Stab: 5,
        Slash: 3,
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
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Dark_dagger.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Darklight",
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
        Stab: 10,
        Slash: 16,
        Crush: -2,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 3,
        Crush: 2,
        Magic: 2,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 13,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Darklight.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Decorative sword (white)",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 20,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 15,
        Slash: 20,
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
        "Melee strength": 22,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Decorative_sword_(white).webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Decorative sword (red)",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 5,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 13,
        Slash: 18,
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
        "Melee strength": 16,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Decorative_sword_(red).webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Decorative_sword_(gold)",
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
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Decorative_sword_(gold).webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Dorgeshuun crossbow",
    defLvl: 0,
    rangedLvl: 28,
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
        Range: 42,
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
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Dorgeshuun_crossbow.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon axe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -2,
        Slash: 38,
        Crush: 32,
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
        "Melee strength": 42,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_axe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon battleaxe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -2,
        Slash: 70,
        Crush: 65,
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
        "Melee strength": 85,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_battleaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon cane",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 40,
        Slash: -2,
        Crush: 60,
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
        "Melee strength": 55,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_cane.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Dragon crossbow",
    defLvl: 0,
    rangedLvl: 64,
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
        Range: 94,
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
    src: "./gearcalculator/weapons/Dragon_crossbow.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon dagger",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 40,
        Slash: 25,
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
        "Melee strength": 40,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_dagger.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Dragon dart",
    defLvl: 0,
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
        "Ranged strength": 35,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_dart.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon harpoon",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 38,
        Slash: 32,
        Crush: 0,
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
        "Melee strength": 42,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_harpoon.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon hasta",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 55,
        Slash: 55,
        Crush: 55,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: -15,
        Slash: -15,
        Crush: -12,
        Magic: 0,
        Range: -15,
      },
      // Other
      {
        "Melee strength": 60,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_hasta.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Dragon hunter crossbow",
    defLvl: 0,
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
        Magic: 0,
        Range: 95,
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
        "Melee strength": 60,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 7,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_hunter_crossbow.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon hunter lance",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 78,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 85,
        Slash: 65,
        Crush: 65,
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
        "Melee strength": 70,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 3,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_hunter_lance.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon knife",
    defLvl: 0,
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
        Magic: 0,
        Range: 28,
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
        "Ranged strength": 30,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_knife.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon longsword",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 58,
        Slash: 69,
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
        "Melee strength": 71,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_longsword.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon longsword (bh)",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 62,
        Slash: 75,
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
        "Melee strength": 71,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_longsword_(bh).webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon longsword (cr)",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 58,
        Slash: 69,
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
        "Melee strength": 71,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_longsword_(cr).webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon mace",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 40,
        Slash: -2,
        Crush: 60,
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
        "Melee strength": 55,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_mace.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon mace (cr)",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 40,
        Slash: -2,
        Crush: 60,
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
        "Melee strength": 55,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_mace_(cr).webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon mace (bh)",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 44,
        Slash: -2,
        Crush: 64,
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
        "Melee strength": 55,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_mace_(bh).webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon pickaxe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 38,
        Slash: -2,
        Crush: 32,
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
        "Melee strength": 42,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.4,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_pickaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon scimitar",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 8,
        Slash: 67,
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
        "Melee strength": 66,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_scimitar.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon sword",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 65,
        Slash: 55,
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
        "Melee strength": 63,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_sword.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon thrownaxe",
    defLvl: 0,
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
        Magic: 0,
        Range: 36,
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
        "Ranged strength": 47,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_thrownaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Dragon warhammer",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -4,
        Slash: -4,
        Crush: 95,
        Magic: -4,
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
        "Melee strength": 85,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Dragon_warhammer.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Dramen staff",
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
        Stab: -1,
        Slash: -1,
        Crush: 10,
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
        "Melee strength": 10,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Dramen_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Dust battlestaff",
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
    src: "./gearcalculator/weapons/Dust_battlestaff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Earth battlestaff",
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
    src: "./gearcalculator/weapons/Earth_battlestaff.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Egg whisk",
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
        Stab: 5,
        Slash: 3,
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
        "Melee strength": 4,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Egg_whisk.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Eldritch nightmare staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 82,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 50,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 16,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 14,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 15,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.6,
      },
    ],
    src: "./gearcalculator/weapons/Eldritch_nightmare_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Nightmare staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 82,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 50,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 16,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 14,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 15,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.6,
      },
    ],
    src: "./gearcalculator/weapons/Nightmare_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Emerald sickle (b)",
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
        Magic: 16,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 1,
        Magic: 1,
        Range: 1,
      },
      // Other
      {
        "Melee strength": 2,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Emerald_sickle_(b).webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Enchanted emerald sickle (b)",
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
        Magic: 16,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 1,
        Magic: 1,
        Range: 1,
      },
      // Other
      {
        "Melee strength": 3,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Enchanted_emerald_sickle_(b).webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Enchanted ruby sickle (b)",
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
        Magic: 16,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 1,
        Magic: 1,
        Range: 1,
      },
      // Other
      {
        "Melee strength": 6,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Enchanted_ruby_sickle_(b).webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Excalibur",
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
        Magic: 1,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 25,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Excalibur.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Fremennik blade",
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
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Fremennik_blade.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Frying pan",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 20,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -4,
        Slash: -4,
        Crush: 25,
        Magic: -4,
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
        "Melee strength": 20,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Frying_pan.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Ghrazi rapier",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 80,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 95,
        Slash: 55,
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
        "Melee strength": 89,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Ghrazi_rapier.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Gilded axe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -2,
        Slash: 26,
        Crush: 24,
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
        "Melee strength": 29,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Gilded_axe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Gilded hasta",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 36,
        Slash: 36,
        Crush: 36,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: -10,
        Slash: -10,
        Crush: -9,
        Magic: 0,
        Range: -10,
      },
      // Other
      {
        "Melee strength": 42,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Gilded_hasta.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Gilded pickaxe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 26,
        Slash: -2,
        Crush: 24,
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
        "Melee strength": 29,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Gilded_pickaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Gilded scimitar",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 7,
        Slash: 45,
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
        "Melee strength": 44,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Gilded_scimitar.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Glowing dagger",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 5,
        Slash: 3,
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
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Glowing_dagger.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Granite hammer",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 50,
    attackLvl: 50,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 57,
        Magic: -3,
        Range: -1,
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
        "Melee strength": 56,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 5,
      },
    ],
    src: "./gearcalculator/weapons/Granite_hammer.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Granite longsword",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 50,
    attackLvl: 50,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 56,
        Slash: 65,
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
        "Melee strength": 62,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/weapons/Granite_longsword.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Guthix staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 60,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -1,
        Slash: -1,
        Crush: 6,
        Magic: 6,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 6,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 2,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Guthix_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Harmonised nightmare staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 82,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 50,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 16,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 14,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 15,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.6,
      },
    ],
    src: "./gearcalculator/weapons/Harmonised_nightmare_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Harry's cutlass",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 20,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 3,
        Slash: 14,
        Crush: 0,
        Magic: -5,
        Range: 0,
      },
      // Defence
      {
        Stab: 4,
        Slash: 4,
        Crush: 4,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 22,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Harry's_cutlass.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Holy ghrazi rapier",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 80,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 94,
        Slash: 55,
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
        "Melee strength": 89,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Holy_ghrazi_rapier.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Holy sanguinesti staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 82,
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
        Range: 4,
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
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.5,
      },
    ],
    src: "./gearcalculator/weapons/Holy_sanguinesti_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Holy water",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 82,
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
        Range: 6,
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
        "Melee strength": 0,
        "Ranged strength": 12,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Holy_water.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Hunters' crossbow",
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
        Range: 55,
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
        Weight: 5,
      },
    ],
    src: "./gearcalculator/weapons/Hunters'_crossbow.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Iban's staff",
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
        "Melee strength": 50,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Iban's_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Ice ancient sceptre",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 75,
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
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Ice_ancient_sceptre.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Infernal axe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -2,
        Slash: 38,
        Crush: 32,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 3,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 42,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Infernal_axe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Infernal harpoon",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 38,
        Slash: 32,
        Crush: 0,
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
        "Melee strength": 42,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Infernal_harpoon.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Infernal pickaxe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 38,
        Slash: -2,
        Crush: 32,
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
        "Melee strength": 42,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.4,
      },
    ],
    src: "./gearcalculator/weapons/Infernal_pickaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Inquisitor's mace",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 60,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 52,
        Slash: -4,
        Crush: 95,
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
        "Melee strength": 89,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 2,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Inquisitor's_mace.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Iron axe",
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
        Stab: -2,
        Slash: 5,
        Crush: 3,
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
        "Melee strength": 7,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Iron_axe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Iron battleaxe",
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
        Stab: -2,
        Slash: 8,
        Crush: 5,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 0,
        Magic: 0,
        Range: -1,
      },
      // Other
      {
        "Melee strength": 13,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/weapons/Iron_battleaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Iron crossbow",
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
        Range: 42,
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
        Weight: 4,
      },
    ],
    src: "./gearcalculator/weapons/Iron_crossbow.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Iron dagger",
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
        Stab: 5,
        Slash: 3,
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
        "Melee strength": 4,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Iron_dagger.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Iron dart",
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
        "Ranged strength": 2,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Iron_dart.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Iron hasta",
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
        Stab: 8,
        Slash: 8,
        Crush: 8,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: -2,
        Slash: -2,
        Crush: -2,
        Magic: 0,
        Range: -2,
      },
      // Other
      {
        "Melee strength": 10,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Iron_hasta.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Iron knife",
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
        Range: 5,
      },
      // Defence
      {
        Stab: -2,
        Slash: -2,
        Crush: -2,
        Magic: 0,
        Range: -2,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 4,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Iron_knife.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Iron longsword",
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
        Stab: 6,
        Slash: 8,
        Crush: -2,
        Magic: 0,
        Range: 5,
      },
      // Defence
      {
        Stab: 0,
        Slash: 3,
        Crush: 2,
        Magic: 0,
        Range: -2,
      },
      // Other
      {
        "Melee strength": 10,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Iron_longsword.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Iron mace",
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
        Slash: -2,
        Crush: -9,
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
        "Melee strength": 7,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 1,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Iron_mace.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Iron pickaxe",
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
        Stab: 5,
        Slash: -2,
        Crush: 3,
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
        "Melee strength": 7,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Iron_pickaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Iron scimitar",
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
        Slash: 10,
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
        "Melee strength": 9,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Iron_scimitar.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Iron sickle",
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
        Stab: 1,
        Slash: 1,
        Crush: 1,
        Magic: 1,
        Range: 1,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Iron_sickle.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Iron sword",
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
        Stab: 6,
        Slash: 4,
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
        "Melee strength": 7,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Iron_sword.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Iron thrownaxe",
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
        Range: 5,
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
        "Ranged strength": 7,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Iron_thrownaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Iron warhammer",
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
        Stab: -4,
        Slash: -4,
        Crush: 11,
        Magic: -4,
        Range: 5,
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
        "Melee strength": 11,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Iron_warhammer.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Ivandis flail",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 24,
        Slash: 38,
        Crush: 62,
        Magic: 8,
        Range: 0,
      },
      // Defence
      {
        Stab: 4,
        Slash: 4,
        Crush: 2,
        Magic: 8,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 42,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 0.001,
      },
    ],
    src: "./gearcalculator/weapons/Ivandis_flail.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Jade machete",
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
        Slash: 11,
        Crush: -2,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 1,
        Magic: 8,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 6,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Jade_machete.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Keris partisan",
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
        Stab: 58,
        Slash: -2,
        Crush: 57,
        Magic: 2,
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
        "Melee strength": 45,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 3,
        Weight: 3.218,
      },
    ],
    src: "./gearcalculator/weapons/Keris_partisan.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Keris",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 50,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 40,
        Slash: 20,
        Crush: -10,
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
        "Melee strength": 30,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 2,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Keris.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Kitchen knife",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 25,
        Slash: 12,
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
        "Melee strength": 24,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 2,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Kitchen_knife.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Kodai wand",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 80,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 28,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 3,
        Crush: 3,
        Magic: 20,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 15,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.198,
      },
    ],
    src: "./gearcalculator/weapons/Kodai_wand.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Leaf-bladed battleaxe",
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
        Slash: 72,
        Crush: 72,
        Magic: 28,
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
        "Melee strength": 92,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/weapons/Leaf-bladed_battleaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Leaf-bladed sword",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 50,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 67,
        Slash: 62,
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
        Range: -1,
      },
      // Other
      {
        "Melee strength": 50,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Leaf-bladed_sword.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Lucky cutlass",
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
        Stab: 5,
        Slash: 20,
        Crush: 0,
        Magic: -5,
        Range: 0,
      },
      // Defence
      {
        Stab: 6,
        Slash: 6,
        Crush: 6,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 25,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Lucky_cutlass.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Lunar staff",
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
        Stab: 3,
        Slash: 2,
        Crush: 16,
        Magic: 13,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 2,
        Magic: 13,
        Range: 1,
      },
      // Other
      {
        "Melee strength": 15,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 3,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Lunar_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Machete",
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
        Slash: 6,
        Crush: -2,
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
        "Melee strength": 5,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Machete.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Magic secateurs",
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
        Stab: 7,
        Slash: 9,
        Crush: -5,
        Magic: 1,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 0,
        Magic: 1,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 1,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Magic_secateurs.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Magic staff",
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
        Slash: -1,
        Crush: 10,
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
        "Melee strength": 7,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Magic_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Maple blackjack",
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
        "Melee strength": 20,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Maple_blackjack.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Maple blackjack (d)",
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
        Crush: 24,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 20,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Maple_blackjack(d).webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Maple blackjack (o)",
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
        Crush: 24,
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
        "Melee strength": 20,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Maple_blackjack(o).webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Master wand",
    defLvl: 0,
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
        Weight: 0.198,
      },
    ],
    src: "./gearcalculator/weapons/Master_wand.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Meat tenderiser",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 40,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -4,
        Slash: -4,
        Crush: 53,
        Magic: -4,
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
        "Melee strength": 48,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Meat_tenderiser.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Mithril axe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 20,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -2,
        Slash: 12,
        Crush: 10,
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
        "Melee strength": 13,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.133,
      },
    ],
    src: "./gearcalculator/weapons/Mithril_axe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Mithril battleaxe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 20,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -2,
        Slash: 22,
        Crush: 17,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 0,
        Magic: 0,
        Range: -1,
      },
      // Other
      {
        "Melee strength": 29,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Mithril_battleaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Mithril crossbow",
    defLvl: 0,
    rangedLvl: 36,
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
        Range: 66,
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
        Weight: 5,
      },
    ],
    src: "./gearcalculator/weapons/Mithril_crossbow.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Mithril dagger",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 20,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 11,
        Slash: 5,
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
        "Melee strength": 10,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.396,
      },
    ],
    src: "./gearcalculator/weapons/Mithril_dagger.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Mithril dart",
    defLvl: 0,
    rangedLvl: 20,
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
        "Ranged strength": 9,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Mithril_dart.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Mithril hasta",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 20,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 17,
        Slash: 17,
        Crush: 17,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: -5,
        Slash: -5,
        Crush: -4,
        Magic: 0,
        Range: -5,
      },
      // Other
      {
        "Melee strength": 18,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Mithril_hasta.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Mithril knife",
    defLvl: 0,
    rangedLvl: 20,
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
        Range: 11,
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
        "Melee strength": 10,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Mithril_knife.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Mithril longsword",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 20,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 15,
        Slash: 20,
        Crush: -2,
        Magic: 0,
        Range: 11,
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
        "Melee strength": 22,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Mithril_longsword.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Mithril mace",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 20,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 11,
        Slash: -2,
        Crush: 18,
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
        "Melee strength": 16,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 3,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Mithril_mace.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Mithril pickaxe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 20,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 12,
        Slash: -2,
        Crush: 10,
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
        "Melee strength": 13,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Mithril_pickaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Mithril scimitar",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 20,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 5,
        Slash: 21,
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
        "Melee strength": 20,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Mithril_scimitar.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Mithril sword",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 20,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 16,
        Slash: 11,
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
        "Melee strength": 17,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Mithril_sword.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Mithril thrownaxe",
    defLvl: 0,
    rangedLvl: 20,
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
        Range: 12,
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
        "Ranged strength": 16,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Mithril_thrownaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Mithril warhammer",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 20,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -4,
        Slash: -4,
        Crush: 25,
        Magic: -4,
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
        "Melee strength": 27,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Mithril_warhammer.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Morrigan's javelin",
    defLvl: 0,
    rangedLvl: 75,
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
        Range: 105,
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
        "Ranged strength": 145,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Morrigan's_javelin_(bh).webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Morrigan's throwing axe",
    defLvl: 0,
    rangedLvl: 75,
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
        Range: 93,
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
        "Ranged strength": 117,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Morrigan's_throwing_axe_(bh).webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Mystic air staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: -1,
        Crush: 40,
        Magic: 14,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 14,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 50,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Mystic_air_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Mystic dust staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: -1,
        Crush: 40,
        Magic: 14,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 14,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 50,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Mystic_dust_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Mystic earth staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: -1,
        Crush: 40,
        Magic: 14,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 14,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 50,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Mystic_earth_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Mystic fire staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: -1,
        Crush: 40,
        Magic: 14,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 14,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 50,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Mystic_fire_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Mystic lava staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: -1,
        Crush: 40,
        Magic: 14,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 14,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 50,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Mystic_lava_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Mystic mist staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: -1,
        Crush: 40,
        Magic: 14,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 14,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 50,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Mystic_mist_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Mystic mud staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: -1,
        Crush: 40,
        Magic: 14,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 14,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 50,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Mystic_mud_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Mystic smoke staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: -1,
        Crush: 40,
        Magic: 14,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 14,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 50,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Mystic_smoke_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Mystic steam staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: -1,
        Crush: 40,
        Magic: 14,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 14,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 50,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Mystic_steam_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Mystic water staff",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 40,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 10,
        Slash: -1,
        Crush: 40,
        Magic: 14,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 14,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 50,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Mystic_water_staff.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Oak blackjack",
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
        "Melee strength": 2,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Oak_blackjack.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Oak blackjack (d)",
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
        Crush: 4,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 4,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Oak_blackjack(d).webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Oak blackjack (o)",
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
        Crush: 4,
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
        "Melee strength": 4,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Oak_blackjack(o).webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Opal machete",
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
        Slash: 8,
        Crush: -2,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 1,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 4,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Opal_machete.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Osmumten's fang",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 82,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 105,
        Slash: 75,
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
        "Melee strength": 103,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Osmumten's_fang.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Pharaoh's sceptre",
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
        Crush: 25,
        Magic: 10,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: -1,
        Magic: 10,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 32,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2,
      },
    ],
    src: "./gearcalculator/weapons/Pharaoh's_sceptre_(1).webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Phoenix crossbow",
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
        Magic: 6,
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
        Weight: 3.628,
      },
    ],
    src: "./gearcalculator/weapons/Phoenix_crossbow.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Piscarilius banner",
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
        Stab: 12,
        Slash: 12,
        Crush: 12,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 1,
        Slash: 1,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 12,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Piscarilius_banner.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Rapier",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 45,
        Slash: 7,
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
        "Melee strength": 44,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Rapier.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Red chinchompa",
    defLvl: 0,
    rangedLvl: 55,
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
        Range: 70,
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
        "Melee strength": 0,
        "Ranged strength": 15,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Red_chinchompa.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Red topaz machete",
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
        Slash: 16,
        Crush: -2,
        Magic: 0,
        Range: 70,
      },
      // Defence
      {
        Stab: 1,
        Slash: 1,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 10,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Red_topaz_machete.webp",
    slot: "Weapon",
  },
  {
    type: "Magic",
    name: "Rod of ivandis",
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
        Slash: -1,
        Crush: 7,
        Magic: 4,
        Range: 0,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 1,
        Magic: 4,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 3,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.001,
      },
    ],
    src: "./gearcalculator/weapons/Rod_of_ivandis.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Rolling pin",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 20,
        Slash: -2,
        Crush: 39,
        Magic: 4,
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
        "Melee strength": 36,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 4,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Rolling_pin.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Ruby sickle (b)",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
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
        Slash: 1,
        Crush: 1,
        Magic: 1,
        Range: 1,
      },
      // Other
      {
        "Melee strength": 4,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 1.587,
      },
    ],
    src: "./gearcalculator/weapons/Ruby_sickle_(b).webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Rune axe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -2,
        Slash: 26,
        Crush: 24,
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
        "Melee strength": 29,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.36,
      },
    ],
    src: "./gearcalculator/weapons/Rune_axe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Rune battleaxe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -2,
        Slash: 48,
        Crush: 43,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 1,
        Crush: 0,
        Magic: 0,
        Range: -1,
      },
      // Other
      {
        "Melee strength": 64,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/weapons/Rune_battleaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Rune cane",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 20,
        Slash: -2,
        Crush: 39,
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
        "Melee strength": 36,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 4,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Rune_cane.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Rune crossbow",
    defLvl: 0,
    rangedLvl: 61,
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
        Range: 90,
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
    src: "./gearcalculator/weapons/Rune_crossbow.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Rune dagger",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 25,
        Slash: 12,
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
        "Melee strength": 24,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/weapons/Rune_dagger.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Rune dart",
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
        "Ranged strength": 26,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Rune_dart.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Rune hasta",
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
        Stab: 36,
        Slash: 36,
        Crush: 36,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: -10,
        Slash: -10,
        Crush: -9,
        Magic: 0,
        Range: -10,
      },
      // Other
      {
        "Melee strength": 42,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Rune_hasta.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Rune knife",
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
        Magic: 0,
        Range: 25,
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
        "Ranged strength": 24,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Rune_knife.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Rune longsword",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 38,
        Slash: 47,
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
        "Melee strength": 49,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Rune_longsword.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Rune mace",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 20,
        Slash: -2,
        Crush: 39,
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
        "Melee strength": 36,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 4,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Rune_mace.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Rune pickaxe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 26,
        Slash: -2,
        Crush: 24,
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
        "Melee strength": 29,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.267,
      },
    ],
    src: "./gearcalculator/weapons/Rune_pickaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Rune scimitar",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 7,
        Slash: 45,
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
        "Melee strength": 44,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Rune_scimitar.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Rune sword",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 38,
        Slash: 26,
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
        "Melee strength": 39,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Rune_sword.webp",
    slot: "Weapon",
  },
  {
    type: "Ranged",
    name: "Rune thrownaxe",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 0,
        Range: 26,
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
        "Melee strength": 36,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0,
      },
    ],
    src: "./gearcalculator/weapons/Rune_thrownaxe.webp",
    slot: "Weapon",
  },
  {
    type: "Melee",
    name: "Rune warhammer",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 40,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -4,
        Slash: -4,
        Crush: 53,
        Magic: -4,
        Range: 26,
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
        "Melee strength": 62,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 1.814,
      },
    ],
    src: "./gearcalculator/weapons/Rune_warhammer.webp",
    slot: "Weapon",
  },
];

export default WEAPONS;
