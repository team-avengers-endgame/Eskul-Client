import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BoardResultAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography
            sx={{ color: "black" }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            Latest Public Exam
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>No records found.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={{ color: "black" }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            JSC
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>No records found.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={{ color: "black" }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            SSC
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>No records found.</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography
            sx={{ color: "black" }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            HSC
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>No records found.</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default BoardResultAccordion;
