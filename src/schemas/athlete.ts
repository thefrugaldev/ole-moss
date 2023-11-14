import { Position } from "./depth-chart"
import { ESPNLinkRef, ESPNRef, GenericObject } from "./generic-types"

// URL
// https://sports.core.api.espn.com/v2/sports/{sport}/leagues/{league}/seasons/{year}/athletes/{atheleteID}
// Example URL
// https://sports.core.api.espn.com/v2/sports/football/leagues/college-football/seasons/2023/athletes/4432658

export interface ESPNAthlete {
  $ref: string
  id: string
  uid: string
  guid: string
  type: string
  alternateIds: GenericObject
  firstName: string
  lastName: string
  fullName: string
  displayName: string
  shortName: string
  weight: number
  displayWeight: string
  height: number
  displayHeight: string
  links: any[]
  birthPlace: BirthPlace
  birthCountry: BirthCountry
  college: ESPNRef
  slug: string
  headshot: ESPNLinkRef
  jersey: string
  flag: ESPNLinkRef
  position: Position
  injuries: any[]
  linked: boolean
  team: ESPNRef
  teams: ESPNRef[]
  notes: ESPNRef
  experience: Experience
  active: boolean
  eventLog: ESPNRef
  status: Status
}

export interface BirthPlace {
  city: string
  state: string
  country: string
}

export interface BirthCountry {
  alternateId: string
  abbreviation: string
}

export interface Experience {
  years: number
  displayValue: string
  abbreviation: string
}

export interface Status {
  id: string
  name: string
  type: string
  abbreviation: string
}
