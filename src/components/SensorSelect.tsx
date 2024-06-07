import { useFeature } from "../store/useFeature.ts";
import { useGetObservations } from "../hooks/useFetch.ts";
import { useState } from "react";
import { Select } from "./Select.tsx";

export const sensorSelectLabel = '...then select a Sensor';

export const SensorSelect = () => {
  const { selectedFeature } = useFeature();
  const [selectedSensor, setSelectedSensor] = useState<string>('');

  const sensors = useGetObservations(selectedFeature);

  if (sensors.error) {
    console.error('Error loading sensors:', sensors.error);
    // TODO: Display error message to user and add retry button
  }

  if (sensors.loading) {
    // TODO: Add loading spinner with 200ms delay to avoid quick load flickering
    return (
      <Select value={''} updateValue={() => {}} disabled label={sensorSelectLabel}>
        <option>Loading sensors...</option>
      </Select>
    )
  }

  return (
    <Select value={selectedSensor} updateValue={setSelectedSensor} label={sensorSelectLabel}>
      <option value="">Select a sensor...</option>
      {
        sensors.data && sensors.data.map((sensor: any) => (
          <option key={sensor['@iot.id']} value={sensor['@iot.id']}>
            {sensor['@iot.id']}
          </option>
        ))
      }
    </Select>
  )
}
