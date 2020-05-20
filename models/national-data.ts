import DayStats from "./day-stats.ts";
import StateStats from "./state-stats.ts";
import TestedStats from "./tested-stats.ts";

export default interface NationalData {
  cases_time_series: DayStats[];
  statewise: StateStats[];
  tested: TestedStats[];
}
