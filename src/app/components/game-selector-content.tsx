'use client';
import React from 'react';
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from '@/components/ui/select';

type Game = {
  date: string;
  name: string;
  id: string;
  shortName: string;
};

interface GameSelectorContentProps {
  games: Game[];
}

const GameSelectorContent: React.FC<GameSelectorContentProps> = ({ games }) => {
  return (
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
  );
};

export default GameSelectorContent;
