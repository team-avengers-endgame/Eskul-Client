import { Box, Container, Divider, Fab, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UpdateProfile from './UpdateProfile';
import Footer from '../../Shared/Footer/Footer';
const Profile = () => {
    const { user, updateUserProfile } = useAuth();
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState();

    const handlerUpdateUserProfile = () => {
        const name = 'Md Rukon Uddin'
        const photo = `https://i.ibb.co/9tBCSvX/Rukon-Pofile-Pic-3.png`
        updateUserProfile(name, photo)
    }

    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = (id) => {

        setScroll();
        setOpen(true);
    };
    console.log(user?.metadata)
    return (
        <Box>
            <Toolbar />


            <Container >
                <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#7b1fa2',display:'flex',alignItems:'center' }}><AccountCircleIcon/> My Profile</Typography>

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
                                <EditIcon />
                                Edit Profile
                            </Fab>
                        </Box>

                    </Grid>

                    <Grid item xs={4} sm={5} md={5}>

                        <Typography variant='body' sx={{ color: 'gray', fontWeight: "bold" ,mt:1}}>Full Name</Typography>

                        <Typography variant='h6' sx={{ fontWeight: "bold" ,mt:1}}>{user.displayName}</Typography>

                        <Typography variant='body' sx={{ color: 'gray' ,mt:1}}>Email Address</Typography>

                        <Typography sx={{ fontWeight: "bold" ,mt:1}}>{user.email}</Typography>

                        <Typography sx={{ color: 'gray', fontWeight: "bold" ,mt:1}}>Phone Number</Typography>
                        <Typography sx={{ fontWeight: "bold" ,mt:1}}>01765459224</Typography>

                       
                    </Grid>
                    <Grid item xs={4} sm={5} md={5}>

                        

                        <Typography sx={{ color: 'gray', fontWeight: "bold" ,mt:1}}>Creation Time</Typography>
                        <Typography sx={{ fontWeight: "bold" ,mt:1}}>{user?.metadata?.creationTime}</Typography>

                        <Typography sx={{ color: 'gray', fontWeight: "bold" ,mt:1}}>Last SignIn Time</Typography>
                        <Typography sx={{ fontWeight: "bold" ,mt:1}}>{user?.metadata?.lastSignInTime}</Typography>
                    </Grid>
                </Grid>
            </Container>
            <UpdateProfile

                handleClose={handleClose}
                open={open}
                scroll={scroll}

            />
            <Toolbar/>

            <Toolbar/>

            <Toolbar/>
            <Footer/>
        </Box>
    );
};

export default Profile;