"use client";
import { useEffect, useState } from "react";
import { TeamFields } from "../types";
import Airtable from "airtable";
import fetchLeaderboardData from "../../utils/airtable";


// Custom Hook
export default function useTeams() {
  const [teams, setTeams] = useState<TeamFields[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch data from Airtable
  const getTeams = async () => {
    setLoading(true);
    const teams = await fetchLeaderboardData();
    setTeams(teams as any);
    setLoading(false);
    // console.log(teams);
  };

  // Fetch data when the component mounts
  useEffect(() => {
    getTeams();
  }, []);

  return { teams, loading };
}
// Path: app/Scoreboard/page.tsx
