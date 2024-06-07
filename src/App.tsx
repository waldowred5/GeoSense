import { useGetFeatures } from "./hooks/useFetch.ts";
import { FeatureSelect } from "./components/FeatureSelect.tsx";
import { SensorSelect } from "./components/SensorSelect.tsx";
import { useFeature } from "./store/useFeature.ts";

const App = () => {
  const {
    data: features,
    loading: featuresLoading,
    error: featuresError
  } = useGetFeatures();

  const { selectedFeature } = useFeature();

  return (
    <>
      <h1>BGS Sensors Plotter</h1>
      <FeatureSelect features={features} loading={featuresLoading} error={featuresError} />
      { selectedFeature && <SensorSelect /> }
    </>
  );
}

export default App
