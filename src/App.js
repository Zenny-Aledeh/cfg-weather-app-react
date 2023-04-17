import WeatherApp from "./pages/WeatherApp";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<WeatherApp />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}
