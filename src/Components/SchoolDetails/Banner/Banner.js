import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import wavepink from "../../../Assets/Images/wave-pink.svg";
import { api } from "../../../Hooks/Api";
import FmdGoodIcon from '@mui/icons-material/FmdGood';
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
          
          }}
        >
          {schoolName?.schoolName}
        </Typography>
        <Container><Grid container spacing={1}>
  <Grid item xs={6} sm={6} md={6}>
    <Typography sx={{fontWeight: "500",
            color: "#46AADC",
            textAlign: {
              xm:"center",sm:"center",md:"center"
            },
            fontSize: {
              xs: 10,
              sm: 10,
              md: 20,
            },
            mt: {
              xs: "5%",
              sm: "5%",
              md: "5%",
            },
            
            ml: {
              xs: "50%",
              sm: "50%",
              md: "50%",
            },}}  variant="h3"
          component="div">
        EIIN: {schoolName?.EIIN}
          </Typography>
  </Grid>
  <Grid item xs={6} sm={6} md={6}>
  <Typography sx={{fontWeight: "500",
            color: "#46AADC",
            textAlign: {
              xm:"center",sm:"center",md:"center"
            },
            fontSize: {
              xs: 10,
              sm: 10,
              md: 20,
            },
            mt: {
              xs: "5%",
              sm: "5%",
              md: "5%",
            },
            
            mr: {
              xs: "50%",
              sm: "50%",
              md: "50%",
            },}} variant="h3"
          component="div">
       {schoolName?.location}
          </Typography>
  </Grid>

</Grid>
</Container>
        
      </Box>
    </Box>
  );
};

export default Banner;
