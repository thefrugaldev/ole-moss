'use client';
import React, { useState } from 'react';
import MatchupSelect from './matchup-select';
import MatchupInfo from './matchup-info';

export type Matchup = {
  date: string;
  name: string;
  id: string;
  shortName: string;
};

const Matchup: React.FC<{ matchups: Matchup[] }> = ({ matchups }) => {
  const [gameId, setGameId] = useState<string>('');
  const [{sport, league}, setSportLeage] = useState<{sport:string, league:string}>({sport: 'football', league: 'college-football'})

  return (
    <>
      <MatchupSelect
        matchups={matchups}
        onSelect={(value) => setGameId(value)}
      />
      <MatchupInfo gameId={gameId} sport={sport} league={league} />
    </>
  );
};

export default Matchup;
