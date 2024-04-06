export type Team = {
    id: string;
    createdTime: string;
    fields: {
      'Player 1': string;
      'Scoreboard': string[];
      'Leaderboard 3': string; // Adjusted based on your example, assuming this was meant to match the JSON structure
      'Team Name': string;
      'Player 2': string;
      'Leaderboard 7': string[]; // Assuming this field contains an array of strings similar to 'Scoreboard'
      'Points Awarded Team A Rollup (from Scoreboard)': number;
      'Points Awarded Team B Rollup (from Scoreboard 2)': number;
      'Total points': number;
      'Losses': number;
      'Wins': number;
    };
}
  // Define a type for the fields within each match record
type MatchFields = {
    'Team A Score': number;
    'Team A': string[]; // Assuming these are references to team records in Airtable
    'Team B': string[];
    'Team B Score': number;
    'Name': string;
    'Winner': 'Team A' | 'Team B'; // Assuming the winner is always either 'Team A' or 'Team B'
    'Points Awarded Team A': number;
    'Points Awarded Team B': number;
  };
  
  // Define a type for a match record
  type MatchRecord = {
    id: string;
    createdTime: string;
    fields: MatchFields;
  };
  
  // Define a type for the entire response
  type ScoreboardResponse = {
    records: MatchRecord[];
    offset?: string; // Marked as optional because it might not be present in every response
};
  
type TeamFields = {
    Teams: string[]; // Assuming these are team IDs. If it's meant to represent something else, adjust accordingly.
    ID: number;
    Losses: number[]; // It's unusual for this to be an array unless it represents multiple seasons or tournaments.
    Wins: number[];
    'Total points': number[]; // Same as above, arrays for these fields suggest multiple entries per record.
  };
  
  type TeamRecord = {
    id: string;
    createdTime: string;
    fields: TeamFields;
  };
  
//   type TeamsResponse = {
//     records: TeamRecord[];
//     offset?: string; // Optional to account for pagination in Airtable responses.
//   };