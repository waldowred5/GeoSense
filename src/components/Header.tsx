import { ThemeSwitcher } from "./ThemeSwitcher.tsx";

interface IHeaderProps {
  setChartTheme: (theme: 'light' | 'synthwave') => void;
}

export const Header = ({ setChartTheme }: IHeaderProps) => {
  return (
    <div className="flex items-center bg-base-300 justify-between p-4 m-4 w-[96%] shadow-xl border rounded-box">
      <h1 className="text-2xl font-bold pl-4">GeoSense: <span className="font-light">A British Geological Survey Sensors Plotter</span></h1>
      <ThemeSwitcher setChartTheme={setChartTheme} />
    </div>
  );
};
