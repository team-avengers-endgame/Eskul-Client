import React from 'react';
<<<<<<< HEAD
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import foodImg from './image/healthyFood.png';
import fruits from '../../../Assets/Images/fruits.png';
import grains from '../../../Assets/Images/grains.png';
import vegetables from '../../../Assets/Images/vegetables.png';
import background from '../../../Assets/Images/gray_wave.svg';


const HealthyFood = () => {
    return (
        <Box sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            py: 10
        }}>
            <Container maxWidth="lg">
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6}>
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
                                Where work and play come together
                            </Typography>
                            <Typography
                                variant="h3"
                                gutterBottom
                                component="div"
                                sx={{ fontWeight: '500', color: '#3B4757' }}
                            >
                                <span style={{ color: '#46AADC' }}>Healthy</span>  Food for Growing Children
                            </Typography>
                            <Typography
                                variant="body1"
                                gutterBottom
                                sx={{
                                    fontSize: '15px',
                                    lineHeight: '1.5rem',
                                    color: '#777',
                                    my: 3
                                }}
                            >
                                By eating family-style and serving themselves, children learn about making healthy choices and the connection between food and community.
                            </Typography>
                        </Box>
                        <Box>
                            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ alignItems: 'center' }}>
                                <Grid item xs={4}>
                                    <Card sx={{
                                        maxWidth: 200,
                                        borderRadius: 8,
                                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
                                    }}>
                                        <CardActionArea sx={{ textAlign: 'center', p: 3 }}>
                                            <CardMedia
                                                component="img"
                                                sx={{ height: 58, width: 58, margin: '0 auto' }}
                                                image={fruits}
                                                alt="fruits image"
                                            />
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    Fruits
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card sx={{
                                        maxWidth: 200,
                                        borderRadius: 8,
                                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
                                    }}>
                                        <CardActionArea sx={{ textAlign: 'center', p: 3 }}>
                                            <CardMedia
                                                component="img"
                                                sx={{ height: 58, width: 58, margin: '0 auto' }}
                                                image={grains}
                                                alt="Grains image"
                                            />
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    Grains
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card sx={{
                                        maxWidth: 200,
                                        borderRadius: 8,
                                        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'
                                    }}>
                                        <CardActionArea sx={{ textAlign: 'center', p: 3 }}>
                                            <CardMedia
                                                component="img"
                                                sx={{ height: 58, width: 58, margin: '0 auto' }}
                                                image={vegetables}
                                                alt="Vegetables image"
                                            />
                                            <CardContent>
                                                <Typography variant="h5" component="div">Vegetables
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{
                            width: '100%'
                        }}
                            src={foodImg}
                            alt=""
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
=======

const HealthyFood = () => {
    return (
        <div>
            <h1>this is healthy</h1>
        </div>
>>>>>>> rukon
    );
};

export default HealthyFood;