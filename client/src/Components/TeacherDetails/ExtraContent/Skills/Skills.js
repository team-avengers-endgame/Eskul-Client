import { Typography } from "@mui/material";
import React from "react";
import "./Skills.css";
const Skills = () => {
  return (
    <div>
      <Typography
        sx={{ color: "#0c4b65", fontWeight: "800", fontSize: "36px", p: 2 }}
        variant="h5"
        gutterBottom
        component="div"
      >
        Skills
      </Typography>
      <div style={{ paddingTop: "4%" }} className="skill-container">
        <div className="skills">
          <div className="skill-name">Teaching</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="90%"
              style={{ maxWidth: "90%" }}
            ></div>
          </div>
        </div>
        <div className="skills">
          <div className="skill-name">Managing</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="50%"
              style={{ maxWidth: "50%" }}
            ></div>
          </div>
        </div>
        <div className="skills">
          <div className="skill-name">Leadership</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="60%"
              style={{ maxWidth: "60%" }}
            ></div>
          </div>
        </div>
        <div className="skills">
          <div className="skill-name">Collaborating</div>
          <div className="skill-bar">
            <div
              className="skill-per"
              per="70%"
              style={{ maxWidth: "70%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
