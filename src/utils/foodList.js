const FOODLIST = [
  {
    food: "Meat",
    member: false,
    exp: 1,
    toGo: 0,
    level: 1,
    src: "/foods/Cooked_meat.webp",
  },
  {
    food: "Chicken",
    member: false,
    exp: 1,
    toGo: 0,
    level: 1,
    src: "/foods/Cooked_chicken.webp",
  },
  {
    food: "Shrimp",
    member: false,
    exp: 30,
    toGo: 0,
    level: 1,
    src: "/foods/Shrimps.webp",
  },
  {
    food: "Karambwanji",
    member: true,
    exp: 10,
    toGo: 0,
    level: 1,
    src: "/foods/Karambwanji.webp",
  },
  {
    food: "Sardine",
    member: false,
    exp: 40,
    toGo: 0,
    level: 1,
    src: "/foods/Sardine.webp",
  },
  {
    food: "Anchovy",
    member: false,
    exp: 30,
    toGo: 0,
    level: 1,
    src: "/foods/Anchovies.webp",
  },
  {
    food: "Karambwan",
    member: true,
    exp: 80,
    toGo: 0,
    level: 1,
    src: "/foods/Cooked_karambwan.webp",
  },
  {
    food: "Bread",
    member: false,
    exp: 40,
    toGo: 0,
    level: 1,
    src: "/foods/Bread.webp",
  },
  {
    food: "Herring",
    member: false,
    exp: 50,
    toGo: 0,
    level: 5,
    src: "/foods/Herring.webp",
  },
  {
    food: "Mackerel",
    member: true,
    exp: 60,
    toGo: 0,
    level: 10,
    src: "/foods/Mackerel.webp",
  },
  {
    food: "Redberry Pie",
    member: false,
    exp: 78,
    toGo: 0,
    level: 10,
    src: "/foods/Redberry_pie.webp",
  },
  {
    food: "Trout",
    member: false,
    exp: 70,
    toGo: 0,
    level: 15,
    src: "/foods/Trout.webp",
  },
  {
    food: "Cod",
    member: true,
    exp: 75,
    toGo: 0,
    level: 18,
    src: "/foods/Cod.webp",
  },
  {
    food: "Pike",
    member: false,
    exp: 80,
    toGo: 0,
    level: 20,
    src: "/foods/Pike.webp",
  },
  {
    food: "Meat Pie",
    member: false,
    exp: 110,
    toGo: 0,
    level: 20,
    src: "/foods/Meat_pie.webp",
  },
  {
    food: "Nettle Tea",
    member: true,
    exp: 52,
    toGo: 0,
    level: 20,
    src: "/foods/Nettle_tea.webp",
  },
  {
    food: "Salmon",
    member: false,
    exp: 90,
    toGo: 0,
    level: 25,
    src: "/foods/Salmon.webp",
  },
  {
    food: "Stew",
    member: false,
    exp: 117,
    toGo: 0,
    level: 25,
    src: "/foods/Salmon.webp",
  },
  {
    food: "Spicy Stew",
    member: true,
    exp: 117,
    toGo: 0,
    level: 25,
    src: "/foods/Spicy_stew.webp",
  },
  {
    food: "Mud Pie",
    member: true,
    exp: 128,
    toGo: 0,
    level: 29,
    src: "/foods/Mud_pie.webp",
  },
  {
    food: "Tuna",
    member: false,
    exp: 100,
    toGo: 0,
    level: 30,
    src: "/foods/Tuna.webp",
  },
  {
    food: "Apple Pie",
    member: true,
    exp: 130,
    toGo: 0,
    level: 30,
    src: "/foods/Apple_pie.webp",
  },
  {
    food: "Fish Cake",
    member: true,
    exp: 100,
    toGo: 0,
    level: 31,
    src: "/foods/Cooked_fishcake.webp",
  },
  {
    food: "Garden Pie",
    member: true,
    exp: 128,
    toGo: 0,
    level: 34,
    src: "/foods/Garden_pie.webp",
  },
  {
    food: "Plain Pizza",
    member: false,
    exp: 143,
    toGo: 0,
    level: 35,
    src: "/foods/Plain_pizza.webp",
  },
  {
    food: "Jug of wine",
    member: false,
    exp: 110,
    toGo: 0,
    level: 35,
    src: "/foods/Jug_of_wine.webp",
  },
  {
    food: "Lobster",
    member: false,
    exp: 120,
    toGo: 0,
    level: 40,
    src: "/foods/Lobster.webp",
  },
  {
    food: "Cake",
    member: false,
    exp: 180,
    toGo: 0,
    level: 40,
    src: "/foods/Cake.webp",
  },
  {
    food: "Bass",
    member: true,
    exp: 130,
    toGo: 0,
    level: 43,
    src: "/foods/Bass.webp",
  },
  {
    food: "Swordfish",
    member: false,
    exp: 140,
    toGo: 0,
    level: 45,
    src: "/foods/Swordfish.webp",
  },
  {
    food: "Meat Pizza",
    member: false,
    exp: 169,
    toGo: 0,
    level: 45,
    src: "/foods/Meat_pizza.webp",
  },
  {
    food: "Fish Pie",
    member: true,
    exp: 164,
    toGo: 0,
    level: 47,
    src: "/foods/Fish_pie.webp",
  },
  {
    food: "Chocolate Cake",
    member: false,
    exp: 210,
    toGo: 0,
    level: 50,
    src: "/foods/Chocolate_cake.webp",
  },
  {
    food: "Egg potato",
    member: true,
    exp: 195.5,
    toGo: 0,
    level: 51,
    src: "/foods/Egg_potato.webp",
  },
  {
    food: "Anchovy Pizza",
    member: false,
    exp: 182,
    toGo: 0,
    level: 55,
    src: "/foods/Anchovy_pizza.webp",
  },
  {
    food: "Pitta Bread",
    member: true,
    exp: 40,
    toGo: 0,
    level: 58,
    src: "/foods/Pitta_bread.webp",
  },
  {
    food: "Curry",
    member: true,
    exp: 280,
    toGo: 0,
    level: 60,
    src: "/foods/Curry.webp",
  },
  {
    food: "Monkfish",
    member: true,
    exp: 150,
    toGo: 0,
    level: 62,
    src: "/foods/Monkfish.webp",
  },
  {
    food: "Mushroom potato",
    member: true,
    exp: 270.5,
    toGo: 0,
    level: 64,
    src: "/foods/Mushroom_potato.webp",
  },
  {
    food: "Pineapple Pizza",
    member: true,
    exp: 195,
    toGo: 0,
    level: 65,
    src: "/foods/Pineapple_pizza.webp",
  },
  {
    food: "Tuna and corn",
    member: true,
    exp: 204,
    toGo: 0,
    level: 67,
    src: "/foods/Tuna_and_corn.webp",
  },
  {
    food: "Tuna potato",
    member: true,
    exp: 309.5,
    toGo: 0,
    level: 70,
    src: "/foods/Tuna_potato.webp",
  },
  {
    food: "Admiral Pie",
    member: true,
    exp: 210,
    toGo: 0,
    level: 70,
    src: "/foods/Admiral_pie.webp",
  },
  {
    food: "Shark",
    member: true,
    exp: 210,
    toGo: 0,
    level: 80,
    src: "/foods/Shark.webp",
  },
  {
    food: "Sea Turtle",
    member: true,
    exp: 212,
    toGo: 0,
    level: 82,
    src: "/foods/Sea_turtle.webp",
  },
  {
    food: "Wild Pie",
    member: true,
    exp: 240,
    toGo: 0,
    level: 85,
    src: "/foods/Wild_pie.webp",
  },
  {
    food: "Dark crab",
    member: true,
    exp: 215,
    toGo: 0,
    level: 90,
    src: "/foods/Dark_crab.webp",
  },
  {
    food: "Manta Ray",
    member: true,
    exp: 216,
    toGo: 0,
    level: 91,
    src: "/foods/Manta_ray.webp",
  },
  {
    food: "Summer Pie",
    member: true,
    exp: 260,
    toGo: 0,
    level: 95,
    src: "/foods/Summer_pie.webp",
  },
];

export default FOODLIST;
