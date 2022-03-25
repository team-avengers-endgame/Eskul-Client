import React, { useContext } from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar'
import Footer from '../Shared/Footer/Footer'
import Cart from '../Shared/Cart/Cart';
import { Grid, Container, Button, Paper, Typography, Rating, CardMedia, Box } from '@mui/material';
import { ButtonStyle } from '../../Hooks/useStyle';
import { CartContext } from '../Context/CartContext';
import { NavLink, useNavigate } from 'react-router-dom';
import SharedBanner from '../Shared/SharedBanner/SharedBanner';
import Swal from 'sweetalert2';
import QuickScroll from '../Home/QuickScroll/QuickScroll';



const BookOrderReview = () => {

    const [cart, setCart] = useContext(CartContext);

    const handleRemoveToCart = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Remove it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const getDb = localStorage.getItem('cart');
                const removeCartParse = JSON.parse(getDb);
                const newCart = removeCartParse.filter(product => product._id !== id);
                localStorage.setItem("cart", JSON.stringify(newCart));
                setCart(() => newCart)
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })




    }
    const navigate = useNavigate();
    const handlerPaymentPage = () => {
        return navigate('/payment')
    }
    return (

        <>
            <NavigationBar />
            <SharedBanner pageName={'Review My Order'} />
            <Container>

                <Grid container spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={4} sm={5} md={8} >
                        {
                            !cart.length &&
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography>Note Found your Order</Typography>
                            </Box>
                        }
                        {

                            cart.map(cart =>
                                <Box sx={{ pb: 3 }} key={cart._id} >
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
                                                    sx={{ objectFit: "cover", height: 200, width: "auto" }}
                                                    alt="complex"
                                                    src={cart?.bookImg}
                                                />
                                            </Grid>
                                            <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                                                <Box>
                                                    <Typography variant="h6"
                                                        sx={{ fontSize: '12px', fontWeight: 900 }}
                                                    >{cart?.bookName}</Typography>

                                                    <Typography variant="body" sx={{ fontSize: '12px' }}>
                                                        <span> লেখক: </span>
                                                        <span>{cart?.author}</span>
                                                    </Typography>
                                                    <br />

                                                    <Typography variant="body">
                                                        <span style={{ fontWeight: 700 }}> মূল্যঃ ৳</span>
                                                        {cart?.bookPrice}
                                                    </Typography>
                                                    <br />
                                                    <Typography variant="body">
                                                        <span style={{ fontWeight: 700 }}> Quantity:</span>
                                                        {cart?.quantity}
                                                    </Typography>
                                                    <br />
                                                    <Rating
                                                        name="half-rating-read"
                                                        defaultValue={cart?.rating}
                                                        precision={0.5}
                                                        readOnly
                                                    />
                                                </Box>

                                                <NavLink
                                                    to={`/bookDetails/${cart._id}`}
                                                    style={{ textDecoration: "none", marginRight: "5px" }}
                                                >
                                                    <Button size="small" sx={ButtonStyle}>
                                                        Details
                                                    </Button>
                                                </NavLink>
                                                <Button
                                                    onClick={() => handleRemoveToCart(cart._id)}
                                                    color="error"
                                                >
                                                    Remove
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Box>
                            )
                        }

                    </Grid>

                    <Grid item xs={4} sm={3} md={4} >
                        <Cart >

                            <Button onClick={handlerPaymentPage} sx={{ ...ButtonStyle, width: 1 }}>Order Now</Button>

                        </Cart>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
            <QuickScroll />
        </>
    );
};

export default BookOrderReview;