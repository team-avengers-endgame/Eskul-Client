import React from "react";
import Footer from "../Shared/Footer/Footer";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import SharedBanner from "../Shared/SharedBanner/SharedBanner";
import ExtraContent from "./ExtraContent/ExtraContent";
import TeacherLayout from "./TeacherLayout/TeacherLayout";

const TeacherDetails = () => {
  return (
    <div>
      <NavigationBar />
      <SharedBanner pageName={"Teacher Details"} />
      <TeacherLayout />
      <ExtraContent />
      <Footer />
    </div>
  );
};

export default TeacherDetails;
