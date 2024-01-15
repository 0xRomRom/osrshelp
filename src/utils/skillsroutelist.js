import AttackCalculator from "../../src/components/main/skills/programs/attack/AttackCalculator";
import StrenthCalculator from "../../src/components/main/skills/programs/strength/StrengthCalculator";
import DefenceCalculator from "../../src/components/main/skills/programs/defence/DefenceCalculator";
import HitpointsCalculator from "../../src/components/main/skills/programs/hitpoints/HitpointsCalculator";
import RangedCalculator from "../../src/components/main/skills/programs/ranged/RangedCalculator";
import PrayerCalculator from "../../src/components/main/skills/programs/prayer/PrayerCalculator";
import MagicCalculator from "../../src/components/main/skills/programs/magic/MagicCalculator";
import CookingCalculator from "../../src/components/main/skills/programs/cooking/CookingCalculator";
import WoodcuttingCalculator from "../../src/components/main/skills/programs/woodcutting/WoodcuttingCalculator";
import FletchingCalculator from "../../src/components/main/skills/programs/fletching/FletchingCalculator";
import FishingCalculator from "../../src/components/main/skills/programs/fishing/FishingCalculator";
import FiremakingCalculator from "../../src/components/main/skills/programs/firemaking/FiremakingCalculator";
import CraftingCalculator from "../../src/components/main/skills/programs/crafting/CraftingCalculator";
import SmithingCalculator from "../../src/components/main/skills/programs/smithing/SmithingCalculator";
import MiningCalculator from "../../src/components/main/skills/programs/mining/MiningCalculator";
import HerbloreCalculator from "../../src/components/main/skills/programs/herblore/HerbloreCalculator";
import AgilityCalculator from "../../src/components/main/skills/programs/agility/AgilityCalculator";
import ThievingCalculator from "../../src/components/main/skills/programs/thieving/ThievingCalculator";
import FarmingCalculator from "../../src/components/main/skills/programs/farming/FarmingCalculator";
import RunecraftCalculator from "../../src/components/main/skills/programs/runecraft/RunecraftCalculator";
import HunterCalculator from "../../src/components/main/skills/programs/hunter/HunterCalculator";
import ConstructionCalculator from "../../src/components/main/skills/programs/construction/ConstructionCalculator";

const SKILLSROUTELIST = [
  { name: "Attack", path: "/attack", component: AttackCalculator },
  { name: "Strength", path: "/strength", component: StrenthCalculator },
  { name: "Defence", path: "/defence", component: DefenceCalculator },
  { name: "Hitpoints", path: "/hitpoints", component: HitpointsCalculator },
  { name: "Ranged", path: "/ranged", component: RangedCalculator },
  { name: "Prayer", path: "/prayer", component: PrayerCalculator },
  { name: "Magic", path: "/magic", component: MagicCalculator },
  { name: "Cooking", path: "/cooking", component: CookingCalculator },
  {
    name: "Woodcutting",
    path: "/woodcutting",
    component: WoodcuttingCalculator,
  },
  {
    name: "Fletching",
    path: "/fletching",
    component: FletchingCalculator,
  },
  {
    name: "Fishing",
    path: "/fishing",
    component: FishingCalculator,
  },
  {
    name: "Firemaking",
    path: "/firemaking",
    component: FiremakingCalculator,
  },
  {
    name: "Crafting",
    path: "/crafting",
    component: CraftingCalculator,
  },
  {
    name: "Smithing",
    path: "/smithing",
    component: SmithingCalculator,
  },
  {
    name: "Mining",
    path: "/mining",
    component: MiningCalculator,
  },
  {
    name: "Herblore",
    path: "/herblore",
    component: HerbloreCalculator,
  },
  {
    name: "Agility",
    path: "/agility",
    component: AgilityCalculator,
  },
  {
    name: "Thieving",
    path: "/thieving",
    component: ThievingCalculator,
  },
  {
    name: "Farming",
    path: "/farming",
    component: FarmingCalculator,
  },
  {
    name: "Runecraft",
    path: "/runecraft",
    component: RunecraftCalculator,
  },
  {
    name: "Hunter",
    path: "/hunter",
    component: HunterCalculator,
  },
  {
    name: "Construction",
    path: "/construction",
    component: ConstructionCalculator,
  },
];

export default SKILLSROUTELIST;
