import { Header } from "./Header.tsx";
import { StatsBar } from "./StatsBar.tsx";
import { Observations } from "./Observations.tsx";
import { useEffect, useState } from "react";
import { Datastream, DatastreamsByFeature, Feature, Thing } from "../types.ts";
import { FetchThings } from "./fetch/FetchThings.tsx";
import { FetchFeatures } from "./fetch/FetchFeatures.tsx";
import { FetchDatastreams } from "./fetch/FetchDatastreams.tsx";

export const Dashboard = () => {
  const [things, setThings] = useState<Thing[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [datastreams, setDatastreams] = useState<Datastream[]>([]);
  const [datastreamsByFeature, setDatastreamsByFeature] = useState<DatastreamsByFeature>({});

  useEffect(() => {
    if (things.length > 0 && features.length > 0) {
      const featureMap = features.reduce((acc, feature) => {
        const id = feature['@iot.id'].toString();
        acc[id] = [] as Datastream[];

        return acc;
      }, {} as DatastreamsByFeature);

      // const datastreams = things.reduce((acc, thing) => {
      //   featureMap[thing.]
      // }

      setDatastreamsByFeature(featureMap);
    }
  }, [things, features]);

  useEffect(() => {
    console.log('things', things);
    console.log('features', features);
    console.log('datastreams', datastreams);
    console.log('datastreamsByFeature', datastreamsByFeature);
  }, [datastreamsByFeature, things, features, datastreams]);

  return (
    <>
      <FetchThings setData={setThings} />
      <FetchFeatures setData={setFeatures} />
      <FetchDatastreams setData={setDatastreams} />
      <div className="flex items-center flex-col gap-3 w-[100vw] h-[100vh]">
        <Header/>
        <div className="flex w-[96%] h-[94%] mb-8 card shadow-xl border rounded-box bg-base-300">
          {/*<SelectorBar />*/}
          <StatsBar/>
          <Observations/>
        </div>
      </div>
    </>
  );
};
