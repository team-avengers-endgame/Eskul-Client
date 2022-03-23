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
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../Hooks/Api";
import Footer from "../../Shared/Footer/Footer";
import NavigationBar from "../../Shared/NavigationBar/NavigationBar";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalCarWashIcon from "@mui/icons-material/LocalCarWash";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import WifiIcon from "@mui/icons-material/Wifi";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PaidIcon from "@mui/icons-material/Paid";
import SubjectIcon from "@mui/icons-material/Subject";
import SchoolIcon from "@mui/icons-material/School";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import DetailsIcon from "@mui/icons-material/Details";
import { ButtonStyle } from "../../../Hooks/useStyle";
import axios from "axios";
import useAuth from "../../../Hooks/useAuth";
import StarIcon from "@mui/icons-material/Star";
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

// import background from '../../../Assets/Images/tutor-background.jpg'
const TutorDetails = () => {
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(-1);
  const [tutor, setTutor] = useState({});
  const { id } = useParams();
  const { user } = useAuth();
  const [number, setNumber] = useState(1);
  const [isFetched, setIsFetched] = useState(0);

  useEffect(() => {
    fetch(`${api}/privateTeachers/${id}`)
      .then((res) => res.json())
      .then((data) => setTutor(data?.data?.data));
  }, [id]);

  const iconStyle = { display: "flex", alignItems: "center" };
  const fetchReviews = () => {
    fetch(`${api}/reviews`)
      .then((res) => res.json())
      .then((data) => {
        const allReviews = data?.data.data
          .filter((review) => review.review_type === "privateTeacher")
          .filter((review) => review.privateTeacher === id);

        const reviewsChunk = allReviews.slice(0, number * 2);
        setIsFetched(Math.ceil(allReviews.length / 2) === number);
        setReviews(reviewsChunk);
      });
  };
  useEffect(() => {
    fetchReviews();
  }, [number]);

  const handleFormSubmit = async (e) => {
    console.log("Hello");
    e.preventDefault();
    const {
      data: { _id },
    } = await axios.get(`${api}/users/me/${user.email}`);

    await axios.post(`${api}/reviews`, {
      user: _id,
      description,
      rating,
      review_type: "privateTeacher",
      privateTeacher: id,
    });
    fetchReviews();
    setRating(0);
    setDescription("");
  };
  return (
    <>
      <NavigationBar />
      <Container>
        <Box sx={{ textAlign: "center", my: 5 }}>
          <Typography variant="h3">{tutor?.teacherName}</Typography>
          <Typography> No reviews yet</Typography>
        </Box>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={4} sm={8} md={8}>
            <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={4} sm={4} md={8} sx={{ mb: 5 }}>
                <Box sx={{ textAlign: "justify" }}>
                  <Typography variant="body">{tutor?.description}</Typography>
                </Box>
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <CardMedia
                  component="img"
                  alt="complex"
                  src={tutor?.teacherPhoto}
                />
              </Grid>
            </Grid>
            <hr />
            <Box sx={{ my: 5 }}>
              <span style={iconStyle}>
                {" "}
                <SubjectIcon color="primary" />{" "}
                <Typography variant="h5">Subject</Typography>
              </span>
              <br />
              <Typography variant="body1">{tutor?.subject}</Typography>
            </Box>

            <hr />
            <Box sx={{ my: 5 }}>
              <span style={iconStyle}>
                {" "}
                <CheckBoxIcon color="primary" />{" "}
                <Typography variant="h5">Experience</Typography>
              </span>
              <br />
              <Typography variant="body1"> No experience mentioned.</Typography>
            </Box>

            <hr />
            <Box sx={{ my: 5 }}>
              <span style={iconStyle}>
                {" "}
                <SchoolIcon color="primary" />{" "}
                <Typography variant="h5">Education</Typography>
              </span>

              <br />
              <Typography variant="body1">
                {tutor?.educationalQualification}
              </Typography>
            </Box>
            <hr />
            <Box sx={{ my: 5 }}>
              <span style={iconStyle}>
                {" "}
                <DetailsIcon color="primary" />{" "}
                <Typography variant="h5">Fee details</Typography>
              </span>

              <br />
              <Typography variant="body1">
                ৳ {tutor?.monthlyFee} / per month
              </Typography>
            </Box>
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
                {reviews?.length > 0 ? (
                  reviews?.reverse()?.map((review) => (
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
                  <p>No reviews yet. Be the first one to review this tutor.</p>
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
                margin: "auto",
                bgcolor: "#bbdefb",
              }}
            >
              <Box>
                <span style={iconStyle}>
                  {" "}
                  <EmailIcon color="primary" />
                  <Typography variant="body1"> {tutor?.email}</Typography>
                </span>
                <br />
                <span style={iconStyle}>
                  {" "}
                  <LocationOnIcon color="primary" />
                  <Typography variant="body1">{tutor?.location}</Typography>
                </span>
                <br />
                <span style={iconStyle}>
                  {" "}
                  <LocalCarWashIcon color="primary" />
                  <Typography variant="body1">Can travel: No</Typography>
                </span>
                <br />
                <span style={iconStyle}>
                  {" "}
                  <LockOpenIcon color="primary" />
                  <Typography variant="body1">
                    Last login: 16 mins ago
                  </Typography>
                </span>
                <br />
                <span style={iconStyle}>
                  {" "}
                  <HowToRegIcon color="primary" />
                  <Typography variant="body1">Registered: Mar 1</Typography>
                </span>
                <br />
                <span style={iconStyle}>
                  {" "}
                  <AppRegistrationIcon color="primary" />
                  <Typography variant="body1">
                    {" "}
                    Total Teaching exp: 4.0 yrs.
                  </Typography>
                </span>
                <br />
                <span style={iconStyle}>
                  {" "}
                  <WifiIcon color="primary" />
                  <Typography variant="body1">
                    {" "}
                    Online Teaching exp: 4.0 yrs.
                  </Typography>
                </span>
                <br />
                <span style={iconStyle}>
                  {" "}
                  <HomeIcon color="primary" />
                  <Typography variant="body1">
                    {" "}
                    Teaches at student's home: No.
                  </Typography>
                </span>
                <br />
                <span style={iconStyle}>
                  {" "}
                  <HomeWorkIcon color="primary" />
                  <Typography variant="body1"> Homework Help: Yes</Typography>
                </span>
                <br />
                <span style={iconStyle}>
                  {" "}
                  <PaidIcon color="primary" />
                  <Typography variant="body1">
                    Fee: ৳ {tutor?.monthlyFee} / per month
                  </Typography>
                </span>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default TutorDetails;
