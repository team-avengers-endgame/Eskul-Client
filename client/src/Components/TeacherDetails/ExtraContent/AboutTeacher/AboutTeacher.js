import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";

const AboutTeacher = () => {
  return (
    <Container>
      <Typography
        sx={{
          color: "#0c4b65",
          fontWeight: "800",
          fontSize: "36px",
          p: 2,
          textAlign: "left",
        }}
        variant="h5"
        gutterBottom
        component="div"
      >
        About Teacher
      </Typography>
      <Typography sx={{ mr: 4 }} variant="body1" gutterBottom>
        Donec nec odio sem. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Aenean posuere enim eu tellus condimentum ullamcorper. Quisque
        dolor risus, blandit et sem eu, faucibus efficitur augue. Quisque at
        ornare ipsum. Curabitur viverra, nibh vitae bibendum semper, tortor
        ipsum euismod mauris, a facilisis ex enim non nibh. Cras cursus ligula
        nec lacus vehicula, ut molestie purus vestibulum.
      </Typography>

      <Button
        sx={{
          color: "#fff",

          flexBasis: "initial",
          minHeight: "40px",
          fontFamily: "Sans-serif",
          fontSize: "15px",
          textTransform: "capitalize",
          letterSpacing: "0px",
          backgroundColor: " #46aadd",
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
          mt: 3,
          overflow: "visible",
          "&:hover": {
            backgroundColor: "black",
          },
        }}
      >
        Contact Me
      </Button>
    </Container>
  );
};

export default AboutTeacher;
