"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Button from "./components/Buttons/Button";
import useTeams from "./hooks/useTeams";

export default function Home() {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);
  const [winningTeam, setWinningTeam] = useState("");
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);
  const [headingText, setHeadingText] = useState("Insert Coin");
  const [teamAName, setTeamAName] = useState("");
  const [teamBName, setTeamBName] = useState("");
  const { teams, loading } = useTeams();

  const handleTeamScore = (team: "A" | "B", increment: boolean) => {
    setWinningTeam("");
    if (team === "A") {
      setTeamAScore((currentScore) => {
        const updatedScore = currentScore + (increment ? 1 : -1);
        if (updatedScore >= 10) {
          setWinningTeam("Team A wins!");
          setIsAnimationPaused(true);
        }
        return Math.max(0, Math.min(updatedScore, 10));
      });
    } else if (team === "B") {
      setTeamBScore((currentScore) => {
        const updatedScore = currentScore + (increment ? 1 : -1);
        if (updatedScore >= 10) {
          setWinningTeam("Team B wins!");
          setIsAnimationPaused(true);
        }
        return Math.max(0, Math.min(updatedScore, 10));
      });
    }
  };

  const handleReset = () => {
    setTeamAScore(0);
    setTeamBScore(0);
    setWinningTeam("");
    setIsAnimationPaused(false);
    setHeadingText("Insert Coin");
  };

  const formatScore = (score: number) => score.toString().padStart(2, "0");

  return (
    <main className={styles.main}>
      <h1
        className={`${styles.heading} ${
          isAnimationPaused ? styles.paused : ""
        }`}
        onClick={() => {
          setIsAnimationPaused(!isAnimationPaused);
          setHeadingText("Start Game");
        }}
        style={{ cursor: "pointer" }}
      >
        {headingText}
      </h1>
      {winningTeam && <div className={styles.winnerMessage}>{winningTeam}</div>}
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h3>Team A</h3>
          <select
            value={teamAName}
            onChange={(e) => setTeamAName(e.target.value)}
            disabled={loading}
            className={styles.select}
          >
            <option value="">Select Team A</option>
            {teams.map((team) => (
              <option key={team.id} value={team.fields["Team Name"]}>
                {team.fields["Team Name"]}
              </option>
            ))}
          </select>
          <h2>{formatScore(teamAScore)}</h2>
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
          <select
            value={teamBName}
            onChange={(e) => setTeamBName(e.target.value)}
            disabled={loading}
            className={styles.select}
          >
            <option value="">Select Team B</option>
            {teams.map((team) => (
              <option key={team.id} value={team.fields["Team Name"]}>
                {team.fields["Team Name"]}
              </option>
            ))}
          </select>
          <h2>{formatScore(teamBScore)}</h2>
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
