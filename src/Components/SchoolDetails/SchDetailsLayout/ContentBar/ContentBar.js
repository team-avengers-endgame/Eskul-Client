import React from "react";
import BasicSection from "./BasicSection/BasicSection";
import BoardResult from "./BoardResult/BoardResult";
import Contact from "./Contact/Contact";
import Feedback from "./Feedback/Feedback";
import Gallery from "./Gallery/Gallery";
import Message from "./Message/Message";
import Notice from "./Notice/Notice";
import People from "./People/People";
import TermResult from "./TermResult/TermResult";

const ContentBar = () => {
  return (
    <div>
      <BasicSection />
      <BoardResult />
      <TermResult />
      <Notice />
      <People />
      <Gallery />
      <Feedback />
      <Message />
      <Contact />
    </div>
  );
};

export default ContentBar;
