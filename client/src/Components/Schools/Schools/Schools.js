import React from "react";
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
    </div>
  );
};

export default Schools;
