import React, { useEffect, useState } from 'react';
import { Box, Button, Container, CssBaseline, Grid, MenuItem, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import StarIcon from '@mui/icons-material/Star';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { ButtonStyle } from '../../../../Hooks/useStyle'
import uploadImage from '../../../../Hooks/useImgUpload';
import { useParams } from 'react-router-dom';
import { api } from '../../../../Hooks/Api';
import { useForm } from "react-hook-form";

const EditBooks = () => {
    const [book, setBook] = useState({});
    const [bookImg, setBookImg] = React.useState(book.bookImg);
    const [rating, setRating] = React.useState(book.rating);
    const [hover, setHover] = React.useState(-1);
    const [type, setType] = React.useState('');
    const { id } = useParams();
    const [publishedDate, setPublishedDate] = React.useState(book.publishedDate || new Date().toLocaleDateString());


    const { register, handleSubmit } = useForm();


    useEffect(() => {

        fetch(`${api}/books/${id}`)
            .then(res => res.json())
            .then(data => setBook(data.data.data))
            .catch(error => console.log(error))

    }, [id])

    console.log()
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




    const handleImgUpload = img => {
        uploadImage(img)
            .then(res => {
                setBookImg(res.data.data.url);
            })
    }

    console.log(bookImg)
    const handleChangePublishedDate = (newValue) => {
        setPublishedDate(newValue);
    };
    const handleChangeBookType = (event) => {
        setType(event.target.value);
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



    const onSubmit = data => console.log(data);

    return (
        <div>
            <h1>Edit Book ({book.bookName})</h1>

            {
                book._id &&
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={6} >
                            <TextField
                                size='small'
                                variant="outlined"
                                fullWidth
                                label="Book Name"
                                autoFocus
                                defaultValue={book.bookName}
                                {...register("bookName", { required: true })}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField
                                size='small'
                                variant="outlined"
                                fullWidth
                                label="Description"
                                autoFocus
                                defaultValue={book.bookDescription}
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
                                defaultValue={book.author}
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
                                defaultValue={book.publisher}
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
                                defaultValue={book.bookPrice}
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

            }

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