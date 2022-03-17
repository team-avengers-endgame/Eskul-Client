import React, { useEffect, useState } from 'react';
import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import { api } from '../../../../Hooks/Api';


const Budget = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`${api}/books`)
          .then((res) => res.json())
          .then((data) => {
            setBooks(data?.data?.data);
            
    
          });
      }, []);
      const totalReducer = (previous, product) => previous + product.bookPrice;
      const total = books.reduce(totalReducer, 0);
      
      
    
    return (
        <div>
            <Card
        sx={{ height: '100%' }}

    >
        <CardContent>
            <Grid
                container

                sx={{ justifyContent: 'space-between' }}
            >
                <Grid item>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="overline"
                    >
                        BUDGET
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                    >
                        ${Math.floor(total/1000)}{total>1000?'k':'Taka'}
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: 'error.main',
                            height: 56,
                            width: 56
                        }}
                    >
                        <MoneyIcon />
                    </Avatar>
                </Grid>
            </Grid>
            <Box
                sx={{
                    pt: 2,
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <ArrowDownwardIcon color="error" />
                <Typography
                    color="error"
                    sx={{
                        mr: 1
                    }}
                    variant="body2"
                >
                    {Math.floor((100*500)/total)}%
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

export default Budget;