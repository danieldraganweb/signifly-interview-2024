"use client";
import React from "react";
import styles from "./scoreboard.module.scss";
import useScoreboard from "../hooks/useScoreboard"; // Ensure this is the correct path
// import { MatchFields, MatchRecord, ScoreboardResponse } from "../types"; // Import the necessary types

export default function Scoreboard() {
  const { matches, loading } = useScoreboard(); // Adjusted to match the hook's return structure

  if (loading) {
    return <div>Loading...</div>;
  }
  const sortedMatches = matches.sort((a, b) => {
    // Extract numbers from the match names
    const matchNumberA = parseInt(a.fields.Name.replace(/^\D+/g, ""), 10);
    const matchNumberB = parseInt(b.fields.Name.replace(/^\D+/g, ""), 10);

    return matchNumberA - matchNumberB;
  });
  // Adjusted to display match information instead
  return (
    <div className={styles.main}>
      <h1>Scoreboard</h1>
      {sortedMatches.length > 0 ? (
        <ul className={styles.scoreboard}>
          {sortedMatches.map((match) => (
            <li key={match.id} className={styles.match}>
              <h2>{match.fields.Name}</h2>
              <p>Team A: {match.fields["Team Name (from Team A)"]}</p>
              <p>Player One: {match.fields["Player 1 (from Team A)"]}</p>
              <p>Player Two: {match.fields["Player 2 (from Team A)"]}</p>
              <p>Score: {match.fields["Team A Score"]}</p>
              <p>Team B: {match.fields["Team Name (from Team B)"]}</p>
              <p>Player One: {match.fields["Player 1 (from Team B)"]}</p>
              <p>Player Two: {match.fields["Player 2 (from Team B)"]}</p>
              <p>Score: {match.fields["Team B Score"]}</p>
              <p>Winner: {match.fields.Winner}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No match data available.</p>
      )}
    </div>
  );
}
