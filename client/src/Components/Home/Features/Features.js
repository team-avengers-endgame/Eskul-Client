import React, { useEffect } from 'react';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import foodImg from './image/healthyFood.png';

import background from '../../../Assets/Images/gray_wave.svg';
import Aos from 'aos';
import { Link } from 'react-router-dom';


const Features = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);
    return (
        <Box sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            py: 10
        }}>
            <Container >
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={8}>
                        <Box>
                            <Typography
                                variant="h3"
                                gutterBottom
                                component="div"
                                sx={{ fontWeight: '500', color: '#3B4757' }}
                            >
                                <span style={{ color: '#46AADC' }}>Features</span>  we provide
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
                                We have put some important information on our website that will be of great help to any future parents in educating their children.
                            </Typography>
                            <Typography
                                variant="h5"
                                gutterBottom
                                component="div"
                                sx={{
                                    fontStyle: 'italic',
                                    fontFamily: 'Georgia'
                                }}
                            >
                                These are our Features
                            </Typography>
                        </Box>
                        <Box>
                            <Grid container spacing={2} columns={{ xs: 12, sm: 8, md: 12 }}>
                                <Grid item xs={12} sm={4} md={4}>
                                    <CardActionArea>
                                        <Card
                                            data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine"
                                        >
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="https://i.ibb.co/VBg5t9V/pexels-photo-357271.jpg"
                                                alt=""
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Schools
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    We provide all the best schools information here.
                                                </Typography>
                                            </CardContent>

                                            <Link to="/schools"><Button size="small">Explore</Button></Link>

                                        </Card>
                                    </CardActionArea>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <CardActionArea>
                                        <Card
                                            data-aos="fade-down"
                                            data-aos-easing="linear"
                                            data-aos-duration="1500"
                                        >
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="https://i.ibb.co/sjk9MtL/pexels-photo-5303549.jpg"
                                                alt=""
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Online Tuition
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    You can find your online tution in this website.
                                                </Typography>
                                            </CardContent>

                                            <Link to="/privateTutor">   <Button size="small">Explore</Button></Link>


                                        </Card>
                                    </CardActionArea>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <CardActionArea>
                                        <Card
                                            data-aos="fade-left"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine"
                                        >
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="https://i.ibb.co/6Wf0S3d/pexels-photo-271168.jpg"
                                                alt=""
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Donation
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    You can donate any schools through our website.
                                                </Typography>
                                            </CardContent>

                                            <Link to="/"> <Button size="small">Explore</Button></Link>


                                        </Card>
                                    </CardActionArea>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <CardActionArea>
                                        <Card
                                            data-aos="fade-left"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine"
                                        >
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="https://i.ibb.co/WzSyMyc/photo-1556504505-2ebcc8edf84a.jpg"
                                                alt=""
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Transport
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    We give you the transport facility for your kids.
                                                </Typography>
                                            </CardContent>

                                            <Link to="/">    <Button size="small">Explore</Button></Link>


                                        </Card>
                                    </CardActionArea>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <CardActionArea>
                                        <Card
                                            data-aos="fade-up"
                                            data-aos-easing="linear"
                                            data-aos-duration="1500"
                                        >
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="https://i.ibb.co/Q9yYdn7/hand-using-mobile-phone-online-shopping-business-ecommerce-concept-cart-icon-blue-background-8930399.jpg"
                                                alt=""
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Buy Book
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    You can buy your kids books from here online.
                                                </Typography>
                                            </CardContent>

                                            <Link to="/books"> <Button size="small">Explore</Button></Link>


                                        </Card>
                                    </CardActionArea>
                                </Grid>
                                <Grid item xs={12} sm={4} md={4}>
                                    <CardActionArea>
                                        <Card
                                            data-aos="fade-right"
                                            data-aos-offset="300"
                                            data-aos-easing="ease-in-sine"
                                        >
                                            <CardMedia
                                                component="img"
                                                height="140"
                                                image="https://i.ibb.co/jhNmYLr/photo-1517842645767-c639042777db.jpg"
                                                alt=""
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div">
                                                    Notes
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    We also provide important class notes in our website.
                                                </Typography>
                                            </CardContent>

                                            <Link to="/notes"> <Button size="small">Explore</Button></Link>


                                        </Card>
                                    </CardActionArea>
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <img
                            data-aos="zoom-in"

                            src={foodImg}
                            alt=""
                        />
                    </Grid>
                </Grid>
            </Container >
        </Box >
    );
};

export default Features;



