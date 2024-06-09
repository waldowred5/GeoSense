import { Feature } from "./SelectorBar.tsx";
import { useFeature } from "../store/useFeature.ts";

interface IFeatureSelectProps {
  features: Feature[];
  disabled: boolean;
}

export const FeatureSelect = ({ features, disabled }: IFeatureSelectProps) => {
  const {
    selectedFeatureObservationsLink,
    updateSelectedFeature
  } = useFeature((state) => {
    return {
      selectedFeatureObservationsLink: state.selectedFeatureObservationsLink,
      updateSelectedFeature: state.updateSelectedFeature,
    };
  });

  return (
    <div className="selector-container">
      <label className="label p-0">First, select a Feature...</label>
      <select
        className="selector"
        value={selectedFeatureObservationsLink}
        onChange={(e) => {
          updateSelectedFeature(e.target.value);
        }}
        disabled={disabled}
      >
        <option value="">{`Select a feature... (${features.length})`}</option>
        {
          features && features.map((feature: Feature) => {
            return (
              <option key={feature['@iot.id']} value={feature['Observations@iot.navigationLink']}>
                {`${feature.name} - ${feature['@iot.id']}: ${feature.feature}`}
              </option>
            );})
        }
      </select>
    </div>
  );
};
