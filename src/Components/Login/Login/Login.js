import React from 'react';
import { Box, Button, TextField, Grid, Avatar, Divider, Chip, Fab, Typography } from '@mui/material';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import LockIcon from '@material-ui/icons/Lock';
import { AccountCircle } from '@material-ui/icons';
import Avatar_img from './img/undraw_profile_pic_ic5t.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import Tooltip from '@mui/material/Tooltip';
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    loginContainer: {
        backgroundImage: ` linear-gradient(#005593,#0fBccf)`,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    LoginButton: {
        backgroundImage: `linear-gradient(to right,#00bccf, #005593)`
    },
    fromContainer: {
        boxShadow: '1px 2px 5px 1px  #ffff',
        backgroundColor: 'white',
        height: 430,
        width: 340,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10px'
    },
    paper: {
        height: 310,
        width: 300,
    },
    abater: {
        height: '100px !important',
        width: '100px !important',
        margin: '-120px 0 0px 100px',
        boxShadow: '1px -5px 30px #ffff'

    },



}));
const Login = () => {
    const { signInWithGoogle, loginUser } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const location = useLocation();
    const navigate = useNavigate();
    const onSubmit = data => {
        loginUser(data.email, data.password, location, navigate)
        reset();
    };
    const classes = useStyles();

    return (
        <>
            <NavigationBar />
            <Box className={classes.loginContainer}>
                <Box >
                    <Grid container className={classes.root}>
                        <Grid item xs={12}>
                            <Grid container justifyContent="center">
                                <Grid className={classes.fromContainer}>
                                    <Box className={classes.paper}>
                                        <Avatar
                                            className={classes.abater}
                                            src={Avatar_img}

                                        />
                                        <Typography variant='h6'>Login</Typography>
                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <TextField
                                                size='small'
                                                type='email'
                                                placeholder='Email'
                                                className={classes.textField}
                                                label={<span><AccountCircle /> Email</span>}
                                                width={1}
                                                sx={{
                                                    width: 1,

                                                }}
                                                {...register("email",
                                                    { required: true })} />

                                            {errors.email && <span style={{ color: 'red' }}>This field is required</span>}
                                            <br />
                                            <br />
                                            <TextField
                                                size='small'
                                                type='password'
                                                placeholder='Password'
                                                className={classes.textField}
                                                label={<span><LockIcon />Password</span>}
                                                sx={{ width: 1 }}
                                                {...register("password",
                                                    { required: true })} />

                                            {errors.password && <span style={{ color: 'red' }}>This field is required</span>}
                                            <br />
                                            <br />
                                            <Button type="submit"
                                                variant="contained"
                                                className={classes.LoginButton}
                                                sx={{ display: 'block', width: 1 }}
                                            >Login</Button>
                                        </form>
                                        <Box style={{

                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}>
                                            <Link style={{
                                                textDecoration: 'none',
                                                color: '#005593',
                                                fontWeight: 'bold'
                                            }} to='/'>Forgot Your Password</Link>
                                        </Box>
                                        <Divider>
                                            <Chip label="or" />
                                        </Divider>
                                        <br />
                                        <Box sx={{ display: 'flex', justifyContent: ' space-around' }}>

                                            {/*********** Google Login *************/}
                                            <Tooltip title="Google" arrow>
                                                <Fab onClick={() => signInWithGoogle(location, navigate)} variant="extended" size="small" color="primary" aria-label="add" sx={{width:1}}>
                                                    <GoogleIcon sx={{ mr: 1 }} />
                                                    Google Sign in
                                                </Fab>
                                            </Tooltip>



                                        </Box>
                                        <br />
                                        <Divider><Chip label="🙃" /></Divider>
                                        <Box textAlign='center'> <span>Are you new user? Please </span>
                                            <Link to='/register'
                                                style={{
                                                    textDecoration: 'none',
                                                    color: '#005593',
                                                    fontWeight: 'bold'
                                                }}
                                            ><Button>Register</Button></Link>
                                        </Box>

                                    </Box>
                                </Grid>

                            </Grid>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
            <Footer />
        </>
    );
};

export default Login;