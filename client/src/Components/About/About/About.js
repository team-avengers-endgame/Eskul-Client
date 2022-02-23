import React from "react";
import ChildEducation from "../../Home/ChildEducation/ChildEducation";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import AboutHeroSection from "../AboutHeroSection/AboutHeroSection";
import DifferenceSection from "../DifferenceSection/DifferenceSection";
import FacilitySection from "../FacilitySection/FacilitySection";
import Principles from "../Principles/Principles";
import VisionMissionSection from "../VisionMissionSection/VisionMissionSection";

const About = () => {
  return (
    <div>
      <NavigationBar />
      <AboutHeroSection />
      <ChildEducation />
      <VisionMissionSection />
      <DifferenceSection />
      <FacilitySection />
      <Principles />
    </div>
  );
};

export default About;
