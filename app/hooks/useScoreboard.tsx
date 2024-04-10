"use client";
import { useEffect, useState } from "react";
import { MatchFields } from "../types";
import Airtable from "airtable";

// Airtable Configuration
Airtable.configure({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || "" });
const table = Airtable.base(
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || ""
).table("Scoreboard");

// Custom Hook
export default function useScoreboard() {
  const [matches, setMatches] = useState<MatchFields[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Airtable
  const getMatches = async () => {
    setLoading(true);
    const matches = await table.select().all();
    setMatches(matches as any);
    setLoading(false);
  };

  // Fetch data when the component mounts
  useEffect(() => {
    getMatches();
  }, []);

  return { matches, loading };
}
// Path: app/Scoreboard/page.tsx
