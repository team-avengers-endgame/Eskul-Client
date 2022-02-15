import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Faq from "./Faq/Faq";
import Features from "./Features/Features";
import Subscribe from "./Subscribe/Subscribe";

const Home = () => {
  return (
    <div className=" overflow-hidden">
      <Navigation></Navigation>
      <Banner></Banner>
      <Features></Features>

      <ContactUs></ContactUs>
      <Subscribe></Subscribe>
      <Faq />
      <Footer></Footer>
    </div>
  );
};

export default Home;
