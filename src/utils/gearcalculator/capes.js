const CAPES = [
  //////////////
  //   MELEE  //
  //////////////

  {
    type: "Melee",
    name: "3rd age cloak",
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
        Magic: -3,
        Range: 0,
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
        Prayer: 5,
        Weight: 0.005,
      },
    ],
    src: "./gearcalculator/capes/3rd_age_cloak.webp",
    slot: "Cape",
  },

  //////////////
  //  RANGED  //
  //////////////

  {
    type: "Ranged",
    name: "Leather cowl",
    defLvl: 0,
    rangedLvl: 1,
    prayerLvl: 0,
    magicLvl: 0,
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
        Range: 1,
      },
      // Defence
      {
        Stab: 2,
        Slash: 3,
        Crush: 4,
        Magic: 2,
        Range: 3,
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
    src: "./gearcalculator/helms/Leather_cowl.webp",
    slot: "Cape",
  },

  // //////////////
  // //  Magic  //
  // //////////////
  {
    type: "Magic",
    name: "Blue Wizard hat",
    defLvl: 0,
    rangedLvl: 0,
    prayerLvl: 0,
    magicLvl: 1,
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
        Weight: 0.453,
      },
    ],
    src: "./gearcalculator/helms/Blue_wizard_hat.webp",
    slot: "Cape",
  },
];

export default CAPES;
