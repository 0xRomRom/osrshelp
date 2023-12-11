const RINGS = [
  {
    type: "Ranged",
    name: "Archers ring",
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
        Slash: 0,
        Crush: 0,
        Magic: 0,
        Range: 4,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.004,
      },
    ],
    src: "./gearcalculator/rings/Archers_ring.webp",
    slot: "Ring",
  },
  {
    type: "Ranged",
    name: "Archers ring (i)",
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
        Range: 8,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 0,
        Range: 8,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.004,
      },
    ],
    src: "./gearcalculator/rings/Archers_ring_(i).webp",
    slot: "Ring",
  },
  {
    type: "Magic",
    name: "Beacon ring",
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
        Magic: 2,
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
        Weight: 0.006,
      },
    ],
    src: "./gearcalculator/rings/Beacon_ring.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Bellator ring",
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
        Slash: 20,
        Crush: 0,
        Magic: 2,
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
        "Melee strength": 6,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.012,
      },
    ],
    src: "./gearcalculator/rings/Bellator_ring.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Berserker ring",
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
        Weight: 0.004,
      },
    ],
    src: "./gearcalculator/rings/Berserker_ring.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Berserker ring (i)",
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
        Crush: 8,
        Magic: 0,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 8,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.004,
      },
    ],
    src: "./gearcalculator/rings/Berserker_ring_(i).webp",
    slot: "Ring",
  },
  {
    type: "Magic",
    name: "Brimstone ring",
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
        Magic: 6,
        Range: 4,
      },
      // Defence
      {
        Stab: 4,
        Slash: 4,
        Crush: 4,
        Magic: 6,
        Range: 4,
      },
      // Other
      {
        "Melee strength": 4,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.004,
      },
    ],
    src: "./gearcalculator/rings/Brimstone_ring.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Explorer's ring 1",
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
        Prayer: 1,
        Weight: 0.006,
      },
    ],
    src: "./gearcalculator/rings/Explorer's_ring_1.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Explorer's ring 2",
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
        Prayer: 1,
        Weight: 0.006,
      },
    ],
    src: "./gearcalculator/rings/Explorer's_ring_2.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Explorer's ring 3",
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
        Prayer: 1,
        Weight: 0.006,
      },
    ],
    src: "./gearcalculator/rings/Explorer's_ring_3.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Explorer's ring 4",
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
        Prayer: 1,
        Weight: 0.006,
      },
    ],
    src: "./gearcalculator/rings/Explorer's_ring_4.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Granite ring",
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
        Stab: 2,
        Slash: 2,
        Crush: 2,
        Magic: -2,
        Range: 8,
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
    src: "./gearcalculator/rings/Granite_ring.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Granite ring (i)",
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
        Stab: 4,
        Slash: 4,
        Crush: 4,
        Magic: -4,
        Range: 16,
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
    src: "./gearcalculator/rings/Granite_ring_(i).webp",
    slot: "Ring",
  },
  {
    type: "Magic",
    name: "Lunar ring",
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
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.006,
      },
    ],
    src: "./gearcalculator/rings/Lunar_ring.webp",
    slot: "Ring",
  },
  {
    type: "Magic",
    name: "Magus ring",
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
        Magic: 15,
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
        "Magic damage": 2,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.012,
      },
    ],
    src: "./gearcalculator/rings/Magus_ring.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Ring of shadows",
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
        Magic: 5,
        Range: 4,
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
        "Melee strength": 2,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 2,
        Weight: 0.004,
      },
    ],
    src: "./gearcalculator/rings/Ring_of_shadows.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Ring of suffering",
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
        Prayer: 2,
        Weight: 0.006,
      },
    ],
    src: "./gearcalculator/rings/Ring_of_suffering.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Ring of suffering (i)",
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
        Prayer: 4,
        Weight: 0.006,
      },
    ],
    src: "./gearcalculator/rings/Ring_of_suffering_(i).webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Ring of the gods",
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
        Prayer: 4,
        Weight: 0.3,
      },
    ],
    src: "./gearcalculator/rings/Ring_of_the_gods.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Ring of the gods (i)",
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
        Prayer: 8,
        Weight: 0.3,
      },
    ],
    src: "./gearcalculator/rings/Ring_of_the_gods_(i).webp",
    slot: "Ring",
  },
  {
    type: "Magic",
    name: "Seers ring",
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
        Magic: 6,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.004,
      },
    ],
    src: "./gearcalculator/rings/Seers_ring.webp",
    slot: "Ring",
  },
  {
    type: "Magic",
    name: "Seers ring (i)",
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
        Magic: 12,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 0,
        Magic: 12,
        Range: 0,
      },
      // Other
      {
        "Melee strength": 0,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.004,
      },
    ],
    src: "./gearcalculator/rings/Seers_ring_(i).webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Treasonous ring",
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
        Slash: 0,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 4,
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
        Weight: 0.4,
      },
    ],
    src: "./gearcalculator/rings/Treasonous_ring.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Treasonous ring (i)",
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
        Slash: 0,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 8,
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
        Weight: 0.4,
      },
    ],
    src: "./gearcalculator/rings/Treasonous_ring_(i).webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Tyrannical ring",
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
        Crush: 4,
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
    src: "./gearcalculator/rings/Tyrannical_ring.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Tyrannical ring (i)",
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
        Crush: 8,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 0,
        Crush: 8,
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
    src: "./gearcalculator/rings/Tyrannical_ring_(i).webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Ultor ring",
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
        "Melee strength": 12,
        "Ranged strength": 0,
        "Magic damage": 0,
        "Slayer Bonus": 0,
        Prayer: 0,
        Weight: 0.012,
      },
    ],
    src: "./gearcalculator/rings/Ultor_ring.webp",
    slot: "Ring",
  },
  {
    type: "Ranged",
    name: "Venator ring",
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
        Prayer: 0,
        Weight: 0.012,
      },
    ],
    src: "./gearcalculator/rings/Venator_ring.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Warrior ring",
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
        Slash: 4,
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 4,
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
        Weight: 0.004,
      },
    ],
    src: "./gearcalculator/rings/Warrior_ring.webp",
    slot: "Ring",
  },
  {
    type: "Melee",
    name: "Warrior ring (i)",
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
        Crush: 0,
        Magic: 0,
        Range: 0,
      },
      // Defence
      {
        Stab: 0,
        Slash: 8,
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
        Weight: 0.004,
      },
    ],
    src: "./gearcalculator/rings/Warrior_ring_(i).webp",
    slot: "Ring",
  },
];

export default RINGS;
