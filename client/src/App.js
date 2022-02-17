import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
