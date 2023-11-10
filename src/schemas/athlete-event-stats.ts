import { ESPNRef } from "./generic-types"

// URL
// https://sports.core.api.espn.com/v2/sports/{sport}/leagues/{league}/events/{eventId}/competitions/{eventId}/competitors/{teamID}/roster/{athleteID}/statistics/0
// Example URL
// https://sports.core.api.espn.com/v2/sports/football/leagues/college-football/events/401520162/competitions/401520162/competitors/130/roster/4426479/statistics/0

export interface ESPNAthleteGameStats {
  $ref: string
  competition: ESPNRef
  splits: Splits
  athlete: ESPNRef
}

export interface Splits {
  id: string
  name: string
  abbreviation: string
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
}
