import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

import './WhyChooseUs.css'

const WhyChooseUsData = [
    {
        id: 1,
        title: 'Perfect Information',
        dis: 'Children are comfortable and confident in their home, feeling safe and secure to explore and learn.'
    },
    {
        id: 2,
        title: 'Loving Language',
        dis: '90% success rate of children reading before they go to school for children attending more than 12 months.'
    },
    {
        id: 3,
        title: '30 Day Moneyback Guarantee',
        dis: 'If you’re not completely satisfied we will refund your money, no questions asked.'
    },
    {
        id: 4,
        title: 'Culture of Honour',
        dis: 'We aim to help all people that come into contact with ChildiT to feel Significant, Appreciated and Understood.'
    },
    {
        id: 5,
        title: 'Orientation Process',
        dis: 'Makes the process of you and your child settling into care with ChildiT that much smoother.'
    },
    {
        id: 6,
        title: 'Quality Educators',
        dis: 'Trusted, highly trained and hand-picked Educators. We believe that educators play a huge role in quality child care.'
    },
]
const WhyChooseUs = () => {
    return (
        <Box sx={{ padding: '100px 0' }}>
            <Box sx={{ textAlign: 'center', mb: 10 }}>
                <Typography variant='h6'
                    sx={{ color: '#46AADC', pb: 2, fontFamily: 'Georgia', fontStyle: 'italic' }}
                >Read on to understand our differene</Typography>
                <Typography variant='h4'
                    sx={{ fontWeight: 'bold' }}
                >Why Choose Eskul</Typography>

            </Box>

            <Container>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {WhyChooseUsData.map((data, index) => (
                            <Grid item xs={12} sm={4} md={4} key={index}
                                sx={{ height: '200px' }} className={
                                    `${data.id === 1 || data.id === 3 || data.id === 5 ? "Why-ChooseUs-bg" : ""}`}

                            >
                                <Box
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="1500"
                                    sx={{ display: 'flex' }}>
                                    <Box>
                                        <Typography variant='h4'
                                            sx={{ color: 'rgb(70, 170, 220)', fontWeight: 'bold' }}
                                        >
                                            {data.id}.
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography variant='h5'>
                                            {data.title}

                                        </Typography>
                                        <Typography variant='body'>
                                            {data.dis}



                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default WhyChooseUs;