import { Suspense, useEffect, lazy } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
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
import BookList from "./Components/BookList/BookList";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";
import LoadingPage from "./Components/Shared/LoadingPage/LoadingPage";
import AdminRoute from "./Components/Dashboard/AdminRoute/AdminRoute";
import EditBooks from "./Components/Dashboard/Books/EditBooks/EditBooks";
import DashboardHome from "./Components/Dashboard/DashboardHome/DashboardHome";
import OnlineTuitionTeachers from "./Components/Dashboard/OnlineTutionTuitionAdd/OnlineTuitionTeachers/OnlineTuitionTeachers";
import PrivateTuor from "./Components/PrivateTutor/PrivateTutor/PrivateTuor";
import TutorDetails from "./Components/PrivateTutor/TutorDetails/TutorDetails";
import DashboardSchoolTeachers from "./Components/Dashboard/Schools/Teachers/Teachers";
import NotesPage from "./Components/Notes/NotesPage";
import BookDetails from "./Components/BookDetails/BookDetails";
import NotFound from "./Components/NotFound/NotFound";
import TeacherDetails from "./Components/TeacherDetails/TeacherDetails";
// import TransportHome from "./Components/Transport/TransportHome";
import CartContextProvider from "./Components/Context/CartContext";
import BookOrderReview from "./Components/BookOrderReview/BookOrderReview";
import Payment from "./Components/Payment/Payment";
import PaymentSuccessfullyPage from "./Components/Payment/PaymentSuccessfullyPage/PaymentSuccessfullyPage";
import useAuth from "./Hooks/useAuth";
import UserDashboardHome from "./Components/Dashboard/UserDashboardHome/UserDashoardHome";
import MyOrder from "./Components/Dashboard/UserDashboardHome/MyOrder/MyOrder";
import ManageOrder from "./Components/Dashboard/ManageOrder/ManageOrder";
import WebsiteReviewFrom from "./Components/Dashboard/UserDashboardHome/WebsiteReviewFrom/WebsiteReviewFrom";
import Donation from "./Components/Donation/Donation";
import TransportHomeDetails from "./Components/Transport/TransportHomeDetails";
import TransportHome from "./Components/Transport/TransportDetails/TransportHome";



const Dashboard = lazy(() => {
  return new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
    import("./Components/Dashboard/Dashboard")
  );
});
function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease",
    });
  });
  const { user, admin } = useAuth();
  return (

    <CartContextProvider>
      <BrowserRouter>
        <Routes>
          <Route element={App} />
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="about" element={<About />} />
          <Route path="books" element={<BookList />} />
          <Route path="books/bookOrderReview" element={<BookOrderReview />} />
          <Route path="success/:id" element={<PaymentSuccessfullyPage />} />
          <Route path="payment" element={<Payment />} />
          <Route
            path="bookDetails/:id"
            element={
              <PrivateRoute>
                <BookDetails />
              </PrivateRoute>
            }
          />
          <Route path="notes" element={<NotesPage />} />
          <Route path="schDetails" element={<SchoolDetails />} />
          <Route path="transport" element={<TransportHomeDetails />} />
          <Route path="transportDetails/:tpid" element={<TransportHome />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="schools" element={<Schools />} />
          
          <Route
            path="details/:id"
            element={
              <PrivateRoute>
                <SchoolDetails />
              </PrivateRoute>
            }
          />
          <Route path="teacherDetails/:id" element={<TeacherDetails />} />
          <Route path="basic" element={<BasicSection />} />
          <Route path="privateTutor" element={<PrivateTuor />} />
          <Route
            path="tutorDetails/:id"
            element={
              <PrivateRoute>
                <TutorDetails />
              </PrivateRoute>
            }
          />
          <Route path="donation" element={
            <PrivateRoute>
              <Donation />
            </PrivateRoute>
          } />
          {/****************** Dashboard route  start******************/}
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<LoadingPage />}>
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              </Suspense>
            }
          >
            {<Route index element={admin ?
              <DashboardHome /> :
              user.email &&
              <UserDashboardHome />} />}


            <Route
              path="addASchool"
              element={
                <AdminRoute>
                  <AddASchool />
                </AdminRoute>
              }
            />
            <Route path="notes" element={<NotesPage />} />
            <Route path="schDetails" element={<SchoolDetails />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="transport" element={<TransportHome />} />


            <Route
              path="manageOrder"
              element={
                <PrivateRoute>
                  <ManageOrder />
                </PrivateRoute>
              }
            />
            <Route path="teacherDetails/:id" element={<TeacherDetails />} />
            <Route path="basic" element={<BasicSection />} />
            <Route path="privateTutor" element={<PrivateTuor />} />
            <Route
              path="schools"
              element={
                <AdminRoute>
                  <DashboardSchools />
                </AdminRoute>
              }
            />

            <Route
              path="addABook"
              element={
                <AdminRoute>
                  <AddABook />
                </AdminRoute>
              }
            />

            <Route
              path="books"
              element={
                <AdminRoute>
                  <DashboardBooks />
                </AdminRoute>
              }
            />

            <Route
              path="addOnlineTuition"
              element={
                <AdminRoute>
                  <OnlineTuitionTeacherAdd />
                </AdminRoute>
              }
            />
            <Route
              path="onlineTuitionTeachers"
              element={
                <AdminRoute>
                  <OnlineTuitionTeachers />
                </AdminRoute>
              }
            />

            <Route
              path="addedSchoolDetailsForm/:id"
              element={
                <AdminRoute>
                  <AddedSchoolDetailsForm />
                </AdminRoute>
              }
            />
            <Route
              path="teachers/:schoolId"
              element={
                <AdminRoute>
                  <DashboardSchoolTeachers />
                </AdminRoute>
              }
            />
            <Route
              path="editBooks/:id"
              element={
                <AdminRoute>
                  <EditBooks />
                </AdminRoute>
              }
            />

            <Route
              path="makeAdmin"
              element={
                <AdminRoute>
                  <MakeAdmin />
                </AdminRoute>
              }
            />
            <Route
              path="myOrder"
              element={
                <PrivateRoute>
                  <MyOrder />
                </PrivateRoute>
              }
            />
            <Route
              path="webSiteReviewFrom"
              element={
                <PrivateRoute>
                  <WebsiteReviewFrom />
                </PrivateRoute>
              }
            />
          </Route>
          {/***************** Dashboard route  End*****************/}
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </CartContextProvider>

  );
}

export default App;
