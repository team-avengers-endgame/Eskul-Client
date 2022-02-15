import './App.css';
import 'flowbite';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Registration/Registration';
import AuthProvider from './context/AuthProvider/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/aboutUs" element={<AboutUs />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
