import React, { useContext } from 'react';
import NavigationBar from '../Shared/NavigationBar/NavigationBar'
import Footer from '../Shared/Footer/Footer'
import Cart from '../Shared/Cart/Cart';
import { styled } from '@mui/material/styles';
import { Grid, Container, Button, Paper, ButtonBase, Typography, Rating} from '@mui/material';
import { ButtonStyle } from '../../Hooks/useStyle';
import { CartContext } from '../Context/CartContext';
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import SharedBanner from '../Shared/SharedBanner/SharedBanner';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
const BookOrderReview = () => {

    const [cart, setCart] = useContext(CartContext);

    const handleRemoveToCart = (id) => {
        const getDb = localStorage.getItem('cart');
        const removeCartParse = JSON.parse(getDb);
        const newCart = removeCartParse.filter(product => product._id !== id);
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCart(() => newCart)

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
                                <Grid container key={cart._id} spacing={{ xs: 2, md: 3 }}
                                    columns={{ xs: 4, sm: 8, md: 12 }}
                                    sx={{ pb: 2 }}
                                >
                                    <Grid item xs={4} sm={8} md={12} >
                                        <Paper
                                            sx={{
                                                p: 2,
                                                margin: 'auto',

                                                flexGrow: 1,
                                                backgroundColor: (theme) =>
                                                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                                            }}
                                        >
                                            <Grid container spacing={2}>
                                                <Grid item>
                                                    <ButtonBase sx={{ width: 128, height: 128 }}>
                                                        <Img alt="complex" src={cart?.bookImg} />
                                                    </ButtonBase>
                                                </Grid>
                                                <Grid item xs={12} sm container>
                                                    <Grid item xs container direction="column" spacing={2}>
                                                        <Grid item xs>
                                                            <Typography gutterBottom variant="subtitle1" component="div">
                                                                {cart?.bookName}
                                                            </Typography>
                                                            <Typography variant="body2" gutterBottom>
                                                                {cart?.bookDescription}
                                                            </Typography>
                                                            <Typography variant="body2" color="text.secondary">
                                                                Quantity:{cart?.quantity}
                                                            </Typography>
                                                            <Rating
                                                                name="half-rating-read"
                                                                defaultValue={cart?.rating}
                                                                precision={0.5}
                                                                readOnly
                                                            />
                                                        </Grid>
                                                        <Grid item>
                                                            <Button onClick={() => handleRemoveToCart(cart._id)} variant='secondary'>
                                                                Remove
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="subtitle1" component="div">
                                                            ৳{cart?.bookPrice}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Paper>
                                    </Grid>
                                </Grid>
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
        </>
    );
};

export default BookOrderReview;