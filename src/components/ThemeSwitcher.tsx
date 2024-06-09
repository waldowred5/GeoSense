import { LuMoonStar } from "react-icons/lu";
import { FiSun } from "react-icons/fi";

export const ThemeSwitcher = () => {
  return (
    <div className="flex space-x-0">
      <button className="btn btn-ghost text-2xl" data-set-theme="synthwave" data-act-class="ACTIVECLASS">
        <LuMoonStar  />
      </button>
      <div className="divider divider-horizontal divider-accent"></div>
      <button className="btn btn-ghost text-2xl" data-set-theme="light" data-act-class="ACTIVECLASS">
        <FiSun />
      </button>
    </div>
  );
};
