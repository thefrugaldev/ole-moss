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

  return (
    <>
      <MatchupSelect
        matchups={matchups}
        onSelect={(value) => setGameId(value)}
      />
      <MatchupInfo gameId={gameId} />
    </>
  );
};

export default Matchup;
