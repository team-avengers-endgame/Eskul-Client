import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
// Experience
const Experience = () => {
  
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box>
      <Typography
        sx={{ color: "#0c4b65", fontWeight: "800", fontSize: "36px", p: 2 }}
        variant="h5"
        gutterBottom
        component="div"
      >
        Experience
      </Typography>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#46aadd", fontSize: "35px" }} />
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{ color: "#0c4b65", fontWeight: "700", fontSize: "18px" }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            Teaching Student
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
        Teaching students is a prime responsibility for any teacher. I have  8 years +  experience teaching students. 

        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#46aadd", fontSize: "35px" }} />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={{ color: "#0c4b65", fontWeight: "700", fontSize: "18px" }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            Student Management
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Student management is another prime responsibility for any teacher. I have  5 years +  experience managing students.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#46aadd", fontSize: "35px" }} />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={{ color: "#0c4b65", fontWeight: "700", fontSize: "18px" }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            Reseacher
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          As a teacher , every teacher should do research based on his own perspective. I have done a lot of research on my profession which gave me extra value in my teaching profession.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon sx={{ color: "#46aadd", fontSize: "35px" }} />
          }
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={{ color: "#0c4b65", fontWeight: "700", fontSize: "18px" }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            Plan Managing
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Plan managing is another prime skill for any teacher.  I have  3 years +  experience managing plans.  
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Experience;
