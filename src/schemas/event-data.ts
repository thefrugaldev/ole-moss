import { ESPNRef, ESPNSource } from '@/schemas/generic-types'

// URL
// https://sports.core.api.espn.com/v2/sports/{sport}/leagues/{league}/events/{gameID}
// Example URL
// https://sports.core.api.espn.com/v2/sports/football/leagues/college-football/events/401520162

export interface ESPNEventData {
  $ref: string
  id: string
  uid: string
  date: string
  name: string
  shortName: string
  season: ESPNRef
  seasonType: ESPNRef
  week: ESPNRef
  timeValid: boolean
  competitions: Competition[]
  links: any[]
  venues: ESPNRef[]
  league: ESPNRef
}

export interface Competition {
  $ref: string
  id: string
  guid: string
  uid: string
  date: string
  attendance: number
  type: Type
  timeValid: boolean
  neutralSite: boolean
  divisionCompetition: boolean
  conferenceCompetition: boolean
  previewAvailable: boolean
  recapAvailable: boolean
  boxscoreAvailable: boolean
  lineupAvailable: boolean
  gamecastAvailable: boolean
  playByPlayAvailable: boolean
  conversationAvailable: boolean
  commentaryAvailable: boolean
  pickcenterAvailable: boolean
  summaryAvailable: boolean
  liveAvailable: boolean
  ticketsAvailable: boolean
  shotChartAvailable: boolean
  timeoutsAvailable: boolean
  possessionArrowAvailable: boolean
  onWatchESPN: boolean
  recent: boolean
  bracketAvailable: boolean
  gameSource: ESPNSource
  boxscoreSource: ESPNSource
  playByPlaySource: ESPNSource
  linescoreSource: ESPNSource
  statsSource: ESPNSource
  venue: Venue
  competitors: any[]
  notes: any[]
  situation: ESPNRef
  status: ESPNRef
  odds: ESPNRef
  broadcasts: ESPNRef
  details: ESPNRef
  leaders: ESPNRef
  links: any[]
  predictor: ESPNRef
  probabilities: ESPNRef
  powerIndexes: ESPNRef
  format: Format
  drives: ESPNRef
  hasDefensiveStats: boolean
}

export interface Type {
  id: string
  text: string
  abbreviation: string
  slug: string
  type: string
}

export interface Venue {}


export interface Format {}
