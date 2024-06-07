import { FETCH_URL, useFetch } from "./hooks/useFetch.ts";

const App = () => {
  const {
    data: features,
    loading: featuresLoading,
    error: featuresError
  } = useFetch(FETCH_URL.FEATURES);

  if (featuresLoading) {
    console.log('Loading features...');
  } else if (featuresError) {
    console.error('Error loading features:', featuresError);
  } else if (features) {
    console.log('Features loaded:', features);
  }

  return (
    <>
      <h1>BGS Sensors Plotter</h1>
    </>
  );
}

export default App
