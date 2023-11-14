import { ESPNLinkRef } from "./generic-types"

// example url
// https://site.api.espn.com/apis/site/v2/sports/football/college-football/summary?event=401525546


export interface GameSummary {
  boxscore: Boxscore;
}

export interface Boxscore {
  teams: Team[]
  players: Players[]
}

export interface Team {
  team: TeamInfo;
  statistics: TeamStatistic[];
}

export interface TeamInfo {
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

export interface TeamStatistic {
  name: string;
  displayValue: string;
  label: string;
}
export interface Players {
  team: TeamInfo
  statistics: PlayerStatistic[]
}

export interface PlayerStatistic {
  name: string
  keys: string[]
  text: string
  labels: string[]
  descriptions: string[]
  athletes: Athlete[]
  totals: string[]
}

export interface Athlete {
  athlete: AthleteData
  stats: string[]
}

export interface AthleteData {
  id: string
  uid: string
  guid: string
  firstName: string
  lastName: string
  displayName: string
  links: ESPNLinkRef[]
}
