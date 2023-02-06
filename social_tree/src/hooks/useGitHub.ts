// SWR
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useGithub(url: string) {
  const { data, error } = useSWR(`github/victorhsdev`, () => fetcher(url));

  return {
    profile: data,
    isLoading: !error && !data,
    isError: error,
  };
}
