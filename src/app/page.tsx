import GameSelector from './components/game-selector';

export default function Home() {
  return (
    <main className="flex min-h-screen flex justify-center p-24">
      <div className="text-center text-sm">
        <p>
          Select a game from Week 10 below, or choose a different week here.
        </p>
        <div>
          <GameSelector />
        </div>
      </div>
    </main>
  );
}
