import { GameSummary, PlayerStatistic } from '@/schemas/game-summary';
import { ScheduleResponse } from '@/schemas/team-schedule';
import useSWR from 'swr';
import { TeamSchedule } from './useTeamSchedule';
import getFullPlayerData from '@/lib/getFullPlayerData';

const endpoint =
  'https://site.api.espn.com/apis/site/v2/sports';
  // https://site.api.espn.com/apis/site/v2/sports/{sport}/{league}/teams/{teamID}/schedule
  // https://site.api.espn.com/apis/site/v2/sports/football/college-football/summary?event=401525546
const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface DataResponse<T> {
  data?: T;
  isLoading: boolean;
  isError: any;
}

export interface GameStats extends TeamSchedule{
  teamPlayerStats?: PlayerStatistic[],
  oppPlayerStats?: PlayerStatistic[],
}

export async function useFullPlayerData(sport:string, league:string, teamId?: string): Promise<DataResponse<GameStats[]>>{


  if (!teamId) return { isLoading: false, isError: 'No teamId' }


  const data = await getFullPlayerData({sport, league, teamId})


return data
  // const gameStats:GameStats[] = []

  // const schedUrl = `${ endpoint }/${ sport }/${ league }/teams/${ teamId }/schedule`
  // const { data:scheduleData, error } = useSWR<ScheduleResponse>(schedUrl, fetcher)

  //   console.log(scheduleData, 'Sched')
  // if (!scheduleData) return {
  //   data: scheduleData,
  //   isLoading: !scheduleData && !error,
  //   isError: error,
  // }

  // const condensedSchedule = scheduleData.events.map( game => {

  //   return {
  //     gameId: game.id,
  //     week: game.week.text,
  //     date: game.date,
  //     homeAway: game.competitions[0].competitors[0].id === teamId ? game.competitions[0].competitors[0].homeAway : game.competitions[0].competitors[1].homeAway,
  //   }
  // })

  // for(let i = 0; i < condensedSchedule.length; i++ ) {
  //   const game = condensedSchedule[i] as GameStats

  //   if( new Date(game.date).valueOf() > Date.now() ) gameStats.push(game)
    
  //   const gameUrl = `${ endpoint }/${ sport }/${ league }/summary?event=${game.gameId}`
  //   const { data:gameData, error } = useSWR<GameSummary>(gameUrl, fetcher)
  //   console.log(gameData, 'gameData')



  //   gameData?.boxscore.players.forEach( teamPlayerStats => {
  //     if ( teamPlayerStats.team.id === teamId ) game.teamPlayerStats = teamPlayerStats.statistics
  //     if ( teamPlayerStats.team.id !== teamId ) game.oppPlayerStats = teamPlayerStats.statistics
  //   })

  //   gameStats.push(game)

  // }




  // return {
  //   data: gameStats,
  //   isLoading: !gameStats && !error,
  //   isError: error,
  // }
}

export default useFullPlayerData;
