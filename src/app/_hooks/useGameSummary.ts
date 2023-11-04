import useSWR from 'swr';

const endpoint =
  'https://site.api.espn.com/apis/site/v2/sports/football/college-football/summary';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const useGameSummary = (id: string) => {
  const { data, error, isLoading } = useSWR(`${endpoint}?event=${id}`, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
};
