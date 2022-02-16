import React from "react";
import Accordian from "./Accordian";

import "./Faq.css";
import FaqMessage from "./FaqMessage";
const Faq = () => {
  return (
    <div className="faq-container">
      <h1
        className="tracking-wide text-orange-400"
        style={{ paddingTop: "2%", fontSize: "50px" }}
      >
        Frequently Asked Question
      </h1>
      <hr className="mx-auto " style={{ width: "40%" }} />
      <p style={{ color: "white" }}>
        If you have any question or query please send us your question on the
        below form. <br /> We will answer you within 24 hours.Besides,some
        commonly asked question answers are given below. You can also check.
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-1   lg:grid-cols-2  gap-4 ">
        <div>
          <Accordian />
        </div>
        <div>
          <FaqMessage />
        </div>
      </div>
    </div>
  );
};

export default Faq;
