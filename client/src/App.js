import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./Components/Context/AuthProvider";
import Home from './Components/Home/Home/Home';
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
