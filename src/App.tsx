import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import { Header } from "./components/Header.tsx";
import { SelectorBar } from "./components/SelectorBar.tsx";

const App = () => {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className="flex items-center flex-col gap-3 w-[100vw] h-[100vh]">
      <Header />
      <div className="flex w-[96%] h-[94%] mb-8 card shadow-xl border rounded-box bg-base-300">
        <SelectorBar />
      </div>
    </div>
  );
}

export default App
