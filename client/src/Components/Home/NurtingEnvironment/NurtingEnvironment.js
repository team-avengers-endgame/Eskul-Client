import React, { useEffect } from 'react';
import './NurtingEnvironment.css'
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import Aos from 'aos';
const NurtingEnvironment = () => {


    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);
    return (
        <Box className='NurtingEnvironment-container' >

            <Container>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={12} sm={4} md={4}>
                        <Box >
                            <Typography
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                variant='h4' sx={{ fontWeight: 'bold' }}>
                                We Create a Helpfull Website <br />
                                <span style={{ color: 'rgb(70, 170, 220)' }}>for Each Child</span>
                            </Typography>
                            <Typography
                                data-aos="flip-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                variant='body'>
                                Where parents and students can find out all the information and facilities about schools they need!!

                            </Typography>
                            <br /><br />
                            <Button sx={{ borderRadius: '50%', height: '60px', width: '60px', backgroundColor: 'rgb(70, 170, 220)', color: 'white' }}>
                                 <a href="https://www.youtube.com/watch?v=aXZPJ8yGbwU"><SlowMotionVideoOutlinedIcon style={{ color: 'fff' }}></SlowMotionVideoOutlinedIcon></a>
                            </Button> <Link style={{ color: 'rgb(70, 170, 220)', fontWeight: 'bold', textDecoration: 'none' }}>View Video</Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
};

export default NurtingEnvironment;