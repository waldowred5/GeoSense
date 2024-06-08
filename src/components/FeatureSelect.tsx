import { useFeature } from "../store/useFeature.ts";

type Feature = {
  '@iot.id': number;
  '@iot.selfLink': string;
  'Observations@iot.navigationLink': string;
  description: string;
  encodingType: string;
  feature: string;
  name: string;
  properties: {
    publish_yn: string;
    sen_id: string;
    type: string;
  };
}

interface IFeatureSelectProps {
  features: Feature[];
  loading: boolean;
  error: any; // TODO: Type error
}

// Future Improvement: Sort features alphabetically and/or add filtering
export const FeatureSelect = ({ features, loading, error }: IFeatureSelectProps) => {
  const { selectedFeatureId, selectedFeatureObservationsLink, updateSelectedFeature } = useFeature();

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
        disabled={loading || !!error || false}
      >
        <option value="">Select a feature...</option>
        {
          features && features.map((feature: any) => (
            <option key={feature['@iot.id']} value={feature['Observations@iot.navigationLink']}>
              {`${feature.name} - ${feature['@iot.id']}`}
            </option>
          ))
        }
      </select>
    </div>
  )
}
