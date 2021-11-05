import CustomAppBar from "../components/CustomAppBar"
import CustomInfoBar from "../components/CustomInfoBar"
import FlagPaper from "../components/FlagPaper"
import ProtectDataPaper from "../components/ProtectDataPaper"
import DataPaper from "../components/DataPaper"
import RestrictionsPaper from "../components/RestrictionsPaper"
import SafetyPaper from "../components/SafetyPaper"

export default function Home() {
  return <div>
    <CustomInfoBar/>
    <CustomAppBar/>
    <FlagPaper/>
    <ProtectDataPaper/>
    <DataPaper/>
    <SafetyPaper/>
    <RestrictionsPaper/>
  </div>;
}