import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import FormInput from "./form";
import List from "./List";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/form-register" exact element={<FormInput />} />
        <Route path="/list" exact element={<List />} />
      </Routes>
    </Router>
  );
}

export default App;
