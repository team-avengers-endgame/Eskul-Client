import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import child from './imgs/child.png';
import Aos from 'aos';
import { Link } from 'react-router-dom';
const ChildEducation = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);

    return (
        <Box>
            <Container maxWidth="lg">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ alignItems: 'center' }}>
                    <Grid
                        data-aos="zoom-in-down"
                        item xs={12} md={6}>
                        <img style={{
                            width: '100%'
                        }} src={child} alt="" />
                    </Grid>
                    <Grid
                        data-aos="zoom-in-down"
                        item xs={12} md={6}>
                        <Box>
                            <Typography
                                variant="h5"
                                gutterBottom
                                component="div"
                                sx={{
                                    fontStyle: 'italic',
                                    fontFamily: 'Georgia'
                                }}
                            >
                                Where information and service come together
                            </Typography>
                            <Typography
                                variant="h3"
                                gutterBottom
                                component="div"
                                sx={{ fontWeight: '500', color: '#3B4757' }}
                            >
                                <span style={{ color: '#46AADC' }}>The Center</span> for  Childhood Education
                            </Typography>
                            <Typography
                                variant="body1"
                                gutterBottom
                                sx={{
                                    fontSize: '15px',
                                    lineHeight: '1.5rem',
                                    color: '#777',
                                    mt: 5
                                }}
                            >
                                We provide an innovative, nurturing and stimulating environment where children develop independence, confidence and a positive sense of self and the world around them. Our curriculum is designed to involve children in experiences that enhance language, literacy, music, movement, art and socialization. Through play, all areas of development are fostered.
                            </Typography>
                            <Link to="/about">
                                <Button
                                    variant="text"
                                    sx={{
                                        textTransform: 'lowercase'
                                    }}
                                >read more  </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>

            </Container>
        </Box>
    );
};

export default ChildEducation;