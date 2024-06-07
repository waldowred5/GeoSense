import { ThemeSwitcher } from "./ThemeSwitcher.tsx";

export const Header = () => {
  return (
    <div className="flex items-center bg-base-300 justify-between p-4 m-4 w-[96%] shadow-xl border rounded-box">
      <h1 className="text-3xl font-bold pl-4">BGS Sensors Plotter</h1>
      <ThemeSwitcher/>
    </div>
  )
}
