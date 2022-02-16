import './App.css';
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
import Tutors from './Pages/Shared/Teacher/Tutors/Tutors';
import TutorDetails from './Pages/Shared/Teacher/TutorDetails/TutorDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/aboutUs" element={<AboutUs />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/tutors" element={<Tutors />}></Route>
            <Route path="/tutordetails/:tutorsId" element={<TutorDetails />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
