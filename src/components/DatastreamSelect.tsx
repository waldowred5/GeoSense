import { useQuery } from "@tanstack/react-query";
import { buildUrlWithParams } from "../api/utils.ts";
import { useEffect, useState } from "react";
import { DatastreamsByFeature, EntityData, Observation } from "../types.ts";

type OptionValue = { id: number, url: string }

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
  const [selectedDatastream, setSelectedDatastreamUrl] = useState<string>('');
  const [observationsUrl, setObservationsUrl] = useState<string>('');
  const [datastreamId, setDatastreamId] = useState<number>(0);
  const [datastreamUrl, setDatastreamUrl] = useState<string>('');

  const {
    isPending,
    isError,
    isStale,
    data,
  } = useQuery<EntityData<Observation>>({
    queryKey: [`observations:${datastreamId}`, datastreamUrl],
    queryFn: () => fetch(observationsUrl).then((res) => res.json()),
    enabled: !!datastreamUrl,
  });

  useEffect(() => {
    if (selectedDatastream) {
      const { id, url } = JSON.parse(selectedDatastream) as OptionValue;
      setDatastreamId(id);
      setDatastreamUrl(url);
    }
  }, [selectedDatastream]);

  useEffect(() => {
    if (selectedDatastream) {
      const { url } = JSON.parse(selectedDatastream) as OptionValue;
      const urlWithParams = buildUrlWithParams(url, { '$count': true, '$top': 500, '$filter': `year(phenomenonTime) eq 2023` });
      setObservationsUrl(urlWithParams);
    }
  }, [selectedDatastream]);

  useEffect(() => {
    if (isStale && isPending) {
      setObservationsLoading(true);
    }

    if (!isPending && !isError) {
      setObservationsCount(data['@iot.count'] || 0);
      setObservationsData(data.value);
      setObservationsLoading(false);
    }
  }, [data, isPending, isStale, isError, setObservationsData, setObservationsCount, setObservationsLoading]);

  return (
    <div className="selector-container">
      <label className="label p-0">...then select a Datastream</label>
      <select
        className="selector"
        value={selectedDatastream}
        onChange={(e) => setSelectedDatastreamUrl(e.target.value)}
        disabled={!selectedFeature}
        data-testid="datastream-select"
      >
        <option value="">Select a datastream...</option>
        {
          datastreams[selectedFeature] && datastreams[selectedFeature].map((datastream) => {
            const optionData = { id: datastream['@iot.id'], url: datastream['Observations@iot.navigationLink'] };
            const optionValue = JSON.stringify(optionData);

            return (
              <option
                key={datastream['@iot.id']}
                value={optionValue}
              >
                {datastream.description}
              </option>
            );
          })
        }
      </select>
    </div>
  );
};
