const POTIONS = [
  {
    name: "Saradomin brew (1)",
    src: "https://oldschool.runescape.wiki/images/Saradomin_brew%281%29.png?c4e91",
  },
  {
    name: "Saradomin brew (2)",
    src: "https://oldschool.runescape.wiki/images/Saradomin_brew%282%29.png?c4e91",
  },
  {
    name: "Saradomin brew (3)",
    src: "https://oldschool.runescape.wiki/images/Saradomin_brew%283%29.png?11815",
  },
  {
    name: "Saradomin brew (4)",
    src: "https://oldschool.runescape.wiki/images/Saradomin_brew%284%29.png?c82f9",
  },
  {
    name: "Super restore (1)",
    src: "https://oldschool.runescape.wiki/images/Super_restore%281%29.png?c4e91",
  },
  {
    name: "Super restore (2)",
    src: "https://oldschool.runescape.wiki/images/Super_restore%282%29.png?c4e91",
  },
  {
    name: "Super restore (3)",
    src: "https://oldschool.runescape.wiki/images/Super_restore%283%29.png?11815",
  },
  {
    name: "Super restore (4)",
    src: "https://oldschool.runescape.wiki/images/Super_restore%284%29.png?c82f9",
  },
  {
    name: "Prayer potion (1)",
    src: "https://oldschool.runescape.wiki/images/Prayer_potion%281%29.png?c4e91",
  },
  {
    name: "Prayer potion (2)",
    src: "https://oldschool.runescape.wiki/images/Prayer_potion%282%29.png?c4e91",
  },
  {
    name: "Prayer potion (3)",
    src: "https://oldschool.runescape.wiki/images/Prayer_potion%283%29.png?11815",
  },
  {
    name: "Prayer potion (4)",
    src: "https://oldschool.runescape.wiki/images/Prayer_potion%284%29.png?c82f9",
  },
  {
    name: "Stamina potion (1)",
    src: "https://oldschool.runescape.wiki/images/Stamina_potion%281%29.png?c4e91",
  },
  {
    name: "Stamina potion (2)",
    src: "https://oldschool.runescape.wiki/images/Stamina_potion%282%29.png?c4e91",
  },
  {
    name: "Stamina potion (3)",
    src: "https://oldschool.runescape.wiki/images/Stamina_potion%283%29.png?11815",
  },
  {
    name: "Stamina potion (4)",
    src: "https://oldschool.runescape.wiki/images/Stamina_potion%284%29.png?c82f9",
  },
  {
    name: "Energy potion (1)",
    src: "https://oldschool.runescape.wiki/images/Energy_potion%281%29.png?c4e91",
  },
  {
    name: "Energy potion (2)",
    src: "https://oldschool.runescape.wiki/images/Energy_potion%282%29.png?c4e91",
  },
  {
    name: "Energy potion (3)",
    src: "https://oldschool.runescape.wiki/images/Energy_potion%283%29.png?11815",
  },
  {
    name: "Energy potion (4)",
    src: "https://oldschool.runescape.wiki/images/Energy_potion%284%29.png?c82f9",
  },
  {
    name: "Anti-venom+ (1)",
    src: "https://oldschool.runescape.wiki/images/Anti-venom%2B%281%29.png?38864",
  },
  {
    name: "Anti-venom+ (2)",
    src: "https://oldschool.runescape.wiki/images/Anti-venom%2B%282%29.png?38864",
  },
  {
    name: "Anti-venom+ (3)",
    src: "https://oldschool.runescape.wiki/images/Anti-venom%2B%283%29.png?38864",
  },
  {
    name: "Anti-venom+ (4)",
    src: "https://oldschool.runescape.wiki/images/Anti-venom%2B%284%29.png?38864",
  },
  {
    name: "Extended super antifire potion (1)",
    src: "https://oldschool.runescape.wiki/images/Extended_super_antifire%281%29.png?97fe8",
  },
  {
    name: "Extended super antifire potion (2)",
    src: "https://oldschool.runescape.wiki/images/Extended_super_antifire%282%29.png?97fe8",
  },
  {
    name: "Extended super antifire potion (3)",
    src: "https://oldschool.runescape.wiki/images/Extended_super_antifire%283%29.png?97fe8",
  },
  {
    name: "Extended super antifire potion (4)",
    src: "https://oldschool.runescape.wiki/images/Extended_super_antifire%284%29.png?97fe8",
  },
  {
    name: "Super combat potion (1)",
    src: "https://oldschool.runescape.wiki/images/Super_combat_potion%281%29.png?c4e91",
  },
  {
    name: "Super combat potion (2)",
    src: "https://oldschool.runescape.wiki/images/Super_combat_potion%282%29.png?c4e91",
  },
  {
    name: "Super combat potion (3)",
    src: "https://oldschool.runescape.wiki/images/Super_combat_potion%283%29.png?11815",
  },
  {
    name: "Super combat potion (4)",
    src: "https://oldschool.runescape.wiki/images/Super_combat_potion%284%29.png?c82f9",
  },
  {
    name: "Bastion potion (1)",
    src: "https://oldschool.runescape.wiki/images/Bastion_potion%281%29.png?c4e91",
  },
  {
    name: "Bastion potion (2)",
    src: "https://oldschool.runescape.wiki/images/Bastion_potion%282%29.png?c4e91",
  },
  {
    name: "Bastion potion (3)",
    src: "https://oldschool.runescape.wiki/images/Bastion_potion%283%29.png?11815",
  },
  {
    name: "Bastion potion (4)",
    src: "https://oldschool.runescape.wiki/images/Bastion_potion%284%29.png?c82f9",
  },
  {
    name: "Super attack potion (1)",
    src: "https://oldschool.runescape.wiki/images/Super_attack%281%29.png?9074d",
  },
  {
    name: "Super attack potion (2)",
    src: "https://oldschool.runescape.wiki/images/Super_attack%282%29.png?9074d",
  },
  {
    name: "Super attack potion (3)",
    src: "https://oldschool.runescape.wiki/images/Super_attack%283%29.png?9074d",
  },
  {
    name: "Super attack potion (4)",
    src: "https://oldschool.runescape.wiki/images/Super_attack%284%29.png?9074d",
  },
  {
    name: "Super strength potion (1)",
    src: "https://oldschool.runescape.wiki/images/Super_strength%281%29.png?9074d",
  },
  {
    name: "Super strength potion (2)",
    src: "https://oldschool.runescape.wiki/images/Super_strength%282%29.png?9074d",
  },
  {
    name: "Super strength potion (3)",
    src: "https://oldschool.runescape.wiki/images/Super_strength%283%29.png?9074d",
  },
  {
    name: "Super strength potion (4)",
    src: "https://oldschool.runescape.wiki/images/Super_strength%284%29.png?9074d",
  },
  {
    name: "Super defence potion (1)",
    src: "https://oldschool.runescape.wiki/images/Super_defence%281%29.png?9074d",
  },
  {
    name: "Super defence potion (2)",
    src: "https://oldschool.runescape.wiki/images/Super_defence%282%29.png?9074d",
  },
  {
    name: "Super defence potion (3)",
    src: "https://oldschool.runescape.wiki/images/Super_defence%283%29.png?9074d",
  },
  {
    name: "Super defence potion (4)",
    src: "https://oldschool.runescape.wiki/images/Super_defence%284%29.png?9074d",
  },
  {
    name: "Divine ranging potion (1)",
    src: "https://oldschool.runescape.wiki/images/Divine_ranging_potion%281%29.png?c4e91",
  },
  {
    name: "Divine ranging potion (2)",
    src: "https://oldschool.runescape.wiki/images/Divine_ranging_potion%282%29.png?c4e91",
  },
  {
    name: "Divine ranging potion (3)",
    src: "https://oldschool.runescape.wiki/images/Divine_ranging_potion%283%29.png?11815",
  },
  {
    name: "Divine ranging potion (4)",
    src: "https://oldschool.runescape.wiki/images/Divine_ranging_potion%284%29.png?c82f9",
  },
  {
    name: "Divine battlemage potion (1)",
    src: "https://oldschool.runescape.wiki/images/Divine_battlemage_potion%281%29.png?c4e91",
  },
  {
    name: "Divine battlemage potion (2)",
    src: "https://oldschool.runescape.wiki/images/Divine_battlemage_potion%282%29.png?c4e91",
  },
  {
    name: "Divine battlemage potion (3)",
    src: "https://oldschool.runescape.wiki/images/Divine_battlemage_potion%283%29.png?11815",
  },
  {
    name: "Divine battlemage potion (4)",
    src: "https://oldschool.runescape.wiki/images/Divine_battlemage_potion%284%29.png?c82f9",
  },
  {
    name: "Divine bastion potion (1)",
    src: "https://oldschool.runescape.wiki/images/Divine_bastion_potion%281%29.png?c4e91",
  },
  {
    name: "Divine bastion potion (2)",
    src: "https://oldschool.runescape.wiki/images/Divine_bastion_potion%282%29.png?c4e91",
  },
  {
    name: "Divine bastion potion (3)",
    src: "https://oldschool.runescape.wiki/images/Divine_bastion_potion%283%29.png?11815",
  },
  {
    name: "Divine bastion potion (4)",
    src: "https://oldschool.runescape.wiki/images/Divine_bastion_potion%284%29.png?c82f9",
  },

  {
    name: "Divine super combat potion (1)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_combat_potion%281%29.png?c4e91",
  },
  {
    name: "Divine super combat potion (2)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_combat_potion%282%29.png?c4e91",
  },
  {
    name: "Divine super combat potion (3)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_combat_potion%283%29.png?11815",
  },
  {
    name: "Divine super combat potion (4)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_combat_potion%284%29.png?c82f9",
  },
  {
    name: "Divine magic potion (1)",
    src: "https://oldschool.runescape.wiki/images/Divine_magic_potion%281%29.png?c4e91",
  },
  {
    name: "Divine magic potion (2)",
    src: "https://oldschool.runescape.wiki/images/Divine_magic_potion%282%29.png?c4e91",
  },
  {
    name: "Divine magic potion (3)",
    src: "https://oldschool.runescape.wiki/images/Divine_magic_potion%283%29.png?11815",
  },
  {
    name: "Divine magic potion (4)",
    src: "https://oldschool.runescape.wiki/images/Divine_magic_potion%284%29.png?c82f9",
  },
  {
    name: "Divine super strength potion (1)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_strength_potion%281%29.png?c4e91",
  },
  {
    name: "Divine super strength potion (2)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_strength_potion%282%29.png?c4e91",
  },
  {
    name: "Divine super strength potion (3)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_strength_potion%283%29.png?11815",
  },
  {
    name: "Divine super strength potion (4)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_strength_potion%284%29.png?c82f9",
  },
  {
    name: "Divine super defence potion (1)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_defence_potion%281%29.png?c4e91",
  },
  {
    name: "Divine super defence potion (2)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_defence_potion%282%29.png?c4e91",
  },
  {
    name: "Divine super defence potion (3)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_defence_potion%283%29.png?11815",
  },
  {
    name: "Divine super defence potion (4)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_defence_potion%284%29.png?c82f9",
  },
  {
    name: "Divine super attack potion (1)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_attack_potion%281%29.png?c4e91",
  },
  {
    name: "Divine super attack potion (2)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_attack_potion%282%29.png?c4e91",
  },
  {
    name: "Divine super attack potion (3)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_attack_potion%283%29.png?11815",
  },
  {
    name: "Divine super attack potion (4)",
    src: "https://oldschool.runescape.wiki/images/Divine_super_attack_potion%284%29.png?c82f9",
  },
  {
    name: "Antidote++ (1)",
    src: "https://oldschool.runescape.wiki/images/Antidote%2B%2B%281%29.png?78f79",
  },
  {
    name: "Antidote++ (2)",
    src: "https://oldschool.runescape.wiki/images/Antidote%2B%2B%282%29.png?78f79",
  },
  {
    name: "Antidote++ (3)",
    src: "https://oldschool.runescape.wiki/images/Antidote%2B%2B%283%29.png?78f79",
  },
  {
    name: "Antidote++ (4)",
    src: "https://oldschool.runescape.wiki/images/Antidote%2B%2B%284%29.png?78f79",
  },
];

export default POTIONS;
