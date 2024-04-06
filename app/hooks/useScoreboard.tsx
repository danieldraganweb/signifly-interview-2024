"use client";
import { useEffect, useState } from "react";
import { Team } from "../types";
import Airtable from "airtable";

// Airtable Configuration

Airtable.configure({ apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY || "" });
const table = Airtable.base(
  process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID_TEAMS_TABLE || ""
).table("Teams");

// Custom Hook
export default function useTeams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Airtable

  const getTeams = async () => {
    setLoading(true);
    const teams = await table.select().all();
    setTeams(teams as any);
    setLoading(false);
    console.log(teams);
  };

  // Fetch data when the component mounts

  useEffect(() => {
    getTeams();
  }, []);

  return { teams, loading };
}

// Path: app/Scoreboard/page.tsx
