import { ESPNRef, ESPNResponse } from '@/schemas/generic-types'

// URL
// https://sports.core.api.espn.com/v2/sports/{sport}/leagues/{league}/seasons/{year}/teams/{teamID}/depthcharts
// Example URL
// https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons/2023/teams/1/depthcharts

export interface DepthChartResponse extends ESPNResponse {
  items: DepthChartItem[]
}

export interface DepthChartItem  {
  id: string
  name: string
  positions: Positions
}

export interface Positions {
  [key:string]: PositionDepthChart
}

export interface PositionDepthChart {
  position: Position
  athletes: Athlete[]
}

export interface Position {
  $ref: string
  id: string
  name: string
  displayName: string
  abbreviation: string
  leaf: boolean
  parent: ESPNRef
}


export interface Athlete {
  slot: number
  athlete: ESPNRef
  rank: number
}


// export interface Positions {
//   lde?: PositionDepthChart
//   nt?: PositionDepthChart
//   rde?: PositionDepthChart
//   wlb?: PositionDepthChart
//   lilb?: PositionDepthChart
//   rilb?: PositionDepthChart
//   slb?: PositionDepthChart
//   lcb?: PositionDepthChart
//   ss?: PositionDepthChart
//   fs?: PositionDepthChart
//   rcb?: PositionDepthChart
//   pk?: PositionDepthChart
//   p?: PositionDepthChart
//   h?: PositionDepthChart
//   pr?: PositionDepthChart
//   kr?: PositionDepthChart
//   ls?: PositionDepthChart
//   wr?: PositionDepthChart
//   lt?: PositionDepthChart
//   lg?: PositionDepthChart
//   c?: PositionDepthChart
//   rg?: PositionDepthChart
//   rt?: PositionDepthChart
//   qb?: PositionDepthChart
//   te?: PositionDepthChart
//   rb?: PositionDepthChart
//   fb?: PositionDepthChart
// }