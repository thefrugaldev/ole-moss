import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from '@/components/ui/select';
import React from 'react';

type Game = {
  date: string;
  name: string;
  id: string;
  shortName: string;
};

interface GameSelectProps {
  games: Game[];
}

const GameSelect: React.FC<GameSelectProps> = async ({ games }) => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a matchup" />
        <SelectContent className="max-h-96">
          <SelectGroup>
            <SelectLabel>Matchups</SelectLabel>
            {games.map((game) => {
              return (
                <SelectItem key={game.id} value={game.id}>
                  {game.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </SelectTrigger>
    </Select>
  );
};

export default GameSelect;
