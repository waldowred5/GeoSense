import { Observation } from "../types.ts";
import { useEffect, useState } from "react";

interface IStatsBarProps {
  observationsData: Observation[];
  observationsCount: number;
}

export const StatsBar = ({ observationsData, observationsCount }: IStatsBarProps) => {
  const [dataPointsCount, setDataPointsCount] = useState<number>(0);
  const [minValue, setMinValue] = useState<number>(0);
  const [maxValue, setMaxValue] = useState<number>(0);
  const [meanValue, setMeanValue] = useState<number>(0);

  useEffect(() => {
    if (observationsData.length > 0) {
      setDataPointsCount(observationsCount);

      const minVal = Math.min(...observationsData.map(observation => observation.result));
      setMinValue(minVal);
      setMaxValue(Math.max(...observationsData.map(observation => observation.result)));

      const decimalIndex = minVal.toString().indexOf('.');
      const normalisedDecimalPlaces = decimalIndex === -1 ? 0 : decimalIndex;
      const decimalPlaces = minVal.toString().length - normalisedDecimalPlaces - 1;
      const meanValue = observationsData.reduce((acc, observation) => {
        return acc + observation.result;
      }, 0) / observationsData.length;
      const trimmedMeanValue = Number(meanValue.toFixed(decimalPlaces));

      setMeanValue(trimmedMeanValue);
    }
  }, [observationsData]);

  return (
    <div className="flex justify-around border-b-4 border-accent p-4">
      <h3 className="font-semibold">DATA POINTS: {dataPointsCount ? dataPointsCount : '--'}</h3>
      <h3 className="font-semibold">MIN: {minValue ? minValue : '--'}</h3>
      <h3 className="font-semibold">MAX: {maxValue ? maxValue : '--'}</h3>
      <h3 className="font-semibold">MEAN: {meanValue ? meanValue : '--'}</h3>
    </div>
  );
};
