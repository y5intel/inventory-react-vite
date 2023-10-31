import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { AddConsumable } from "./pages/AddConsumable";
import { AddStepOne } from "./pages/AddStepOne";
import { AddStepTwo } from "./pages/AddStepTwo";
import { AddStepThree } from "./pages/AddStepThree";
import { AddStepFour } from "./pages/AddStepFour";
import { AddStepFive } from "./pages/AddStepFive";
import { AddStepSix } from "./pages/AddStepSix";

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
          <Route path="/overview/add/step2" element={<AddStepTwo />} />
          <Route path="/overview/add/step3" element={<AddStepThree />} />
          <Route path="/overview/add/step4" element={<AddStepFour />} />
          <Route path="/overview/add/step5" element={<AddStepFive />} />
          <Route path="/overview/add/step6" element={<AddStepSix />} />
          <Route path="/toner/add" element={<AddConsumable />} />
          <Route path="/media/add" element={<AddConsumable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
