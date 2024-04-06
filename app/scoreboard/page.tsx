"use client";

import React from "react";
import styles from "./scoreboard.module.scss";
import useTeams from "../hooks/useTeams";
// Assuming the 'Team' type is correctly imported and used

const Scoreboard = () => {
  const { teams, loading } = useTeams();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Scoreboard</h1>
      <div className={styles.header}>
        <span>Team Name</span>
        {/* <span>Wins</span>
        <span>Losses</span>
        <span>Total Points</span> */}
      </div>
      {teams.map((team) => (
        <div className={styles.row} key={team.id}>
          <span>{team.fields["Team Name"]}</span>
          {/* Ensure numerical values are treated as such and formatted appropriately */}
          {/* <span>{team.fields.Wins.toString()}</span>
          <span>{team.fields.Losses.toString()}</span>
          <span>{team.fields["Total points"].toString()}</span> */}
        </div>
      ))}
    </div>
  );
};

export default Scoreboard;
