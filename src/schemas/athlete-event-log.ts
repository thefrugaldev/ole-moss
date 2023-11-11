import { ESPNRef, ESPNResponse } from "./generic-types"

// URL
// https://sports.core.api.espn.com/v2/sports/{sport}/leagues/{league}/seasons/{year}/athletes/{atheleteID}/eventlog
// Example URL
// https://sports.core.api.espn.com/v2/sports/football/leagues/college-football/seasons/2023/athletes/4426479/eventlog

export interface ESPNAthleteEventLog {
  $ref: string
  teams: { [key:string]: Team}
  events: AthleteEventLogResponse
}

export interface Team {
  team: Team
  id: string
}

export interface AthleteEventLogResponse extends ESPNResponse {
  items: AthleteEventLog[]
}

export interface AthleteEventLog {
  event: Event
  competition: ESPNRef
  statistics: ESPNRef
  teamId: string
  played: boolean
}

