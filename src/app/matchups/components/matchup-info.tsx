'use client';
import React, { useEffect } from 'react';
import { useRequest } from '@/app/_hooks/useRequest';
import { GameSummary } from '@/schemas/game-summary';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import StatsToggle from './stats-toggle';
import useFullPlayerData from '@/app/_hooks/useFullPlayerData';
import getFullPlayerData, { GameStats } from '@/lib/getFullPlayerData';

const endpoint =
  'https://site.api.espn.com/apis/site/v2/sports/football/college-football/summary';

const MatchupInfo: React.FC<{ gameId: string, sport: string, league: string }> = ({ gameId, sport, league }) => {

  const [playerData, setPlayerData ] = React.useState<GameStats[]>([])
  const { data } = useRequest<GameSummary>(`${endpoint}?event=${gameId}`)

  // const { data:testData } = useFullPlayerData(sport, league, data?.boxscore?.teams?.[0].team?.id)
  useEffect(()=> {
    getFullPlayerData({sport, league, teamId:data?.boxscore?.teams?.[0]?.team?.id}).then( (data) => setPlayerData( data?.data ??[]))
  },[data?.boxscore?.teams, league, sport])

  if (gameId === '')
    return <div className="mt-10">Choose a game from the list above</div>

  if (!data) return <div className="mt-10">Loading...</div>

  const {
    boxscore: { teams },
  } = data

  return (
    <div>
      <div className="flex my-10 justify-around">
        {teams.map((team) => {
          return (
            <Image
              key={team.team.id}
              src={team.team.logo}
              alt={`${team.team.displayName} logo`}
              width={100}
              height={100}
              className="rounded-md object-cover"
            />
          );
        })}
      </div>
      <StatsToggle teams={teams} players={playerData} />
    </div>
  );
};

export default MatchupInfo
