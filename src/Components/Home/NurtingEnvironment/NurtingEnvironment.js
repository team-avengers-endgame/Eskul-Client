import React, { useEffect } from 'react';
import './NurtingEnvironment.css'
import { Box,Container, Fab, Grid,Typography } from '@mui/material';
import SlowMotionVideoOutlinedIcon from '@mui/icons-material/SlowMotionVideoOutlined';
import Aos from 'aos';
import Video from './Video/Video';
const NurtingEnvironment = () => {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState();

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    const handleClose = () => {
        setOpen(false);
    };
    const handleVideoOpen = () => {
        setScroll();
        setOpen(true);
    };

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
                                <span style={{ color: 'rgb(70, 170, 220)' }}>for Each Students</span>
                            </Typography>
                            <Typography
                                data-aos="flip-right"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                variant='body'>
                                Where parents and students can find out all the information and facilities about schools they need!!

                            </Typography>
                            <br /><br />
                            <Fab
                                onClick={handleVideoOpen}
                                color="info" aria-label="add">
                                <SlowMotionVideoOutlinedIcon />
                            </Fab>
                             <Typography variant='body' sx={{ color: 'rgb(70, 170, 220)', fontWeight: 'bold',display:'inline',pl:2}}>View Video</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Video

                handleClose={handleClose}
                open={open}
                scroll={scroll}

            />
        </Box>
    );
};

export default NurtingEnvironment;