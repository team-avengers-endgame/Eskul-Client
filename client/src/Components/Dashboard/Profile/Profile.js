import { Box, Container, Divider, Fab, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import EditIcon from '@mui/icons-material/Edit';

import UpdateProfile from './UpdateProfile';
const Profile = () => {
    const { user, updateUserProfile } = useAuth();
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState();

    const handlerUpdateUserProfile = () => {
        const name='Md Rukon Uddin'
        const photo=`https://i.ibb.co/9tBCSvX/Rukon-Pofile-Pic-3.png`
        updateUserProfile(name,photo)
    }

    const handleClose = () => {
        setOpen(false);
      };
      const handleOpen = (id) => {
        
        setScroll();
        setOpen(true);
      };

    return (
        <Box>
            <Toolbar />

            <Container >
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
                            <br />
                            <Fab variant="extended" size="small" color="secondary" aria-label="add">
                                <EditIcon />
                                Edit Profile
                            </Fab>
                        </Box>

                    </Grid>

                    <Grid item xs={4} sm={8} md={10}>

                        <Typography variant='body' sx={{ color: 'gray', fontWeight: "bold" }}>Full Name</Typography>

                        <Typography variant='h6' sx={{ fontWeight: "bold" }}>{user.displayName}</Typography>

                        <Typography variant='body' sx={{ color: 'gray' }}>Email Address</Typography>

                        <Typography sx={{ fontWeight: "bold" }}>{user.email}</Typography>

                        <Typography sx={{ color: 'gray', fontWeight: "bold" }}>Phone Number</Typography>
                        <Typography sx={{ fontWeight: "bold" }}>01765459224</Typography>
                    </Grid>
                </Grid>
            </Container>
            <UpdateProfile
             
             handleClose={handleClose}
             open={open}
             scroll={scroll}
             
            />
        </Box>
    );
};

export default Profile;