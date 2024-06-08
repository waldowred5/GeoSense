import { FeatureSelect } from "./FeatureSelect.tsx";
import { SensorSelect, sensorSelectLabel } from "./SensorSelect.tsx";
import { useGetFeatures } from "../hooks/useFetch.ts";
import { useFeature } from "../store/useFeature.ts";

export const SelectorBar = () => {
  const {
    data: features,
    loading: featuresLoading,
    error: featuresError
  } = useGetFeatures();

  console.log(features);

  const { selectedFeature } = useFeature();

  return (
    <div className="flex w-full p-4 border-b-4 border-accent rounded-t-box gap-[10vw]">
      <FeatureSelect features={features} loading={featuresLoading} error={featuresError}/>
      {
        selectedFeature
          ? <SensorSelect />
          : ( // TODO: Simplify this component after implementing hypermedia link access
            <div className="selector-container">
              <label className="label p-0">{sensorSelectLabel}</label>
              <select
                className="selector"
                value={''}
                onChange={() => {}}
                disabled
              ></select>
            </div>
          )
      }
    </div>
  )
}
