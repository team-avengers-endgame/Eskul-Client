import React, { useState, useEffect, useContext } from "react";
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
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import { api } from "../../Hooks/Api";
import SearchBar from "../Shared/SearchBar/SearchBar";
import SharedBanner from "../Shared/SharedBanner/SharedBanner";
import Footer from "../Shared/Footer/Footer";
import { alert, ButtonStyle } from "../../Hooks/useStyle";
import { NavLink } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState([]);
  const [cart, setCart] = useContext(CartContext);
  useEffect(() => {
    fetch(`${api}/books`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data?.data?.data);
        setSearchValue(data?.data?.data);
      });
  }, []);


  /*************** searching *****************/
  const handleOnChange = (e) => {
    const value = e.target.value;
    const newValue = books?.filter(
      (s) => s.bookName.includes(value) || s.author.includes(value)
    );
    newValue.length === 0 && alert("warning", "Warning...", "Not Found Your Result")
    setSearchValue(newValue);
  };



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
    alert('success','Success','Add to Cart Successfully')
  };

 
  const placeholder = "Search by Book Name or Author Name";
  return (
    <>
      <NavigationBar />
      <SharedBanner pageName={"Books"} />
      <Container>
        <SearchBar handleOnChange={handleOnChange} placeholder={placeholder} />

        <Grid
          container
          spacing={2}
          sx={{ mt: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
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
                      sx={{height: 200}}
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
                    <Button
                      size="small"
                      sx={ButtonStyle}
                      onClick={() => handleAddToCart(single)}
                    >
                      Add to cart
                    </Button>
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
