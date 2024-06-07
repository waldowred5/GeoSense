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
  const { selectedFeature, updateSelectedFeature } = useFeature();

  return (
    <select
      value={selectedFeature}
      onChange={(e) => updateSelectedFeature(e.target.value)}
    >
      <option value="">Select a feature...</option>
      {
        features && features.map((feature: any) => (
          <option key={feature["@iot.id"]} value={feature["@iot.id"]}>
            {feature.name}
          </option>
        ))
      }
    </select>
  )
}