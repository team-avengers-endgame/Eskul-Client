import React from "react";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import SharedBanner from "../Shared/SharedBanner/SharedBanner";
import SimpleMap from "./GoogleMap/GoogleMap";
import GoogleMap from "./GoogleMap/GoogleMap";
import HowWeWorks from "./HowWeWorks";
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
 <SimpleMap/>
      <Footer />
    </div>
  );
};

export default TransportHomeDetails;
