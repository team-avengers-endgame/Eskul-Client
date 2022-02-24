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
<<<<<<< HEAD
import Contacts from "./Components/Contacts/Contacts";
=======
<<<<<<< HEAD
import BasicSection from "./Components/SchoolDetails/SchDetailsLayout/ContentBar/BasicSection/BasicSection";
=======
>>>>>>> c81b5a0ffd6a6d60658815eee4f9b0698caa3912
import AddABook from "./Components/Dashboard/AddABook/AddABook";
import DashboardBooks from "./Components/Dashboard/Books/Books";
>>>>>>> 42b5ac4dae4edc95d2429f1fdd70836c83eefc5b

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
          <Route path="contacts" element={<Contacts/>}  />       
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="schools" element={<Schools />} />
<<<<<<< HEAD
          <Route path="schDetails" element={<SchoolDetails />} />
         
         

=======
          <Route path="details/:id" element={<SchoolDetails />} />
          <Route path="basic" element={<BasicSection />} />
>>>>>>> c81b5a0ffd6a6d60658815eee4f9b0698caa3912
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
