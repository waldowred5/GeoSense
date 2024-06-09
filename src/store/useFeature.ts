import { createWithEqualityFn } from 'zustand/traditional';

export type Feature = {
  '@iot.id': number;
  '@iot.selfLink': string;
  'Observations@iot.navigationLink': string;
  description: string;
  encodingType: string;
  feature: string;
  name: string;
  properties: {
    publish_yn: string;
    sen_id: string;
    type: string;
  };
};

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
