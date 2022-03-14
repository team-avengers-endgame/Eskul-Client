import { Button, Container, Grid, TextField, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.css'
import { useForm } from "react-hook-form";
import FacebookIcon from './img/facebook.svg';
import TwitterIcon from './img/twitter.svg';
import InstagramIcon from './img/instagram.svg';
import Logo from './img/logo.png'
const Footer = () => {

    // Email handler =============
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <Box sx={{ flexGrow: 1, textAlign: 'center'}}>
            <Box className="footer-Container">
                <Container >
                    <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4} sm={4} md={4}
                            sx={{ textAlign: "left" }}
                        >
                            <img style={{ paddingBottom: 15 }} width={192} height={54} src={Logo} alt="" />

                            <Typography sx={{
                                color: 'black',
                                fontSize: 15, fontFamily: 'Roboto",sans-serif'

                            }} >
                                Our experienced team strives to offer a creative and engaging environment and the opportunity for children to learn, grow, and thrive.
                            </Typography>
                            <br />
                            <form onSubmit={handleSubmit(onSubmit)}>


                                <TextField {...register("Newsletter")}
                                    placeholder='Newsletter signup'
                                    sx={{ backgroundColor: 'white' }}
                                    size='small'
                                />

                                <Button color="info" variant="contained" type='submit'>Send</Button>

                            </form>


                        </Grid>
                        <Grid item xs={4} sm={4} md={4}>
                            <Typography variant="h5"
                                sx={{ fontWeight: 'bold', fontSize: 21, textAlign: 'left', pb: 3 }}>
                                Quick Links
                            </Typography>
                            <Grid container
                                spacing={{ xs: 2, sm: 2, md: 3 }}
                                columns={{ sx: 4, sm: 12, md: 12 }}>

                                <Grid item xs={4} sm={6} md={6}
                                    sx={{ textAlign: "left" }}>


                                    <Link
                                        to='/schools'
                                        className='footer-link'
                                        sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                    >
                                        Schools
                                    </Link><br /><br />

                                    <Link
                                        to='/books'
                                        className='footer-link'
                                        sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                    >
                                        Books
                                    </Link>
                                    <br /><br />

                                    <Link
                                        to='/privateTutor'
                                        className='footer-link'
                                        sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                    >
                                        PrivateTutor
                                    </Link><br /><br />

                                    <Link
                                        to='/donation'
                                        className='footer-link'
                                        sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                    >
                                        Donation
                                    </Link><br /><br />



                                    <Link
                                        to='/transport'
                                        className='footer-link'
                                        sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                    >
                                        Transport
                                    </Link>

                                </Grid>
                                <Grid item xs={4} sm={6} md={6}
                                    sx={{ textAlign: "left" }}
                                >
                                    <Link
                                        to='/notes'
                                        className='footer-link'
                                        sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                    >
                                        Notes
                                    </Link><br /><br />
                                    <Link
                                        to='/faq'
                                        className='footer-link'
                                        sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                    >
                                        FAQ
                                    </Link><br /><br />




                                    <HashLink
                                        to='/#gallery'
                                        scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
                                        className='footer-link'
                                        sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                    >
                                        Gallery
                                    </HashLink><br /><br />
                                    <Link
                                        to='/about'
                                        className='footer-link'
                                        sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}>
                                        About us
                                    </Link><br /><br />
                                    <Link
                                        to='/contacts'
                                        className='footer-link'
                                        sx={{ color: 'black', fontSize: 15, fontFamily: 'Roboto",sans-serif' }}
                                    >
                                        Contacts
                                    </Link>


                                </Grid>

                            </Grid>

                        </Grid>

                        <Grid
                            item xs={12} sm={4} md={4}
                            sx={{ textAlign: "left" }}
                        >

                            <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: 21, pb: 3 }}>
                                Our Contacts
                            </Typography>
                            <Box>
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
                                        officeone@youremail.com
                                    </Typography>
                                </a>

                                <a
                                    className='footer-link'
                                    href="http://" target="_blank" rel="noopener noreferrer">

                                    <Typography
                                        sx={{ fontSize: 15, fontFamily: 'Roboto",sans-serif' }}>

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
                            to='/'
                            className='footer-link'
                            sx={{ fontSize: 15, color: 'gray', textDecoration: 'none' }}
                            variant="h6" item="true">
                            © {new Date().toLocaleString().slice()} Eskul. All Rights Reserved. Privacy Policy
                        </Link>
                    </Grid>

                    <Grid item="true" xs={12} sm={4} md={6}>
                        <Typography
                            sx={{ fontSize: 15, display: 'inline', marginRight: 1 }}
                            variant="h6" >
                            Follow us:
                            <Box className='footer-icon'>
                                <a href="https://www.facebook.com/ESKUL-111112171511275" target="_blank" rel="noopener noreferrer">
                                <img src={FacebookIcon} alt="" />
                                </a>
                            </Box>
                            <Box className='footer-icon'>
                                <img src={TwitterIcon} alt="" />
                            </Box>
                            <Box className='footer-icon'>
                                <img src={InstagramIcon} alt="" />
                            </Box>
                        </Typography>

                    </Grid>

                </Grid>

            </Container>
            <Toolbar/>
        </Box>
    );
};

export default Footer;