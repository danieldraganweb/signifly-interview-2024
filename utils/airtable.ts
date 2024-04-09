import Airtable from "airtable";

export async function fetchLeaderboardData() {
  const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || "";
  const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || "";
  const base = new Airtable({ apiKey }).base(baseId);
  const table = base("Teams");

  const records = await table.select().all();
  const teams = records.map((record) => ({
    id: record.id,
    ...record.fields,
  }));

  return teams;
}
