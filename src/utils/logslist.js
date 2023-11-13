const LOGSLIST = [
  {
    name: "Logs",
    exp: 40,
    price: 0,
    toGo: 0,
    src: "logs/Logs.webp",
    level: 1,
  },
  {
    name: "Achey tree logs",
    exp: 40,
    price: 0,
    toGo: 0,
    src: "logs/Achey_tree_logs.webp",
    level: 1,
  },
  {
    name: "Oak logs",
    exp: 60,
    price: 0,
    toGo: 0,
    src: "logs/Oak_logs.webp",
    level: 15,
  },
  {
    name: "Willow logs",
    exp: 90,
    price: 0,
    toGo: 0,
    src: "logs/Willow_logs.webp",
    level: 30,
  },
  {
    name: "Teak logs",
    exp: 105,
    price: 0,
    toGo: 0,
    src: "logs/Teak_logs.webp",
    level: 35,
  },
  {
    name: "Arctic pine logs",
    exp: 125,
    price: 0,
    toGo: 0,
    src: "logs/Arctic_pine_logs.webp",
    level: 42,
  },
  {
    name: "Maple logs",
    exp: 135,
    price: 0,
    toGo: 0,
    src: "logs/Maple_logs.webp",
    level: 45,
  },
  {
    name: "Mahogany logs",
    exp: 157.5,
    price: 0,
    toGo: 0,
    src: "logs/Mahogany_logs.webp",
    level: 50,
  },
  {
    name: "Yew logs",
    exp: 202.5,
    price: 0,
    toGo: 0,
    src: "logs/Yew_logs.webp",
    level: 60,
  },
  {
    name: "Bucket",
    exp: 96,
    price: 0,
    toGo: 0,
    src: "logs/Blisterwood_logs.webp",
    level: 62,
  },
  {
    name: "Magic logs",
    exp: 303.8,
    price: 0,
    toGo: 0,
    src: "logs/Magic_logs.webp",
    level: 75,
  },
  {
    name: "Redwood logs",
    exp: 350,
    price: 0,
    toGo: 0,
    src: "logs/Redwood_logs.webp",
    level: 90,
  },
  {
    name: "Pyre logs",
    exp: 50.5,
    price: 0,
    toGo: 0,
    src: "logs/Pyre_logs.webp",
    level: 5,
  },
  {
    name: "Oak pyre logs",
    exp: 70,
    price: 0,
    toGo: 0,
    src: "logs/Oak_pyre_logs.webp",
    level: 20,
  },
  {
    name: "Willow pyre logs",
    exp: 100,
    price: 0,
    toGo: 0,
    src: "logs/Willow_pyre_logs.webp",
    level: 35,
  },
  {
    name: "Teak pyre logs",
    exp: 120,
    price: 0,
    toGo: 0,
    src: "logs/Teak_pyre_logs.webp",
    level: 40,
  },
  {
    name: "Arctic pyre logs",
    exp: 158,
    price: 0,
    toGo: 0,
    src: "logs/Arctic_pyre_logs.webp",
    level: 47,
  },
  {
    name: "Maple pyre logs",
    exp: 175,
    price: 0,
    toGo: 0,
    src: "logs/Maple_pyre_logs.webp",
    level: 50,
  },
  {
    name: "Mahogany pyre logs",
    exp: 210,
    price: 0,
    toGo: 0,
    src: "logs/Mahogany_pyre_logs.webp",
    level: 55,
  },
  {
    name: "Yew pyre logs",
    exp: 225,
    price: 0,
    toGo: 0,
    src: "logs/Yew_pyre_logs.webp",
    level: 65,
  },
  {
    name: "Magic pyre logs",
    exp: 404.5,
    price: 0,
    toGo: 0,
    src: "logs/Magic_pyre_logs.webp",
    level: 80,
  },
  {
    name: "Redwood pyre logs",
    exp: 500,
    price: 0,
    toGo: 0,
    src: "logs/Redwood_pyre_logs.webp",
    level: 95,
  },
];

const sorted = LOGSLIST.sort((a, b) => a.level - b.level);
console.log(sorted);

export default LOGSLIST;
