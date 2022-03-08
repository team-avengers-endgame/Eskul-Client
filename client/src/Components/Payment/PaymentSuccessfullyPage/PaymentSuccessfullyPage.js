import { Button, CardMedia, Container, Grid, Paper, Rating, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonStyle } from '../../../Hooks/useStyle';
import Footer from '../../Shared/Footer/Footer';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import './PaymentSuccessFullyPage.css'
import Logo from './Img/logo.png'
const Books = [
    {
        _id: '621c6b48214766293bff0410',
        type
            : "Novel",
        bookName
            : "বহুব্রীহি",
        author
            : "হুমায়ূন আহমেদ",
        bookDescription: "আমার নাটক এবং সিনেমার গল্পটা আগে লেখি। সেখান থেকে চিত্রনাট্য তৈরি করে ...",
        bookPrice
            : 155,
        bookImg: "https://i.ibb.co/wyF8wdM/e36702381-1211.jpg",
        publishedDate: "2/26/2022",
        publisher: "আফসার ব্রাদার্স",
        rating: 3.5
    },
    {
        _id
            : "621c8e496deed1b7d40cd375",
        type
            : "Translation",
        bookName
            : "সন্তান গড়ার কৌশল",
        author
            : "জামিলা হো",
        bookDescription
            : " বাগানে ফুল ফুটুক, পাখি ডাকুক, এটা সকল মালীই চায়। কেন চাইবে না বলুন? ব...",
        bookPrice
            : 150,
        bookImg
            : "https://i.ibb.co/qr4jMFM/download.jpg",
        publishedDate
            : "1905-02-02T18:06:40.000Z",
        publisher
            : "জামিলা হো",
        rating
            : 5
    }
]
const PaymentSuccessfullyPage = () => {

    const [books, setBooks] = useState(Books)
    return (
        <Box >
            <NavigationBar />
            <Box className='paymentSuccessContainer'>

                <Container >
                    <Grid
                        container
                        spacing={2}
                        sx={{ mt: 2 }}
                        columns={{ xs: 4, sm: 8, md: 12 }}
                    >
                        <Grid item xs={4} sm={4} md={4} >

                            <Box className='congratulation-card'>
                                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>

                                    <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                                        <Toolbar/>
                                        <Box>
                                            <img src={Logo} alt="" />
                                            <Typography variant="h6"><span style={{ fontSize: '30px', color: 'orange' }}>
                                                Congratulations
                                            </span> <br /> Payment Success Fully</Typography>

                                            <Toolbar />
                                            <Button size="small" sx={{...ButtonStyle,mr:2}}>
                                                Go to Home
                                            </Button>
                                            <Button size="small" sx={ButtonStyle}>
                                                Details
                                            </Button>

                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>


                        </Grid>
                        <Grid item xs={4} sm={4} md={8}>
                            <Grid
                                container
                                spacing={2}
                                sx={{ mt: 6 }}
                                columns={{ xs: 4, sm: 8, md: 12 }}
                            >
                                {books?.map((single) => (
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
                                                        sx={{ objectFit: "cover", height: 200, width: 200 }}
                                                        alt="complex"
                                                        src={single?.bookImg}
                                                    />
                                                </Grid>
                                                <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                                                    <Box>
                                                        <Typography variant="h6">{single?.bookName}</Typography>

                                                        <Typography variant="body">
                                                            <span style={{ fontWeight: 700 }}> লেখক: </span>{" "}
                                                            <span>{single?.author}</span>
                                                        </Typography>
                                                        <br />

                                                        <Typography variant="body">
                                                            <span style={{ fontWeight: 700 }}> মূল্যঃ ৳</span>{" "}
                                                            {single?.bookPrice}
                                                        </Typography>
                                                        <br />
                                                        <Rating
                                                            name="half-rating-read"
                                                            defaultValue={single?.rating}
                                                            precision={0.5}
                                                            readOnly
                                                        />
                                                    </Box>
                                                    <br />
                                                    <NavLink
                                                        to={`/bookDetails/${single._id}`}
                                                        style={{ textDecoration: "none", marginRight: "5px" }}
                                                    >
                                                        <Button size="small" sx={ButtonStyle}>
                                                            Details
                                                        </Button>
                                                    </NavLink>

                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>


                </Container>
                <Toolbar />
            </Box>
            <Footer />
        </Box>
    );
};

export default PaymentSuccessfullyPage;