import { Header } from "./Header.tsx";
import { StatsBar } from "./StatsBar.tsx";
import { Observations } from "./Observations.tsx";
import { useEffect, useState } from "react";
import { Datastream, DatastreamsByFeature, Feature, Observation, Thing } from "../types.ts";
import { FetchThings } from "./fetch/FetchThings.tsx";
import { FetchFeatures } from "./fetch/FetchFeatures.tsx";
import { FetchDatastreams } from "./fetch/FetchDatastreams.tsx";
import { SelectorBar } from "./SelectorBar.tsx";
import { themeChange } from 'theme-change';

export const Dashboard = () => {
  // Theme
  const [currentTheme, setCurrentTheme] = useState<'light' | 'synthwave'>('light');
  const [chartTheme, setChartTheme] = useState<'light' | 'synthwave'>(currentTheme);

  useEffect(() => {
    themeChange(false);

    const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const savedTheme = localStorage.getItem('theme');

    if (!savedTheme) {
      localStorage.setItem('theme', deviceTheme === 'dark' ? 'synthwave' : 'light');
      document.documentElement.setAttribute('data-theme', deviceTheme === 'dark' ? 'synthwave' : 'light');
      setCurrentTheme(deviceTheme === 'dark' ? 'synthwave' : 'light');
    } else {
      document.documentElement.setAttribute('data-theme', savedTheme);
      setCurrentTheme(savedTheme as 'light' | 'synthwave');
    }
  }, []);

  useEffect(() => {
    setChartTheme(currentTheme);
  }, [currentTheme]);

  // Fetch data
  const [things, setThings] = useState<Thing[]>([]);
  const [features, setFeatures] = useState<Feature[]>([]);
  const [datastreams, setDatastreams] = useState<Datastream[]>([]);
  const [datastreamsByFeature, setDatastreamsByFeature] = useState<DatastreamsByFeature>({});
  const [filteredFeatures, setFilteredFeatures] = useState<Feature[]>([]);
  const [isFeatureListLoading, setIsFeatureListLoading] = useState(true);
  const [observationsData, setObservationsData] = useState<Observation[]>([]);
  const [observationsCount, setObservationsCount] = useState<number>(0);
  const [observationsLoading, setObservationsLoading] = useState(false);

  useEffect(() => {
    if (things.length > 0 && features.length > 0 && datastreams.length > 0) {
      const featureMap = features.reduce((acc, feature) => {
        const id = feature['@iot.id'].toString();
        acc[id] = [] as Datastream[];

        return acc;
      }, {} as DatastreamsByFeature);

      datastreams.forEach((datastream) => {
        if (datastream?.FeatureOfInterest) {
          const featureId = datastream.FeatureOfInterest['@iot.id'].toString();

          featureMap[featureId].push(datastream);
        }
      });

      const filteredFeatureMap = Object.keys(featureMap).reduce((acc, key) => {
        if (featureMap[key].length > 0) {
          acc[key] = featureMap[key];
        }

        return acc;
      }, {} as DatastreamsByFeature);

      setDatastreamsByFeature(filteredFeatureMap);
    }
  }, [things, features, datastreams]);

  useEffect(() => {
    if (features.length !== Object.keys(datastreamsByFeature).length) {
      setIsFeatureListLoading(true);

      const featureIds = Object.keys(datastreamsByFeature);
      const newFeatures = features.filter((feature) => {
        return featureIds.includes(feature['@iot.id'].toString());
      });

      setFilteredFeatures(newFeatures);
      setIsFeatureListLoading(false);
    }
  }, [datastreamsByFeature, features]);

  return (
    <>
      <FetchThings setData={setThings}/>
      <FetchFeatures setData={setFeatures}/>
      <FetchDatastreams setData={setDatastreams}/>
      <div className="flex items-center flex-col gap-3 w-[100vw] h-[100vh]">
        <Header setChartTheme={setChartTheme}/>
        <div className="flex w-[96%] h-[94%] mb-8 card shadow-xl border rounded-box bg-base-300">
          <SelectorBar
            features={filteredFeatures}
            isFeatureListLoading={isFeatureListLoading}
            datastreams={datastreamsByFeature}
            setObservationsData={setObservationsData}
            setObservationsCount={setObservationsCount}
            setObservationsLoading={setObservationsLoading}
          />
          <StatsBar
            observationsData={observationsData}
            observationsCount={observationsCount}
            observationsLoading={observationsLoading}
          />
          <div className="h-full p-4">
            <Observations
              isLoading={observationsLoading}
              chartTheme={chartTheme}
              observationsData={observationsData}
            />
          </div>
        </div>
      </div>
    </>
  );
};
