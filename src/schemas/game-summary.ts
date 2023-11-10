// example url
// https://site.api.espn.com/apis/site/v2/sports/football/college-football/summary?event=401525546

export interface GameSummary {
  boxscore: Boxscore;
}

interface Boxscore {
  teams: Team[];
}

interface Team {
  team: TeamInfo;
  statistics: Statistic[];
}

interface TeamInfo {
  id: string;
  uid: string;
  slug: string;
  location: string;
  name: string;
  abbreviation: string;
  displayName: string;
  shortDisplayName: string;
  color: string;
  alternateColor: string;
  logo: string;
}

interface Statistic {
  name: string;
  displayValue: string;
  label: string;
}
