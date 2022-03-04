import {
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import DateRangeIcon from "@mui/icons-material/DateRange";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PaidIcon from "@mui/icons-material/Paid";
import ReviewsIcon from "@mui/icons-material/Reviews";
import { api } from "../../Hooks/Api";
import NavigationBar from "../Shared/NavigationBar/NavigationBar";
import Footer from "../Shared/Footer/Footer";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import PublishIcon from "@mui/icons-material/Publish";
import StarRateIcon from "@mui/icons-material/StarRate";
import { ButtonStyle } from "../../Hooks/useStyle";

// import background from '../../../Assets/Images/tutor-background.jpg'
const BookDetails = () => {
  const [book, setBook] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`${api}/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data?.data?.data));
  }, [id]);

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

              <Typography variant="body1">
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
                <StarRateIcon />
              </Typography>
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
                  <Button size="small" sx={ButtonStyle}>
                    Purchase
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
