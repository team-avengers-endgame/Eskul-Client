import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography, } from "@mui/material";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import wavepink from "../../Assets/Images/wave-pink.svg";

const Transport = () => {
  const [transports, setTransports] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/Nazninkamal/fakedata/main/something.json")
      .then((res) => res.json())
      .then((data) => setTransports(data));
  }, []);

  return (
    <Box sx={{
      backgroundImage: `url(${wavepink})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      py: 20,
    }}>
      <Typography sx={{ textAlign: "center", color: "#0c4b65" }} variant="h4"
        gutterBottom
        component="div">Our Trasportation Facilities</Typography>
      <Container>
        <Grid container spacing={6}>


          {transports.map((dt) => (
            <Grid key={dt.id} item xs={12} sm={12} md={4}>

              <Card
                data-aos="fade-up"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"

                sx={{
                  background: "#fff",
                  w: "25%",
                  p: "20px 15px",
                  boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                  borderRadius: "12px",
                }}>
                <CardActionArea>
                  <Box
                    sx={{
                      transition: "transform .5s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  ><CardMedia
                      component="img"
                      sx={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "100%",
                        verticalAlign: "top",
                        borderRadius: "10px",
                        margin: "auto",
                        aspectRatio: "auto 1200 / 1200"
                      }}
                      image={dt?.busImg}
                      alt="green iguana"
                    /></Box>
                  <CardContent>
                    <Typography
                      sx={{ color: "#3B4757", textAlign: "center" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {dt?.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#777",
                        fontSize: "15px",
                        textAlign: "center",
                      }}
                      variant="body2"
                      color="text.secondary"
                    >
                      Location: {dt?.location}
                    </Typography>

                    <NavLink
                      to={`/transportDetails/${dt?.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
                        <Button variant="outlined" size="small">More Info</Button>
                      </Box>
                    </NavLink>
                  </CardContent>
                </CardActionArea>
              </Card>

            </Grid>
          ))}
        </Grid>
      </Container>

    </Box>
  );
};

export default Transport;

