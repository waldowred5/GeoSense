import { useFeature } from "../store/useFeature.ts";
import { useSensor } from "../store/useSensor.ts";
import { useQuery } from "@tanstack/react-query";
import { buildUrlWithParams } from "../api/utils.ts";
import { useEffect, useState } from "react";

export const sensorSelectLabel = '...then select a Sensor';

export type Observation = {
  '@iot.id': number;
  phenomenonTime: string;
  parameters: {
    sen_id: number;
    publish_yn: string;
  };
  result: number;
  resultTime: string;
  resultQuality: {
    reason: string;
    status: string;
    quality: string;
    event_id: number;
  };
  '@iot.selfLink': string;
  'Datastream@iot.navigationLink': string;
  'FeatureOfInterest@iot.navigationLink': string;
  'MultiDatastream@iot.navigationLink': string;
};

type ObservationData = {
  value: Observation[];
};

export const SensorSelect = () => {
  const [observations, setObservations] = useState<Observation[]>([]);

  const selectedFeatureObservationsLink = useFeature(state => state.selectedFeatureObservationsLink);
  const {
    selectedSensorObservationsLink,
    updateSelectedSensor
  } = useSensor((state) => {
    return {
      selectedSensorObservationsLink: state.selectedSensorObservationsLink,
      updateSelectedSensor: state.updateSelectedSensor,
    };
  });

  const observationsUrl = buildUrlWithParams(selectedFeatureObservationsLink, { '$top': 5 });
  const { isLoading, isError, error, data } = useQuery<ObservationData>({
    queryKey: ['observations'],
    queryFn: () => fetch(observationsUrl).then((res) => res.json()),
  });

  useEffect(() => {
    if (data?.value && data?.value.length > 0) {
      const sortedObservations = data.value.sort((a, b) => {
        return a['@iot.id'] - b['@iot.id'];
      });

      setObservations(sortedObservations);
    }
  }, [data]);

  if (isError) {
    console.error('Error loading sensors:', error);
    // TODO: Display error message to user and add retry button
  }

  if (isLoading || data?.value.length === 0) {
    // TODO: Add loading spinner with 200ms delay to avoid quick load flickering
    return (
      <div className="selector-container">
        <label className="label p-0">{sensorSelectLabel}</label>
        <select
          className="selector"
          value={''}
          onChange={() => {}}
          disabled={isLoading}
        >
          <option>{isLoading ? 'Loading sensors...' : 'No sensors found'}</option>
        </select>
      </div>
    );
  }

  return (
    <div className="selector-container">
      <label className="label p-0">{sensorSelectLabel}</label>
      <select
        className="selector"
        value={selectedSensorObservationsLink}
        onChange={(e) => updateSelectedSensor(e.target.value)}
      >
        <option value="">Select a sensor...</option>
        {
          observations && observations.map((observation) => {
            console.log(observation);
            return (
              <option key={observation['@iot.id']} value={observation['Datastream@iot.navigationLink']}>
                {observation['@iot.id']}
              </option>
            );
          })
        }
      </select>
    </div>
  );
};
