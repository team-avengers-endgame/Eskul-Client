import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./Components/Context/AuthProvider";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import About from "./Components/About/About/About";
import AOS from "aos";
import 'aos/dist/aos.css';
import Dashboard from "./Components/Dashboard/Dashboard";
import SchoolDetails from "./Components/SchoolDetails/SchoolDetails";
import Schools from "./Components/Schools/Schools/Schools";
import AddASchool from "./Components/Dashboard/AddASchool/AddASchool";
import DashboardSchools from "./Components/Dashboard/Schools/Schools";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import AddedSchoolDetailsForm from "./Components/Dashboard/Schools/AddedSchoolDetailsForm/AddedSchoolDetailsForm";
import AddABook from "./Components/Dashboard/AddABook/AddABook";
import DashboardBooks from "./Components/Dashboard/Books/Books";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease",
    });
  });

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="schools" element={<Schools />} />
          <Route path="schDetails" element={<SchoolDetails />} />

          <Route path="dashboard" element={<Dashboard />}>
            <Route path="addASchool" element={<AddASchool />} />
            <Route path="schools" element={<DashboardSchools />} />
            <Route path="addABook" element={<AddABook />} />
            <Route path="books" element={<DashboardBooks />} />
            <Route
              path="addedSchoolDetailsForm/:id"
              element={<AddedSchoolDetailsForm />}
            />

            <Route path="makeAdmin" element={<MakeAdmin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
