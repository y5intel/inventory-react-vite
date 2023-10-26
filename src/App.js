import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Home } from "./pages/home/home";
import { useState } from "react";

function App() {
  const [activeScreenIdx, setActiveScreenIdx] = useState(0);
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar setActiveScreenIdx={setActiveScreenIdx} />
        <Home activeScreenIdx={activeScreenIdx} />
      </div>
    </>
  );
}

export default App;
