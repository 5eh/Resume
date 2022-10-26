import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import Photography from "./components/Photography/Photography";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
