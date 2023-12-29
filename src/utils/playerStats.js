const playerStats = [
  "overall",
  "attack",
  "defence",
  "strength",
  "hitpoints",
  "ranged",
  "prayer",
  "magic",
  "cooking",
  "woodcutting",
  "fletching",
  "fishing",
  "firemaking",
  "crafting",
  "smithing",
  "mining",
  "herblore",
  "agility",
  "thieving",
  "slayer",
  "farming",
  "runecraft",
  "hunter",
  "construction",
];

const osrsXpTable = {
  1: 0,
  2: 83,
  3: 174,
  4: 276,
  5: 388,
  6: 512,
  7: 650,
  8: 801,
  9: 969,
  10: 1154,
  11: 1358,
  12: 1584,
  13: 1833,
  14: 2107,
  15: 2411,
  16: 2746,
  17: 3115,
  18: 3523,
  19: 3973,
  20: 4470,
  21: 5018,
  22: 5624,
  23: 6291,
  24: 7028,
  25: 7842,
  26: 8740,
  27: 9730,
  28: 10824,
  29: 12031,
  30: 13363,
  31: 14833,
  32: 16456,
  33: 18247,
  34: 20224,
  35: 22406,
  36: 24815,
  37: 27473,
  38: 30408,
  39: 33648,
  40: 37224,
  41: 41171,
  42: 45529,
  43: 50339,
  44: 55649,
  45: 61512,
  46: 67983,
  47: 75127,
  48: 83014,
  49: 91721,
  50: 101333,
  51: 111945,
  52: 123660,
  53: 136594,
  54: 150872,
  55: 166636,
  56: 184040,
  57: 203254,
  58: 224466,
  59: 247886,
  60: 273742,
  61: 302288,
  62: 333804,
  63: 368599,
  64: 407015,
  65: 449428,
  66: 496254,
  67: 547953,
  68: 605032,
  69: 668051,
  70: 737627,
  71: 814445,
  72: 899257,
  73: 992895,
  74: 1096278,
  75: 1210421,
  76: 1336443,
  77: 1475581,
  78: 1629200,
  79: 1798808,
  80: 1986068,
  81: 2192818,
  82: 2421087,
  83: 2673114,
  84: 2951373,
  85: 3258594,
  86: 3597792,
  87: 3972294,
  88: 4385776,
  89: 4842295,
  90: 5346332,
  91: 5902831,
  92: 6517253,
  93: 7195629,
  94: 7944614,
  95: 8771558,
  96: 9684577,
  97: 10692629,
  98: 11805606,
  99: 13034431,
};

const arrayXpTable = [
  {
    level: 1,
    expRequired: 0,
    expDifference: 0,
  },
  {
    level: 2,
    expRequired: 83,
    expDifference: 83,
  },
  {
    level: 3,
    expRequired: 174,
    expDifference: 91,
  },
  {
    level: 4,
    expRequired: 276,
    expDifference: 102,
  },
  {
    level: 5,
    expRequired: 388,
    expDifference: 112,
  },
  {
    level: 6,
    expRequired: 512,
    expDifference: 124,
  },
  {
    level: 7,
    expRequired: 650,
    expDifference: 138,
  },
  {
    level: 8,
    expRequired: 801,
    expDifference: 151,
  },
  {
    level: 9,
    expRequired: 969,
    expDifference: 168,
  },
  {
    level: 10,
    expRequired: 1154,
    expDifference: 185,
  },
  {
    level: 11,
    expRequired: 1358,
    expDifference: 204,
  },
  {
    level: 12,
    expRequired: 1584,
    expDifference: 226,
  },
  {
    level: 13,
    expRequired: 1833,
    expDifference: 249,
  },
  {
    level: 14,
    expRequired: 2107,
    expDifference: 274,
  },
  {
    level: 15,
    expRequired: 2411,
    expDifference: 304,
  },
  {
    level: 16,
    expRequired: 2746,
    expDifference: 335,
  },
  {
    level: 17,
    expRequired: 3115,
    expDifference: 369,
  },
  {
    level: 18,
    expRequired: 3523,
    expDifference: 408,
  },
  {
    level: 19,
    expRequired: 3973,
    expDifference: 450,
  },
  {
    level: 20,
    expRequired: 4470,
    expDifference: 497,
  },
  {
    level: 21,
    expRequired: 5018,
    expDifference: 548,
  },
  {
    level: 22,
    expRequired: 5624,
    expDifference: 606,
  },
  {
    level: 23,
    expRequired: 6291,
    expDifference: 667,
  },
  {
    level: 24,
    expRequired: 7028,
    expDifference: 737,
  },
  {
    level: 25,
    expRequired: 7842,
    expDifference: 814,
  },
  {
    level: 26,
    expRequired: 8740,
    expDifference: 898,
  },
  {
    level: 27,
    expRequired: 9730,
    expDifference: 990,
  },
  {
    level: 28,
    expRequired: 10824,
    expDifference: 1094,
  },
  {
    level: 29,
    expRequired: 12031,
    expDifference: 1207,
  },
  {
    level: 30,
    expRequired: 13363,
    expDifference: 1332,
  },
  {
    level: 31,
    expRequired: 14833,
    expDifference: 1470,
  },
  {
    level: 32,
    expRequired: 16456,
    expDifference: 1623,
  },
  {
    level: 33,
    expRequired: 18247,
    expDifference: 1791,
  },
  {
    level: 34,
    expRequired: 20224,
    expDifference: 1977,
  },
  {
    level: 35,
    expRequired: 22406,
    expDifference: 2182,
  },
  {
    level: 36,
    expRequired: 24815,
    expDifference: 2409,
  },
  {
    level: 37,
    expRequired: 27473,
    expDifference: 2658,
  },
  {
    level: 38,
    expRequired: 30408,
    expDifference: 2935,
  },
  {
    level: 39,
    expRequired: 33648,
    expDifference: 3240,
  },
  {
    level: 40,
    expRequired: 37224,
    expDifference: 3576,
  },
  {
    level: 41,
    expRequired: 41171,
    expDifference: 3947,
  },
  {
    level: 42,
    expRequired: 45229,
    expDifference: 4358,
  },
  {
    level: 43,
    expRequired: 50339,
    expDifference: 4810,
  },
  {
    level: 44,
    expRequired: 55649,
    expDifference: 5310,
  },
  {
    level: 45,
    expRequired: 61512,
    expDifference: 5863,
  },
  {
    level: 46,
    expRequired: 67983,
    expDifference: 6471,
  },
  {
    level: 47,
    expRequired: 75127,
    expDifference: 7144,
  },
  {
    level: 48,
    expRequired: 83014,
    expDifference: 7887,
  },
  {
    level: 49,
    expRequired: 91721,
    expDifference: 8707,
  },
  {
    level: 50,
    expRequired: 101333,
    expDifference: 9612,
  },
  {
    level: 51,
    expRequired: 111945,
    expDifference: 10612,
  },
  {
    level: 52,
    expRequired: 123660,
    expDifference: 11715,
  },
  {
    level: 53,
    expRequired: 136594,
    expDifference: 12934,
  },
  {
    level: 54,
    expRequired: 150872,
    expDifference: 14278,
  },
  {
    level: 55,
    expRequired: 166636,
    expDifference: 15764,
  },
  {
    level: 56,
    expRequired: 184040,
    expDifference: 17404,
  },
  {
    level: 57,
    expRequired: 203254,
    expDifference: 19214,
  },
  {
    level: 58,
    expRequired: 224466,
    expDifference: 21212,
  },
  {
    level: 59,
    expRequired: 247886,
    expDifference: 23420,
  },
  {
    level: 60,
    expRequired: 273742,
    expDifference: 25856,
  },
  {
    level: 61,
    expRequired: 302288,
    expDifference: 28546,
  },
  {
    level: 62,
    expRequired: 333804,
    expDifference: 31516,
  },
  {
    level: 63,
    expRequired: 368599,
    expDifference: 34795,
  },
  {
    level: 64,
    expRequired: 407015,
    expDifference: 38416,
  },
  {
    level: 65,
    expRequired: 449428,
    expDifference: 42413,
  },
  {
    level: 66,
    expRequired: 496254,
    expDifference: 46826,
  },
  {
    level: 67,
    expRequired: 547953,
    expDifference: 51699,
  },
  {
    level: 68,
    expRequired: 605032,
    expDifference: 57079,
  },
  {
    level: 69,
    expRequired: 668051,
    expDifference: 63019,
  },
  {
    level: 70,
    expRequired: 737627,
    expDifference: 69576,
  },
  {
    level: 71,
    expRequired: 814445,
    expDifference: 76818,
  },
  {
    level: 72,
    expRequired: 899257,
    expDifference: 84812,
  },
  {
    level: 73,
    expRequired: 992895,
    expDifference: 93638,
  },
  {
    level: 74,
    expRequired: 1096278,
    expDifference: 103383,
  },
  {
    level: 75,
    expRequired: 1210421,
    expDifference: 114143,
  },
  {
    level: 76,
    expRequired: 1336443,
    expDifference: 126022,
  },
  {
    level: 77,
    expRequired: 1475581,
    expDifference: 139138,
  },
  {
    level: 78,
    expRequired: 1629200,
    expDifference: 153619,
  },
  {
    level: 79,
    expRequired: 1798808,
    expDifference: 169608,
  },
  {
    level: 80,
    expRequired: 1986068,
    expDifference: 187260,
  },
  {
    level: 81,
    expRequired: 2191818,
    expDifference: 206750,
  },
  {
    level: 82,
    expRequired: 2421087,
    expDifference: 228269,
  },
  {
    level: 83,
    expRequired: 2673114,
    expDifference: 252027,
  },
  {
    level: 84,
    expRequired: 2951373,
    expDifference: 278259,
  },
  {
    level: 85,
    expRequired: 3258594,
    expDifference: 307221,
  },
  {
    level: 86,
    expRequired: 3597792,
    expDifference: 339198,
  },
  {
    level: 87,
    expRequired: 3972294,
    expDifference: 374502,
  },
  {
    level: 88,
    expRequired: 4385776,
    expDifference: 413482,
  },
  {
    level: 89,
    expRequired: 4842295,
    expDifference: 456519,
  },
  {
    level: 90,
    expRequired: 5346332,
    expDifference: 504037,
  },
  {
    level: 91,
    expRequired: 5902831,
    expDifference: 556499,
  },
  {
    level: 92,
    expRequired: 6517253,
    expDifference: 614422,
  },
  {
    level: 93,
    expRequired: 7195629,
    expDifference: 678376,
  },
  {
    level: 94,
    expRequired: 7944614,
    expDifference: 748985,
  },
  {
    level: 95,
    expRequired: 8771558,
    expDifference: 826944,
  },
  {
    level: 96,
    expRequired: 9684577,
    expDifference: 913019,
  },
  {
    level: 97,
    expRequired: 10692629,
    expDifference: 1008052,
  },
  {
    level: 98,
    expRequired: 11805606,
    expDifference: 1112977,
  },
  {
    level: 99,
    expRequired: 13034431,
    expDifference: 1228825,
  },
];

export { playerStats, osrsXpTable, arrayXpTable };
