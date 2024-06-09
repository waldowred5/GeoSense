// import { useFeature } from "../store/useFeature.ts";
import { Feature } from "../types.ts";

interface IFeatureSelectProps {
  features: Feature[];
  disabled: boolean;
  selectedFeature: string;
  setSelectedFeature: (feature: string) => void;
}

export const FeatureSelect = ({ features, disabled, selectedFeature, setSelectedFeature }: IFeatureSelectProps) => {
  // const {
  //   selectedFeatureObservationsLink,
  //   updateSelectedFeature
  // } = useFeature((state) => {
  //   return {
  //     selectedFeatureObservationsLink: state.selectedFeatureObservationsLink,
  //     updateSelectedFeature: state.updateSelectedFeature,
  //   };
  // });

  return (
    <div className="selector-container">
      <label className="label p-0">First, select a Feature...</label>
      <select
        className="selector"
        value={selectedFeature}
        onChange={(e) => {
          setSelectedFeature(e.target.value);
        }}
        disabled={disabled || features.length === 0}
      >
        <option value="">{`Select a feature...`}</option>
        {
          features && features.map((feature: Feature) => {
            return (
              <option key={feature['@iot.id']} value={feature['@iot.id']}>
                {`${feature.name} - ${feature['@iot.id']}`}
              </option>
            );})
        }
      </select>
    </div>
  );
};
