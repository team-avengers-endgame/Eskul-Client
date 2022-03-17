import { Button, Container, Grid, TextField, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.css'
import { useForm } from "react-hook-form";
import FacebookIcon from './img/facebook.svg';
import Logo from './img/logo.png'
import { alert } from '../../../Hooks/useStyle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedinIcon from './img/linkedinsvg.svg';
const Footer = () => {

    // Email handler =============
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        if (data.email) {
            alert('success', 'Success', 'Newsletter Sing in success')
            reset();
        }
    };
    return (
        <Box sx={{ flexGrow: 1, textAlign: 'center' }}>
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


                                <TextField {...register("email")}
                                    placeholder='User Email for Newsletter'
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



                                <Typography className='footer-link'
                                    sx={{ fontSize: 15, fontFamily: 'Roboto",sans-serif' }}>
                                    Dhaka, Bangladesh
                                </Typography>


                                <Typography className='footer-link'
                                    sx={{ fontSize: 15, fontFamily: 'Roboto",sans-serif' }}>
                                    <a
                                        className='footer-link'
                                        style={{ color: "#777777", textDecoration: "none" }}
                                        href="tel:+8801877533727">Phone: +8801877533727</a>
                                    <a
                                        className='footer-link'
                                        style={{ color: "#777777", textDecoration: "none" }}
                                        href="tel:+8801877533727">, Fax: 718-724-3312</a>
                                </Typography>

                                <Typography className='footer-link'
                                    sx={{ fontSize: 15, fontFamily: 'Roboto",sans-serif' }}>
                                    <a href=" mailto: team.avengers.endgame@gmail.com" target="blank" style={{ color: "#777777", textDecoration: "none" }}> team.avengers.endgame@gmail.com</a>
                                    <br />
                                    <a href=" mailto: rukon.js@gmail.com" target="blank" style={{ color: "#777777", textDecoration: "none" }}>rukon.js@gmail.com</a>
                                </Typography>




                                <Typography
                                    sx={{ fontSize: 15, fontFamily: 'Roboto",sans-serif' }}>

                                    Mon-Fri: 9:00 am – 5:00 pm
                                    Sat: 11:00 am – 16:00 pm
                                </Typography>

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
                                <a href="https://github.com/team-avengers-endgame" target="_blank" rel="noopener noreferrer">

                                    <GitHubIcon sx={{ height: '18px', width: '18px' }} />
                                </a>
                            </Box>
                            <Box className='footer-icon'>
                                <a href="https://www.linkedin.com/in/rukon-js/" target="_blank" rel="noopener noreferrer">

                                    <img src={LinkedinIcon} alt="" />
                                </a>
                            </Box>
                        </Typography>

                    </Grid>

                </Grid>

            </Container>
            <Toolbar />
        </Box>
    );
};

export default Footer;