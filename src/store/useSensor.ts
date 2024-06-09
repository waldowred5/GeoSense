import { createWithEqualityFn } from 'zustand/traditional';

interface SensorState {
  selectedSensorId: string,
  selectedSensorObservationsLink: string,
  updateSelectedSensor: ({ id, observationsLink }: { id: string, observationsLink: string }) => void,
}

export const useSensor = createWithEqualityFn<SensorState>((set) => {
  return {
    selectedSensorId: '',
    selectedSensorObservationsLink: '',

    updateSelectedSensor: ({ id, observationsLink }) => {
      set(() => {
        return {
          selectedSensorId: id,
          selectedSensorObservationsLink: observationsLink,
        };
      });
    },
  };
});
