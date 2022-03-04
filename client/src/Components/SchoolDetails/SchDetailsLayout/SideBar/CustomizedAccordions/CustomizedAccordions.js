import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import CircleIcon from "@mui/icons-material/Circle";
import { ButtonBase } from "@mui/material";
import { NavLink } from "react-router-dom";
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div style={{ marginBottom: "10%" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Table Of Contents</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ListItem>
            {" "}
            <CircleIcon sx={{ fontSize: "14px", px: 2 }} />
            <NavLink
              to="/basic"
              style={{ textDecoration: "none", color: "black" }}
            >
              <ButtonBase>
                <Typography sx={{ fontSize: "20px", cursor: "pointer" }}>
                  Basic
                </Typography>
              </ButtonBase>
            </NavLink>
          </ListItem>
          <ListItem>
            {" "}
            <CircleIcon sx={{ fontSize: "14px", px: 2 }} />
            <Typography sx={{ fontSize: "20px", cursor: "pointer"  }}>Board Result</Typography>
          </ListItem>

          <ListItem>
            {" "}
            <CircleIcon sx={{ fontSize: "14px", px: 2 }} />
            <Typography sx={{ fontSize: "20px", cursor: "pointer"  }}>Term Result</Typography>
          </ListItem>
          <ListItem>
            {" "}
            <CircleIcon sx={{ fontSize: "14px", px: 2 }} />
            <Typography sx={{ fontSize: "20px", cursor: "pointer"  }}>Notice</Typography>
          </ListItem>
          <ListItem>
            {" "}
            <CircleIcon sx={{ fontSize: "14px", px: 2 }} />
            <Typography sx={{ fontSize: "20px", cursor: "pointer"  }}>People</Typography>
          </ListItem>
          <ListItem>
            {" "}
            <CircleIcon sx={{ fontSize: "14px", px: 2 }} />
            <Typography sx={{ fontSize: "20px", cursor: "pointer"  }}>Gallery</Typography>
          </ListItem>
          <ListItem>
            {" "}
            <CircleIcon sx={{ fontSize: "14px", px: 2 }} />
            <Typography sx={{ fontSize: "20px", cursor: "pointer"  }}>Feedback</Typography>
          </ListItem>
          <ListItem>
            {" "}
            <CircleIcon sx={{ fontSize: "14px", px: 2 }} />
            <Typography sx={{ fontSize: "20px", cursor: "pointer"  }}>Message</Typography>
          </ListItem>
          <ListItem>
            {" "}
            <CircleIcon sx={{ fontSize: "14px", px: 2 }} />
            <Typography sx={{ fontSize: "20px", cursor: "pointer"  }}>Contact</Typography>
          </ListItem>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
