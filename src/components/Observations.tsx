import { Observation } from "../types.ts";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

interface IObservationsProps {
  isLoading: boolean;
  observationsData: Observation[];
}

export const Observations = ({ observationsData, isLoading }: IObservationsProps) => {
  const [chartData, setChartData] = useState<ChartData<'line'>>({ datasets: [] });

  useEffect(() => {
    if (observationsData) {
      const data = observationsData.map((observation) => {
        return {
          x: new Date(observation.phenomenonTime).toISOString().slice(0, -8),
          y: observation.result,
        };
      });

      const sortedData = data.sort((a, b) => {
        return new Date(a.x).getTime() - new Date(b.x).getTime();
      });

      const labels = sortedData.map((data) => {
        // return data.x after trimming last 8 characters
        return data.x;
      });

      setChartData({
        labels,
        datasets: [{
          data: sortedData,
          borderWidth: 1
        }]
      });
    }
  }, [observationsData]);

  return (
    <div className="h-[95%] w-full relative flex items-center justify-center">
      {
        isLoading
          ? <span className="loading loading-ring loading-lg"></span>
          : <Line
            data={chartData}
            options={{
              maintainAspectRatio: false,
              scales: { y: { beginAtZero: false } },
              plugins: {
                title: { display: false },
                legend: { display: false },
              }
            }}
          />
      }
    </div>
  );
};
