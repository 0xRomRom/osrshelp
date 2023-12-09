const SHIELDS = [
  {
    type: "Melee",
    name: "3rd age kiteshield",
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
        Magic: -10,
        Range: -4,
      },
      // Defence
      {
        Stab: 63,
        Slash: 65,
        Crush: 61,
        Magic: -3,
        Range: 63,
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
    src: "./gearcalculator/shields/3rd_age_kiteshield.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Adamant defender",
    defLvl: 30,
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
        Slash: 12,
        Crush: 11,
        Magic: -3,
        Range: -2,
      },
      // Defence
      {
        Stab: 13,
        Slash: 12,
        Crush: 1,
        Magic: -3,
        Range: -2,
      },
      // Other
      {
        "Melee strength": 4,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 2.721,
      },
    ],
    src: "./gearcalculator/shields/Adamant_defender.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Adamant kiteshield",
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
        Magic: -8,
        Range: -3,
      },
      // Defence
      {
        Stab: 27,
        Slash: 31,
        Crush: 29,
        Magic: -1,
        Range: 29,
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
    src: "./gearcalculator/shields/Adamant_kiteshield.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Adamant kiteshield (g)",
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
        Magic: -8,
        Range: -3,
      },
      // Defence
      {
        Stab: 27,
        Slash: 31,
        Crush: 29,
        Magic: -1,
        Range: 29,
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
    src: "./gearcalculator/shields/Adamant_kiteshield_(g).webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Adamant kiteshield (t)",
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
        Magic: -8,
        Range: -3,
      },
      // Defence
      {
        Stab: 27,
        Slash: 31,
        Crush: 29,
        Magic: -1,
        Range: 29,
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
    src: "./gearcalculator/shields/Adamant_kiteshield_(t).webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Adamant sq shield",
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
        Magic: -6,
        Range: 0,
      },
      // Defence
      {
        Stab: 24,
        Slash: 26,
        Crush: 22,
        Magic: 0,
        Range: 24,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 4.082,
      },
    ],
    src: "./gearcalculator/shields/Adamant_sq_shield.webp",
    slot: "Shield",
  },
  {
    type: "Ranged",
    name: "Ancient d'hide shield",
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
        Stab: -15,
        Slash: -15,
        Crush: -11,
        Magic: -10,
        Range: 7,
      },
      // Defence
      {
        Stab: 21,
        Slash: 18,
        Crush: 16,
        Magic: 15,
        Range: 14,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 1,
        Weight: 8,
      },
    ],
    src: "./gearcalculator/shields/Adamant_sq_shield.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Ancient kiteshield",
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
        Magic: -8,
        Range: -2,
      },
      // Defence
      {
        Stab: 44,
        Slash: 48,
        Crush: 46,
        Magic: -1,
        Range: 46,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 1,
        Weight: 5.443,
      },
    ],
    src: "./gearcalculator/shields/Ancient_kiteshield.webp",
    slot: "Shield",
  },
  {
    type: "Magic",
    name: "Ancient wyvern shield",
    defLvl: 75,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 70,
    strengthLvl: 0,
    attackLvl: 0,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: -1,
        Slash: -10,
        Crush: -10,
        Magic: 15,
        Range: -10,
      },
      // Defence
      {
        Stab: 72,
        Slash: 80,
        Crush: 75,
        Magic: -5,
        Range: -2,
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
    src: "./gearcalculator/shields/Ancient_kiteshield.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Anti-dragon shield",
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
        Stab: 7,
        Slash: 9,
        Crush: 8,
        Magic: 2,
        Range: 8,
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
    src: "./gearcalculator/shields/Anti-dragon_shield.webp",
    slot: "Shield",
  },
  {
    type: "Magic",
    name: "Arcane spirit shield",
    defLvl: 75,
    rangedLvl: 0,
    prayerLvl: 70,
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
        Stab: 53,
        Slash: 55,
        Crush: 73,
        Magic: 2,
        Range: 52,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 3,
        Weight: 2,
      },
    ],
    src: "./gearcalculator/shields/Arcane_spirit_shield.webp",
    slot: "Shield",
  },
];

export default SHIELDS;
