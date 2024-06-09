import { useQuery } from "@tanstack/react-query";
import { buildUrlWithParams } from "../api/utils.ts";
import { useEffect, useState } from "react";
import { DatastreamsByFeature, EntityData, Observation } from "../types.ts";

interface ISensorSelectProps {
  datastreams: DatastreamsByFeature;
  selectedFeature: string;
  setObservationsData: (data: Observation[]) => void;
}

export const SensorSelect = ({ datastreams, selectedFeature, setObservationsData }: ISensorSelectProps) => {
  const [selectedDatastream, setSelectedDatastream] = useState<string>('');
  const [observationsUrl, setObservationsUrl] = useState<string>('');

  const {
    isPending,
    isError,
    data,
  } = useQuery<EntityData<Observation>>({
    queryKey: ['observations', selectedDatastream],
    queryFn: () => fetch(observationsUrl).then((res) => res.json()),
    enabled: !!selectedDatastream,
  });

  useEffect(() => {
    if (selectedDatastream) {
      const url = buildUrlWithParams(selectedDatastream, { '$count': true, '$top': 100 });
      setObservationsUrl(url);
    }
  }, [selectedDatastream]);

  useEffect(() => {
    if (!isPending && !isError) {
      setObservationsData(data.value);
    }
  }, [data, isPending, isError, setObservationsData]);

  return (
    <div className="selector-container">
      <label className="label p-0">...then select a Datastream</label>
      <select
        className="selector"
        value={selectedDatastream}
        onChange={(e) => setSelectedDatastream(e.target.value)}
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
