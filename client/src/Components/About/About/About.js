import React from "react";
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
      <VisionMissionSection />
      <DifferenceSection />
      <FacilitySection />
      <Principles />
    </div>
  );
};

export default About;
