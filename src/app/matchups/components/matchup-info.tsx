import React from 'react';
import { Matchup } from './matchup';

const MatchupInfo: React.FC<{ matchup: Matchup }> = ({ matchup }) => {
  return (
    <div>
      {matchup.id} {matchup.shortName} {matchup.date}
    </div>
  );
};

export default MatchupInfo;
