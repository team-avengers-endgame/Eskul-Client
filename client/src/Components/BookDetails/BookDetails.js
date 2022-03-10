import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PaidIcon from "@mui/icons-material/Paid";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { api } from "../../Hooks/Api";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import Footer from "../Shared/Footer/Footer";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PublishIcon from "@mui/icons-material/Publish";
import { alert, ButtonStyle } from "../../Hooks/useStyle";
import { CartContext } from "../Context/CartContext";


const BookDetails = () => {
  const [book, setBook] = useState({});
  const [cart, setCart] = useContext(CartContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`${api}/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data?.data?.data));
  }, [id]);

  const handleAddToCart = (book) => {

    const exists = cart.find(pd => pd._id === book._id);
    let newCart = [];
    if (exists) {
      const rest = cart.filter(pd => pd._id !== book._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, book];
    } else {
      book.quantity = 1;
      newCart = [...cart, book]

    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(() => newCart);
    alert('success', 'Success', 'Add to Cart Successfully')
  };
  console.log(book)
  const iconStyle = { display: "flex", alignItems: "center" };
  return (
    <>
      <NavigationBar />
      <Container>
        <Box sx={{ textAlign: "center", my: 5 }}>
          <Typography variant="h3">{book?.bookName}</Typography>
          <Typography variant="h6"> লেখক: {book?.author}</Typography>
        </Box>
        <Grid container columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>
          <Grid item xs={4} sm={8} md={8} lg={8}>
            <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={4} sm={4} md={8} sx={{ mb: 5 }}>
                <Box sx={{ textAlign: "justify" }}>
                  <Typography variant="body">
                    <span style={{ fontWeight: 700 }}> সারসংক্ষেপঃ </span>{" "}
                    {book?.bookDescription}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <CardMedia component="img" alt="complex" src={book?.bookImg} />
              </Grid>
            </Grid>
            <hr />

            <Box sx={{ my: 5 }}>
              <span style={iconStyle}>
                {" "}
                <ReviewsIcon color="primary" />{" "}
                <Typography variant="h5"> Reviews</Typography>
              </span>

              <br />

              {
                book?.rating &&
                <Rating
                  name="half-rating-read"
                  defaultValue={book?.rating}
                  precision={0.5}
                  readOnly
                />
              }
            </Box>
          </Grid>

          <Grid sx={{ ml: 4 }} columns={{ xs: 4, sm: 8, md: 4, lg: 4 }}>
            <Paper
              sx={{
                p: 1,
                margin: "auto",
                width: 350,
                flexGrow: 1,
                bgcolor: "#bbdefb",
              }}
            >
              <Grid pl={2} my={3} columns={{ xs: 4, sm: 8, md: 4, lg: 4 }}>
                <span style={iconStyle}>
                  {" "}
                  <BorderColorIcon color="primary" />
                  <Typography variant="body1"> লেখক: {book?.author}</Typography>
                </span>
                <br />
                <span style={iconStyle}>
                  {" "}
                  <PublishIcon color="primary" />
                  <Typography variant="body1">
                    প্রকাশকঃ {book?.publisher}
                  </Typography>
                </span>
                <br />
                <span style={iconStyle}>
                  {" "}
                  <DateRangeIcon color="primary" />
                  <Typography variant="body1">
                    প্রকাশিত তারিখঃ {book?.publishedDate}{" "}
                  </Typography>
                </span>
                <br />
                <span style={iconStyle}>
                  {" "}
                  <AppRegistrationIcon color="primary" />
                  <Typography variant="body1">
                    বইয়ের ধরন: {book?.type}
                  </Typography>
                </span>

                <br />
                <span style={iconStyle}>
                  {" "}
                  <PaidIcon color="primary" />
                  <Typography variant="body1">
                    {" "}
                    মূল্যঃ ৳ {book?.bookPrice}
                  </Typography>
                </span>
                <br />
                <Box sx={{ textAlign: "center" }}>
                  <Button onClick={() => handleAddToCart(book)} size="small" sx={ButtonStyle}>
                    Add To Cart
                  </Button>
                </Box>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
};

export default BookDetails;
