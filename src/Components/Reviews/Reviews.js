import { Avatar, Box, Container, Typography } from "@mui/material";
import React, { Component } from "react";
import Slider from "react-slick";
import StarRateIcon from '@mui/icons-material/StarRate';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
const slideData = [
  {
    id: 1,
    img: `https://i.ibb.co/8j86csB/model-1-edited.jpg`,
    title: "Latest Summar Collection",
  },
  {
    id: 2,
    img: `https://i.ibb.co/RpVZzDr/edited-man-model.jpg`,
    title: "Popular Hot Deals Collection",
  },
  {
    id: 3,
    img: `https://i.ibb.co/7pkghgL/edited-winter-woman.jpg`,
    title: "Trendy Winter Collection",
  },
];

export default class SimpleSlider extends Component {

  render() {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      lazyLoad: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear",

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
    return (
      <Container>
        <Typography sx={{ textAlign: "center", mt: 2, mb: 8, color: "#0c4b65", fontSize: "44px", fontWeight: 800 }} variant="h6" gutterBottom component="div">
          Testimonials
        </Typography>

        <Slider {...settings}>
          {slideData.map((item, id) => {

            return (
              <Box key={id}>

                <Box sx={{ background: "#fff", boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)", borderRadius: "12px" }}>
                  <Box >
                    <Avatar

                      src={item?.img}
                      style={{
                        width: 120,
                        height: 120,
                        border: "1px solid lightgray",
                        padding: 7,
                        marginBottom: 20,
                        margin: " 0px auto"
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body1" sx={{ textAlign: "center", mt: 4, color: "#0c4b65", fontSize: "24px", fontWeight: 800 }} gutterBottom>
                      {item?.title}
                    </Typography>

                    <Typography variant="body2" sx={{ textAlign: "center", color: "#0c4b65", fontSize: "14px", fontWeight: 200, mt: 3 }} gutterBottom>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorem, animi quibusdam pariatur porro sit numquam rerum ipsum,
                    </Typography>
                    <Box sx={{ textAlign: "center", mt: 3, color: "#faaf00" }}><StarRateIcon /> <StarRateIcon /> <StarRateIcon /> <StarHalfIcon /> <StarOutlineIcon /></Box>


                  </Box>
                </Box>
              </Box>
            );
          })}
        </Slider>
      </Container>
    );
  }
}
