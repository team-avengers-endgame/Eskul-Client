import React from "react";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import Banner from "./Banner/Banner";
import ContactUs from "./ContactUs/ContactUs";
import Features from "./Features/Features";
import Partners from "./Partners/Partners";
import Subscribe from "./Subscribe/Subscribe";
import WhyUs from "./WhyUs/WhyUs";

const Home = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Banner></Banner>
      <Features></Features>
      <WhyUs></WhyUs>
      <ContactUs></ContactUs>
      <Subscribe></Subscribe>
      <Partners></Partners>
      <Footer></Footer>
    </div>
  );
};

export default Home;
