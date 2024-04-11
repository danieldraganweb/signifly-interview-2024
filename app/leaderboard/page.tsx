
import React from "react";
import styles from "./leaderboard.module.scss";
import Image from "next/image";
import fetchLeaderboardData from "../../utils/airtable";



export default async function Leaderboard() {


  const teams = await fetchLeaderboardData();
  const sortedTeams = teams.sort(
    (a, b) => b.fields["Total points"] - a.fields["Total points"]
  );

  
  return (
    <div className={styles.leaderboardContainer}>
      <h1>Leaderboard</h1>
      <div className={styles.leaderboardImages}>
        <Image
          src="/football-winner.svg"
          alt="Leaderboard"
          width={200}
          height={200}
          priority
        />
        <Image
          src="/karate-winner.svg"
          alt="Leaderboard"
          width={100}
          height={100}
          priority
        />
      </div>
      <div className={styles.leaderboardGrid}>
        <div className={styles.gridHeader}>
          <span>#R</span>
          <span>T</span>
          <span>M. P.</span>
          <span>W</span>
          <span>L</span>
          <span>Points</span>
        </div>
        {sortedTeams.map((team, index) => (
          <div className={styles.gridRow} key={team.id}>
            <span>#{index + 1}</span>
            <span className={styles.teamName}>{team.fields["Team Name"]}</span>
            <span>{team.fields["Total Matches Played"]}</span>
            <span>{team.fields.Wins}</span>
            <span>{team.fields.Losses}</span>
            <span>{team.fields["Total points"]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
