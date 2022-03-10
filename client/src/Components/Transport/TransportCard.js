import React from 'react';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
  } from "@mui/material";
 
  import footerbgsvg from "../../Assets/Images/AboutUs/footer-bg.svg";
import { NavLink } from 'react-router-dom';

const TransportCard = ({dt}) => {
  const {busImg,name,location,id} = dt;
    return (
        <Box
      sx={{
        backgroundImage: `url(${footerbgsvg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        py: 20,
      }}
    >
      
       
        <Container sx={{ textAlign: "center", }}>
          <Typography
            sx={{ fontStyle: "italic", fontSize: 22, color: "#46AADD" }}
            variant="body1"
            gutterBottom
          >
            What is special about centre
          </Typography>

          <Typography
            sx={{
              fontWeight: "500",
              fontSize: 42,
              color: "#3B4757",
              letterSpacing: 3,
            }}
            variant="h4"
            gutterBottom
            component="div"
          >
            Vision & Mission Statements
          </Typography>
        </Container>
        <Box >
          <Grid container spacing={2}>
              {/* 1 */}
            <Grid item xs={12} sm={12} md={4}>
              <Card sx={{  background: "#fff",
                w: "25%",
                p: "20px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                ml:"10%" }}>
                <CardActionArea>
                  <Box
                  sx={{transition: "transform .5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },}}
                  ><CardMedia
                    component="img"
                    sx={{  width: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    verticalAlign: "top",
                    borderRadius: "10px",
                    margin:"auto",
                    aspectRatio: "auto 1200 / 1200" }}
                    image={busImg}
                    alt="green iguana"
                  /></Box>
                  <CardContent>
                    <Typography
                      sx={{ color: "#3B4757", textAlign: "center" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      {name}
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
                     Location: {location}
                    </Typography>
                    
                    <NavLink
                        to={`/transportDetails/${id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Box sx={{ display: "flex", justifyContent: "center",mt:3 }}>
                          <Button variant="outlined" size="small">More Info</Button>
                        </Box>
                      </NavLink>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* 2 */}
            <Grid item xs={12} sm={12} md={4}>
            <Card sx={{  background: "#fff",
                w: "25%",
                p: "20px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                mx:"5%" }}>
                <CardActionArea>
                  <Box sx={{transition: "transform .5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },}}>
                  <CardMedia
                    component="img"
                    sx={{  width: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    verticalAlign: "top",
                    borderRadius: "10px",
                    margin:"auto",
                    aspectRatio: "auto 1200 / 1200" }}
                    image="https://i.ibb.co/0J8L7Zj/bus-parked-road-69593-7793.webp"
                    alt="green iguana"
                  />
                  </Box>
                  <CardContent>
                    <Typography
                      sx={{ color: "#3B4757", textAlign: "center" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Dream Bus
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
                     Location: Chittagong
                    </Typography>
                    <NavLink style={{textDecoration:"none"}} to="/transportDetails">
                    <Box sx={{ display: "flex", justifyContent: "center",mt:3 }}>
                          <Button variant="outlined" size="small">More Info</Button>
                        </Box>
                    </NavLink>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* 3 */}
            <Grid item xs={12} sm={12} md={4}>
            <Card sx={{  background: "#fff",
                w: "25%",
                p: "20px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                mr:"10%",
                }}>
                <CardActionArea>
                  <Box sx={{transition: "transform .5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },}}>
                  <CardMedia
                    component="img"
                    sx={{  width: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    verticalAlign: "top",
                    borderRadius: "10px",
                    margin:"auto",
                    aspectRatio: "auto 1200 / 1200" }}
                    image="https://i.ibb.co/0J8L7Zj/bus-parked-road-69593-7793.webp"
                    alt="green iguana"
                  />
                  </Box>
                  <CardContent>
                    <Typography
                      sx={{ color: "#3B4757", textAlign: "center" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Meghna Bus
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
                      Location: Comilla
                    </Typography>
                    <NavLink style={{textDecoration:"none"}} to="/transportDetails">
                    <Box sx={{ display: "flex", justifyContent: "center",mt:3 }}>
                          <Button variant="outlined" size="small">More Info</Button>
                        </Box>
                    </NavLink>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            {/* 4 */}
            <Grid item sx={{my:10}} xs={12} sm={12} md={4}>
              <Card sx={{  background: "#fff",
                w: "25%",
                p: "20px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                ml:"10%" }}>
                <CardActionArea>
                  <Box sx={{transition: "transform .5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },}}>
                  <CardMedia
                    component="img"
                    sx={{  width: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    verticalAlign: "top",
                    borderRadius: "10px",
                    margin:"auto",
                    aspectRatio: "auto 1200 / 1200" }}
                    image="https://i.ibb.co/bFRQJ7J/small-bus-urban-suburban-travel-car-with-empty-body-design-advertising-3d-illustration-101266-15396.webp"
                    alt="green iguana"
                  />
                  </Box>
                  <CardContent>
                    <Typography
                      sx={{ color: "#3B4757", textAlign: "center" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Titas Bus
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
                     Location: Barisal
                    </Typography>
                    <NavLink style={{textDecoration:"none"}} to="/transportDetails">
                    <Box sx={{ display: "flex", justifyContent: "center",mt:3 }}>
                          <Button variant="outlined" size="small">More Info</Button>
                        </Box>
                    </NavLink>
                  </CardContent>
                  
                </CardActionArea>
              </Card>
            </Grid>
            {/* 5 */}
            <Grid item sx={{my:10}} xs={12} sm={12} md={4}>
            <Card sx={{  background: "#fff",
                w: "25%",
                p: "20px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                mx:"5%" }}>
                <CardActionArea>
                  <Box sx={{transition: "transform .5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },}}>
                  <CardMedia
                    component="img"
                    sx={{  width: "100%",
                    height: "80%",
                    maxWidth: "50vw",
                    verticalAlign: "top",
                    borderRadius: "10px",
                    margin:"auto",
                    aspectRatio: "auto 1200 / 1200" }}
                    image="https://i.ibb.co/Kbg0kfs/blue-small-bus-travel-car-with-empty-body-design-advertising-3d-illustration-101266-15588.webp"
                    alt="green iguana"
                  />
                  </Box>
                  <CardContent>
                    <Typography
                      sx={{ color: "#3B4757", textAlign: "center" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Sunflower Bus
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
                      Location: Rajshahi
                    </Typography>
                    <NavLink style={{textDecoration:"none"}} to="/transportDetails">
                    <Box sx={{ display: "flex", justifyContent: "center",mt:3 }}>
                          <Button variant="outlined" size="small">More Info</Button>
                        </Box>
                    </NavLink>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item sx={{my:10}} xs={12} sm={12} md={4}>
            <Card sx={{  background: "#fff",
                w: "25%",
                p: "20px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                mr:"10%",
                }}>
                <CardActionArea>
                  <Box sx={{transition: "transform .5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },}}>
                  <CardMedia
                    component="img"
                    sx={{  width: "100%",
                    height: "100%",
                    maxWidth: "50vw",
                    verticalAlign: "top",
                    borderRadius: "10px",
                    margin:"auto",
                    aspectRatio: "auto 1200 / 1200" }}
                    image="https://i.ibb.co/Kbg0kfs/blue-small-bus-travel-car-with-empty-body-design-advertising-3d-illustration-101266-15588.webp"
                    alt="green iguana"
                  />
                  </Box>
                  <CardContent>
                    <Typography
                      sx={{ color: "#3B4757", textAlign: "center" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Rainbow Bus
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
                      Location: Noakhali
                    </Typography>
                    <NavLink style={{textDecoration:"none"}} to="/transportDetails">
                    <Box sx={{ display: "flex", justifyContent: "center",mt:3 }}>
                          <Button variant="outlined" size="small">More Info</Button>
                        </Box>
                    </NavLink>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          </Box>
       
      
    </Box>
    );
};

export default TransportCard;