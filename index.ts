import NationalData from "./models/national-data.ts";
import DayStats from "./models/day-stats.ts";
import { getDateString } from "./util.ts";

const API_URL = "https://api.covid19india.org/data.json";

main();

/**
 * The main function.
 * Entry point of the app.
 */
async function main() {
  let data: NationalData = await getNationalData();
  const yesterdaysData = getYesterdaysData(data);
  const totalConfirmed = yesterdaysData.totalconfirmed;
  const totalRecovered = yesterdaysData.totalrecovered;

  console.log(
    `${totalRecovered} out of ${totalConfirmed} people are healthy again 😄`,
  );
}

/**
 * Fetches national-level COVID 19 data from the API and returns it.
 */
async function getNationalData(): Promise<any> {
  const res = await fetch(API_URL);
  const data = await res.json();
  return data;
}

/**
 * Returns one day prior's data from given national data.
 */
export function getYesterdaysData(data: NationalData): DayStats {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const yesterdayString = getDateString(date) + " "; // space added because of bug in source data
  const yesterdaysStats =
    data.cases_time_series?.filter((s) => s.date === yesterdayString)[0];
  return yesterdaysStats;
}
