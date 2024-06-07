import { createWithEqualityFn } from 'zustand/traditional';

interface EdgeState {
  selectedFeature: string,
  updateSelectedFeature: (id: string) => void,
}

export const useFeature = createWithEqualityFn<EdgeState>((set) => {
  return {
    selectedFeature: '',
    updateSelectedFeature: (id) => {
      set(() => {
        return {
          selectedFeature: id,
        };
      });
    },
  };
});
