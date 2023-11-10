import { ESPNRef, ESPNResponse } from "./generic-types";

// URL
// http://sports.core.api.espn.com/v2/sports/{sport}/leagues/{league}/seasons/{year}/teams/{teamID}/athletes
// Example URL
// http://sports.core.api.espn.com/v2/sports/football/leagues/college-football/seasons/2023/teams/130/athletes

export interface RosterResponse extends ESPNResponse {
  items: ESPNRef[]
}