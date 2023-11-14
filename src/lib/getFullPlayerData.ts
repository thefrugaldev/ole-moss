import { GameSummary, PlayerStatistic } from '@/schemas/game-summary'
import { ScheduleResponse } from '@/schemas/team-schedule'

const endpoint =
  'https://site.api.espn.com/apis/site/v2/sports';
  // https://site.api.espn.com/apis/site/v2/sports/{sport}/{league}/teams/{teamID}/schedule
  // https://site.api.espn.com/apis/site/v2/sports/football/college-football/summary?event=401525546
const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface DataResponse<T> {
  data?: T
  isLoading: boolean
  isError: any
}

export interface GameStats {
  gameId: string
  week: string
  date: string
  homeAway: string
  teamPlayerStats?: PlayerStatistic[]
  oppPlayerStats?: PlayerStatistic[]
}

export async function getFullPlayerData(payload: {sport:string, league:string, teamId?: string}):Promise<DataResponse<GameStats[]>> {
  const { sport, league, teamId } = payload

  if (!teamId) return {
    data: undefined,
    isLoading: false,
    isError: 'no team id',
  }

  const gameStats:GameStats[] = []
  const errors = 'error'
  const schedUrl = `${ endpoint }/${ sport }/${ league }/teams/${ teamId }/schedule`
  const scheduleData = (await (await fetch(schedUrl)).json()) as ScheduleResponse

  if (!scheduleData) return {
    data: scheduleData,
    isLoading: !scheduleData && !errors,
    isError: errors,
  }

  const condensedSchedule = scheduleData.events.map( game => {

    return {
      gameId: game.id,
      week: game.week.text,
      date: game.date,
      homeAway: game.competitions[0].competitors[0].id === teamId ? game.competitions[0].competitors[0].homeAway : game.competitions[0].competitors[1].homeAway,
    }
  })

  for(let i = 0; i < condensedSchedule.length; i++ ) {
    const game = condensedSchedule[i] as GameStats

    if( new Date(game.date).valueOf() > Date.now() ) gameStats.push(game)
    
    const gameUrl = `${ endpoint }/${ sport }/${ league }/summary?event=${game.gameId}`
    const gameData = (await (await fetch(gameUrl)).json()) as GameSummary

      gameData?.boxscore.players?.forEach( teamPlayerStats => {
        if ( teamPlayerStats.team.id === teamId ) game.teamPlayerStats = teamPlayerStats.statistics
        if ( teamPlayerStats.team.id !== teamId ) game.oppPlayerStats = teamPlayerStats.statistics
      })

      gameStats.push(game)
    }
    
  return {
    data: gameStats,
    isLoading: !gameStats,
    isError: undefined,
  }
}

export default getFullPlayerData
