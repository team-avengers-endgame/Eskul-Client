import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Paper,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DateRangeIcon from "@mui/icons-material/DateRange";
import StarIcon from "@mui/icons-material/Star";

import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PaidIcon from "@mui/icons-material/Paid";
import { api } from "../../Hooks/Api";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import Footer from "../Shared/Footer/Footer";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PublishIcon from "@mui/icons-material/Publish";
import { alert, ButtonStyle } from "../../Hooks/useStyle";
import { CartContext } from "../Context/CartContext";
import axios from "axios";
import useAuth from "../../Hooks/useAuth";
import QuickScroll from "../Home/QuickScroll/QuickScroll";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};
const BookDetails = () => {
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState([]);
  const { user } = useAuth();
  const [book, setBook] = useState({});
  const [cart, setCart] = useContext(CartContext);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(-1);
  const { id } = useParams();
  const [number, setNumber] = useState(1);
  const [isFetched, setIsFetched] = useState(0);

  useEffect(() => {
    fetch(`${api}/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data?.data?.data));
  }, [id]);

  const handleAddToCart = (book) => {
    const exists = cart.find((pd) => pd._id === book._id);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd._id !== book._id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, book];
    } else {
      book.quantity = 1;
      newCart = [...cart, book];
    }
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCart(() => newCart);
    alert("success", "Success", "Add to Cart Successfully");
  };
  const iconStyle = { display: "flex", alignItems: "center" };

  const fetchReviews = () => {
    fetch(`${api}/reviews`)
      .then((res) => res.json())
      .then((data) => {
        const allReviews = data?.data.data
          .filter((review) => review.review_type === "book")
          .filter((review) => review.book === id);

        const reviewsChunk = allReviews.slice(0, number * 2);
        setIsFetched(Math.ceil(allReviews.length / 2) === number);
        setReviews(reviewsChunk);
      });
  };
  useEffect(() => {
    fetchReviews();
  }, [number]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const {
      data: { _id },
    } = await axios.get(`${api}/users/me/${user.email}`);

    await axios.post(`${api}/reviews`, {
      user: _id,
      description,
      rating,
      review_type: "book",
      book: id,
    }).then(res => {
      res.status === 201 && alert('success', 'Success', 'Review post successfully')
    })
    fetchReviews();
    setRating(0);
    setDescription("");
  };
  return (
    <>
      <NavigationBar />
      <Container>
        <Box sx={{ textAlign: "center", my: 5 }}>
          <Typography variant="h3">{book?.bookName}</Typography>
          <Typography variant="h6"> লেখক: {book?.author}</Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={8} md={8}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={4} sm={4} md={8} sx={{ mb: 5 }}>
                <Box sx={{ textAlign: "justify" }}>
                  <Typography variant="body">
                    <span style={{ fontWeight: 700 }}> সারসংক্ষেপঃ </span>{" "}
                    {book?.bookDescription}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <CardMedia
                  sx={{ width: "100%" }}
                  component="img"
                  alt="complex"
                  src={book?.bookImg}
                />
              </Grid>
            </Grid>
            <hr />

            <Box sx={{ my: 5 }}>
              <Typography variant="body1">
                <form style={{ margin: "30px 0" }} onSubmit={handleFormSubmit}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sx={{ textAlign: "center" }}>
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
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {rating !== null && (
                        <Box sx={{ ml: 2 }}>
                          {labels[hover !== -1 ? hover : rating]}
                        </Box>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        size="large"
                        variant="outlined"
                        fullWidth
                        label="Description"
                        autoFocus
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        style={ButtonStyle}
                        type="submit"
                        size="small"
                        variant="outlined"
                        fullWidth
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </form>
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <React.Fragment>
                      <h4>Name: {review.user.displayName}</h4>
                      <h4>Description: {review.description}</h4>
                      <h4>
                        Rating:
                        <Rating
                          name="half-rating-read"
                          value={review.rating}
                          precision={0.5}
                          readOnly
                        />
                      </h4>
                      <hr />
                    </React.Fragment>
                  ))
                ) : (
                  <p>No reviews yet. Be the first one to review this book.</p>
                )}
                <Button
                  type="submit"
                  variant="outlined"
                  disabled={isFetched || reviews.length === 0}
                  onClick={() => setNumber(number + 1)}
                >
                  {isFetched ? "No More Reviews To Show" : "Load More Reviews"}
                </Button>
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4} sm={8} md={4}>
            <Paper
              sx={{
                p: 1,
                bgcolor: "#bbdefb",
              }}
            >
              <Box>
                <span style={iconStyle}>
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
                  <Button
                    onClick={() => handleAddToCart(book)}
                    size="small"
                    sx={ButtonStyle}
                  >
                    Add To Cart
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
      <QuickScroll />
    </>
  );
};

export default BookDetails;
