import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, Paper,Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';



import Logo from './logo.png'


import Confetti from 'react-confetti';
import { ButtonStyle } from '../../Hooks/useStyle';
import { api } from '../../Hooks/Api';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Footer from '../Shared/Footer/Footer';


const DonationSuccess = () => {

    const [donation, setDonation] = useState({});
    const { id } = useParams();


    useEffect(() => {
        fetch(`${api}/donationPay/${id}`)
            .then(res => res.json())
            .then(data => {
                setDonation(data);
              
            })
    }, [id])

    const navigate = useNavigate();
    const handlerGotoHome = () => navigate('/');
    const handlerGoToMyOrder = () => navigate('/dashboard/myOrder');

    let width = window.innerWidth;
    let height = window.innerHeight;


    const {cus_name,cus_email,total_amount,cus_postcode,cus_city,cus_add1,cus_country,ocupation,date}=donation;


    return (
        <Box sx={{ overflow: 'hidden' }}>
            <NavigationBar />
            <Box className='paymentSuccessContainer'>

                <Container width={width}
                    height={height}>
                    <Confetti />


                    <Grid
                        container
                        sx={{ mt: 2 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        <Grid item xs={4} sm={4} md={6} >

                            <Box className='congratulation-card'>
                                <Box>
                                    <Toolbar />
                                    <img style={{ width: '70%' }} src={Logo} alt="" />
                                    <Typography variant="h6"><span style={{ fontSize: '30px', color: 'orange' }}>
                                        Congratulations
                                    </span> <br /> Donation Success Fully</Typography>
                                    <Typography variant='h5'>
                                        {cus_name}
                                    </Typography>
                                    <Typography variant='body'>
                                        Email:   {donation?.cus_email}
                                    </Typography>
                                    <Typography variant='h5'>
                                        Total Amount:

                                        <span style={{ color: 'red', paddingLeft: '2px' }}>
                                            $({donation?.total_amount})
                                        </span>

                                    </Typography>
                                    <br />
                                    <Button
                                        onClick={handlerGotoHome}
                                        size="small" sx={{ ...ButtonStyle, mr: 2 }}>
                                        Go to Home
                                    </Button>

                                    <Button onClick={handlerGoToMyOrder} size="small" sx={ButtonStyle}>
                                        My Order
                                    </Button>


                                </Box>

                            </Box>
                        </Grid>
                        <Grid item xs={4} sm={4} md={6}>
                            <Grid
                                container
                                spacing={2}
                                sx={{ mt: 6 }}
                                columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                           
                                    <Grid sx={{ py: 3 }}item xs={4} sm={8} md={12}>
                                        <Paper
                                            sx={{
                                                p: 1,
                                                margin: "auto",
                                                maxWidth: 500,
                                                flexGrow: 1,
                                                boxShadow: "0px 14px 22px rgb(42 135 158 / 10%)",
                                            }}
                                        >
                                            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                                                <Grid item xs={2} sm={4} md={4}>
                                                   
                                                </Grid>
                                                <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                                                    <Box>
                                                        <Typography variant="h6"
                                                            sx={{ fontSize: '12px', fontWeight: 900 }}
                                                        >{donation?.cus_add1}</Typography>

                                                        <Typography variant="body" sx={{ fontSize: '12px' }}>
                                                            <span> লেখক: </span>
                                                            <span>{donation?.cus_city}</span>
                                                        </Typography>
                                                        <br />

                                                        <Typography variant="body">
                                                            <span style={{ fontWeight: 700 }}> মূল্যঃ ৳</span>
                                                            {donation?.total_amount}
                                                        </Typography>
                                                        
                                                    </Box>

                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                               
                            </Grid>
                        </Grid>
                    </Grid>


                </Container>
                <Toolbar />
            </Box>

            <Footer />
        </Box>
    );
};

export default DonationSuccess;