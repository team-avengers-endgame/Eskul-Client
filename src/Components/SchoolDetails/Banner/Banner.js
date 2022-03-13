import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import wavepink from "../../../Assets/Images/wave-pink.svg";
import { api } from "../../../Hooks/Api";
const Banner = () => {
  const [schoolName, setSchoolName] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`${api}/schools/${id}`)
      .then((res) => res.json())
      .then((data) => setSchoolName(data.data.data));
  }, []);
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
          {schoolName?.schoolName}
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
