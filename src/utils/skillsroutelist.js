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
];

export default SKILLSROUTELIST;
