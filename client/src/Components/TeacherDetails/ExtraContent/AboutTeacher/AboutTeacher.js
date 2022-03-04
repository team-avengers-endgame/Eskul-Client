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
      A Teacher is a professional who teaches students based on national curriculum guidelines within their specialist subject areas.For me teaching is a passionate field for teaching students. Teaching is a great responsibility for the nation. As a teacher, teaching students is the prime responsibility for me. Not only teaching but also giving moral values to students is also the responsibility of the teacher. 
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
