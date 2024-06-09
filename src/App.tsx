import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { Header } from "./components/Header.tsx";
import { SelectorBar } from "./components/SelectorBar.tsx";
import { StatsBar } from "./components/StatsBar.tsx";
import { Observations } from "./components/Observations.tsx";
import { useSensor } from "./store/useSensor.ts";
import { LoadFeatures } from "./components/LoadFeatures.tsx";

const App = () => {
  useEffect(() => {
    themeChange(false)
  }, [])

  const { selectedSensorObservationsLink } = useSensor();

  return (
    <div className="flex items-center flex-col gap-3 w-[100vw] h-[100vh]">
      <LoadFeatures />
      <Header />
      <div className="flex w-[96%] h-[94%] mb-8 card shadow-xl border rounded-box bg-base-300">
        <SelectorBar />
        <StatsBar />
        { selectedSensorObservationsLink && <Observations /> }
      </div>
    </div>
  );
}

export default App
