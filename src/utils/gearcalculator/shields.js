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
    src: "./gearcalculator/shields/Ancient_d'hide_shield.webp",
    slot: "Shield",
  },
  {
    type: "Ranged",
    name: "Bandos d'hide shield",
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
    src: "./gearcalculator/shields/Bandos_d'hide_shield.webp",
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
    type: "Melee",
    name: "Bandos kiteshield",
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
    src: "./gearcalculator/shields/Bandos_kiteshield.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Armadyl kiteshield",
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
    src: "./gearcalculator/shields/Armadyl_kiteshield.webp",
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
  {
    type: "Ranged",
    name: "Armadyl d'hide shield",
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
    src: "./gearcalculator/shields/Armadyl_d'hide_shield.webp",
    slot: "Shield",
  },
  {
    type: "Ranged",
    name: "Black d'hide shield",
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
        Prayer: 0,
        Weight: 8,
      },
    ],
    src: "./gearcalculator/shields/Black_d'hide_shield.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Avernic defender",
    defLvl: 70,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 70,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 30,
        Slash: 29,
        Crush: 28,
        Magic: -5,
        Range: -4,
      },
      // Defence
      {
        Stab: 30,
        Slash: 29,
        Crush: 28,
        Magic: -5,
        Range: -4,
      },
      // Other
      {
        "Melee strength": 8,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/shields/Avernic_defender.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Black defender",
    defLvl: 10,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 0,
    strengthLvl: 0,
    attackLvl: 10,
    hitpointsLvl: 0,
    stats: [
      // Attack
      {
        Stab: 9,
        Slash: 8,
        Crush: 7,
        Magic: -3,
        Range: -2,
      },
      // Defence
      {
        Stab: 9,
        Slash: 8,
        Crush: 7,
        Magic: -3,
        Range: -2,
      },
      // Other
      {
        "Melee strength": 2,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/shields/Black_defender.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Black kiteshield",
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
        Magic: -8,
        Range: -3,
      },
      // Defence
      {
        Stab: 17,
        Slash: 19,
        Crush: 18,
        Magic: -1,
        Range: 18,
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
    src: "./gearcalculator/shields/Black_kiteshield.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Black kiteshield (g)",
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
        Magic: -8,
        Range: -3,
      },
      // Defence
      {
        Stab: 17,
        Slash: 19,
        Crush: 18,
        Magic: -1,
        Range: 18,
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
    src: "./gearcalculator/shields/Black_kiteshield_(g).webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Black kiteshield (t)",
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
        Magic: -8,
        Range: -3,
      },
      // Defence
      {
        Stab: 17,
        Slash: 19,
        Crush: 18,
        Magic: -1,
        Range: 18,
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
    src: "./gearcalculator/shields/Black_kiteshield_(t).webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Black sq shield",
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
        Magic: -6,
        Range: 0,
      },
      // Defence
      {
        Stab: 15,
        Slash: 16,
        Crush: 14,
        Magic: 0,
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
    src: "./gearcalculator/shields/Black_sq_shield.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Blessed spirit shield",
    defLvl: 70,
    rangedLvl: 0,
    prayerLvl: 60,
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
    src: "./gearcalculator/shields/Blessed_spirit_shield.webp",
    slot: "Shield",
  },
  {
    type: "Ranged",
    name: "Blue d'hide shield",
    defLvl: 40,
    rangedLvl: 50,
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
        Range: 5,
      },
      // Defence
      {
        Stab: 16,
        Slash: 14,
        Crush: 12,
        Magic: 12,
        Range: 12,
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
    src: "./gearcalculator/shields/Blue_d'hide_shield.webp",
    slot: "Shield",
  },
  {
    type: "Magic",
    name: "Book of balance",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 50,
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
        Stab: 4,
        Slash: 4,
        Crush: 4,
        Magic: 4,
        Range: 4,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 1,
      },
    ],
    src: "./gearcalculator/shields/Book_of_balance.webp",
    slot: "Shield",
  },
  {
    type: "Magic",
    name: "Book of darkness",
    defLvl: 0,
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
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 1,
      },
    ],
    src: "./gearcalculator/shields/Book_of_darkness.webp",
    slot: "Shield",
  },
  {
    type: "Ranged",
    name: "Book of law",
    defLvl: 0,
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
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 1,
      },
    ],
    src: "./gearcalculator/shields/Book_of_law.webp",
    slot: "Shield",
  },
  {
    type: "Magic",
    name: "Book of the dead",
    defLvl: 0,
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
        Prayer: 3,
        Weight: 0.2,
      },
    ],
    src: "./gearcalculator/shields/Book_of_the_dead.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Book of war",
    defLvl: 0,
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
        Prayer: 5,
        Weight: 1,
      },
    ],
    src: "./gearcalculator/shields/Book_of_war.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Bronze defender",
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
        Stab: 3,
        Slash: 2,
        Crush: 1,
        Magic: -3,
        Range: -2,
      },
      // Defence
      {
        Stab: 3,
        Slash: 2,
        Crush: 1,
        Magic: -3,
        Range: -2,
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
    src: "./gearcalculator/shields/Bronze_defender.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Bronze kiteshield",
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
        Magic: -8,
        Range: -3,
      },
      // Defence
      {
        Stab: 5,
        Slash: 7,
        Crush: 6,
        Magic: -1,
        Range: 6,
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
    src: "./gearcalculator/shields/Bronze_kiteshield.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Bronze kiteshield (g)",
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
        Magic: -8,
        Range: -3,
      },
      // Defence
      {
        Stab: 5,
        Slash: 7,
        Crush: 6,
        Magic: -1,
        Range: 6,
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
    src: "./gearcalculator/shields/Bronze_kiteshield_(g).webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Bronze kiteshield (t)",
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
        Magic: -8,
        Range: -3,
      },
      // Defence
      {
        Stab: 5,
        Slash: 7,
        Crush: 6,
        Magic: -1,
        Range: 6,
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
    src: "./gearcalculator/shields/Bronze_kiteshield_(t).webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Bronze sq shield",
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
        Magic: -6,
        Range: 0,
      },
      // Defence
      {
        Stab: 5,
        Slash: 6,
        Crush: 4,
        Magic: 0,
        Range: 5,
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
    src: "./gearcalculator/shields/Bronze_sq_shield.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Broodoo shield",
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
        Range: -7,
      },
      // Defence
      {
        Stab: 10,
        Slash: 10,
        Crush: 15,
        Magic: 5,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 5,
        Weight: 5.443,
      },
    ],
    src: "./gearcalculator/shields/Broodoo_shield_(poison).webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Cabbage round shield",
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
        Range: -2,
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
        Weight: 4.535,
      },
    ],
    src: "./gearcalculator/shields/Cabbage_round_shield.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Crystal shield",
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
        Magic: -10,
        Range: -10,
      },
      // Defence
      {
        Stab: 51,
        Slash: 54,
        Crush: 53,
        Magic: 0,
        Range: 80,
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
    src: "./gearcalculator/shields/Crystal_shield.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Decorative shield",
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
        Weight: 4.535,
      },
    ],
    src: "./gearcalculator/shields/Decorative_shield_(gold).webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Decorative shield (red)",
    defLvl: 5,
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
        Stab: 13,
        Slash: 15,
        Crush: 14,
        Magic: -1,
        Range: 14,
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
    src: "./gearcalculator/shields/Decorative_shield_(red).webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Decorative shield (white)",
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
        Range: -3,
      },
      // Defence
      {
        Stab: 18,
        Slash: 22,
        Crush: 20,
        Magic: -1,
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
    src: "./gearcalculator/shields/Decorative_shield_(white).webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Dragon defender",
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
        Stab: 25,
        Slash: 24,
        Crush: 23,
        Magic: -3,
        Range: -2,
      },
      // Defence
      {
        Stab: 25,
        Slash: 24,
        Crush: 23,
        Magic: -3,
        Range: -2,
      },
      // Other
      {
        "Melee strength": 6,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/shields/Dragon_defender.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Dragon kiteshield",
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
        Magic: -8,
        Range: -3,
      },
      // Defence
      {
        Stab: 56,
        Slash: 60,
        Crush: 58,
        Magic: -1,
        Range: 58,
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
    src: "./gearcalculator/shields/Dragon_kiteshield.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Dragon kiteshield (g)",
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
        Magic: -8,
        Range: -3,
      },
      // Defence
      {
        Stab: 56,
        Slash: 60,
        Crush: 58,
        Magic: -1,
        Range: 58,
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
    src: "./gearcalculator/shields/Dragon_kiteshield_(g).webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Dragon sq shield",
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
        Magic: -6,
        Range: 0,
      },
      // Defence
      {
        Stab: 50,
        Slash: 52,
        Crush: 48,
        Magic: 0,
        Range: 50,
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
    src: "./gearcalculator/shields/Dragon_sq_shield.webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Dragon sq shield (g)",
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
        Magic: -6,
        Range: 0,
      },
      // Defence
      {
        Stab: 50,
        Slash: 52,
        Crush: 48,
        Magic: 0,
        Range: 50,
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
    src: "./gearcalculator/shields/Dragon_sq_shield_(g).webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Dragonfire shield (uncharged)",
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
        Magic: -10,
        Range: -5,
      },
      // Defence
      {
        Stab: 20,
        Slash: 25,
        Crush: 22,
        Magic: 10,
        Range: 22,
      },
      // Other
      {
        "Melee strength": 7,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 7.257,
      },
    ],
    src: "./gearcalculator/shields/Dragonfire_shield_(uncharged).webp",
    slot: "Shield",
  },
  {
    type: "Melee",
    name: "Dragonfire shield",
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
        Magic: -10,
        Range: -5,
      },
      // Defence
      {
        Stab: 70,
        Slash: 75,
        Crush: 72,
        Magic: 10,
        Range: 72,
      },
      // Other
      {
        "Melee strength": 7,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 7.257,
      },
    ],
    src: "./gearcalculator/shields/Dragonfire_shield.webp",
    slot: "Shield",
  },
];

export default SHIELDS;
