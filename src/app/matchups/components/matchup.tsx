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
  const [matchup, setMatchup] = useState<Matchup>(matchups[0]);

  const onMatchupSelect = (gameId: string) => {
    // make fetch call via SWR to get matchup info
    console.log(gameId);
  };

  return (
    <>
      <MatchupSelect matchups={matchups} onSelect={onMatchupSelect} />
      <MatchupInfo matchup={matchup} />
    </>
  );
};

export default Matchup;
