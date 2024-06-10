import { useEffect } from "react";
import { Datastream, EntityData } from "../../types.ts";
import { BASE_URL, buildUrlWithParams } from "../../api/utils.ts";
import { useQueries, useQuery } from "@tanstack/react-query";

interface IFetchDatastreamsProps {
  setData: (data: Datastream[]) => void;
}

export const FetchDatastreams = ({ setData }: IFetchDatastreamsProps) => {
  const datastreamsUrl = buildUrlWithParams(`${BASE_URL}/Datastreams`, { '$count': true, "$filter": "properties/data_type ne 'Information'" });
  const {
    isPending,
    isError,
    data,
  } = useQuery<EntityData<Datastream>>({
    queryKey: ['datastreams'],
    queryFn: () => fetch(datastreamsUrl)
      .then((res) => {
        return res.json();
      }),
  });

  const fetchFirstObservation = async (datastreamId: number) => {
    const observationsUrl = buildUrlWithParams(
      `${BASE_URL}/Datastreams(${datastreamId})/Observations`,
      { '$top': 1, "$expand": "FeatureOfInterest" },
    );
    const res = await fetch(observationsUrl);

    return res.json();
  };

  const firstObservationQueries = useQueries({
    queries: data?.value ? data.value.map((datastream) => {
      return {
        queryKey: ['firstObservation', datastream['@iot.id']],
        queryFn: () => fetchFirstObservation(datastream['@iot.id']),
        enabled: !isError || !isPending,
      };
    }) : [],
  });

  useEffect(() => {
    if (
      isPending || isError ||
      firstObservationQueries.length !== data?.value.length ||
      firstObservationQueries.some((query) => {
        return query.isLoading || query.isError;
      })
    ) {
      return;
    }

    // TODO: Fix typing here
    firstObservationQueries.forEach((query) => {
      let datastreamId = '';

      if ('@iot.nextLink' in query?.data) {
        datastreamId = query?.data['@iot.nextLink'].match(/Datastreams\((\d+)\)/)[1] || '';

        data?.value.map((ds) => {
          if (ds['@iot.id'].toString() === datastreamId) {
            ds.FeatureOfInterest = query.data.value[0].FeatureOfInterest;
          }

          return ds;
        });
      }
    });

    setData(data?.value);
  }, [firstObservationQueries, data, isPending, isError, setData]);

  return (
    <></>
  );
};
