import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material/styles';
import uploadImage from '../../../../Hooks/useImgUpload';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Button, Grid, MenuItem, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import { ButtonStyle } from '../../../../Hooks/useStyle';
import { useForm } from 'react-hook-form';
import { api } from '../../../../Hooks/Api';

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
const EditBooks = ({ id, handleClose, open, scroll }) => {
    const [singleBook, setSingleBook] = useState({}) || ''
    const { register, handleSubmit, reset } = useForm();
    const [bookImg, setBookImg] = useState('');
    const [publishedDate, setPublishedDate] = React.useState(new Date().toLocaleDateString());
    const [rating, setRating] = useState(2);
    const [hover, setHover] = useState(-1);
    const [type, SetType] = useState('');




    useEffect(() => {
        fetch(`${api}/books/${id}`)
            .then(res => res.json())
            .then(data => setSingleBook(data?.data?.data))
    }, [id, setSingleBook])

    console.log(singleBook)

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);




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




    const onSubmit = data => {
        const book = { ...data, publishedDate, bookImg, type, rating }
        console.log(book)
        handleClose();
        reset();
    };


    const classes = useStyles();
    return (
        <div>

            <Dialog
                open={open}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Edit Books ({singleBook?.bookName})</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <Box >
                        <form onSubmit={handleSubmit(onSubmit)}
                            className={classes.form} noValidate
                        >

                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6} md={6} >
                                    <input type="text" defaultValue={singleBook.bookName} />
                                    <TextField
                                        size='small'
                                        variant="outlined"
                                        fullWidth
                                        label="Book Name"
                                        defaultValue={singleBook?.bookName}
                                        autoFocus
                                        {...register("bookName", { required: true })}

                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        size='small'
                                        variant="outlined"
                                        fullWidth
                                        label="Description"
                                        // defaultValue={book.bookDescription}
                                        autoFocus
                                        {...register("bookDescription", { required: true })}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        size='small'
                                        variant="outlined"
                                        fullWidth
                                        label="Author"
                                        autoFocus
                                        // defaultValue={book.author}
                                        {...register("author", { required: true })}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        size='small'
                                        variant="outlined"
                                        fullWidth
                                        label="Publisher"
                                        autoFocus
                                        // defaultValue={book.publisher}
                                        {...register("publisher", { required: true })}
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
                                        fullWidth
                                        label="Book Price"
                                        autoFocus
                                        // defaultValue={book.bookPrice}
                                        {...register("bookPrice", { required: true })}
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
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
            borderColor: 'gray',
        },

    },
});
export default EditBooks;