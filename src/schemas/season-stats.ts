import { ESPNRef } from "./generic-types"

// URL
// https://sports.core.api.espn.com/v2/sports/{sport}/leagues/{league}/seasons/{year}/types/2/athletes/{athleteID}/{"statistics" | "projections"}
// Example URL
// https://sports.core.api.espn.com/v2/sports/football/leagues/college-football/seasons/2023/types/2/athletes/4432665/statistics


export interface Root {
  $ref: string
  season: ESPNRef
  athlete: ESPNRef
  splits: Splits
  seasonType: ESPNRef
}

export interface Splits {
  id: string
  name: string
  abbreviation: string
  type: string
  categories: Category[]
}

export interface Category {
  name: string
  displayName: string
  shortDisplayName: string
  abbreviation: string
  summary: string
  stats: Stat[]
}

export interface Stat {
  name: string
  displayName: string
  shortDisplayName: string
  description: string
  abbreviation: string
  value: number
  displayValue: string
  perGameValue?: number
  perGameDisplayValue?: string
}


