import { Avatar, Box, Container, Rating, Typography,ButtonBase } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Drivers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,

    autoplaySpeed: 4000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [drivers, setDrivers] = useState([]);
  useEffect(() => {
    fetch('/transportDetails.json')
      .then((res) => res.json())
      .then(data=>setDrivers(data))
  }, []);
  return (
    <Container>
    <Typography
      sx={{
        textAlign: "center",
        mt: 2,
        mb: 8,
        color: "#0c4b65",
        fontSize: "44px",
        fontWeight: 800,
      }}
      variant="h6"
      gutterBottom
      component="div"
    >
      Our Drivers 
    </Typography>
    <Slider {...settings} style={{ margin: "15px" }}>
      {drivers.map((dt) => (
        <Box key={dt._id}>
          <Box
            sx={{
              background: "#fff",
              boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
              borderRadius: "12px",
              m: "5px 20px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                src={dt?.driverImg}
                
                sx={{
                  width: 120,
                  height: 120,
                  border: "1px solid lightgray",
                }}
              />
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  mt: 4,
                  color: "#0c4b65",
                  fontSize: "24px",
                  fontWeight: 800,
                }}
                gutterBottom
              >
                {dt?.driverName }
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#0c4b65",
                  fontSize: "14px",
                  fontWeight: 200,
                  mt: 3,
                }}
                gutterBottom
              >
              Phone: {dt?.driverPhone}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#0c4b65",
                  fontSize: "14px",
                  fontWeight: 200,
                  mt: 3,
                }}
                gutterBottom
              >
              Driver Experience: {dt?.driverExperience} year
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  color: "#0c4b65",
                  fontSize: "14px",
                  fontWeight: 200,
                  mt: 3,
                }}
                gutterBottom
              >
              Driver Charge: {dt?.driverCharge} BDT
              </Typography>
              
              <Box sx={{ textAlign: "center", mt: 3, color: "salmon",pb:3 }}>
                {" "}
                <ButtonBase>
        <a href={dt?.driverEmail} target="blank"> <EmailIcon sx={{ fontSize: "20px", cursor: "pointer",color: "#0c4b65" }} /></a>
        </ButtonBase>
                <ButtonBase>
        <a href={dt?.driverGithub} target="blank"> <GitHubIcon sx={{ fontSize: "20px", cursor: "pointer",color: "#0c4b65",pl:2  }} /></a>
        </ButtonBase>
                <ButtonBase>
        <a href={dt?.driverLinkedin} target="blank"> <LinkedInIcon sx={{ fontSize: "20px", cursor: "pointer",color: "#0c4b65",pl:2,pr:2 }} /></a>
        </ButtonBase>
                <ButtonBase>
        <a href={dt?.driverFacebook} target="blank"> <FacebookRoundedIcon sx={{ fontSize: "20px", cursor: "pointer" ,color: "#0c4b65" }} /></a>
        </ButtonBase>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </Slider>
  </Container>
  );
};

export default Drivers;