import { Scoreboard } from '@/schemas/scoreboard';
import Matchup from './components/matchup';

async function getScoreboard() {
  const res = await fetch(
    'https://site.api.espn.com/apis/site/v2/sports/football/college-football/scoreboard',
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  const json = await res.json();

  const response = Scoreboard.parse(json);

  return response;
}

export default async function Matchups() {
  const { events, week } = await getScoreboard();

  return (
    <main className="flex min-h-screen flex justify-center p-24">
      <div className="text-center text-sm w-3/5">
        <p className="mb-5">
          Select a game from Week {week.number} below, or choose a different week here.
        </p>
        <Matchup matchups={events} />
      </div>
    </main>
  );
}
