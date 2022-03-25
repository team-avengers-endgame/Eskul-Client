import React from "react";
import QuickScroll from "../../Home/QuickScroll/QuickScroll";
import Footer from "../../Shared/Footer/Footer";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import SharedBanner from "../../Shared/SharedBanner/SharedBanner";
import SchoolMain from "../SchoolMain/SchoolMain";

const Schools = () => {
  return (
    <div>
      <NavigationBar />
      <SharedBanner pageName={"All Schools in Bangladesh"} />
      <SchoolMain />
      <Footer />
      <QuickScroll />
    </div>
  );
};

export default Schools;
