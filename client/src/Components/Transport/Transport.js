import {
  Box,
 
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
      <Typography sx={{textAlign:"center",py:5,color:"#0c4b65"}} variant="h4"
                  gutterBottom
                  component="div">Our Trasportation Facilities</Typography>
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
                      margin:"auto",
                      aspectRatio: "auto 1200 / 1200",
                    }}
                    src={dt.busImg}
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
                  {dt?.name}
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
                  <span style={{ fontWeight: "800" }}>Location:</span>{" "}
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
                  <span style={{ fontWeight: "800" }}>Time:</span> {dt?.time}
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
                  <span style={{ fontWeight: "800" }}>Rent Fee: </span>
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
                  <span style={{ fontWeight: "800" }}>Schedule:</span>
                  {dt?.time}
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
                  <span style={{ fontWeight: "800" }}>Driver Name:</span>
                  {dt?.driverName}
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
                  <span style={{ fontWeight: "800" }}>Driver Phone Number:</span>
                  {dt?.phone}
                </Typography>
                <img style={{width:"25%",height:"25%",objectFit:'cover',borderRadius:"50px 0px 50px 0px",marginBottom:"10%"}} src={dt?.driverImg} alt="" />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Transport;
