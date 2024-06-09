import { Feature, useFeature } from "../store/useFeature.ts";

export const FeatureSelect = () => {
  const {
    features,
    selectedFeatureObservationsLink,
    updateSelectedFeature
  } = useFeature((state) => {
    return {
      features: state.features,
      selectedFeatureObservationsLink: state.selectedFeatureObservationsLink,
      updateSelectedFeature: state.updateSelectedFeature,
    }
  });

  return (
    <div className="selector-container">
      <label className="label p-0">First, select a Feature...</label>
      <select
        className="selector"
        value={selectedFeatureObservationsLink}
        onChange={(e) => {
          updateSelectedFeature({
            id: e.target.key,
            observationsLink: e.target.value,
          });
        }}
        disabled={!features}
      >
        <option value="">{`Select a feature... (${features.length})`}</option>
        {
          features && features.map((feature: Feature) => {
            console.log(feature);

            return (
              <option key={feature['@iot.id']} value={feature['Observations@iot.navigationLink']}>
                {`${feature.name} - ${feature['@iot.id']}: ${feature.feature}`}
              </option>
            )})
        }
      </select>
    </div>
  )
}
