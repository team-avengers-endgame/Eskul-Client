import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
