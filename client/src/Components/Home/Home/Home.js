import React from "react";
import Covid from "../../Dashboard/Covid/Covid";
import Footer from "../../Shared/Footer/Footer";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
// import Subscribe from "../../Subscribe/Subscribe";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Gallery from "../Gallery/Gallery";
import NurtingEnvironment from "../NurtingEnvironment/NurtingEnvironment";
import Partners from "../Partners/Partners";
import QuickScroll from "../QuickScroll/QuickScroll";
import Testimonial from "../Testimonial/Testimonial";
import TopList from "../TopList/TopList";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <>
      <NavigationBar />
      <Banner />
      <Covid />
      <NurtingEnvironment />
      <Features />
      <WhyChooseUs />
      <TopList />
      <Testimonial />
      <Gallery />
      {/* <Subscribe/> */}
      <Partners />    
      <QuickScroll />
      <Footer />
    </>
  );
};

export default Home;
