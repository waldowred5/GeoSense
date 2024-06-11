import { Observation } from "../types.ts";
import { useEffect, useState } from "react";

interface IStatsBarProps {
  observationsData: Observation[];
  observationsCount: number;
  observationsLoading: boolean;
}

export const StatsBar = ({ observationsData, observationsCount, observationsLoading }: IStatsBarProps) => {
  const [dataPointsCount, setDataPointsCount] = useState<string>('--');
  const [minValue, setMinValue] = useState<string>('--');
  const [maxValue, setMaxValue] = useState<string>('--');
  const [meanValue, setMeanValue] = useState<string>('--');

  useEffect(() => {
    if (observationsLoading) {
      setDataPointsCount('--');
      setMinValue('--');
      setMaxValue('--');
      setMeanValue('--');
    }
  }, [observationsLoading]);

  useEffect(() => {
    if (observationsData.length > 0) {
      setDataPointsCount(observationsCount.toString());

      const minVal = Math.min(...observationsData.map(observation => observation.result));
      setMinValue(minVal.toString());
      setMaxValue(Math.max(...observationsData.map(observation => observation.result)).toString());

      const decimalIndex = minVal.toString().indexOf('.');
      const normalisedDecimalPlaces = decimalIndex === -1 ? 0 : decimalIndex;
      const decimalPlaces = minVal.toString().length - normalisedDecimalPlaces - 1;
      const meanValue = observationsData.reduce((acc, observation) => {
        return acc + observation.result;
      }, 0) / observationsData.length;
      const trimmedMeanValue = Number(meanValue.toFixed(decimalPlaces));

      setMeanValue(trimmedMeanValue.toString());
    }
  }, [observationsData, observationsCount]);

  return (
    <div className="flex justify-around border-b-4 border-accent p-4">
      <h3 className="font-semibold">DATA POINTS: { dataPointsCount }</h3>
      <h3 className="font-semibold">MIN: { minValue }</h3>
      <h3 className="font-semibold">MAX: { maxValue }</h3>
      <h3 className="font-semibold">MEAN: { meanValue }</h3>
    </div>
  );
};
