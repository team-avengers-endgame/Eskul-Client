import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import wavepink from "../../../Assets/Images/wave-pink.svg";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
const Banner = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
        },
        height: {
          xs: "40vh",
          sm: "60vh",
          md: "60vh",
        },

        backgroundImage: `url(${wavepink})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          component="div"
          sx={{
            fontWeight: "500",
            color: "#46AADC",
            textAlign: "center",

            fontSize: {
              xs: 20,
              sm: 30,
              md: 40,
            },
            pt: {
              xs: "10%",
              sm: "10%",
              md: "10%",
            },
            pb: {
              xs: "10%",
              sm: "10%",
              md: "10%",
            },
          }}
        >
          School Name goes here
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
