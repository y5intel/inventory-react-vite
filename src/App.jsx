// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Home } from "./pages/home/home";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
