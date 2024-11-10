import { useQuery } from "@tanstack/react-query";
const getCryptoNumber = async (): Promise<number> => {
  const response = await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new"
  ).then((resp) => resp.json());
  return Number(response);
};
export const useRandom = () => {
  const randomQuery = useQuery({
    queryKey: ["randomNumber"],
    queryFn: getCryptoNumber,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
    // retry:false esto es para que al momento de no tener data haga un retry o no haga  sea un poco mas rapido
  });
  return { randomQuery };
};
