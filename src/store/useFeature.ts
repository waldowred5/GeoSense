import { createWithEqualityFn } from 'zustand/traditional';

interface FeatureState {
  selectedFeatureId: string,
  selectedFeatureObservationsLink: string,
  updateSelectedFeature: ({ id, observationsLink }: { id: string, observationsLink: string }) => void,
}

export const useFeature = createWithEqualityFn<FeatureState>((set) => {
  return {
    selectedFeature: { id: '', observationsLink: '' },
    updateSelectedFeature: ({ id, observationsLink }) => {
      set(() => {
        return {
          selectedFeatureId: id,
          selectedFeatureObservationsLink: observationsLink,
        };
      });
    },
  };
});
