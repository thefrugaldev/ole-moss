import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { Team } from '@/schemas/game-summary';
import React from 'react';
import TeamStats from './team-stats';
import { GameStats } from '@/app/_hooks/useFullPlayerData';
import PlayerStats from './player-stats';

const StatsToggle: React.FC<{ teams: Team[], players: GameStats[] }> = ({ teams, players }) => {
  return (
    <Tabs defaultValue="team" className="m-auto">
      <TabsList className="w-[400px] grid w-full grid-cols-2">
        <TabsTrigger value="team">Team Stats</TabsTrigger>
        <TabsTrigger value="player">Player Stats</TabsTrigger>
      </TabsList>

      <TabsContent value="team">
        <TeamStats teams={teams} />
      </TabsContent>

      <TabsContent value="player">
        <PlayerStats players={players} />
      </TabsContent>
    </Tabs>
  );
};

export default StatsToggle;
