import { Box, Grid, Toolbar } from '@mui/material';
import React from 'react';
import { Budget } from './DeashboardHomeComponet/Budget';
import { LatestOrders } from './DeashboardHomeComponet/Latest-orders';
import { LatestProducts } from './DeashboardHomeComponet/Latest-products';
import { Sales } from './DeashboardHomeComponet/Sales';
import { TasksProgress } from './DeashboardHomeComponet/Tasks-progress';
import { TotalCustomers } from './DeashboardHomeComponet/Total-customers';
import { TotalProfit } from './DeashboardHomeComponet/Total-profit';
import { TrafficByDevice } from './DeashboardHomeComponet/Traffic-by-device';
// import bg from './Profile-Dashboard-Template-1.jpg'
const DashboardHome = () => {
    return (
        <Box sx={{ pt: 5, px: 2 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 3, sm: 8, md: 12 }}>
                <Grid item xs={3} sm={4} md={3}>
                    <Budget />
                </Grid>
                <Grid item xs={3} sm={4} md={3}>
                    <TotalCustomers />
                </Grid>
                <Grid item xs={3} sm={4} md={3}>
                    <TasksProgress />
                </Grid>
                <Grid item xs={3} sm={4} md={3}>
                    <TotalProfit />
                </Grid>
            </Grid>

            <Toolbar />

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                <Grid item xs={4} sm={4} md={8}>
                    <Sales />
                </Grid>
                <Grid item xs={4} sm={4} md={4}>
                    <TrafficByDevice />
                </Grid>
            </Grid>

            <Toolbar />

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={4} md={6}>
                    <LatestOrders />
                </Grid>
                <Grid item xs={4} sm={4} md={6}>
                    <LatestProducts />
                </Grid>

            </Grid>
            <Toolbar />

        </Box>
    );
};

export default DashboardHome;