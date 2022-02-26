import { Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, IconButton, Typography } from '@mui/material';
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
    return (
        <>
            <NavigationBar />
            <Container sx={{ py: 8 }} maxWidth="md">

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
                <Divider variant="middle" />

                <Grid container spacing={4}>
                    {books.map((book) => (
                        <Grid item key={book.id} xs={12} sm={6} md={4}>
                            <Card
                                sx={{ height: '100%', minWidth: '200px', display: 'flex', flexDirection: 'column' }}
                            >

                                <CardContent sx={{ flexGrow: 1 }}>
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={book.bookImg}
                                        alt=""
                                    />
                                    <Typography gutterBottom variant="h5">
                                        {book.title}
                                    </Typography>
                                    <Typography>
                                        {book.author}
                                    </Typography>
                                    <Typography>
                                        First published: {book.published}
                                    </Typography>
                                    <Typography>
                                        Book type: {book.type}
                                    </Typography>
                                    <Typography>
                                        Price: {book.price}
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