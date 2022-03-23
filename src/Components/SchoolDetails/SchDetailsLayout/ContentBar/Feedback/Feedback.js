import {
  Box,
  Button,
  Grid,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../../../Hooks/Api";
import useAuth from "../../../../../Hooks/useAuth";
import { alert, ButtonStyle } from "../../../../../Hooks/useStyle";
import StarIcon from "@mui/icons-material/Star";
const Feedback = () => {
  const [description, setDescription] = useState("");
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(-1);
  const { id } = useParams();
  const { user } = useAuth();
  const [number, setNumber] = useState(1);
  const [isFetched, setIsFetched] = useState(0);




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
  const fetchReviews = () => {
    fetch(`${api}/reviews`)
      .then((res) => res.json())
      .then((data) => {
        const allReviews = data?.data.data
          .filter((review) => review.review_type === "school")
          .filter((review) => review.school === id);

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
      review_type: "school",
      school: id,
    }).then(res => {
      res.status === 201 && alert('success', 'Success', 'Review post successfully')
    })
    fetchReviews();
    setRating(0);
    setDescription("");
  };
  return (
    <div>
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
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
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
    </div>
  );
};

export default Feedback;
