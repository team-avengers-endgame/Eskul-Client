import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from '../../../Assets/Slider/main-slider-1.webp';
import img2 from '../../../Assets/Slider/main-slider-2.webp';
import rect from '../../../Assets/Slider/main-slider-rect.svg';
import ico1 from '../../../Assets/Slider/slider-ico.svg';
import ico2 from '../../../Assets/Slider/slider-ico-2.svg';

const slideImages = [
    { id: 1, slideImg: img1, text1: 'Looking for a Website where', text2: 'You can find your ideal School', icon: ico1 },
    { id: 2, slideImg: img2, text1: 'Where Fun Happens!', text2: 'Explore the new Schools', icon: ico2 },
]


const Banner = () => {
    return (
        <Box>
            <Fade
                arrows={false}
                duration={3000}
                transitionDuration={1000}
            >
                {
                    slideImages.map(newSlide => <Box
                        key={newSlide.id}
                        sx={{
                            backgroundImage: `url(${newSlide.slideImg})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'


                        }}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            sx={{ py: 20 }}
                        >
                            <Grid item xs={12} md={6}>

                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    data-aos='fade-up'
                                    sx={{
                                        textAlign: 'center',
                                        width: '17rem',
                                        p: 6,
                                        backgroundImage: `url(${rect})`,
                                        backgroundSize: 'contain',
                                        backgroundRepeat: 'no-repeat'
                                    }}>
                                    <img src={newSlide.icon} alt="slide img" />
                                    <Typography
                                        variant="h6"
                                        
                                        sx={{
                                            fontStyle: 'italic',
                                            fontFamily: 'Georgia'
                                        }}
                                    >
                                        {newSlide.text1}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{ fontWeight: '500', color: '#3B4757' }}
                                    >
                                        {newSlide.text2}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>)
                }
            </Fade>
        </Box>
    );
};

export default Banner;