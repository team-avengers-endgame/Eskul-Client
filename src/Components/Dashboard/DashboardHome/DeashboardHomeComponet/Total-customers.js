import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

import React, { useEffect, useState } from 'react';
import { api } from '../../../../Hooks/Api';

const TotalCustomers = () => {
    const [users,setUsers]=useState(0)
    useEffect(()=>{
        fetch(`${api}/users`)
        .then(res=>res.json())
        .then(data=>setUsers(data?.results))
    },[])
    return (
        <div>
            <Card>
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
                                TOTAL CUSTOMERS
                            </Typography>
                            <Typography
                                color="textPrimary"
                                variant="h4"
                            >
                                {users}{users<1000?'People':"K"}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Avatar
                                sx={{
                                    backgroundColor: 'success.main',
                                    height: 56,
                                    width: 56
                                }}
                            >
                                <PeopleIcon />
                            </Avatar>
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            pt: 2
                        }}
                    >
                        <ArrowUpwardIcon color="success" />
                        <Typography
                            variant="body2"
                            sx={{
                                mr: 1
                            }}
                        >
                             {Math.floor((100*users)/users)}%
                        </Typography>
                        <Typography
                            color="textSecondary"
                            variant="caption"
                        >
                            Since last month
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </div>
    );
};

export default TotalCustomers;