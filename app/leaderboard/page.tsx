"use client";

import React from "react";
import styles from "./leaderboard.module.scss";
import useTeams from "../hooks/useTeams";
// Assuming the 'Team' type is correctly imported and used

export default function Leaderboard() {
  const { teams, loading } = useTeams();

  if (loading) {
    return <div>Loading...</div>;
  }

  const sortedTeams = teams.sort((a, b) => {
    // Sort teams by total points
    return b.fields["Total points"] - a.fields["Total points"];
  });

  return (
    <div className={styles.main}>
      <h1>Leaderboard</h1>
      {sortedTeams.length > 0 ? (
        <ul className={styles.leaderboard}>
          {sortedTeams.map((team) => (
            <li key={team.id} className={styles.team}>
              <h2>{team.fields["Team Name"]}</h2>
              <p>
                Players: {team.fields["Player 1"]} and {team.fields["Player 2"]}
              </p>
              <p>Total Points: {team.fields["Total points"]}</p>
              <p>Total Matches Played: {team.fields["Total Matches Played"]}</p>
              <p>Wins: {team.fields.Wins}</p>
              <p>Losses: {team.fields.Losses}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No team data available.</p>
      )}
    </div>
  );
}
