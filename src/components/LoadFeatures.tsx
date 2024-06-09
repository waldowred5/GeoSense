import { useGetFeatures } from "../hooks/useFetch.ts";
import { useFeature } from "../store/useFeature.ts";
import { useEffect } from "react";

export const LoadFeatures = () => {
  const { data, loading, error } = useGetFeatures();
  const updateFeatures = useFeature(state => state.updateFeatures);

  if (error) {
    console.error('Error loading features:', error);
  }

  if (loading) {
    console.log('Loading features...');
  }

  useEffect(() => {
    if (!loading && !error) {
      updateFeatures(data);
    }
  }, [data]);

  return <></>;
}
