import { createWithEqualityFn } from 'zustand/traditional';
import { Feature } from "../components/SelectorBar.tsx";

interface FeatureState {
  features: Feature[],
  selectedFeatureId: string,
  selectedFeatureObservationsLink: string,
  updateFeatures: (features: Feature[]) => void,
  updateSelectedFeature: ({ id, observationsLink }: { id: string, observationsLink: string }) => void,
}

export const useFeature = createWithEqualityFn<FeatureState>((set) => {
  return {
    features: [],
    selectedFeatureId: '',
    selectedFeatureObservationsLink: '',

    updateFeatures: (features) => {
      set(() => {
        return {
          features,
        };
      });
    },

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
