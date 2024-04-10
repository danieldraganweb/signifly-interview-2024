import Airtable from "airtable";
import { TeamFields } from "../app/types";

export default  async function fetchLeaderboardData() {
  const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || "";
  const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || "";
  const base = new Airtable({ apiKey }).base(baseId);
  const table = base("Teams");

  const teams = await table.select().all() as unknown as TeamFields[];


  return teams;
}
