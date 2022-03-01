import { Button, Container, TextField, Typography } from "@mui/material";
import React from "react";

const TeacherContact = () => {
  return (
    <Container sx={{ py: 2 }}>
      <Typography
        sx={{ mb: 4, color: "#0c4b65", fontWeight: "600", fontSize: "30px" }}
        variant="h5"
        component="div"
      >
        Make contact with respected teacher
      </Typography>
      <form>
        <TextField
          sx={{ width: "100%", my: 3, border: "2px solid #0c4b65" }}
          required
          placeholder="Your Name"
        />{" "}
        <br />
        <TextField
          sx={{ width: "100%", my: 3, border: "2px solid #0c4b65" }}
          required
          placeholder="Your Email"
        />{" "}
        <br />
        <TextField
          sx={{ width: "100%", my: 3, border: "2px solid #0c4b65" }}
          required
          rows={4}
          multiline
          placeholder="Your Message"
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
            fontWeight: 600,
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
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default TeacherContact;
