'use client';
import React from 'react';
import { useRequest } from '@/app/_hooks/useRequest';
import { GameSummary } from '@/schemas/game-summary';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import Image from 'next/image';

const endpoint =
  'https://site.api.espn.com/apis/site/v2/sports/football/college-football/summary';

const MatchupInfo: React.FC<{ gameId: string }> = ({ gameId }) => {
  const { data } = useRequest<GameSummary>(`${endpoint}?event=${gameId}`);

  if (gameId === '')
    return <div className="mt-10">Choose a game from the list above</div>;

  if (!data) return <div className="mt-10">Loading...</div>;

  const { boxscore } = data;

  return (
    <div className="flex mt-10 space-x-4">
      {boxscore.teams.map((team) => {
        return (
          <AspectRatio key={team.team.id} ratio={16 / 5} className="bg-muted">
            <Image
              src={team.team.logo}
              alt={`${team.team.displayName} logo`}
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        );
      })}
    </div>
  );
};

export default MatchupInfo;
