import WeatherApp from "./pages/WeatherApp";
import About from "./pages/About";
import Email from "./pages/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <div>
        <Routes>
        <Route index element={<WeatherApp />} />
          <Route path="/WeatherApp" element={<WeatherApp />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Email />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
