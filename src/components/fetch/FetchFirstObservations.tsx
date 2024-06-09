import React, { useEffect } from "react";
import { EntityData, Observation } from "../../types.ts";
import { BASE_URL, buildUrlWithParams } from "../../api/utils.ts";
import { useQuery } from "@tanstack/react-query";

interface IFetchFirstObservationProps {
  setData: React.Dispatch<React.SetStateAction<Observation[]>>;
  datastreamId: number;
}

export const FetchFirstObservations = ({ setData, datastreamId }: IFetchFirstObservationProps) => {
  const observationsUrl = buildUrlWithParams(`${BASE_URL}/Datastreams(${datastreamId})/Observations`, { '$top': 1 });
  const {
    isPending,
    isError,
    data,
  } = useQuery<EntityData<Observation>>({
    queryKey: ['firstObservation'],
    queryFn: () => fetch(observationsUrl).then((res) => res.json()),
  });

  useEffect(() => {
    if (!isPending && !isError) {
      const x = 0;

      setData(x);
    }
  }, [data, isPending, isError, setData]);

  return (
    <></>
  );
};
