import { Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { api } from '../../Hooks/Api';


const BookList = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch(`${api}/books`)
            .then(res => res.json())
            .then(data => setBooks(data?.data?.data))
    }, [])
    console.log(books)

    return (
        <>
            <NavigationBar />
            <Container>

                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: "500",
                        fontSize: 42,
                        color: "#3B4757",
                        textAlign: "center",
                        py: 3,
                    }}

                    gutterBottom
                    component="div"
                >
                    Books
                </Typography>


                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {books.map((book) => (
                        <Grid item key={book._id} xs={4} sm={4} md={3}>
                            <Card
                                sx={{ height: '100%', minWidth: '200px', display: 'flex', flexDirection: 'column' }}
                            >

                                <CardContent>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={book.bookImg}
                                        alt=""
                                    />
                                    <Typography gutterBottom variant="h5">
                                        {book.bookName}
                                    </Typography>
                                    <Typography>
                                        {book.author}
                                    </Typography>
                                    <Typography>
                                        First published: {book.publishedDate}
                                    </Typography>
                                    <Typography>
                                        Book type: {book.type}
                                    </Typography>
                                    <Typography>
                                        Price: {book.bookPrice}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <IconButton color="primary" aria-label="add to shopping cart">

                                        <AddShoppingCartIcon />
                                    </IconButton>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default BookList;