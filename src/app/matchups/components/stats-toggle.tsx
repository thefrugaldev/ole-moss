import { Tabs, TabsList } from '@/components/ui/tabs';
import { TabsContent, TabsTrigger } from '@radix-ui/react-tabs';
import React from 'react';

const StatsToggle = () => {
  return (
    <Tabs defaultValue="team" className="w-[400px] m-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="team">Team Stats</TabsTrigger>
        <TabsTrigger value="player">Player Stats</TabsTrigger>
      </TabsList>

      <TabsContent value="team">Team Info</TabsContent>

      <TabsContent value="player">Player Info</TabsContent>
    </Tabs>
  );
};

export default StatsToggle;
