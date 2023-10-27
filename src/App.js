import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Main } from "./pages/content/Main";
import { useState } from "react";

function App() {
  const [activeScreenParam, setActiveScreenParam] = useState("Overview");
  const [sidebarActive, setSidebarActive] = useState(false);
  return (
    <>
      <Navbar sidebarActive={sidebarActive} />
      <div className="flex flex-row w-[800px]">
        <Sidebar
          sidebarActive={sidebarActive}
          setSidebarActive={setSidebarActive}
          setActiveScreenParam={setActiveScreenParam}
          className="flex"
        />
        <Main activeScreenParam={activeScreenParam} className="flex flex-1" />
      </div>
    </>
  );
}

export default App;
