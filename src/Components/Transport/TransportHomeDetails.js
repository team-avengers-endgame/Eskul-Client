import React from "react";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import SharedBanner from "../Shared/SharedBanner/SharedBanner";


import HowWeWorks from "./HowWeWorks";
import OurMap from "./OurMap/OurMap";
import Transport from "./Transport";
import TransportHero from "./TransportHero";

const TransportHomeDetails = () => {
  return (
    <div>
      <NavigationBar />
      <SharedBanner pageName={"Transport Facility"} />
      <TransportHero/>
      <Transport />
      <HowWeWorks/>
      <OurMap/>
      <Footer />
    </div>
  );
};

export default TransportHomeDetails;
