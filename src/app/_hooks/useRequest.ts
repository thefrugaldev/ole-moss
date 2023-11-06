import useSWR from 'swr';

// const endpoint =
//   'https://site.api.espn.com/apis/site/v2/sports/football/college-football/summary';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

// export const useGameSummary = (id: string) => {
//   const { data, error, isLoading } = useSWR(`${endpoint}?event=${id}`, fetcher);

//   return {
//     data,
//     isLoading,
//     isError: error,
//   };
// };

// interface DataPaylaod<T> {
//     [key: string]: T;
// }

interface DataResponse<T> {
  data?: T;
  isLoading: boolean;
  isError: any;
}

export function useRequest<T>(url: string): DataResponse<T> {
  const { data, error } = useSWR<T>(url, fetcher);

  return {
    data,
    isLoading: !data && !error,
    isError: error,
  };
}

export default useRequest;
