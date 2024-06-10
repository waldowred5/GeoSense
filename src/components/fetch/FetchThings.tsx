import { useEffect } from "react";
import { EntityData, Thing } from "../../types.ts";
import { BASE_URL, buildUrlWithParams } from "../../api/utils.ts";
import { useQuery } from "@tanstack/react-query";

interface IFetchThingsProps {
  setData: (data: Thing[]) => void;
}

export const FetchThings = ({ setData }: IFetchThingsProps) => {
  const thingsUrl = buildUrlWithParams(`${BASE_URL}/Things`, { '$expand': "Datastreams" });
  const {
    isPending,
    isError,
    data,
  } = useQuery<EntityData<Thing>>({
    queryKey: ['things'],
    queryFn: () => fetch(thingsUrl).then((res) => res.json()),
  });

  useEffect(() => {
    if (!isPending && !isError) {
      setData(data.value);
    }
  }, [data, isPending, isError, setData]);

  return (
    <></>
  );
};
