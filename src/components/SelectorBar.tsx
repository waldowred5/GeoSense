import { FeatureSelect } from "./FeatureSelect.tsx";
import { SensorSelect, sensorSelectLabel } from "./SensorSelect.tsx";
import { useGetFeatures } from "../hooks/useFetch.ts";
import { useFeature } from "../store/useFeature.ts";
import { Select } from "./Select.tsx";

export const SelectorBar = () => {
  const {
    data: features,
    loading: featuresLoading,
    error: featuresError
  } = useGetFeatures();

  const { selectedFeature } = useFeature();

  return (
    <div className="flex w-full p-4 border-b-4 border-accent rounded-t-box gap-[10vw]">
      <FeatureSelect features={features} loading={featuresLoading} error={featuresError}/>
      {
        selectedFeature
          ? <SensorSelect />
          : <Select value={''} updateValue={() => {}} label={sensorSelectLabel} disabled></Select>
      }
    </div>
  )
}
