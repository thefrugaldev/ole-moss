import Link from 'next/link';

export default function Matchups() {
  return (
    <main className="flex min-h-screen flex justify-center p-24">
      <div className="text-center text-sm">
        <Link href="/matchups">Go to Matchups {'>'}</Link>
      </div>
    </main>
  );
}
