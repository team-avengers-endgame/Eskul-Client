import { Grid } from '@mui/material';
import React from 'react';
import Calendar from './Calendar';
import Info from './Info';

const DetailSideBar = () => {
    return (
        <div>
            <Grid container spacing={2}>
  <Grid item xs={12} sm={6} md={12}>
  <Calendar/>
  </Grid>
  <Grid item xs={12} sm={6} md={12}>
  <Info/>
  </Grid>

</Grid>
            
           
        </div>
    );
};

export default DetailSideBar;