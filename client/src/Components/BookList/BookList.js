import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, IconButton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { api } from '../../Hooks/Api';
import SearchBar from '../Shared/SearchBar/SearchBar';
import SharedBanner from '../Shared/SharedBanner/SharedBanner';
import Footer from '../Shared/Footer/Footer';
import { ButtonStyle } from '../../Hooks/useStyle';
import { NavLink } from 'react-router-dom';


const BookList = () => {
    const [books, setBooks] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    useEffect(() => {
        fetch(`${api}/books`)
            .then(res => res.json())
            .then(data => {
                setBooks(data?.data?.data);
                setSearchValue(data?.data?.data);
            })
    }, [])
    console.log(books)

    /*************** searching *****************/
    const handleOnChange = (e) => {
        const value = e.target.value;
        const newValue = books?.filter(s => s.bookName.includes(value) || s.author.includes(value))
        setSearchValue(newValue)
    }
    const placeholder = 'Search by Book Name or Author Name';
    return (
        <>
            <NavigationBar />
            <SharedBanner pageName={'Books'} />
            <Container>


                <SearchBar handleOnChange={handleOnChange} placeholder={placeholder} />

                <Grid container spacing={2} sx={{ pt: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {searchValue.map((book) => (
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

                                    <NavLink
                                        to={`/bookDetails/${book._id}`}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button size='small' sx={ButtonStyle}>Details</Button>

                                    </NavLink>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default BookList;