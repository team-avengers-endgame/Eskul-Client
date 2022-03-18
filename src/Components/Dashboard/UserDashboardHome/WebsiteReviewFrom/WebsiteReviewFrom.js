import { Box, Button, Rating, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
import { api } from "../../../../Hooks/Api";
const WebsiteReviewFrom = () => {
  const { user } = useAuth();

  const [value, setValue] = React.useState(2);
  const [message, setMessage] = useState("");

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { data } = await axios.get(
      `http://localhost:8000/api/users/me/${user.email}`
    );

    const response = await axios.post(`${api}/reviews`, {
      user: data._id,
      rating: value,
      description: message,
    });
    console.log(response);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            mt: "15%",
            color: "#0c4b65",
            fontWeight: 400,
            fontSize: {
              xm: "8px",
              sm: "20px",
              md: "35px",
            },
            textAlign: "center",
          }}
          variant="h4"
          gutterBottom
          component="div"
        >
          Give Your Valuable Reviews
        </Typography>
       
        <TextField
          required
          variant="outlined"
          sx={{
            width: {
              xm: "100%",
              sm: "90%",
              md: "50%",
            },
            mt: 5,
            border: "none",
            boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
          }}
          id="Your Message"
          multiline
          rows={4}
          placeholder="What's your experience....."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
         <Rating
          sx={{ mt: 2 }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <Button
          sx={{
            padding: "10px 40px",
            backgroundColor: "#0c4b65",
            color: "#fff",
            mt: 5,
            mb: 3,
            fontWeight: "semibold",
            "&:hover": {
              border: "0.5px solid #ffaf5f",
              color: "#0c4b65",
              fontWeight: 600,
              
            }
          }}
          variant="outlined"
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </form>
  );
};

export default WebsiteReviewFrom;
