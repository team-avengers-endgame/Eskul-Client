import React from 'react';
import { Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { alert, ButtonStyle } from '../../../Hooks/useStyle';
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import Logo from './OnlineTuitionTeachers/logo.png'
import { styled } from '@mui/material/styles';
import uploadImage from '../../../Hooks/useImgUpload';

import { api } from '../../../Hooks/Api.js';
const axios = require('axios');
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {

        width: '200px',

    },
    form: {
        width: "100%",
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundImage: `linear-gradient(to right,#00bccf, #005593)`
    }
}));




const OnlineTuitionTeacherAdd = () => {
    const [teacherPhoto, setTeacherPhoto] = React.useState('');
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        const reacherData = { ...data, teacherPhoto }
        axios.post(`${api}/privateTeachers`, reacherData)
            .then((response) => {
                response.status === 201 &&
                    alert('success', 'private Teachers add to the Database Success')

            })
            .catch((error) => {
                !error.status === 201 &&
                    alert('error', 'Bad Request, Places Try again')
                console.log(error);
            });


        console.log(reacherData)
        reset();
    };

    const handleImgUpload = img => {
        uploadImage(img)
            .then(res => {
                setTeacherPhoto(res.data.data.url);
            })
    }


    const classes = useStyles();
    return (
        <Container sx={{ p: 0 }}>
            <CssBaseline />
            <Box className={classes.paper}

                sx={{ pb: 7, pt: 2, px: 2, background: "#f6f8ff", borderRadius: 5, boxShadow: "1px 2px 5px #e2e2e2" }}>

                <img alt='' className={classes.avatar} src={Logo}></img>
                <Typography component="h1" variant="h5">Add a Online Tuition</Typography>
                <Box >
                    <form onSubmit={handleSubmit(onSubmit)}
                        className={classes.form} noValidate
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6} md={6} >
                                <TextField
                                    size='small'
                                    variant="outlined"
                                    {...register("teacherName", { required: true })}
                                    fullWidth
                                    label="Teacher Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size='small'
                                    variant="outlined"
                                    {...register("subject", { required: true })}
                                    fullWidth
                                    label="Subject"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type='number'
                                    size='small'
                                    variant="outlined"
                                    {...register("monthlyFee", { required: true })}
                                    fullWidth
                                    label="Monthly Fee"
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size='small'
                                    variant="outlined"
                                    {...register("educationalQualification", { required: true })}
                                    fullWidth
                                    label="Educational Qualification"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size='small'
                                    variant="outlined"
                                    {...register("description", { required: true })}
                                    fullWidth
                                    label="Description"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size='small'
                                    variant="outlined"
                                    {...register("location", { required: true })}
                                    fullWidth
                                    label="Location"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    size='small'
                                    variant="outlined"
                                    {...register("email", { required: true })}
                                    fullWidth
                                    label="Email"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <CssTextField

                                    size='small'
                                    sx={{ width: 1 }}
                                    accept="image/png, image/jpg, image/jpeg"
                                    type="file"
                                    onChange={e => handleImgUpload(e.target.files[0])} />

                            </Grid>
                        </Grid>
                        <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                            <Grid item xs={12} sm={6} md={6}>
                                <Button
                                    style={ButtonStyle}
                                    type='submit'
                                    size='small'
                                    variant="outlined"
                                    fullWidth
                                >Submit</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>
        </Container>
    );
};
const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: 'gray',
        },

    },
});
export default OnlineTuitionTeacherAdd;