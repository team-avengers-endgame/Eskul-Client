import React from 'react';

import { Box, Container, Typography } from "@mui/material";
import BoardResultAccordion from '../../SchoolDetails/SchDetailsLayout/ContentBar/BoardResult/BoardResultAccordion';
const BoardResult = () => {
    return (
        <Container>
        <Box
          
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
            p: "80px 50px 80px 50px",
            backgroundColor: "#FFFFFF",
            borderLeft: 1,
            borderStyle: "solid",
            borderWidth: "0px 0px 0px 2px",
            borderColor: "rgb(42 135 158 / 14%)",
            boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
            display: "block",
            // ml: { md: 25 },
            borderRadius: "0px 200px 0px 200px",
            mx: { xs: "auto", sm: "auto" },
          }}
        >
          <BoardResultAccordion />
        </Box>
      </Container>
    );
};

export default BoardResult;