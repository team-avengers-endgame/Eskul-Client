import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import Aos from 'aos';
const TransportHero = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, []);
    return (
        <Container sx={{ my: 10 }}>
      <Grid container spacing={2}>
        <Grid item
         data-aos="fade-left"
         data-aos-offset="300"
         data-aos-easing="ease-in-sine"
         data-aos-duration="3000"
         xs={12} sm={12} md={6}>
          <Typography
            sx={{ fontStyle: "italic", fontSize: 22, color: "#3B4757" }}
            variant="body1"
            gutterBottom
          >
            Igniting the spark of genius in every child
          </Typography>
          <Typography
            sx={{ fontWeight: "500", fontSize: 42, color: "#3B4757" }}
            variant="h4"
            gutterBottom
            component="div"
          >
            We Work to Understand Your{" "}
            <span style={{ color: "#46AADC" }}>Kids Needs</span>
          </Typography>
          <Typography
            sx={{ fontSize: 15, color: "#777" }}
            variant="body2"
            gutterBottom
          >
            Our website provides transport facilities for their child.This is the page. We have given the location of the bus here with the charge, time and driver's number Where users can choose the transport of their choice according to their location.


          </Typography>
          <br />
          <Typography
            sx={{ fontSize: 15, color: "#777" }}
            variant="body2"
            gutterBottom
          >
            In an environment rooted in respect and compassion, we strive to
            nourish each child's spirit and provide a protective space for him
            or her to grow.
          </Typography>
        </Grid>
        <Grid item 
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="3000"
        xs={12} sm={12} md={6}>
          <img style={{  width: "100%",
              height: "auto",
              maxWidth: "100%",
              verticalAlign: "top",
              borderRadius: "10px",
              margin:"auto",
              aspectRatio: "auto 1200 / 1200",
               }} src="https://i.ibb.co/f94Bh1T/photo-1550523049-a61d0deec4a4.jpg" alt="" />
        </Grid>
      </Grid>
    </Container>
    );
};

export default TransportHero;