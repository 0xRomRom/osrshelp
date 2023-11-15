const HERBSITEMLIST = [
  {
    // Grimy guam leaf
    "Guam leaf": 1,
  },
  {
    // Grimy marrentill
    Marrentill: 1,
  },
  {
    // Grimy tarromin
    Tarromin: 1,
  },
  {
    // Grimy harralander
    Harralander: 1,
  },
  {
    // Grimy ranarr weed
    "Ranarr weed": 1,
  },
  {
    // Grimy toadflax
    Toadflax: 1,
  },
  {
    // Grimy irit leaf
    "Irit leaf": 1,
  },
  {
    // Grimy avantoe
    Avantoe: 1,
  },
  {
    // Grimy kwuarm
    Kwuarm: 1,
  },
  {
    // Grimy snapdragon
    Snapdragon: 1,
  },
  {
    // Grimy cadantine
    Cadantine: 1,
  },
  {
    // Grimy lantadyme
    Lantadyme: 1,
  },
  {
    // Grimy dwarf weed
    "Dwarf weed": 1,
  },
  {
    // Grimy torstol
    Torstol: 1,
  },

  // Attack potion
  { "Vial of water": 1, "Guam leaf": 1, "Eye of newt": 1 },

  // Antipoison
  { "Vial of water": 1, Marrentill: 1, "Unicorn horn dust": 1 },

  // Strength potion
  { "Vial of water": 1, Tarromin: 1, "Limpwurt root": 1 },

  // Serum 207
  { "Vial of water": 1, Tarromin: 1, Ashes: 1 },

  // Guthix rest tea
  { "Cup of hot water": 1, Harralander: 1, "Guam leaf": 2, Marrentill: 1 },

  // Compost potion
  { "Vial of water": 1, Harralander: 1, "Volcanic ash": 1 },

  // Restore potion
  { "Vial of water": 1, Harralander: 1, "Red spiders' eggs": 1 },

  // Guthix balance
  { "Restore potion(3)": 1, Garlic: 1, "Silver dust": 1 },

  // Energy potion
  { "Vial of water": 1, Harralander: 1, "Chocolate dust": 1 },

  // Defence potion
  { "Vial of water": 1, "Ranarr weed": 1, "White berries": 1 },

  // Agility potion
  { "Vial of water": 1, Toadflax: 1, "Toad's legs": 1 },

  // Combat potion
  { "Vial of water": 1, Harralander: 1, "Goat horn dust": 1 },

  // Prayer potion
  { "Vial of water": 1, "Ranarr weed": 1, "Snape grass": 1 },

  // Super attack
  { "Vial of water": 1, "Irit leaf": 1, "Eye of newt": 1 },

  // Superantipoison
  { "Vial of water": 1, "Irit leaf": 1, "Unicorn horn dust": 1 },

  // Fishing potion
  { "Vial of water": 1, Avantoe: 1, "Snape grass": 1 },

  // Super energy
  { "Vial of water": 1, Avantoe: 1, "Mort myre fungus": 1 },

  // Hunter potion
  { "Vial of water": 1, Avantoe: 1, "Kebbit teeth dust": 1 },

  // Super strength
  { "Vial of water": 1, Kwuarm: 1, "Limpwurt root": 1 },

  // Weapon poison
  { "Vial of water": 1, Kwuarm: 1, "Dragon scale dust": 1 },

  // Super restore
  { "Vial of water": 1, Snapdragon: 1, "Red spiders' eggs": 1 },

  // Sanfew serum
  {
    "Super restore(3)": 1,
    "Unicorn horn dust": 1,
    "Nail beast nails": 1,
  },

  // Super defence
  { "Vial of water": 1, Cadantine: 1, "White berries": 1 },

  // Antidote+
  { "Coconut milk": 1, Toadflax: 1, "Yew roots": 1 },

  // Antifire potion
  { "Vial of water": 1, Lantadyme: 1, "Dragon scale dust": 1 },

  // Divine super attack potion
  { "Super attack(3)": 1 },

  // Divine super defence potion
  { "Super defence(3)": 1 },

  // Divine super strength potion
  { "Super strength(3)": 1 },

  // Ranging potion
  { "Vial of water": 1, "Dwarf weed": 1, "Wine of zamorak": 1 },

  // Weapon poison+
  { "Coconut milk": 1, "Cactus spine": 1, "Red spiders' eggs": 1 },

  // Divine ranging potion
  { "Ranging potion(3)": 1 },

  // Magic potion
  { "Vial of water": 1, Lantadyme: 1, "Potato cactus": 1 },

  // Stamina potion
  { "Super energy(3)": 1, "Amylase crystal": 1 },

  // Zamorak brew
  { "Vial of water": 1, Torstol: 1, Jangerberries: 1 },

  // Divine magic potion
  { "Magic potion(3)": 1 },

  // Antidote++
  { "Coconut milk": 1, "Irit leaf": 1, "Magic roots": 1 },

  // Bastion potion
  { "Vial of blood": 1, Cadantine: 1, "Wine of zamorak": 1 },

  // Battlemage potion
  { "Vial of blood": 1, Cadantine: 1, "Potato cactus": 1 },

  // Saradomin brew
  { "Vial of water": 1, Toadflax: 1, "Crushed nest": 1 },

  // Weapon poison++
  { "Coconut milk": 1, "Poison ivy berries": 1 },

  // Extended antifire
  { "Antifire potion(3)": 1, "Lava scale shard": 1 },

  // Ancient brew
  { "Vial of water": 1, "Dwarf weed": 1, "Nihil dust": 1 },

  // Divine bastion potion
  { "Bastion potion(3)": 1 },

  // Divine battlemage potion
  { "Battlemage potion(3)": 1 },

  // Anti-venom
  { "Antidote++(3)": 1, "Zulrah's scales": 1 },

  // Menaphite remedy
  { "Vial of water": 1, "Dwarf weed": 1, "Lily of the sands": 1 },

  // Super combat potion
  {
    "Super attack(3)": 1,
    "Super strength(3)": 1,
    "Super defence(3)": 1,
    Torstol: 1,
  },

  // Forgotten brew
  { "Ancient brew(3)": 1, "Ancient essence": 1 },

  // Super antifire potion
  { "Antifire potion(3)": 1, "Crushed superior dragon bones": 1 },

  // Anti-venom+
  { "Anti-venom(3)": 1, Torstol: 1 },

  // Divine super combat potion
  { "Super combat potion(3)": 1 },

  // Extended super antifire
  { "Super antifire potion(3)": 1, "Lava scale shard": 1 },
];

export default HERBSITEMLIST;
