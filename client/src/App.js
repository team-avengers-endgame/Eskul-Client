import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About/About";
import Home from "./Components/Home/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
