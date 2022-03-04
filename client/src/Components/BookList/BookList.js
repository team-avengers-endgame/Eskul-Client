import { Box, Button, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import { api } from '../../Hooks/Api';
import SearchBar from '../Shared/SearchBar/SearchBar';
import SharedBanner from '../Shared/SharedBanner/SharedBanner';
import Footer from '../Shared/Footer/Footer';
import { ButtonStyle } from '../../Hooks/useStyle';
import { NavLink } from 'react-router-dom';
import StarRateIcon from '@mui/icons-material/StarRate';



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

                <Grid container spacing={2} sx={{ mt: 6 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {searchValue?.map((single) => (
                        <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={8} md={6}>
                            <Paper
                                sx={{
                                    p: 1,
                                    margin: "auto",
                                    maxWidth: 500,
                                    flexGrow: 1,
                                    boxShadow: "0px 14px 22px rgb(42 135 158 / 10%)",
                                }}
                            >
                                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                                    <Grid item xs={2} sm={4} md={4}>

                                        <CardMedia
                                            component="img"
                                            sx={{ objectFit: 'cover', height: 200, width: 200 }} alt="complex" src={single?.bookImg} />


                                    </Grid>
                                    <Grid item xs={2} sm={4} md={8} pl={2} my={3}>

                                        <Box>
                                            <Typography variant='h6'   >
                                                {single?.bookName}
                                            </Typography>

                                            <Typography variant="body" >
                                                <span style={{ fontWeight: 700 }}> লেখক: </span> <span >{single?.author}</span>
                                            </Typography>
                                            <br />

                                            <Typography variant="body"><span
                                                style={{ fontWeight: 700 }}> মূল্যঃ ৳</span> {single?.bookPrice}
                                            </Typography>
                                            <br />
                                            <Typography variant='body1'>
                                                <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
                                            </Typography>
                                        </Box>
                                        <br />
                                        <NavLink
                                            to={`/bookDetails/${single._id}`}
                                            style={{ textDecoration: "none", marginRight: "5px" }}

                                        >
                                            <Button size='small' sx={ButtonStyle}>Details</Button>

                                        </NavLink>
                                        <Button size='small' sx={ButtonStyle}>Purchase</Button>

                                    </Grid>
                                </Grid>

                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </>
    );
};

export default BookList;