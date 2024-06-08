import { createWithEqualityFn } from 'zustand/traditional';

interface FeatureState {
  selectedFeature: string,
  selectedFeatureObservationsLink: string,
  updateSelectedFeature: (id: string) => void,
}

export const useFeature = createWithEqualityFn<FeatureState>((set) => {
  return {
    selectedFeature: '',
    selectedFeatureObservationsLink: '',
    updateSelectedFeature: (id) => {
      set(() => {
        return {
          selectedFeature: id,
        };
      });
    },
  };
});
