import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./Components/Context/AuthProvider";

import Home from './Components/Home/Home/Home';
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import About from "./Components/About/About/About";
import AOS from 'aos';
import Dashboard from "./Components/Dashboard/Dashboard";
// import Contacts from "./Components/Contacts/Contacts";


function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease'
    });
  });

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          {/* <Route path="contacts" element={<Contacts></Contacts>} /> */}
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
