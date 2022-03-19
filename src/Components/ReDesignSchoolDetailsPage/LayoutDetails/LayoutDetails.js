import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import DetailContentBar from '../DetailContentBar/DetailContentBar';
import DetailSideBar from '../DetailSideBar/DetailSideBar';

const LayoutDetails = () => {
    return (
        <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={8}>
        
        <DetailContentBar/>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
        <DetailSideBar/>
        </Grid>
      </Grid>
    </Container>
    );
};

export default LayoutDetails;