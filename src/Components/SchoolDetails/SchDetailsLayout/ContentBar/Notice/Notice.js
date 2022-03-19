import React from "react";
import { Box, Container, Typography } from "@mui/material";
const Notice = () => {
  return (
    <Container>
      <Box
        sx={{
          p: "10px 100px 10px 15px",
          backgroundColor: "#46aadd",
          borderRadius: "0px 100px 0px 0px",
          width: "10%",
          ml: { xs: 0, sm: 0, md: 25 },
          mt: { xs: 5, sm: 5 },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "14px",
          }}
        >
          Notice
        </Typography>
      </Box>
    </Container>
  );
};

export default Notice;
