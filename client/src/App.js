import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
