import { Box, Container, Divider, Fab, Grid, IconButton,Toolbar, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UpdateProfile from './UpdateProfile';
import Footer from '../../Shared/Footer/Footer';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';
import uploadImage from "../../../Hooks/useImgUpload";

const Profile = () => {
    const { user, updateUserProfile } = useAuth();
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState();



    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = (id) => {
        setScroll();
        setOpen(true);
    };
    const Input = styled('input')({
        display: 'none',
    });

    const handleImgUpload = (img) => {
        uploadImage(img).then((res) => {
            const name = user.displayName;
            const photo = res.data.data.url;
            updateUserProfile(name, photo)
        });
    };
    return (
        <Box>
            <Toolbar />
            <Container >
                <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#7b1fa2', display: 'flex', alignItems: 'center' }}><AccountCircleIcon /> My Profile</Typography>

                <Divider textAlign="right">
                    <Fab onClick={handleOpen} variant="extended" size="small" color="secondary" aria-label="add">
                        <EditIcon />
                        Edit
                    </Fab>
                </Divider>
                <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 12, md: 12 }}

                >
                    <Grid item xs={4} sm={4} md={2} sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box>
                            <img style={{ borderRadius: '50%', width: 140 }} src={user.photoURL} alt="" />

                            <Fab variant="extended"
                                size="small"
                                color="secondary"
                                aria-label="add"
                                sx={{ mt: 5 }}
                            >
                                <label htmlFor="icon-button-file">
                                    <Input
                                        onChange={(e) => handleImgUpload(e.target.files[0])}
                                        accept="image/png, image/jpg, image/jpeg"
                                        id="icon-button-file" type="file" />
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera sx={{ color: "#ffff" }} />
                                    </IconButton>
                                    Edit Profile
                                </label>
                            </Fab>
                        </Box>

                    </Grid>

                    <Grid item xs={4} sm={5} md={5}>

                        <Typography variant='body' sx={{ color: 'gray', fontWeight: "bold", mt: 1 }}>Full Name</Typography>

                        <Typography variant='h6' sx={{ fontWeight: "bold", mt: 1 }}>{user.displayName}</Typography>

                        <Typography variant='body' sx={{ color: 'gray', mt: 1 }}>Email Address</Typography>

                        <Typography sx={{ fontWeight: "bold", mt: 1 }}>{user.email}</Typography>

                        <Typography sx={{ color: 'gray', fontWeight: "bold", mt: 1 }}>Phone Number</Typography>
                        <Typography sx={{ fontWeight: "bold", mt: 1 }}>01765459224</Typography>


                    </Grid>
                    <Grid item xs={4} sm={5} md={5}>
                        <Typography sx={{ color: 'gray', fontWeight: "bold", mt: 1 }}>Creation Time</Typography>
                        <Typography sx={{ fontWeight: "bold", mt: 1 }}>{user?.metadata?.creationTime}</Typography>

                        <Typography sx={{ color: 'gray', fontWeight: "bold", mt: 1 }}>Last SignIn Time</Typography>
                        <Typography sx={{ fontWeight: "bold", mt: 1 }}>{user?.metadata?.lastSignInTime}</Typography>
                    </Grid>
                </Grid>
            </Container>
            <UpdateProfile

                handleClose={handleClose}
                open={open}
                scroll={scroll}

            />
            <Toolbar />

            <Toolbar />

            <Toolbar />
            <Footer />
        </Box>
    );
};

export default Profile;