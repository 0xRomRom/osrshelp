const RUNES = [
  {
    name: "Air rune",
    src: "https://oldschool.runescape.wiki/images/Air_rune.png?248b4",
  },
  {
    name: "Mind rune",
    src: "https://oldschool.runescape.wiki/images/Mind_rune.png?92ebd",
  },
  {
    name: "Water rune",
    src: "https://oldschool.runescape.wiki/images/Water_rune.png?75a26",
  },
  {
    name: "Earth rune",
    src: "https://oldschool.runescape.wiki/images/Earth_rune.png?0b998",
  },
  {
    name: "Fire rune",
    src: "https://oldschool.runescape.wiki/images/Fire_rune.png?0b998",
  },
  {
    name: "Body rune",
    src: "https://oldschool.runescape.wiki/images/Body_rune.png?0b998",
  },
  {
    name: "Cosmic rune",
    src: "https://oldschool.runescape.wiki/images/Cosmic_rune.png?0b998",
  },
  {
    name: "Chaos rune",
    src: "https://oldschool.runescape.wiki/images/Chaos_rune.png?0b998",
  },
  {
    name: "Nature rune",
    src: "https://oldschool.runescape.wiki/images/Nature_rune.png?0b998",
  },
  {
    name: "Law rune",
    src: "https://oldschool.runescape.wiki/images/Law_rune.png?0b998",
  },
  {
    name: "Death rune",
    src: "https://oldschool.runescape.wiki/images/Death_rune.png?0b998",
  },
  {
    name: "Astral rune",
    src: "https://oldschool.runescape.wiki/images/Astral_rune.png?0b998",
  },
  {
    name: "Blood rune",
    src: "https://oldschool.runescape.wiki/images/Blood_rune.png?0b998",
  },
  {
    name: "Soul rune",
    src: "https://oldschool.runescape.wiki/images/Soul_rune.png?0b998",
  },
  {
    name: "Wrath rune",
    src: "https://oldschool.runescape.wiki/images/Wrath_rune.png?0b998",
  },
  {
    name: "Mist rune",
    src: "https://oldschool.runescape.wiki/images/Mist_rune.png?0b998",
  },
  {
    name: "Dust rune",
    src: "https://oldschool.runescape.wiki/images/Dust_rune.png?0b998",
  },
  {
    name: "Mud rune",
    src: "https://oldschool.runescape.wiki/images/Mud_rune.png?0b998",
  },
  {
    name: "Smoke rune",
    src: "https://oldschool.runescape.wiki/images/Smoke_rune.png?0b998",
  },
  {
    name: "Steam rune",
    src: "https://oldschool.runescape.wiki/images/Steam_rune.png?0b998",
  },
  {
    name: "Lava rune",
    src: "https://oldschool.runescape.wiki/images/Lava_rune.png?0b998",
  },
  {
    name: "Varrock teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Varrock_teleport_%28tablet%29.png?35dd5",
  },
  {
    name: "Lumbridge teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Lumbridge_teleport_%28tablet%29.png?35dd5",
  },
  {
    name: "Falador teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Falador_teleport_%28tablet%29.png?35dd5",
  },
  {
    name: "Camelot teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Camelot_teleport_%28tablet%29.png?35dd5",
  },
  {
    name: "Kourend castle teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Kourend_castle_teleport_%28tablet%29.png?35dd5",
  },
  {
    name: "Ardougne teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Ardougne_teleport_%28tablet%29.png?35dd5",
  },
  {
    name: "Watchtower teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Watchtower_teleport_%28tablet%29.png?35dd5",
  },
  {
    name: "Teleport to house (tablet)",
    src: "https://oldschool.runescape.wiki/images/Teleport_to_house_%28tablet%29.png?b3f03",
  },
  {
    name: "Rimmington teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Rimmington_teleport.png?4e1b1",
  },
  {
    name: "Taverley teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Taverley_teleport.png?4e1b1",
  },
  {
    name: "Pollnivneach teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Pollnivneach_teleport.png?4e1b1",
  },
  {
    name: "Hosidius teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Hosidius_teleport.png?4e1b1",
  },
  {
    name: "Relekka teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Rellekka_teleport.png?b11fe",
  },
  {
    name: "Brimhaven teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Brimhaven_teleport.png?4e1b1",
  },
  {
    name: "Yanille teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Yanille_teleport.png?4e1b1",
  },
  {
    name: "Prifddinas teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Prifddinas_teleport.png?4e1b1",
  },
  {
    name: "Trollheim teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Trollheim_teleport_%28tablet%29.png?5c5a6",
  },
  {
    name: "Arceuus library teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Arceuus_library_teleport_%28tablet%29.png?1f712",
  },
  {
    name: "Draynor manor teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Draynor_manor_teleport_%28tablet%29.png?5eb13",
  },
  {
    name: "Battlefront teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Battlefront_teleport_%28tablet%29.png?3be33",
  },
  {
    name: "Mind altar teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Mind_altar_teleport_%28tablet%29.png?ccf02",
  },
  {
    name: "Salve graveyard teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Salve_graveyard_teleport_%28tablet%29.png?a8fa6",
  },
  {
    name: "Fenkenstrain's castle teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Fenkenstrain%27s_castle_teleport_%28tablet%29.png?97fe8",
  },
  {
    name: "West ardougne teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/West_ardougne_teleport_%28tablet%29.png?07b10",
  },
  {
    name: "Harmony island teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Harmony_island_teleport_%28tablet%29.png?bfea5",
  },
  {
    name: "Cemetery teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Cemetery_teleport_%28tablet%29.png?273ca",
  },
  {
    name: "Barrows teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Barrows_teleport_%28tablet%29.png?273ca",
  },
  {
    name: "Ape atoll teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Ape_atoll_teleport_%28tablet%29.png?1f712",
  },
  {
    name: "Paddewwa teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Paddewwa_teleport_%28tablet%29.png?f976b",
  },
  {
    name: "Senntisten teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Senntisten_teleport_%28tablet%29.png?f976b",
  },
  {
    name: "Kharyrll teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Kharyrll_teleport_%28tablet%29.png?f976b",
  },
  {
    name: "Lassar teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Lassar_teleport_%28tablet%29.png?f976b",
  },
  {
    name: "Dareeyak teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Dareeyak_teleport_%28tablet%29.png?f976b",
  },
  {
    name: "Carrallanger teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Carrallanger_teleport_%28tablet%29.png?f976b",
  },
  {
    name: "Annakarl teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Annakarl_teleport_%28tablet%29.png?f976b",
  },
  {
    name: "Ghorrock teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Ghorrock_teleport_%28tablet%29.png?f976b",
  },
  {
    name: "Moonclan teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Moonclan_teleport_%28tablet%29.png?7027d",
  },
  {
    name: "Ourania teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Ourania_teleport_%28tablet%29.png?7027d",
  },
  {
    name: "Waterbirth teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Waterbirth_teleport_%28tablet%29.png?7027d",
  },
  {
    name: "Barbarian teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Barbarian_teleport_%28tablet%29.png?7027d",
  },
  {
    name: "Khazard teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Khazard_teleport_%28tablet%29.png?7027d",
  },
  {
    name: "Fishing guild teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Fishing_guild_teleport_%28tablet%29.png?7027d",
  },
  {
    name: "Catherby teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Catherby_teleport_%28tablet%29.png?7027d",
  },
  {
    name: "Ice plateau teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Ice_plateau_teleport_%28tablet%29.png?7027d",
  },
  {
    name: "Target teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Target_teleport.png?c1b34",
  },
  {
    name: "Wilderness crabs teleport (tablet)",
    src: "https://oldschool.runescape.wiki/images/Wilderness_crabs_teleport.png?b56cf",
  },
];

export default RUNES;
