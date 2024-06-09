import { FeatureSelect } from "./FeatureSelect.tsx";
import { SensorSelect } from "./SensorSelect.tsx";
import { FaChevronRight } from "react-icons/fa6";
import { Feature } from "../types.ts";

interface ISelectorBarProps {
  features: Feature[];
  isPending: boolean;
  isError: boolean;
}

export const SelectorBar = ({ features , isPending, isError }: ISelectorBarProps) => {
  return (
    <div className="flex w-full items-center p-4 border-b-4 border-accent rounded-t-box gap-8">
      <FeatureSelect features={features} disabled={isPending || isError}/>
      <div className="text-4xl pt-[32px]">
        <FaChevronRight/>
      </div>
      <SensorSelect/>
    </div>
  );
};
