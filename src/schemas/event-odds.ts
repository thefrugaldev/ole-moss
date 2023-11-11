import { ESPNRef, ESPNResponse } from '@/schemas/generic-types'

// URL
// https://sports.core.api.espn.com/v2/sports/{sport}/leagues/{league}/events/{gameID}/competitions/{gameID}/odds
// Example URL
// https://sports.core.api.espn.com/v2/sports/football/leagues/college-football/events/401520162/competitions/401520162/odds


export interface ESPNOdds extends ESPNResponse {
  items: Odds[]
}

export interface Odds {
  $ref: string
  provider: Provider
  details: string
  overUnder: number
  spread: number
  overOdds: number
  underOdds: number
  awayTeamOdds: TeamOdds
  homeTeamOdds: TeamOdds
  links: any[]
  moneylineWinner: boolean
  spreadWinner: boolean
  current: GameLines
  spreadHistory?: ESPNRef
  totalHistory?: ESPNRef
  headToHeads?: ESPNRef
}

export interface Provider extends ESPNRef {
  id: string
  name: string
  priority: number
}

export interface TeamOdds {
  favorite: boolean
  underdog: boolean
  moneyLine?: number
  spreadOdds: number
  current: TeamLines
  team: ESPNRef
  winPercentage?: number
  averageScore?: number
  spreadRecord?: SpreadRecord
  pastPerformances?: ESPNRef
}

export interface TeamLines {
  pointSpread: OddsValue
  spread: OddsValue
  moneyLine?: OddsValue
}

export interface OddsValue {
  alternateDisplayValue: string
}

export interface SpreadRecord {
  wins: number
  losses: number
  pushes: number
  summary: string
}

export interface GameLines {
  over: OddsValue
  under: OddsValue
  total: OddsValue
}
