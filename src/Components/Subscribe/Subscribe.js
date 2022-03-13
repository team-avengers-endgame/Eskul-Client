import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <section className="subscribe-section">
      <Container>
        <Grid container>
          <Grid item xs={8} sx={{ textAlign: "center", margin: "0 auto" }}>
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              sx={{ fontWeight: "500", color: "#46AADC" }}
            >
              Don't miss out!
            </Typography>
            <p style={{ margin: "20px 0 50px 0" }}>
              Subscribe to your newsletter to stay in the loop. Our newsletter
              is sent once in a week on every friday so subscribe to get latest
              news and updates
            </p>
            <Grid container>
              <Grid item xs={8} md={10}>
                <TextField
                  id="outlined-basic"
                  label="Email Address"
                  variant="outlined"
                  style={{ width: "100%", borderColor: "#fff" }}
                />
              </Grid>
              <Grid item xs={4} md={2}>
                <Button
                  variant="contained"
                  sx={{ width: "100%", height: "100%" }}
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Subscribe;
