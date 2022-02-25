import { Card, CardActions, CardContent, CardMedia, Container, Divider, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const books = [
    {
        id: '1',
        img: 'https://i.ibb.co/bBpfHMb/Harry-Potter-and-the-Prisoner-of-Azkaban.jpg',
        title: 'Harry Potter Philosophers Stone ',
        author: 'J. K. Rowling',
        published: '1997',
        type: 'Story',
        price: '450'
    },
    {
        id: '2',
        img: 'https://i.ibb.co/8DzMFYD/Harry-Potter-and-the-Chamber-of-Secrets.jpg',
        title: 'Harry Potter Chamber of Secrets  ',
        author: 'J. K. Rowling',
        published: '1998',
        type: 'Story',
        price: '450'
    },
    {
        id: '3',
        img: 'https://i.ibb.co/bBpfHMb/Harry-Potter-and-the-Prisoner-of-Azkaban.jpg',
        title: 'Harry Potter Prisoner of Azkaban ',
        author: 'J. K. Rowling',
        published: '1999',
        type: 'Story',
        price: '450'
    },
    {
        id: '4',
        img: 'https://i.ibb.co/34J9msZ/Harry-Potter-and-the-Philosopher-s-Stone-Book-Cover.jpg',
        title: 'Harry Potter Goblet of Fire  ',
        author: 'J. K. Rowling',
        published: '2000',
        type: 'Story',
        price: '450'
    },
    {
        id: '5',
        img: 'https://i.ibb.co/bBpfHMb/Harry-Potter-and-the-Prisoner-of-Azkaban.jpg',
        title: 'Harry Potter Order of the Phoenix ',
        author: 'J. K. Rowling',
        published: '2003',
        type: 'Story',
        price: '450'
    },
    {
        id: '6',
        img: 'https://i.ibb.co/bBpfHMb/Harry-Potter-and-the-Prisoner-of-Azkaban.jpg',
        title: 'Harry Potter Half-Blood Prince ',
        author: 'J. K. Rowling',
        published: '2005',
        type: 'Story',
        price: '450'
    },
]


const BookList = () => {

    return (
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
                                    image={book.img}
                                    alt="Paella dish"
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
    );
};

export default BookList;