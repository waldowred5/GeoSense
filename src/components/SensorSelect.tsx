import { useFeature } from "../store/useFeature.ts";
import { useSensor } from "../store/useSensor.ts";
import { useGetObservationsByFeature } from "../hooks/useFetch.ts";

export const sensorSelectLabel = '...then select a Sensor';

export const SensorSelect = () => {
  const selectedFeatureObservationsLink = useFeature(state => state.selectedFeatureObservationsLink);
  const {
    selectedSensorObservationsLink,
    updateSelectedSensor
  } = useSensor((state) => {
    return {
      selectedSensorObservationsLink: state.selectedSensorObservationsLink,
      updateSelectedSensor: state.updateSelectedSensor,
    }
  });

  const sensors = useGetObservationsByFeature(selectedFeatureObservationsLink);

  if (sensors.error) {
    console.error('Error loading sensors:', sensors.error);
    // TODO: Display error message to user and add retry button
  }

  if (sensors.loading) {
    // TODO: Add loading spinner with 200ms delay to avoid quick load flickering
    return (
      <div className="selector-container">
        <label className="label p-0">{sensorSelectLabel}</label>
        <select
          className="selector"
          value={''}
          onChange={() => {
          }}
          disabled
        >
          <option>Loading sensors...</option>
        </select>
      </div>
    )
  }

  if (!sensors.loading && sensors.data.length === 0) {
    return (
      <div className="selector-container">
        <label className="label p-0">{sensorSelectLabel}</label>
        <select
          className="selector"
          value={''}
          onChange={() => {
          }}
        >
          <option>No sensors found</option>
        </select>
      </div>
    )
  }

  return (
    <div className="selector-container">
      <label className="label p-0">{sensorSelectLabel}</label>
      <select
        className="selector"
        value={selectedSensorObservationsLink}
        onChange={(e) => updateSelectedSensor({
          id: e.target.key,
          observationsLink: e.target.value,
        })}
      >
        <option value="">Select a sensor...</option>
        {
          sensors.data && sensors.data.map((sensor: any) => {
            console.log(sensor);

            return (
              <option key={sensor['@iot.id']} value={sensor['Datastream@iot.navigationLink']}>
                {sensor['@iot.id']}
              </option>
            )
          })
        }
      </select>
    </div>
  )
}
