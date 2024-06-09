import React, { useEffect } from "react";
import { EntityData, Feature } from "../../types.ts";
import { BASE_URL, buildUrlWithParams } from "../../api/utils.ts";
import { useQuery } from "@tanstack/react-query";

interface IFetchFeaturesProps {
  setData: React.Dispatch<React.SetStateAction<Feature[]>>;
}

export const FetchFeatures = ({ setData }: IFetchFeaturesProps) => {
  const featuresUrl = buildUrlWithParams(`${BASE_URL}/FeaturesOfInterest`, { '$filter': "feature/type eq 'Point'", "$top": 5 });
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
      const sortedFeatures = data.value.sort((a, b) => {
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
