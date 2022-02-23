import React from "react";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import Banner from "./Banner/Banner";
import SchDetailsLayout from "./SchDetailsLayout/SchDetailsLayout";
import TopBar from "./TopBar/TopBar";

const SchoolDetails = () => {
  return (
    <div>
      <NavigationBar />
      <Banner />
      <TopBar />
      <SchDetailsLayout />
      <Footer />
    </div>
  );
};

export default SchoolDetails;
