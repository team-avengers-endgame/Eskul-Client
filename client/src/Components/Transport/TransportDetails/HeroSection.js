import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';


const HeroSection = () => {
    return (
        <Container sx={{py:3}}>
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
      Integer in justo euismod nulla feugiat lacinia non porta velit. Vestibulum vulputate purus sit amet vestibulum ultrices mauris malesuada.
      

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum sem ligula. Phasellus eleifend vel justo sit amet volutpat. Duis vitae maximus ligula, nec mattis libero. Donec eget felis odio.
      </Typography>
      <Button sx={{padding:"10px 40px",color:"#0c4b65",border:"0.5px solid #ffaf5f",mt:4,fontWeight:"semibold","&:hover":{
        backgroundColor:"#0c4b65", color:"#fff"
      }}} variant="outlined">Read More</Button>
  </Grid>
  <Grid item xs={12} sm={12} md={6}>
  <img src="https://www.nicepng.com/png/full/436-4366236_school-bus-transport-school-transport-school-bus-icon.png" alt="" />
  </Grid>

</Grid>
     
        </Container>
    );
};

export default HeroSection;