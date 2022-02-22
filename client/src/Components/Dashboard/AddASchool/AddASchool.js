import { Button, Container, CssBaseline, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { alert, ButtonStyle } from '../../../Hooks/useStyle.js';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from "react-hook-form";
import Logo from '../logo.png'
import { styled } from '@mui/material/styles';
import uploadImage from '../../../Hooks/useImgUpload';
import Stack from '@mui/material/Stack';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
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
const schoolTypes = [
    {
        value: 'Co-education',

    },
    {
        value: 'Boyes',

    },
    {
        value: 'Girls',

    },
    {
        value: 'Technical',

    },
];
const schoolShift = [
    {
        value: 'Morning shift',

    },
    {
        value: 'Afternoon shift',

    },
    {
        value: 'Full time (10am-4pm)',

    },

];



const AddASchool = () => {
    const [schoolPhoto, setSchoolPhoto] = React.useState('');
    const [schoolType, setSchoolType] = React.useState('');
    const [schoolShiftValue, SetSchoolShiftValue] = React.useState('');
    const { register, handleSubmit, reset } = useForm();
    const [founderDate, setFounderDate] = React.useState(new Date('2014-08-18T21:11:54'));




    const onSubmit = data => {
        data.schoolPhoto = schoolPhoto;
        data.founderDate = founderDate.toDateString();
        data.schoolShift = schoolShiftValue;
        data.schoolType = schoolType;

        axios.post(`${api}/schools`, data)
            .then((response) => {
                response.status === 201 &&
                    alert('success', 'School add to the Database Success')

            })
            .catch((error) => {
                !error.status === 201 &&
                    alert('error', 'Bad Request, Places Try again')
                console.log(error);
            });


        console.log(data)
        reset();
    };

    const handleImgUpload = img => {
        uploadImage(img)
            .then(res => {
                setSchoolPhoto(res.data.data.url);
            })
    }



    const handleChangeSchoolType = (event) => {
        setSchoolType(event.target.value);
    };
    const handleChangeSchoolShift = (event) => {
        SetSchoolShiftValue(event.target.value);
    };
    const handleChange = (newValue) => {
        setFounderDate(newValue);
    };
    const classes = useStyles();
    return (
        <Container sx={{ p: 0 }}>
            <CssBaseline />
            <Box className={classes.paper}

                sx={{ pb: 7, pt: 2, px: 2, background: "#f6f8ff", borderRadius: 5, boxShadow: "1px 2px 5px #e2e2e2" }}>

                <img alt='' className={classes.avatar} src={Logo}></img>
                <Typography component="h1" variant="h5">Add a School From</Typography>
                <Box >
                    <form onSubmit={handleSubmit(onSubmit)}
                        className={classes.form} noValidate
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6} md={6} >
                                <TextField
                                    size='small'
                                    variant="outlined"
                                    {...register("schoolName", { required: true })}
                                    fullWidth
                                    label="School Name"
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
                                    {...register("EIIN", { required: true })}
                                    fullWidth
                                    label="EIIN"
                                    autoFocus
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack size='small'>
                                        <DesktopDatePicker

                                            label="Founder date"
                                            inputFormat="MM/dd/yyyy"
                                            value={founderDate}
                                            onChange={handleChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        /></Stack>

                                </LocalizationProvider>                                    </Grid>



                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    size='small'
                                    label="Co-Education"
                                    value={schoolShiftValue}
                                    onChange={handleChangeSchoolShift}
                                    autoFocus
                                >
                                    {schoolShift.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.value}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="outlined-select-currency"
                                    select
                                    fullWidth
                                    size='small'
                                    label="School Type"
                                    value={schoolType}
                                    onChange={handleChangeSchoolType}
                                    autoFocus
                                >
                                    {schoolTypes.map((option) => (
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
                                    {...register("schoolEmail", { required: true })}
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
export default AddASchool;