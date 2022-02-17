import { Button, ButtonGroup, Container, Grid, Link, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Footer.css'
import { useForm } from "react-hook-form";
import FacebookIcon from './img/facebook.svg';
import TwitterIcon from './img/twitter.svg';
import InstagramIcon from './img/instagram.svg';
const Footer = () => {

    // Email handler =============
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Box sx={{ flexGrow: 1, textAlign: 'center', py: 6 }}>
            <Box className="footer-Container">
                <Container >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid sx={{ mt: 5, textAlign: "left" }} item="true" xs={12} sm={4} md={4}>
                            <img width={192} height={54} src="http://localhost:3000/static/media/logo.277198595eafeb31fb5a.png" alt="" />

                            <Typography sx={{
                                mt: 5, color: 'black',
                                fontSize: 15, fontFamily: 'Roboto",sans-serif'

                            }} >
                                Our experienced team strives to offer a creative and engaging environment and the opportunity for children to learn, grow, and thrive.
                            </Typography>
                            <br />
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <ButtonGroup color="primary" aria-label="outlined primary button group">
                                    <Button>
                                        <TextField {...register("Newsletter")}
                                            defaultValue='Newsletter Signup'
                                            placeholder='Newsletter signup'
                                            sx={{ backgroundColor: 'white' }}
                                            size='small'
                                        />
                                    </Button>
                                    <Button size='small' sx={{ color: '#fff', backgroundColor: '#46aadd' }} ></Button>
                                </ButtonGroup>
                            </form>


                        </Grid>
                        <Grid sx={{ mt: 5, textAlign: "left" }} item="true" xs={12} sm={4} md={2}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: 21 }}>
                                Quick Links
                            </Typography>
                            <Box sx={{ mt: 5 }}>

                                <Link
                                    className='footer-link'
                                    sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }} href="#" underline="none">
                                    About us
                                </Link><br /><br />

                                <Link
                                    className='footer-link'
                                    sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                    href="#" underline="none">
                                    Programs
                                </Link><br /><br />

                                <Link
                                    className='footer-link'
                                    sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                    href="#" underline="none">
                                    Parent Info
                                </Link><br /><br />

                                <Link
                                    className='footer-link'
                                    sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                    href="#" underline="none">
                                    Events
                                </Link><br /><br />

                                <Link
                                    className='footer-link'
                                    sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                    href="#" underline="none">
                                    Gallery
                                </Link>
                            </Box>

                        </Grid>
                        <Grid

                            sx={{ mt: 14, textAlign: "left" }}
                            item="true" xs={12} sm={4} md={2}>


                            <Link
                                className='footer-link'
                                sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                href="#" underline="none">
                                Prices
                            </Link><br /><br />

                            <Link
                                className='footer-link'
                                sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                href="#" underline="none">
                                FAQs
                            </Link><br /><br />

                            <Link
                                className='footer-link'
                                sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                href="#" underline="none">
                                Blog
                            </Link><br /><br />

                            <Link
                                className='footer-link'
                                sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                href="#" underline="none">
                                Testimonials
                            </Link><br /><br />

                            <Link
                                className='footer-link'
                                sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                href="#" underline="none">
                                Contacts
                            </Link><br />


                        </Grid>
                        <Grid
                            sx={{ mt: 5, textAlign: "left" }}
                            item="true" xs={12} sm={4} md={4}>

                            <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: 21 }}>
                                Our Contacts
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <a
                                    className='footer-link'
                                    href="http://" target="_blank" rel="noopener noreferrer">
                                    <Typography className='footer-link'
                                        sx={{ fontSize: 15, fontFamily: 'Roboto",sans-serif' }}>
                                        3261 Anmoore Road Brooklyn, NY 11230
                                    </Typography>
                                </a>
                                <a
                                    className='footer-link'
                                    href="http://" target="_blank" rel="noopener noreferrer">
                                    <Typography className='footer-link'
                                        sx={{ fontSize: 15, fontFamily: 'Roboto",sans-serif' }}>
                                        800-123-4567, Fax: 718-724-3312
                                    </Typography>
                                </a>
                                <a
                                    className='footer-link'
                                    href="http://" target="_blank" rel="noopener noreferrer">
                                    <Typography className='footer-link'
                                        sx={{ fontSize: 15, fontFamily: 'Roboto",sans-serif' }}>
                                        officeone@youremail.com
                                    </Typography>
                                </a>

                                <a
                                    className='footer-link'
                                    href="http://" target="_blank" rel="noopener noreferrer">

                                    <Typography
                                        sx={{ fontSize: 15, fontFamily: 'Roboto",sans-serif' }}>
                                        {/* <AccessTimeIcon style={{ width: 20, height: 20, color: '#46aadd' }} /> */}
                                        Mon-Fri: 9:00 am – 5:00 pm
                                        Sat: 11:00 am – 16:00 pm
                                    </Typography>
                                </a>
                            </Box>

                        </Grid>
                    </Grid>

                </Container>
            </Box>
            <Container sx={{ pt: 5 }}>

                <Grid container spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 2, sm: 8, md: 12 }}>

                    <Grid item="true" xs={12} sm={4} md={6}>
                        <Link
                            className='footer-link'
                            sx={{ fontSize: 15, color: 'gray', textDecoration: 'none' }}
                            variant="h6" item="true">
                            © 2022 Eskul. All Rights Reserved. Privacy Policy
                        </Link>
                    </Grid>

                    <Grid item="true" xs={12} sm={4} md={6}>
                        <Typography
                            sx={{ fontSize: 15, display: 'inline', marginRight: 1 }}
                            variant="h6" >
                            Follow us:
                        </Typography>
                        <span style={{ display: 'inline' }}>
                            <span className='footer-icon'>
                                <img src={FacebookIcon} alt="" />

                            </span>
                            <span className='footer-icon'>
                                <img src={TwitterIcon} alt="" />
                            </span>
                            <span className='footer-icon'>
                                <img src={InstagramIcon} alt="" />
                            </span>
                        </span>




                    </Grid>

                </Grid>

            </Container>
        </Box>
    );
};

export default Footer;