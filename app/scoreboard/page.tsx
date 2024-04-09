"use client";
import React from "react";
import styles from "./scoreboard.module.scss";
import useScoreboard from "../hooks/useScoreboard";
import Image from "next/image";

export default function Scoreboard() {
  const { matches, loading } = useScoreboard();

  if (loading) {
    return <div>Loading...</div>;
  }

  const sortedMatches = matches.sort((a, b) => {
    const matchNumberA = parseInt(a.fields.Name.replace(/^\D+/g, ""), 10);
    const matchNumberB = parseInt(b.fields.Name.replace(/^\D+/g, ""), 10);
    return matchNumberA - matchNumberB;
  });

  return (
    <div className={styles.main}>
      <h1>Match Scoreboard</h1>
      <Image src="/scoreboard.svg" alt="Leaderboard" width={200} height={200} />
      <ul className={styles.scoreboard}>
        {sortedMatches.map((match) => (
          <li key={match.id} className={styles.matchCard}>
            <h3 className={styles.matchHeader}>{match.fields.Name}</h3>
            <div className={styles.teamAndScore}>
              <span className={styles.teamName}>
                {match.fields["Team Name (from Team A)"]}
              </span>
              <span className={styles.matchScore}>
                {match.fields["Team A Score"]} - {match.fields["Team B Score"]}
              </span>
              <span className={styles.teamName}>
                {match.fields["Team Name (from Team B)"]}
              </span>
            </div>
            <div className={styles.playerNames}>
              <div className={styles.playersTeamA}>
                <p>P1:{match.fields["Player 1 (from Team A)"]}</p>
                <p>P2:{match.fields["Player 2 (from Team A)"]}</p>
              </div>
              <div className={styles.playersTeamB}>
                <p>P1:{match.fields["Player 1 (from Team B)"]}</p>
                <p>P2:{match.fields["Player 2 (from Team B)"]}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
