import CustomAppBar from "../components/CustomAppBar"
import CustomInfoBar from "../components/CustomInfoBar"
import FlagPaper from "../components/papers/FlagPaper"
import ProtectDataPaper from "../components/papers/ProtectDataPaper"
import DataPaper from "../components/papers/DataPaper"
import RestrictionsPaper from "../components/papers/RestrictionsPaper"
import SafetyPaper from "../components/papers/SafetyPaper"
import PricesPaper from "../components/papers/PricesPaper"

export default function Home() {
  return <div>
    <CustomInfoBar/>
    <CustomAppBar/>
    <FlagPaper/>
    <ProtectDataPaper/>
    <DataPaper/>
    <SafetyPaper/>
    <RestrictionsPaper/>
    <PricesPaper/>
  </div>;
}