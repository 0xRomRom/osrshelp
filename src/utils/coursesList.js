const COURSESLIST = [
  {
    name: "Gnome Stronghold Agility Course",
    level: 1,
    "exp/lap": 86.5,
    "exp/hour": 9250,
    hourlyProfit: 0,
    marksPerHour: 0,
  },
  {
    name: "Brimhaven Agility Arena",
    level: 1,
    "exp/lap": 0,
    "exp/hour": 45000,
    hourlyProfit: 0,
    marksPerHour: 0,
  },

  {
    name: "Shayzien Basic Course",
    level: 5,
    "exp/lap": 0,
    "exp/hour": 8750,
    hourlyProfit: 0,
    marksPerHour: 0,
  },

  {
    name: "Draynor Village Rooftop Course",
    level: 10,
    "exp/lap": 120,
    "exp/hour": 10000,
    hourlyProfit: 0,
    marksPerHour: 11.9,
  },
  {
    name: "Al-Kharid Rooftop Course",
    level: 20,
    "exp/lap": 180,
    "exp/hour": 10100,
    hourlyProfit: 0,
    marksPerHour: 9.75,
  },
  {
    name: "Varrock Rooftop Course",
    level: 30,
    "exp/lap": 238,
    "exp/hour": 13200,
    hourlyProfit: 0,
    marksPerHour: 9.65,
  },
  {
    name: "Agility Pyramid",
    level: 30,
    "exp/lap": 722,
    "exp/hour": 44750,
    hourlyProfit: 0,
    marksPerHour: 0,
  },
  {
    name: "Penguin Agility Course",
    level: 30,
    "exp/lap": 540,
    "exp/hour": 30000,
    hourlyProfit: 0,
    marksPerHour: 0,
  },

  {
    name: "Barbarian Outpost Agility Course",
    level: 35,
    "exp/lap": 153.3,
    "exp/hour": 18200,
    hourlyProfit: 0,
    marksPerHour: 0,
  },

  {
    name: "Canifis Rooftop Course",
    level: 40,
    "exp/lap": 240,
    "exp/hour": 19200,
    hourlyProfit: 0,
    marksPerHour: 17,
  },

  {
    name: "Shayzien Advanced Course",
    level: 48,
    "exp/lap": 474.3,
    "exp/hour": 28000,
    hourlyProfit: 0,
    marksPerHour: 0,
  },
  {
    name: "Ape Atoll Agility Course",
    level: 48,
    "exp/lap": 580,
    "exp/hour": 53300,
    hourlyProfit: 0,
    marksPerHour: 0,
  },
  {
    name: "Falador Rooftop Course",
    level: 50,
    "exp/lap": 440,
    "exp/hour": 27200,
    hourlyProfit: 0,
    marksPerHour: 11.05,
  },
  {
    name: "Wilderness Agility Course",
    level: 52,
    "exp/lap": 571.4,
    "exp/hour": 47500,
    hourlyProfit: 0,
    marksPerHour: 0,
  },
  {
    name: "Hallowed Sepulchre",
    level: 52,
    "exp/lap": 0,
    "exp/hour": 36000,
    hourlyProfit: 0,
    marksPerHour: 0,
  },

  {
    name: "Werewolf Agility Course",
    level: 60,
    "exp/lap": 730,
    "exp/hour": 69500,
    hourlyProfit: 0,
    marksPerHour: 0,
  },

  {
    name: "Seers' Village Rooftop Course",
    level: 60,
    "exp/lap": 570,
    "exp/hour": 46800,
    hourlyProfit: 0,
    marksPerHour: 14,
  },
  {
    name: "Dorgesh-Kaan Agility Course",
    level: 70,
    "exp/lap": 2750,
    "exp/hour": 63000,
    hourlyProfit: 0,
    marksPerHour: 0,
  },

  {
    name: "Pollnivneach Rooftop Course",
    level: 70,
    "exp/lap": 890,
    "exp/hour": 52900,
    hourlyProfit: 0,
    marksPerHour: 10.45,
  },
  {
    name: "Prifddinas Agility Course",
    level: 75,
    "exp/lap": 1310,
    "exp/hour": 66000,
    hourlyProfit: 0,
    marksPerHour: 0,
  },

  {
    name: "Rellekka Rooftop Course",
    level: 80,
    "exp/lap": 780,
    "exp/hour": 55100,
    hourlyProfit: 0,
    marksPerHour: 14.25,
  },
  {
    name: "Ardougne Rooftop Course",
    level: 90,
    "exp/lap": 793,
    "exp/hour": 62600,
    hourlyProfit: 0,
    marksPerHour: 17.05,
  },
];

const sorted = COURSESLIST.sort((a, b) => a.level - b.level);
console.log(sorted);

export default COURSESLIST;
