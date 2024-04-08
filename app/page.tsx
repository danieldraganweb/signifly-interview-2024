"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Button from "./components/Buttons/Button";

export default function Home() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [winningTeam, setWinningTeam] = useState("");

  const handleTeamScore = (team: "A" | "B", increment: boolean) => {
    setWinningTeam(""); // Reset winning team message on any button click
    if (team === "A") {
      setTeamAScore((currentScore) => {
        const updatedScore = currentScore + (increment ? 1 : -1);
        if (updatedScore >= 10) {
          setWinningTeam("Team A wins!");
        }
        return Math.max(0, Math.min(updatedScore, 10)); // Ensures score stays within 0-10
      });
    } else if (team === "B") {
      setTeamBScore((currentScore) => {
        const updatedScore = currentScore + (increment ? 1 : -1);
        if (updatedScore >= 10) {
          setWinningTeam("Team B wins!");
        }
        return Math.max(0, Math.min(updatedScore, 10)); // Ensures score stays within 0-10
      });
    }
  };

  const handleReset = () => {
    setTeamAScore(0);
    setTeamBScore(0);
    setWinningTeam(""); // Also reset any winning message
  };
  const formatScore = (score: number) => score.toString().padStart(2, "0");
  return (
    <main className={styles.main}>
      <h1>Insert coin</h1>
      {winningTeam && <div className={styles.winnerMessage}>{winningTeam}</div>}
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3>Team A</h3>
          <h2>{formatScore(teamAScore)}</h2>{" "}
          {/* Use formatScore to display the score */}
          <div className={styles.buttonWrapper}>
            <Button onClick={() => handleTeamScore("A", true)}>+</Button>
            <Button
              onClick={() => handleTeamScore("A", false)}
              disabled={teamAScore <= 0}
            >
              -
            </Button>
          </div>
        </div>
        <div className={styles.wrapper}>
          <h3>Team B</h3>
          <h2>{formatScore(teamBScore)}</h2>{" "}
          {/* Use formatScore to display the score */}
          <div className={styles.buttonWrapper}>
            <Button onClick={() => handleTeamScore("B", true)}>+</Button>
            <Button
              onClick={() => handleTeamScore("B", false)}
              disabled={teamBScore <= 0}
            >
              -
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.resetButton}>
        <Button onClick={handleReset}>Reset</Button>
      </div>
    </main>
  );
}
