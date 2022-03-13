import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BoardResultAccordion from "./BoardResultAccordion";

const BoardResult = () => {
  return (
    <Container>
      <Box
        sx={{
          p: "10px 100px 10px 15px",
          backgroundColor: "#46aadd",
          borderRadius: "0px 100px 0px 0px",
          width: "10%",
          mt: 17,
          ml: { xs: 0, sm: 0, md: 25 },
          mt: { xs: 5, sm: 5 },
          p: { xs: "10px 100px 10px 30px", sm: "10px 100px 10px 30px" },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "14px",
          }}
        >
          Board Result
        </Typography>
      </Box>
      <Box
        sx={{
          p: "15px 15px 15px 15px",
          backgroundColor: "#FFFFFF",
          borderLeft: 1,
          borderStyle: "solid",
          borderWidth: "0px 0px 0px 2px",
          borderColor: "#46aadd",
          boxShadow: "0px 0px 10px 0px rgb(0 0 0 / 15%)",
          display: "block",
          ml: { md: 25 },
          mx: { xs: "auto", sm: "auto" },
        }}
      >
        <BoardResultAccordion />
      </Box>
    </Container>
  );
};

export default BoardResult;
