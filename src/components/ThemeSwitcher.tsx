import { LuMoonStar } from "react-icons/lu";
import { FiSun } from "react-icons/fi";

interface IThemeSwitcherProps {
  setChartTheme: (theme: 'light' | 'synthwave') => void;
}

export const ThemeSwitcher = ({ setChartTheme }: IThemeSwitcherProps) => {
  return (
    <div className="flex space-x-0">
      <button
        className="btn btn-ghost text-2xl"
        data-set-theme="synthwave"
        data-act-class="ACTIVECLASS"
        onClick={() => setChartTheme('synthwave')}
      >
        <LuMoonStar  />
      </button>
      <div className="divider divider-horizontal divider-accent"></div>
      <button
        className="btn btn-ghost text-2xl"
        data-set-theme="light"
        data-act-class="ACTIVECLASS"
        onClick={() => setChartTheme('light')}
      >
        <FiSun />
      </button>
    </div>
  );
};
