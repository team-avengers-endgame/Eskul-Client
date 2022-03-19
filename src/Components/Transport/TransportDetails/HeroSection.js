import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';


const HeroSection = () => {
    return (
        <Container sx={{py:10}}>
          <Typography variant="h5" gutterBottom component="div">
        Explore our Transport Details
      </Typography>
      <Grid container spacing={12}>
  <Grid item xs={12} sm={12} md={6}>
  
  <Typography sx={{color:"#c25934",fontSize:"24px",fontWeight:800}} variant="h6" gutterBottom component="div">
  Our Trasport Facility
      </Typography>
  <Typography sx={{color:"#0c4b65",fontSize:"48px",fontWeight:800}} variant="h6" gutterBottom component="div">
  Localized Trasport
      </Typography>
      <Typography sx={{color:"#0c4b65",fontSize:"14px",fontWeight:400}} variant="subtitle1" gutterBottom component="div">
      Our website provides transport facilities for their child.This is the page. We have given the location of the bus here with the charge, time and driver's number Where users can choose the transport of their choice according to their location. Our website provides transport facilities for their child.This is the page. We have given the location of the bus here with the charge, time and driver's number Where users can choose the transport of their choice according to their location.
      </Typography>
      
  </Grid>
  <Grid item xs={12} sm={12} md={6}>
  <img style={{width:"100%"}} src="https://i.ibb.co/g6YsdCH/hero-transport.png" alt="" />
  </Grid>

</Grid>
     
        </Container>
    );
};

export default HeroSection;