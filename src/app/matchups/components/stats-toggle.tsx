import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { Team } from '@/schemas/game-summary';
import React from 'react';
import TeamStats from './team-stats';

const StatsToggle: React.FC<{ teams: Team[] }> = ({ teams }) => {
  return (
    <Tabs defaultValue="team" className="m-auto">
      <TabsList className="w-[400px] grid w-full grid-cols-2">
        <TabsTrigger value="team">Team Stats</TabsTrigger>
        <TabsTrigger value="player">Player Stats</TabsTrigger>
      </TabsList>

      <TabsContent value="team">
        <TeamStats teams={teams} />
      </TabsContent>

      <TabsContent value="player">Player Info</TabsContent>
    </Tabs>
  );
};

export default StatsToggle;
