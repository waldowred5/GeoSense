import { useFeature } from "../store/useFeature.ts";
import { useGetObservations } from "../hooks/useFetch.ts";
import { useState } from "react";

export const SensorSelect = () => {
  const { selectedFeature } = useFeature();
  const [selectedSensor, setSelectedSensor] = useState<string>('');

  const sensors = useGetObservations(selectedFeature)

  if (sensors.error) {
    console.error('Error loading sensors:', sensors.error);
    // TODO: Display error message to user and add retry button
  }

  if (sensors.loading) {
    // TODO: Add loading spinner with 200ms delay to avoid quick load flickering
    return (
      <select>
        <option>Loading sensors...</option>
      </select>
    )
  }

  return (
    <select
      value={selectedSensor}
      onChange={(e) => setSelectedSensor(e.target.value)}
    >
      <option value="">Select a sensor...</option>
      {
        sensors.data && sensors.data.map((sensor: any) => (
          <option key={sensor["@iot.id"]} value={sensor["@iot.id"]}>
            {sensor["@iot.id"]}
          </option>
        ))
      }
    </select>
  )
}