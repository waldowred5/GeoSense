import { useEffect } from "react";
import { EntityData, Feature } from "../../types.ts";
import { BASE_URL, buildUrlWithParams } from "../../api/utils.ts";
import { useQuery } from "@tanstack/react-query";

interface IFetchFeaturesProps {
  setData: (data: Feature[]) => void;
}

export const FetchFeatures = ({ setData }: IFetchFeaturesProps) => {
  const featuresUrl = buildUrlWithParams(`${BASE_URL}/FeaturesOfInterest`, { '$count': true });
  const {
    isPending,
    isError,
    data,
  } = useQuery<EntityData<Feature>>({
    queryKey: ['features'],
    queryFn: () => fetch(featuresUrl).then((res) => res.json()),
  });

  useEffect(() => {
    if (!isPending && !isError) {
      const filteredFeatures = data.value.filter((feature) => {
        if (typeof feature.feature !== 'string' || feature.name.includes('GasClam')) {
          return feature;
        }

        return;
      });

      const sortedFeatures = filteredFeatures.sort((a, b) => {
        if (`${a.name} - ${a['@iot.id']}` < `${b.name} - ${b['@iot.id']}`) {
          return -1;
        }

        if (`${a.name} - ${a['@iot.id']}` > `${b.name} - ${b['@iot.id']}`) {
          return 1;
        }

        return 0;
      });

      setData(sortedFeatures);
    }
  }, [data, isPending, isError, setData]);

  return (
    <></>
  );
};
