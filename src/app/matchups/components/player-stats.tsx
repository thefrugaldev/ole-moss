import { GameStats } from '@/app/_hooks/useFullPlayerData';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { AvatarFallback } from '@radix-ui/react-avatar';
import React, { useEffect, useMemo } from 'react';

interface StatObj {
  players: { name: string, stats: {[key:string]:string[]}}[]
}

interface CombinedStats {
  [key:string]: StatObj
}

interface PlayerKey {
  [key:string]: {  [key:string]: number}
} 

const getPositionalStats = (games: GameStats[]) => {

  const combinedStats:CombinedStats = {}
  const playerKey:PlayerKey = {}
  games.forEach((game) => {
    game.teamPlayerStats?.forEach((statByType) => {
      if( !combinedStats[statByType.name] ) {
        const statType = {
          players : []
        }
        combinedStats[statByType.name] = statType
      }
      if( !playerKey[statByType.name] ) {
        playerKey[statByType.name] = {}
      }
      const defaultStatObj = statByType.labels.reduce<{ [key:string]: string[]}>( (acc, statKey) => {
        acc[statKey.toLowerCase()] = []
        return acc
      }, {})

      statByType.athletes.forEach( athlete => {
        if (!athlete || !athlete.stats) return
        else if (!playerKey[statByType.name] || !playerKey[statByType.name][athlete.athlete.displayName]) {
          const preppedStatObj = {...defaultStatObj}
          athlete.stats.forEach( (stat, index) => preppedStatObj[statByType.labels[index].toLowerCase()].push(stat))
          playerKey[statByType.name][athlete.athlete.displayName] = combinedStats[statByType.name].players.length
          combinedStats[statByType.name].players.push({ name: athlete.athlete.displayName, stats:preppedStatObj })
        }
        else {
          const playaIndex = playerKey[statByType.name][athlete.athlete.displayName]
          athlete.stats.forEach( (stat, index) => combinedStats[statByType.name].players[playaIndex].stats[statByType.labels[index].toLowerCase()].push(stat))
        }
        return
      })
    })
  })

  return combinedStats
};

const PlayerStats: React.FC<{ players: GameStats[] }> = ({ players }) => {
  const playerStats = useMemo(() => getPositionalStats(players), [players])

  useEffect(() => {
    console.log('Player Stats Updated: ', playerStats)
  }, [players,playerStats])

  return (
    players && (
      <div className="grid grid-cols-3 gap-4">
      </div>
    )
  )
}

export default PlayerStats
