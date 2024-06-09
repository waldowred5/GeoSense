import { useFeature } from "../store/useFeature.ts";
import { useSensor } from "../store/useSensor.ts";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL, buildUrlWithParams } from "../api/utils.ts";
import { useEffect, useState } from "react";
import { DatastreamsByFeature, EntityData, Observation, Thing } from "../types.ts";

interface ISensorSelectProps {
  datastreams: DatastreamsByFeature;
  selectedFeature: string;
  setObservationsData: (data: Observation[]) => void;
}

export const sensorSelectLabel = '...then select a Datastream';
export const SensorSelect = ({ datastreams, selectedFeature, setObservationsData }: ISensorSelectProps) => {
  // const [observations, setObservations] = useState<Observation[]>([]);
  //
  // const selectedFeatureObservationsLink = useFeature(state => state.selectedFeatureObservationsLink);
  // const {
  //   selectedSensorObservationsLink,
  //   updateSelectedSensor
  // } = useSensor((state) => {
  //   return {
  //     selectedSensorObservationsLink: state.selectedSensorObservationsLink,
  //     updateSelectedSensor: state.updateSelectedSensor,
  //   };
  // });
  //
  // const observationsUrl = selectedFeatureObservationsLink && buildUrlWithParams(selectedFeatureObservationsLink, { '$top': 5 });
  // const { isLoading, isError, error, data } = useQuery<ObservationData>({
  //   queryKey: ['observations'],
  //   queryFn: () => fetch(observationsUrl).then((res) => res.json()),
  //   enabled: !!selectedFeatureObservationsLink,
  // });
  //
  // useEffect(() => {
  //   if (data?.value && data?.value.length > 0) {
  //     const sortedObservations = data.value.sort((a, b) => {
  //       return a['@iot.id'] - b['@iot.id'];
  //     });
  //
  //     setObservations(sortedObservations);
  //   }
  // }, [data]);
  //
  // if (isError) {
  //   console.error('Error loading sensors:', error);
  //   // TODO: Display error message to user and add retry button
  // }
  //
  // if (isLoading || observations.length === 0) {
  //   return (
  //     <div className="selector-container">
  //       <label className="label p-0">{sensorSelectLabel}</label>
  //       <select
  //         className="selector"
  //         value={''}
  //         onChange={() => {}}
  //         disabled={isLoading || !selectedFeatureObservationsLink}
  //       >
  //         {
  //           !selectedFeatureObservationsLink
  //             ? <option></option>
  //             : <option>{isLoading ? 'Loading sensors...' : 'No sensors found'}</option>
  //         }
  //       </select>
  //     </div>
  //   );
  // }

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
      <label className="label p-0">{sensorSelectLabel}</label>
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
