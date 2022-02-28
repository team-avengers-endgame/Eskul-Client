import { Suspense, useEffect, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import 'aos/dist/aos.css';
import AuthProvider from "./Components/Context/AuthProvider";
import Home from "./Components/Home/Home/Home";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import About from "./Components/About/About/About";
import SchoolDetails from "./Components/SchoolDetails/SchoolDetails";
import Schools from "./Components/Schools/Schools/Schools";
import AddASchool from "./Components/Dashboard/AddASchool/AddASchool";
import DashboardSchools from "./Components/Dashboard/Schools/Schools";
import MakeAdmin from "./Components/Dashboard/MakeAdmin/MakeAdmin";
import AddedSchoolDetailsForm from "./Components/Dashboard/Schools/AddedSchoolDetailsForm/AddedSchoolDetailsForm";
import BasicSection from "./Components/SchoolDetails/SchDetailsLayout/ContentBar/BasicSection/BasicSection";
import AddABook from "./Components/Dashboard/AddABook/AddABook";
import DashboardBooks from "./Components/Dashboard/Books/Books";
import Contacts from "./Components/Contacts/Contacts";
import OnlineTuitionTeacherAdd from "./Components/Dashboard/OnlineTutionTuitionAdd/OnlineTuitionTeacherAdd";
import Teachers from "./Components/Teachers/Teachers";
import BookList from "./Components/BookList/BookList";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import LoadingPage from "./Components/Shared/LoadingPage/LoadingPage";
import AdminRoute from "./Components/Dashboard/AdminRoute/AdminRoute";
import EditBooks from "./Components/Dashboard/Books/EditBooks/EditBooks";
const Dashboard = lazy(() => { return new Promise(resolve => setTimeout(resolve, 1000)).then(() => import("./Components/Dashboard/Dashboard")) });
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
          {/*  */}
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="books" element={<BookList />} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="schDetails" element={<SchoolDetails />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="schools" element={<Schools />} />
          <Route path="details/:id" element={
            <PrivateRoute><SchoolDetails /></PrivateRoute>} />
          <Route path="basic" element={<BasicSection />} />


          {/****************** Dashboard route  start******************/}
          <Route path="dashboard" element={
            <Suspense fallback={<LoadingPage />}>
              {/* <AdminRoute> */}
              <Dashboard />
              {/* </AdminRoute> */}
            </Suspense>
          }>

            <Route path="addASchool" element={
              <AdminRoute>
                <AddASchool />
              </AdminRoute>
            } />

            <Route path="schools" element={
              <AdminRoute>
                <DashboardSchools />
              </AdminRoute>
            } />

            <Route path="addABook" element={
              // <AdminRoute>
              <AddABook />
              // </AdminRoute>
            } />

            <Route path="books" element={
              <AdminRoute>
                <DashboardBooks />
              </AdminRoute>
            } />

            <Route path="addOnlineTuition" element={
              <AdminRoute>
                <OnlineTuitionTeacherAdd />
              </AdminRoute>
            } />

            <Route
              path="addedSchoolDetailsForm/:id"
              element={
                <AdminRoute>
                  <AddedSchoolDetailsForm />
                </AdminRoute>
              } />
            <Route
              path="editBooks/:id"
              element={
                // <AdminRoute>
                <EditBooks />
                // </AdminRoute>
              } />

            <Route path="makeAdmin" element={
              <AdminRoute>
                <MakeAdmin />
              </AdminRoute>
            } />
          </Route>
          {/***************** Dashboard route  End*****************/}
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;