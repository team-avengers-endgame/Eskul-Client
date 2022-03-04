import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect } from 'react';
import Aos from 'aos';
import footerbgsvg from "../../../Assets/Images/AboutUs/footer-bg.svg";
import paper from "../../../Assets/Images/AboutUs/paper.svg";
import vision from "../../../Assets/Images/AboutUs/vision.svg";
import philosophy from "../../../Assets/Images/AboutUs/philosophy.svg";
const VisionMissionSection = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${footerbgsvg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        py: 20,
      }}
    >
      <Container>
        <Box
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          sx={{ textAlign: "center" }}>
          <Typography
            sx={{ fontStyle: "italic", fontSize: 22, color: "#46AADD" }}
            variant="body1"
            gutterBottom
          >
            What is special about ESKUL
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
        </Box>
        <Box>
          <Grid container spacing={2}>
            <Grid
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              item xs={12} sm={12} md={4}>
              <Card sx={{ py: "70px", px: "40px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ height: 66, width: 66, margin: "0 auto" }}
                    image={paper}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{ color: "#3B4757", textAlign: "center" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Our Mission
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
                      We believe in the ability to improve the quality of life
                      othe individuals and families across the city
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="1500"
              item xs={12} sm={12} md={4}>
              <Card sx={{ py: "70px", px: "40px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ height: 66, width: 66, margin: "0 auto" }}
                    image={vision}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{ color: "#3B4757", textAlign: "center" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Our Vision
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
                      Our vision for Early Years is based upon the premise that
                      every child  receieves the very best education and find pure information.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              item xs={12} sm={12} md={4}>
              <Card sx={{ py: "70px", px: "40px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{ height: 66, width: 66, margin: "0 auto" }}
                    image={philosophy}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      sx={{ color: "#3B4757", textAlign: "center" }}
                      gutterBottom
                      variant="h5"
                      component="div"
                    >
                      Philosophy
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
                      We believe that a teacher-guided, balanced approach
                      establishes an excellent educational foundation.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default VisionMissionSection;
