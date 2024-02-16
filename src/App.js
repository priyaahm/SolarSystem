import z5 from "./z5.png";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Mercury from "./components/Planets/Mercury";
import Venus from "./components/Planets/Venus";
import { Routes, Route } from "react-router-dom";
import Earth from "./components/Planets/Earth";
import Mars from "./components/Planets/Mars";
import Jupiter from "./components/Planets/Jupiter";

function App() {
  return (
    <>
      <div className="image">
        <img src={z5} className="background-img" alt="space"></img>
      </div>
      <Routes>
        <Route path="homepage" element={<App />} />
        <Route path="/mercury" element={<Mercury />} />
        <Route path="/venus" element={<Venus />} />
        <Route path="/earth" element={<Earth />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/jupiter" element={<Jupiter />} />
      </Routes>
      <Header />
      <Content />
    </>
  );
}

export default App;
