import { createWithEqualityFn } from 'zustand/traditional';

interface SensorState {
  selectedSensorObservationsLink: string,
  updateSelectedSensor: (observationsLink: string) => void,
}

export const useSensor = createWithEqualityFn<SensorState>((set) => {
  return {
    selectedSensorObservationsLink: '',

    updateSelectedSensor: (observationsLink) => {
      set(() => {
        return {
          selectedSensorObservationsLink: observationsLink,
        };
      });
    },
  };
});
