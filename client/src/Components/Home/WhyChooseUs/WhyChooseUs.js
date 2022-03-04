import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';

import './WhyChooseUs.css'

const WhyChooseUsData = [
    {
        id: 1,
        title: 'Perfect Information',
        dis: 'Parents can search their desired school informations.'
    },
    {
        id: 2,
        title: 'Online tuition',
        dis: 'We provide online tuition system for students where they can choose their teacher.'
    },
    {
        id: 3,
        title: 'Online buying books',
        dis: 'Students can buy thier selected books and pay for them in online.'
    },
    {

        id: 4,
        title: 'Transport',
        dis: 'We have our own transport system for students.'
    },
    {
        id: 5,
        title: 'Download Notes',
        dis: 'Students can find their important notes here and can download the PDF.'
    },
    {
        id: 6,
        title: 'Donation System',
        dis: 'Anyone can donate money to any institute through us.'
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
                                        <Typography variant='h5' sx={{ color: 'black', pb: 2, fontFamily: 'Georgia', fontStyle: 'italic', fontWeight: '600', textAlign: 'center', margin: '5px' }}>
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