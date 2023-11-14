import { ESPNRef, ESPNResponse } from '@/schemas/generic-types'

// URL
// https://site.api.espn.com/apis/site/v2/sports/{sport}/{league}/teams/{teamID}/schedule
// Example URL
// https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/4/schedule


export interface ScheduleResponse {
  timestamp: string
  status: string
  season: Season
  team: TeamExpanded
  events: Event[]
  requestedSeason: RequestedSeason
}

export interface Season {
  year: number
  type?: number
  name?: string
  displayName: string
  half?: number
}

export interface TeamExpanded {
  id: string
  abbreviation: string
  location: string
  name: string
  displayName: string
  clubhouse: string
  color: string
  logo: string
  recordSummary: string
  seasonSummary: string
  standingSummary: string
  groups: Groups
}

export interface Groups {
  id: string
  parent: Parent
  isConference: boolean
}

export interface Parent {
  id: string
}

export interface Event {
  id: string
  date: string
  name: string
  shortName: string
  season: Season
  seasonType: SeasonType
  week: Week
  timeValid: boolean
  competitions: Competition[]
  links: Link[]
}

export interface SeasonType {
  id: string
  type: number
  name: string
  abbreviation: string
}

export interface Week {
  number: number
  text: string
}

export interface Competition {
  id: string
  date: string
  attendance: number
  type: CompetitionType
  timeValid: boolean
  neutralSite: boolean
  boxscoreAvailable: boolean
  ticketsAvailable: boolean
  venue: Venue
  competitors: Competitor[]
  notes: any[]
  broadcasts: Broadcast[]
  status: Status
  tickets?: Ticket[]
}

export interface CompetitionType {
  id: string
  text: string
  abbreviation: string
  slug: string
  type: string
}

export interface Venue {
  fullName: string
  address: Address
}

export interface Address {
  city: string
  state: string
  zipCode: string
}

export interface Competitor {
  id: string
  type: string
  order: number
  homeAway: string
  winner?: boolean
  team: Team
  score?: Score
  leaders?: Leader[]
  record?: Record[]
  curatedRank: CuratedRank
}

export interface Team {
  id: string
  location: string
  nickname: string
  abbreviation: string
  displayName: string
  shortDisplayName: string
  logos: Logo[]
  links: Link[]
}

export interface Logo {
  href: string
  width: number
  height: number
  alt: string
  rel: string[]
  lastUpdated: string
}

export interface Score {
  value: number
  displayValue: string
}

export interface Leader {
  name: string
  displayName: string
  abbreviation: string
  leaders?: Leader2[]
}

export interface Leader2 {
  displayValue: string
  value: number
  athlete: Athlete
}

export interface Athlete {
  id: string
  lastName: string
  displayName: string
  shortName: string
  links?: Link[]
}


export interface Record {
  id: string
  abbreviation?: string
  displayName: string
  shortDisplayName: string
  description: string
  type: string
  displayValue: string
}

export interface CuratedRank {
  current: number
}

export interface Broadcast {
  type: Type
  market: Market
  media: Media
  lang: string
  region: string
}

export interface Type {
  id: string
  shortName: string
}

export interface Market {
  id: string
  type: string
}

export interface Media {
  shortName: string
}

export interface Status {
  clock: number
  displayClock: string
  period: number
  type: Type3
}

export interface Type3 {
  id: string
  name: string
  state: string
  completed: boolean
  description: string
  detail: string
  shortDetail: string
}

export interface Ticket {
  id: string
  summary: string
  description: string
  maxPrice: number
  startingPrice: number
  numberAvailable: number
  totalPostings: number
  links: Link[]
}


export interface Link {
  language?: string
  rel?: string[]
  href?: string
  text?: string
  shortText?: string
  isExternal?: boolean
  isPremium?: boolean
}

export interface RequestedSeason {
  year: number
  type: number
  name: string
  displayName: string
}
