export type TeamRecord = {
  id: string;
  createdTime: string;
  fields: TeamFields;
};

export type TeamFields = {
  "Player 1": string;
  "Matches as Team B": string[];
  "Team Name": string;
  "Player 2": string;
  "Total Matches as Team A": number;
  "Total Matches as Team B": number;
  "Total Matches Played": number;
  "Points as Team A": number;
  "Points as Team B": number;
  "Total points": number;
  Wins: number;
  Losses: number;
  "Matches as Team A"?: string[]; // Optional since it's not present in all records
  id: string;
  createdTime: string;
  fields: TeamFields;
};

export type TeamsResponse = {
  records: TeamRecord[];
  offset: string;
};

export type MatchRecord = {
  id: string;
  createdTime: string;
  fields: MatchFields;
};

export type MatchFields = {
  "Team Name (from Team A)": string[];
  "Team A": string[];
  "Player 1 (from Team A)": string[];
  "Player 2 (from Team A)": string[];
  "Team A Score": number;
  "Team Name (from Team B)": string[];
  "Team B": string[];
  "Player 1 (from Team B)": string[];
  "Player 2 (from Team B)": string[];
  "Team B Score": number;
  Name: string;
  "Points Awarded Team A": number;
  "Points Awarded Team B": number;
  Winner: "Team A" | "Team B";
  id: string;
  createdTime: string;
  fields: MatchFields;
};

export type ScoreboardResponse = {
  records: MatchRecord[];
  offset: string; // Useful for pagination if your API response includes it
};

export type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};
export type TeamColors = {
  [teamName: string]: string;

  // Add more team colors here
  "Team A": string;
  "Team B": string;
  "Team C": string;
  "Team D": string;
  "Team E": string;
  "Team F": string;
  "Team G": string;
  "Team H": string;
};
