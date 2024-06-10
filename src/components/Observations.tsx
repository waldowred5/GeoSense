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
  ChartData,
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
  chartTheme: 'light' | 'synthwave';
}

export const Observations = ({ observationsData, isLoading, chartTheme }: IObservationsProps) => {
  const [chartData, setChartData] = useState<ChartData<'line', { x: string; y: number; }[]>>({ datasets: [] });

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
        return data.x;
      });

      setChartData({
        labels,
        datasets: [{
          data: sortedData,
          borderWidth: 1,
          fill: false,
          pointStyle: 'circle',
          pointRadius: 1,
          borderColor: chartTheme === 'light' ? '#FF00D3' : '#828CF8',
          pointBackgroundColor: chartTheme === 'light' ? '#683FFF' : '#319ACC',
          pointBorderColor: chartTheme === 'light' ? '#683FFF' : '#319ACC',
        }],
      });
    }
  }, [observationsData]);

  useEffect(() => {
    setChartData({
      ...chartData,
      datasets: chartData.datasets.map((dataset) => ({
        ...dataset,
        borderColor: chartTheme === 'light' ? '#FF00D3' : '#828CF8',
        pointBackgroundColor: chartTheme === 'light' ? '#683FFF' : '#319ACC',
        pointBorderColor: chartTheme === 'light' ? '#683FFF' : '#319ACC',
    })) });
  }, [chartTheme]);

  return (
    <div className="h-[95%] w-full relative flex items-center justify-center">
      {
        isLoading
          ? <span className="loading loading-ring loading-lg"></span> :
          observationsData.length === 0 ? <h3>No data available</h3> :
          <Line
            data={chartData}
            options={{
              maintainAspectRatio: false,
              scales: {
                x: {
                  grid: {
                    color: chartTheme === 'light' ? '#6A6A6A' : '#5C5D5E'
                  },
                },
                y: {
                  beginAtZero: false,
                  grid: {
                    color: chartTheme === 'light' ? '#6A6A6A' : '#5C5D5E'
                  },
                }
              },
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
