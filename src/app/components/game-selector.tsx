import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';
import React from 'react';
import GameSelectorContent from './game-selector-content';

async function getSchedule() {
  const res = await fetch(
    'https://cdn.espn.com/core/college-football/schedule?xhr=1&year=2023&week=10',
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const json = await res.json();

  const data = json.content.schedule;

  return data;
}

const GameSelector = async () => {
  const schedule = await getSchedule();
  const allGames = Object.values(schedule).reduce((acc: any, day: any) => {
    acc = acc.concat(day.games);

    return acc;
  }, []);

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a matchup" />
        <GameSelectorContent games={allGames as any} />
      </SelectTrigger>
    </Select>
  );
};

export default GameSelector;
