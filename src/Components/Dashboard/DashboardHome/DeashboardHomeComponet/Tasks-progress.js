import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import React from 'react';
import useAuth from '../../../../Hooks/useAuth';

const TasksProgress = () => {
    const { donationsCount } = useAuth();
    const totalReducer = (previous, donation) => previous + Number(donation?.total_amount);
    const total = donationsCount.reduce(totalReducer, 0);
    
    return (

        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Grid
                    container
                    spacing={3}
                    sx={{ justifyContent: 'space-between' }}
                >
                    <Grid item>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="overline"
                        >
                                Total Donate
                        </Typography>
                        <Typography
                            color="textPrimary"
                            variant="h4"
                        >
                            {total}৳
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar
                            sx={{
                                backgroundColor: 'warning.main',
                                height: 56,
                                width: 56
                            }}
                        >
                            <VolunteerActivismIcon />
                        </Avatar>
                    </Grid>
                </Grid>
                <Box sx={{ pt: 3 }}>
                    <LinearProgress
                        value={75.5}
                        variant="determinate"
                    />
                </Box>
            </CardContent>
        </Card>

    );
};

export default TasksProgress;