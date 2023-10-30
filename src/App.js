import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { AddConsumable } from "./pages/AddConsumable";
import { AddStepOne } from "./pages/AddStepOne";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Navigate replace to="/overview" />} />
          <Route path="/overview" element={<Home />} />
          <Route path="/overview/add" element={<AddConsumable />} />
          <Route path="/overview/add/step1" element={<AddStepOne />} />
          <Route path="/toner/add" element={<AddConsumable />} />
          <Route path="/media/add" element={<AddConsumable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
