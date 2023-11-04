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
import { Matchup } from './matchup';

interface MatchupSelectProps {
  matchups: Matchup[];
  onSelect: (e: string) => void;
}

const MatchupSelect: React.FC<MatchupSelectProps> = async ({
  matchups,
  onSelect,
}) => {
  return (
    <Select onValueChange={onSelect}>
      <SelectTrigger>
        <SelectValue placeholder="Select a matchup" />
        <SelectContent className="max-h-96">
          <SelectGroup>
            <SelectLabel>Matchups</SelectLabel>
            {matchups.map((matchup) => {
              return (
                <SelectItem key={matchup.id} value={matchup.id}>
                  {matchup.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </SelectTrigger>
    </Select>
  );
};

export default MatchupSelect;
