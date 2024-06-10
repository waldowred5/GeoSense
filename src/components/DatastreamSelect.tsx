import { useQuery } from "@tanstack/react-query";
import { buildUrlWithParams } from "../api/utils.ts";
import { useEffect, useState } from "react";
import { DatastreamsByFeature, EntityData, Observation } from "../types.ts";

interface ISensorSelectProps {
  datastreams: DatastreamsByFeature;
  selectedFeature: string;
  setObservationsData: (data: Observation[]) => void;
  setObservationsCount: (count: number) => void;
  setObservationsLoading: (loading: boolean) => void;
}

export const DatastreamSelect = (
  {
    datastreams,
    selectedFeature,
    setObservationsData,
    setObservationsCount,
    setObservationsLoading,
  }: ISensorSelectProps) => {
  const [selectedDatastreamUrl, setSelectedDatastreamUrl] = useState<string>('');
  const [observationsUrl, setObservationsUrl] = useState<string>('');

  const {
    isPending,
    isError,
    isFetching,
    data,
  } = useQuery<EntityData<Observation>>({
    queryKey: [`observations:${selectedDatastreamUrl}`, selectedDatastreamUrl],
    queryFn: () => fetch(observationsUrl).then((res) => res.json()),
    enabled: !!selectedDatastreamUrl,
  });

  useEffect(() => {
    if (selectedDatastreamUrl) {
      const url = buildUrlWithParams(selectedDatastreamUrl, { '$count': true, '$filter': `year(phenomenonTime) eq 2023` });
      setObservationsUrl(url);
    }
  }, [selectedDatastreamUrl]);

  useEffect(() => {
    if (isFetching) {
      setObservationsLoading(true);
    }

    if (!isPending && !isError) {
      setObservationsCount(data['@iot.count'] || 0);
      setObservationsData(data.value);
      setObservationsLoading(false);
    }
  }, [data, isPending, isError, isFetching, setObservationsData, setObservationsCount, setObservationsLoading]);

  return (
    <div className="selector-container">
      <label className="label p-0">...then select a Datastream</label>
      <select
        className="selector"
        value={selectedDatastreamUrl}
        onChange={(e) => setSelectedDatastreamUrl(e.target.value)}
        disabled={!selectedFeature}
      >
        <option value="">Select a datastream...</option>
        {
          datastreams[selectedFeature] && datastreams[selectedFeature].map((datastream) => {
            return (
              <option key={datastream['@iot.id']} value={datastream['Observations@iot.navigationLink']}>
                {datastream.description}
              </option>
            );
          })
        }
      </select>
    </div>
  );
};
