import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { Header } from "./components/Header.tsx";
import { SelectorBar } from "./components/SelectorBar.tsx";
import { useGetFeatures } from "./hooks/useFetch.ts";

const App = () => {
  useEffect(() => {
    themeChange(false)
  }, [])

  const {
    data: features,
    loading: featuresLoading,
    error: featuresError
  } = useGetFeatures();

  console.log(features);

  return (
    <div className="flex items-center flex-col gap-3 w-[100vw] h-[100vh]">
      <Header />
      <div className="flex w-[96%] h-[94%] mb-8 card shadow-xl border rounded-box bg-base-300">
        <SelectorBar features={features} loading={featuresLoading} error={featuresError} />
      </div>
    </div>
  );
}

export default App
