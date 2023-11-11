import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Statistic, Team } from '@/schemas/game-summary';
import { AvatarFallback } from '@radix-ui/react-avatar';
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
  const teamOne = {
    logo: teams[0].team.logo,
    abbr: teams[0].team.abbreviation,
  };
  const teamTwo = {
    logo: teams[1].team.logo,
    abbr: teams[1].team.abbreviation,
  };

  useEffect(() => {
    console.log('Team Stats Updated: ', teamStats);
  }, [teamStats]);

  return (
    teamStats && (
      <div className="grid grid-cols-3 gap-4">
        {teamStats.map((stat) => {
          const teamStat = stat as TeamStat;
          return (
            <div key={teamStat.label} className="bg-blue-50 p-4 rounded-md">
              <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">
                  {teamStat.label}
                </h4>
              </div>
              <Separator className="my-4" />
              <div className="flex justify-around">
                <div>
                  <Avatar>
                    <AvatarImage
                      src={`${teamOne.logo}`}
                      alt={`${teamOne.abbr} logo`}
                    />
                    <AvatarFallback>{teamOne.abbr}</AvatarFallback>
                  </Avatar>
                  {teamStat.teamOneValue}
                </div>
                <div>
                  <Avatar>
                    <AvatarImage
                      src={`${teamTwo.logo}`}
                      alt={`${teamTwo.abbr} logo`}
                    />
                    <AvatarFallback>{teamTwo.abbr}</AvatarFallback>
                  </Avatar>
                  {teamStat.teamTwoValue}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default TeamStats;
