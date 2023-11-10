import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';
import { Statistic, Team } from '@/schemas/game-summary';
import React, { useEffect, useMemo } from 'react';

type TeamStat = Statistic & {
  teamOneValue: string;
  teamTwoValue: string;
};

const getStats = (teams: Team[]) => {
  const teamStatisticsArrays = teams.map((team) => team.statistics);

  // Combine statistics with distinct "name" and "label"
  const combinedStatistics = teamStatisticsArrays
    .flat()
    .reduce<Statistic[]>((acc, stat) => {
      const existingStat = acc.find(
        (existing) =>
          existing.name === stat.name && existing.label === stat.label,
      ) as TeamStat;

      if (existingStat) {
        existingStat.teamTwoValue = stat.displayValue;
      } else {
        const newStat = { ...stat } as TeamStat;
        newStat.teamOneValue = stat.displayValue;
        acc.push(newStat);
      }

      return acc;
    }, []);

  return combinedStatistics;
};

const TeamStats: React.FC<{ teams: Team[] }> = ({ teams }) => {
  const teamStats = useMemo(() => getStats(teams), [teams]);

  useEffect(() => {
    console.log('Team Stats Updated: ', teamStats);
  }, [teamStats]);

  return (
    teamStats &&
    teamStats.map((stat) => {
      const teamStat = stat as TeamStat;
      return (
        <div key={teamStat.label} className="flex justify-between	">
          <strong>{teamStat.label}:</strong>
          <span>{teamStat.teamOneValue}</span>

          <Separator orientation="vertical" />
          <span>{teamStat.teamTwoValue}</span>
        </div>
      );
    })
  );
};

export default TeamStats;
