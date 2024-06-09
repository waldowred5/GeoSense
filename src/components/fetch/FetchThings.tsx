import React, { useEffect } from "react";
import { EntityData, Thing } from "../../types.ts";
import { BASE_URL, buildUrlWithParams } from "../../api/utils.ts";
import { useQuery } from "@tanstack/react-query";

interface IFetchThingsProps {
  setData: React.Dispatch<React.SetStateAction<Thing[]>>;
}

export const FetchThings = ({ setData }: IFetchThingsProps) => {
  const thingsUrl = buildUrlWithParams(`${BASE_URL}/Things`, { '$expand': "Datastreams", "$top": 5 });
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
