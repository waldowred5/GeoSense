import { FeatureSelect } from "./FeatureSelect.tsx";
import { DatastreamSelect } from "./DatastreamSelect.tsx";
import { FaChevronRight } from "react-icons/fa6";
import { DatastreamsByFeature, Feature, Observation } from "../types.ts";
import { useState } from "react";

interface ISelectorBarProps {
  features: Feature[];
  isFeatureListLoading: boolean;
  datastreams: DatastreamsByFeature;
  setObservationsData: (data: Observation[]) => void;
  setObservationsCount: (count: number) => void;
  setObservationsLoading: (loading: boolean) => void;
}

export const SelectorBar = (
  {
    features,
    isFeatureListLoading,
    datastreams,
    setObservationsData,
    setObservationsCount,
    setObservationsLoading,
  }: ISelectorBarProps) => {
  const [selectedFeature, setSelectedFeature] = useState<string>('');

  return (
    <div className="flex w-full items-center p-4 border-b-4 border-accent rounded-t-box gap-8">
      <FeatureSelect
        features={features}
        isLoading={isFeatureListLoading}
        selectedFeature={selectedFeature}
        setSelectedFeature={setSelectedFeature}
      />
      <div className="text-4xl pt-[32px]">
        <FaChevronRight/>
      </div>
      <DatastreamSelect
        datastreams={datastreams}
        selectedFeature={selectedFeature}
        setObservationsLoading={setObservationsLoading}
        setObservationsData={setObservationsData}
        setObservationsCount={setObservationsCount}
      />
    </div>
  );
};
