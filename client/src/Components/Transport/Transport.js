import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const Transport = () => {
  const [transports, setTransports] = useState([]);
  useEffect(() => {
    fetch("/transportdata.json")
      .then((res) => res.json())
      .then((data) => setTransports(data));
  }, []);

  return (
    <Container>
      <Grid container spacing={2}>
        {transports.map((dt) => (
          <Grid key={dt._id} item xs={12} sm={12} md={12}>
            <Grid container spacing={12}>
              <Grid item xs={12} sm={12} md={6}>
                <Box
                  sx={{
                    width: "100%",
                    transition: "transform .5s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "auto",
                      maxWidth: "100%",
                      verticalAlign: "top",
                      borderRadius: "10px",
                      aspectRatio: "auto 1200 / 1200",
                    }}
                    src={dt.driverImg}
                    alt=""
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Typography
                  sx={{
                    fontSize: "26px",
                    margin: "0 0 8px",
                    color: "#0c4b65",
                    fontWeight: "800",
                  }}
                  variant="h6"
                  gutterBottom
                  component="div"
                >
                  {dt?.driverName}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    margin: "0 0 8px",
                    color: "#46aadd",
                    fontWeight: "800",
                  }}
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                >
                  {dt?.location}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    margin: "0 0 8px",
                    color: "#3B4757",
                    fontWeight: "400",
                  }}
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                >
                  <span style={{ fontWeight: "800" }}>Qualification:</span>{" "}
                  {dt?.rent}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    margin: "0 0 8px",
                    color: "#3B4757",
                    fontWeight: "400",
                  }}
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                >
                  <span style={{ fontWeight: "800" }}>Subject:</span> {dt?.time}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    margin: "0 0 8px",
                    color: "#3B4757",
                    fontWeight: "400",
                  }}
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                >
                  <span style={{ fontWeight: "800" }}>Mobile: </span>
                  {dt?.phoneNumber}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "18px",
                    margin: "0 0 8px",
                    color: "#3B4757",
                    fontWeight: "400",
                  }}
                  variant="subtitle2"
                  gutterBottom
                  component="div"
                >
                  <span style={{ fontWeight: "800" }}>Email:</span>
                  {dt?.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Transport;
