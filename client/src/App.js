import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/About/About/About";
import Home from "./Components/Home/Home/Home";
import AOS from 'aos';


function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease'
    });
  });

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
