import { FeatureSelect } from "./FeatureSelect.tsx";
import { SensorSelect, sensorSelectLabel } from "./SensorSelect.tsx";
import { FaChevronRight } from "react-icons/fa6";
import { useFeature } from "../store/useFeature.ts";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL, buildUrlWithParams } from "../api/utils.ts";
import { useEffect, useState } from "react";

export type Feature = {
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
};

type FeatureData = {
  value: Feature[];
};

export const SelectorBar = () => {
  const [features, setFeatures] = useState<Feature[]>([]);

  const selectedFeatureObservationsLink = useFeature(state => state.selectedFeatureObservationsLink);

  // Queries
  const featuresUrl = buildUrlWithParams(`${BASE_URL}/FeaturesOfInterest`, { '$filter': "feature/type eq 'Point'" });
  const { isPending, isError, data } = useQuery<FeatureData>({
    queryKey: ['features'],
    queryFn: () => fetch(featuresUrl).then((res) => res.json()),
  });

  useEffect(() => {
    if (data?.value && data?.value.length > 0) {
      const sortedFeatures = data.value.sort((a, b) => {
        if (`${a.name} - ${a['@iot.id']}` < `${b.name} - ${b['@iot.id']}`) {
          return -1;
        }

        if (`${a.name} - ${a['@iot.id']}` > `${b.name} - ${b['@iot.id']}`) {
          return 1;
        }

        return 0;
      });

      setFeatures(sortedFeatures);
    }
  }, [data]);

  return (
    <div className="flex w-full items-center p-4 border-b-4 border-accent rounded-t-box gap-8">
      <FeatureSelect features={features} disabled={isPending || isError} />
      <div className="text-4xl pt-[32px]">
        <FaChevronRight />
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
                onChange={() => {}}
                disabled
              ></select>
            </div>
          )
      }
    </div>
  );
};
