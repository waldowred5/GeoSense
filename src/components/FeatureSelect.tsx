import { Feature } from "../types.ts";

interface IFeatureSelectProps {
  features: Feature[];
  isLoading: boolean;
  selectedFeature: string;
  setSelectedFeature: (feature: string) => void;
}

export const FeatureSelect = ({ features, isLoading, selectedFeature, setSelectedFeature }: IFeatureSelectProps) => {
  return (
    <div className="selector-container">
      <label className="label p-0">
        {
          isLoading || features.length === 0
            ? <div className="flex gap-x-3">
              <span>First, select a Feature...</span>
              <span className="loading loading-ring loading-xs"></span>
            </div>
            : 'First, select a Feature...'
        }
      </label>
      <select
        className="selector"
        value={selectedFeature}
        onChange={(e) => {
          setSelectedFeature(e.target.value);
        }}
        disabled={isLoading || features.length === 0}
      >
        <option value="">Select a feature...</option>
        {
          features && features.map((feature: Feature) => {
            return (
              <option key={feature['@iot.id']} value={feature['@iot.id']}>
                {`${feature.name} - ${feature['@iot.id']}`}
              </option>
            );
          })
        }
      </select>
    </div>
  );
};
