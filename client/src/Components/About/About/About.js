import React from "react";
import ChildEducation from "../../Home/ChildEducation/ChildEducation";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import AboutHeroSection from "../AboutHeroSection/AboutHeroSection";
import DifferenceSection from "../DifferenceSection/DifferenceSection";
import FacilitySection from "../FacilitySection/FacilitySection";
import Principles from "../Principles/Principles";
import VisionMissionSection from "../VisionMissionSection/VisionMissionSection";
import SharedBanner from "../../Shared/SharedBanner/SharedBanner";
import Footer from "../../Shared/Footer/Footer";
import TeamCard from "../TeamCard/TeamCard";
// About section
const About = () => {
  return (
    <div>
      <NavigationBar />
      <SharedBanner pageName={"About Us"} />
      <AboutHeroSection />
      <ChildEducation />
      <VisionMissionSection />
      <DifferenceSection />
      <FacilitySection />
      <Principles />
      <TeamCard></TeamCard>
      <Footer />
    </div>
  );
};

export default About;
