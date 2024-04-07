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
      <h1>Match Scoreboard</h1>
      <ul className={styles.scoreboard}>
        {sortedMatches.map((match) => (
          <li key={match.id} className={styles.match}>
            <h3>{match.fields.Name}</h3>
            <div className={styles.matchDetails}>
              {/* Team A details */}
              <div className={styles.teamDetails}>
                <h2>{match.fields["Team Name (from Team A)"]}</h2>
                <div>
                  <p>P1: {match.fields["Player 1 (from Team A)"]}</p>
                  <p>P1: {match.fields["Player 2 (from Team A)"]}</p>
                </div>
              </div>
              {/* Score details */}
              <div className={styles.scoreDetails}>
                <p>
                  {match.fields["Team A Score"]} -{" "}
                  {match.fields["Team B Score"]}
                </p>
              </div>

              {/* Team B details */}
              <div className={styles.teamDetails}>
                <h2>{match.fields["Team Name (from Team B)"]}</h2>
                <div>
                  <p>P1: {match.fields["Player 1 (from Team B)"]}</p>
                  <p>P1: {match.fields["Player 2 (from Team B)"]}</p>
                </div>
              </div>
            </div>
            {/* <p>Winner: {match.fields.Winner}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
