'use client';
import React from 'react';
import { useRequest } from '@/app/_hooks/useRequest';
import { GameSummary } from '@/schemas/game-summary';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';
import StatsToggle from './stats-toggle';

const endpoint =
  'https://site.api.espn.com/apis/site/v2/sports/football/college-football/summary';

const MatchupInfo: React.FC<{ gameId: string }> = ({ gameId }) => {
  const { data } = useRequest<GameSummary>(`${endpoint}?event=${gameId}`);

  if (gameId === '')
    return <div className="mt-10">Choose a game from the list above</div>;

  if (!data) return <div className="mt-10">Loading...</div>;

  const {
    boxscore: { teams },
  } = data;

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
      <StatsToggle teams={teams} />
    </div>
  );
};

export default MatchupInfo;
