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
            English Lession
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          Donec sed odio tempor, varius elit eu, consequat urna. Morbi bibendum
          vestibulum maximus. Vestibulum ut nibh ex. Quisque nulla ante,
          tristique in efficitur eu, ultrices a justo.
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
            Donec sed odio tempor, varius elit eu, consequat urna. Morbi
            bibendum vestibulum maximus. Vestibulum ut nibh ex. Quisque nulla
            ante, tristique in efficitur eu, ultrices a justo.
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
            Donec sed odio tempor, varius elit eu, consequat urna. Morbi
            bibendum vestibulum maximus. Vestibulum ut nibh ex. Quisque nulla
            ante, tristique in efficitur eu, ultrices a justo.
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
            Donec sed odio tempor, varius elit eu, consequat urna. Morbi
            bibendum vestibulum maximus. Vestibulum ut nibh ex. Quisque nulla
            ante, tristique in efficitur eu, ultrices a justo.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Experience;
