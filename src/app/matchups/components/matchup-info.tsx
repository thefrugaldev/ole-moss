'use client';
import React from 'react';
import { useGameSummary } from '@/app/_hooks/useGameSummary';
import useSWR from 'swr';
import { GameSummary } from '@/schemas/game-summary';

const fetcher = (url: any) => fetch(url).then((r) => r.json());

const MatchupInfo: React.FC<{ gameId: string }> = ({ gameId }) => {
  const { data } = useGameSummary(gameId);

  if (gameId === '') return <div>Choose a game from the list above</div>;

  // will Zod work here with SWR client component fetch?
  // const game = GameSummary.parse(data);

  return <div>{gameId}</div>;
};

export default MatchupInfo;
