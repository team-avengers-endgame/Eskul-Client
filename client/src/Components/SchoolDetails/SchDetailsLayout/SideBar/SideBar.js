import React from "react";
import CustomizedAccordions from "./CustomizedAccordions/CustomizedAccordions";

import HeroButton from "./heroButton/HeroButton";
import Subscribe from "./Subscribe/Subscribe";

const SideBar = () => {
  return (
    <div>
      <HeroButton />
      <Subscribe />
      <CustomizedAccordions />
    </div>
  );
};

export default SideBar;
