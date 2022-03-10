import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Button, Container, Grid, TextField } from "@mui/material";

import "./Faq.css";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import Footer from "../Shared/Footer/Footer";
import SharedBanner from "../Shared/SharedBanner/SharedBanner";
import { ButtonStyle } from "../../Hooks/useStyle";
import SendIcon from '@mui/icons-material/Send';

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
    <>
    <NavigationBar/>
    <SharedBanner pageName={"FAQs"} />
    <Container
     
    >
      <Box sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h6" sx={{color: "#46AADD"}}>
          Here are answers to your questions
        </Typography>
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{ fontWeight: "500", color: "#3B4757" }}
        >
         Frequently Asked Questions
        </Typography>
      </Box>
    <Box sx={{width: '75%', mx: "auto"}}>
    <Accordion
        style={{
          margin: "26px 0",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        class={expanded === "panel1" && "panel-active"}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What type of website is "ESKUL"?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ESKUl is a complete website about schools information for parents & students. Here user can find out any type school information. They can find out any school teacher information easily. We impleament many features for students and parents. These feature make their life easy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          margin: "26px 0",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        class={expanded === "panel2" && "panel-active"}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>How can I send my donation any school for poor students?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           That is very easy. At first you have to go donation page. Then fullfill all requrements and click the submit button. Then open up ssl form.just give all information. And it's done!!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          margin: "26px 0",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        class={expanded === "panel3" && "panel-active"}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How can User reviwes this website?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           At first you have to login. If you are a new user in our page, then you have to create a account. Then you can see user dashboard. Here you can find out user review section. Feel free to review our website!!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          margin: "26px 0",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        class={expanded === "panel4" && "panel-active"}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Can  this website provides online private tutor ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Yes, of course.Our website provides skillful, experience online tutor . We incluede all type of information them ,what you needed. Also included their contact information. You can contact them directly. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          margin: "26px 0",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        }}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        class={expanded === "panel5" && "panel-active"}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Can we contact "ESKUL" website developers for google adsense?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           Yeah sure. Welcome. You can contact our developers very easily using by Contact Us section.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>


    

    
   <Container>
   <Box sx={{ textAlign: "center", mt: 15 }}>
    <Typography
          variant="h3"
          gutterBottom
          component="div"
          sx={{ fontWeight: "500", color: "#3B4757" }}
        >
        Do You Have Any Question?
        </Typography>
    </Box>
   <Grid  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}
   sx={{px: {xs: 0,sm: 3 ,md: 15}}}
   >
    <Grid item xs={4} sm={4} md={6} >
    <TextField 
    fullWidth
     id="outlined-basic"
     label="Your Name" 
     variant="outlined" />
        </Grid>
        <Grid item  xs={4} sm={4} md={6} >
        <TextField 
        fullWidth
        id="outlined-basic"
        label="Your Email" 
        variant="outlined" />
         </Grid>
        
        
        <Grid item  xs={4} sm={4} md={6} >
        <TextField
         fullWidth
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
          </Grid>
        <Grid item  xs={4} sm={4} md={6} >
        <TextField
         fullWidth
          id="outlined-basic"
          label="Subject"
         
        
        />
          </Grid>
        
        <Grid item  xs={4} sm={8} md={12} >
        <TextField fullWidth
                   id="outlined-basic"
                   label="Your Name" 
                   variant="outlined"
                    multiline
                    rows={4}

                   /> <br />
    </Grid>
   <Box sx={{width:"25%", mx:"auto", mt:3}}>
   <Button type="submit" fullWidth variant="contained" sx={ButtonStyle} endIcon={<SendIcon />}> Send</Button>
   </Box>
    </Grid>
    
   
   </Container>
  
    </Container>
    <Footer/>
    </>
  );
}
