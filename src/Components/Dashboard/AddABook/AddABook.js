import React from 'react';
import { Button, Container, CssBaseline, Grid, MenuItem, TextField, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonStyle, alert } from '../../../Hooks/useStyle'
import { Box } from '@mui/system';
import { useForm } from "react-hook-form";
import Logo from '../logo.png'
import { styled } from '@mui/material/styles';
import uploadImage from '../../../Hooks/useImgUpload';
import { api } from '../../../Hooks/Api';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import Footer from '../../Shared/Footer/Footer';
import QuickScroll from '../../Home/QuickScroll/QuickScroll';
const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};


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

const AddABook = () => {
    const [bookImg, setBookImg] = React.useState('');
    const { register, handleSubmit, reset } = useForm();
    const [publishedDate, setPublishedDate] = React.useState(new Date('2/26/2022').toLocaleDateString());
    const [rating, setRating] = React.useState(2);
    const [hover, setHover] = React.useState(-1);
    const [type, SetType] = React.useState('');


    const onSubmit = data => {
        const book = { ...data, publishedDate, bookImg, type, rating }

        axios.post(`${api}/books`, book)
            .then((response) => {
                response.status === 201 &&
                    alert('success', 'Add a books in server Successfully')

            })
            .catch((error) => {
                console.log(error)
                !error.status === 201 &&
                    alert('error', 'Bad Request, Places Try again')
            });


        reset();
    };

    const handleImgUpload = img => {
        uploadImage(img)
            .then(res => {
                setBookImg(res.data.data.url);
            })
    }


    const handleChangePublishedDate = (newValue) => {
        setPublishedDate(newValue);
    };
    const handleChangeBookType = (event) => {
        SetType(event.target.value);
    };

    const bookType = [
        {
            value: 'Educational',

        },
        {
            value: 'Novel',

        },
        {
            value: "Children's books",

        },
        {
            value: "The story",

        },
        {
            value: "Translation",

        },
        {
            value: "Liberation War",

        },
        {
            value: "Science fiction",

        },
        {
            value: "Book Fair 2022",

        },
        {
            value: "School books",

        },
        {
            value: "Programming"
        },
        {
            value: "Travel and Emigration"
        },
        {
            value: "Rhymes and poems"
        },

    ];













    const classes = useStyles();
    return (
        <>
            <Container sx={{ p: 0 }}>
                <Toolbar />
                <CssBaseline />
                <Box className={classes.paper}

                    sx={{ mb: 10, py: 2, px: 2, borderRadius: 5, boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)" }}>

                    <img alt='' className={classes.avatar} src={Logo}></img>

                    <Typography variant="h5">Add a Book Form</Typography>

                    <Box >
                        <form onSubmit={handleSubmit(onSubmit)}
                            className={classes.form} noValidate
                        >
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6} md={6} >
                                    <TextField
                                        size='small'
                                        variant="outlined"
                                        {...register("bookName", { required: true })}
                                        fullWidth
                                        label="Book Name"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        size='small'
                                        variant="outlined"
                                        {...register("bookDescription", { required: true })}
                                        fullWidth
                                        label="Description"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        size='small'
                                        variant="outlined"
                                        {...register("author", { required: true })}
                                        fullWidth
                                        label="Author"
                                        autoFocus
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        size='small'
                                        variant="outlined"
                                        {...register("publisher", { required: true })}
                                        fullWidth
                                        label="Publisher"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Stack size='small' variant="outlined">
                                            <DesktopDatePicker

                                                label="Published Date"
                                                inputFormat="MM/dd/yyyy"
                                                value={publishedDate}
                                                onChange={handleChangePublishedDate}
                                                renderInput={(params) => <TextField {...params} />}
                                                autoFocus
                                            /></Stack>

                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        type="number"
                                        size='small'
                                        variant="outlined"
                                        {...register("bookPrice", { required: true })}
                                        fullWidth
                                        label="Book Price"
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
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        id="outlined-select-currency"
                                        select
                                        fullWidth
                                        size='small'
                                        label="Type"
                                        value={type}
                                        onChange={handleChangeBookType}
                                        autoFocus
                                    >
                                        {bookType.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.value}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Rating
                                        name="hover-feedback"
                                        value={rating}
                                        precision={0.5}
                                        onChange={(event, newValue) => {
                                            setRating(newValue);
                                        }}
                                        onChangeActive={(event, newHover) => {
                                            setHover(newHover);
                                        }}
                                        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                                    />
                                    {rating !== null && (
                                        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : rating]}</Box>
                                    )}

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
            <Footer />
            <QuickScroll />
        </>
    );
};
const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: 'gray',
        },

    },
});
export default AddABook;