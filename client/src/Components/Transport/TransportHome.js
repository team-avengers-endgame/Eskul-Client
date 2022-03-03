import React from "react";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import SharedBanner from "../Shared/SharedBanner/SharedBanner";
import Transport from "./Transport";

const TransportHome = () => {
  return (
    <div>
      <NavigationBar />
      <SharedBanner pageName={"Transport Facility"} />
      <Transport />
      <Footer />
    </div>
  );
};

export default TransportHome;
