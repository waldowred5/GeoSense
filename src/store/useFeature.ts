import { createWithEqualityFn } from 'zustand/traditional';

interface FeatureState {
  selectedFeatureObservationsLink: string,
  updateSelectedFeature: (observationsLink: string) => void,
}

export const useFeature = createWithEqualityFn<FeatureState>((set) => {
  return {
    selectedFeatureObservationsLink: '',

    updateSelectedFeature: (observationsLink) => {
      set(() => {
        return {
          selectedFeatureObservationsLink: observationsLink,
        };
      });
    },
  };
});
