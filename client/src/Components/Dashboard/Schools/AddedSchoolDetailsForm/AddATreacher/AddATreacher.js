import { Button, Container, CssBaseline, Grid, MenuItem, TextField, Typography } from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';
import { ButtonStyle } from '../../../../../Hooks/useStyle'
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Logo from '../../../logo.png'
import { styled } from '@mui/material/styles';
import uploadImage from '../../../../../Hooks/useImgUpload';
import { useParams } from 'react-router-dom';
import { api } from '../../../../../Hooks/Api';
import axios from 'axios';

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

const AddATreacher = () => {
    const [teacherPhoto, setTeacherPhoto] = React.useState('');
    const { register, handleSubmit, reset } = useForm();
    const [school, setSchool] = useState({})
    const { id } = useParams()
    const [schoolTeacherValue, SetSchoolTeacherValue] = React.useState('');

    useEffect(() => {
        fetch(`${api}/schools/${id}`)
            .then(res => res.json())
            .then(data => setSchool(data?.data?.data))
    }, [id])

    const onSubmit = data => {
        data.teacherPhoto = teacherPhoto;
        data.designation = schoolTeacherValue;
        data.school = id;

        axios.post(`${api}/teachers`, data)
            .then((response) => {
                response.status === 201 &&
                    alert('success', 'Add a Teachers in School Successfully')

            })
            .catch((error) => {
                console.log(error)
                !error.status === 201 &&
                    alert('error', 'Bad Request, Places Try again')
            });

        console.log(data)
        reset();
    };

    const handleImgUpload = img => {
        uploadImage(img)
            .then(res => {
                setTeacherPhoto(res.data.data.url);
            })
    }

    const schoolTeacherOption = [
        {
            value: 'Headmaster',

        },
        {
            value: 'Assistant Headmaster',

        },
        {
            value: 'Assistant teacher',

        },
        {
            value: 'guest  teacher',

        },

    ];

    const handleChangeTeacherOption = (event) => {
        SetSchoolTeacherValue(event.target.value);
    };

    const classes = useStyles();
    return (
        <Container sx={{ p: 0 }}>
            <CssBaseline />
            <Box className={classes.paper}

                sx={{ pb: 7, pt: 2, px: 2, background: "#f6f8ff", borderRadius: 5, boxShadow: "0px 14px 22px rgb(42 135 158 / 10%)" }}>

                <img alt='' className={classes.avatar} src={Logo}></img>
                <Typography sx={{ py: 1, fontWeight: 'bold' }}>{school?.schoolName}</Typography>
                <Typography sx={{ borderBottom: '1px solid red' }}>
                    <span >EIIN: {school?.EIIN}</span>  ||
                    <span >  Location: {school?.location}</span>
                </Typography>

                <Typography variant="h5">Add a School Teacher</Typography>

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
                                    {...register("qualification", { required: true })}
                                    fullWidth
                                    label="Qualification"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    size='small'
                                    label="Designation "
                                    value={schoolTeacherValue}
                                    onChange={handleChangeTeacherOption}
                                    autoFocus
                                >
                                    {schoolTeacherOption.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
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
                                    size='small'
                                    variant="outlined"
                                    {...register("institution", { required: true })}
                                    fullWidth
                                    label="Institution"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="number"
                                    size='small'
                                    variant="outlined"
                                    {...register("phoneNumber", { required: true })}
                                    fullWidth
                                    label="Phone Number"
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
export default AddATreacher;