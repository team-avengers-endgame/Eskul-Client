import {
  Button,
  ButtonBase,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const Subscribe = () => {
  return (
    <Container sx={{ mt: 6 }}>
      <Typography sx={{ mb: 4 }} variant="h5" component="div">
        Please Subscribe <br />
        to get updates
      </Typography>
      <form>
        <TextField
          sx={{ width: "100%" }}
          color="secondary"
          focused
          required
          id="outlined-required"
          label="Your Name"
          placeholder="Your Name"
        />{" "}
        <br />
        <TextField
          sx={{ width: "100%", my: 3 }}
          color="secondary"
          focused
          required
          id="outlined-required"
          label="Your Email"
          placeholder="Your Email"
        />{" "}
        <br />
        <TextField
          sx={{ width: "100%", mb: 5 }}
          color="secondary"
          focused
          required
          id="outlined-required"
          label="Mobile Number"
          placeholder="Mobile Number"
        />{" "}
        <br />
        <Button
          sx={{
            color: "#fff",
            flexBasis: "initial",
            minHeight: "40px",
            fontFamily: "Sans-serif",
            fontSize: "15px",
            textTransform: "capitalize",
            letterSpacing: "0px",
            backgroundColor: "#46aadd",
            borderStyle: "solid",
            borderWidth: "1px 1px 1px 1px",
            borderColor: "#01479b",
            paddingTop: 0,
            paddingBottom: 0,
            border: "none",
            padding: "12px 24px",
            display: "inlineBlock",
            lineHeight: 1,
            borderRadius: "5px",
            fill: "#FFFFFF",
            textAlign: "center",
            fontWeight: 400,
            whiteSpace: "nowrap",
            userSelect: "none",
            width: "auto",
            mb: 5,
            overflow: "visible",
            "&:hover": {
              backgroundColor: "black",
            },
          }}
        >
          Subscribe
        </Button>
      </form>
      {/* Icon section */}
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#46aadd",
          mb: 5,
        }}
      >
        <ButtonBase>
          <FacebookRoundedIcon sx={{ fontSize: "28px", cursor: "pointer" }} />
        </ButtonBase>
        <ButtonBase>
          <WhatsappRoundedIcon sx={{ fontSize: "28px", cursor: "pointer" }} />
        </ButtonBase>
        <ButtonBase>
          <LinkedInIcon sx={{ fontSize: "28px", cursor: "pointer" }} />
        </ButtonBase>
        <ButtonBase>
          <EmailIcon sx={{ fontSize: "28px", cursor: "pointer" }} />
        </ButtonBase>
      </Container>
    </Container>
  );
};

export default Subscribe;
