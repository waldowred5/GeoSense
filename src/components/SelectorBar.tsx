import { FeatureSelect } from "./FeatureSelect.tsx";
import { SensorSelect, sensorSelectLabel } from "./SensorSelect.tsx";
import { FaAnglesRight, FaCaretRight, FaChevronRight } from "react-icons/fa6";
import { useFeature } from "../store/useFeature.ts";

export const SelectorBar = ({ features, featuresLoading, featuresError }: any) => {
  const { selectedFeatureObservationsLink } = useFeature();

  return (
    <div className="flex w-full items-center p-4 border-b-4 border-accent rounded-t-box gap-8">
      <FeatureSelect features={features} loading={featuresLoading} error={featuresError}/>
      <div className="text-4xl pt-[32px]">
        <FaChevronRight />
        {/*<FaCaretRight />*/}
        {/*<FaAnglesRight/>*/}
      </div>
      {
        selectedFeatureObservationsLink
          ? <SensorSelect/>
          : ( // TODO: Simplify this component after implementing hypermedia link access
            <div className="selector-container">
              <label className="label p-0">{sensorSelectLabel}</label>
              <select
                className="selector"
                value={''}
                onChange={() => {
                }}
                disabled
              ></select>
            </div>
          )
      }
    </div>
  )
}
