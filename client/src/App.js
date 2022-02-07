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

function App() {
  return (
    <div className="App">
     <Router> 
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/home" element={<Home/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
         <Route path="/registration" element={<Registration/>}></Route>



         <Route path= "*" element={<NotFound/>}></Route>
       </Routes>

      </Router>
    </div>
  );
}

export default App;
