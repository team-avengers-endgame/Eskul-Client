import { Avatar, Box, Container, Typography, ButtonBase, } from "@mui/material";
import React, { Component} from "react";
import Slider from "react-slick";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import WhatsappRoundedIcon from "@mui/icons-material/WhatsappRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
const slideData = [
  {
    id: 1,
    img: `https://i.ibb.co/4Ss0D4T/studio-portrait-emotional-happy-funny-smiling-boyfriend-man-with-heavy-beard-stands-with-arms-crosse.jpg`,
    person: "Salam Uddin",
    phone: "01847698399",
    email: "salam@gmail.com",
    charge: "20000",
  },
  {
    id: 2,
    img: `https://i.ibb.co/HVpyJ5V/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-we.jpg`,
    person: "Aloak Kumar",
    phone: "01347698321",
    email: "aloak@gmail.com",
    charge: "30000",
  },
  {
    id: 3,
    img: `https://i.ibb.co/8bFVHsP/bohemian-man-with-his-arms-crossed-1368-3542.webp`,
    person: "Narayan Kumar",
    phone: "01347698356",
    email: "narayan@gmail.com",
    charge: "40000",
  },
  {
    id: 4,
    img: `https://i.ibb.co/0s0DTQM/handsome-confident-smiling-man-with-hands-crossed-chest.jpg`,
    person: "Kolim Uddin",
    phone: "01847698345",
    email: "kolim@gmail.com",
    charge: "20000",
  },
  {
    id: 5,
    img: `https://i.ibb.co/PFvGwTk/delivery-concept-handsome-african-american-delivery-man-crossed-arms-isolated-grey-studio-background.jpg`,
    person: "Shihab Shah",
    phone: "01347698321",
    email: "shihab@gmail.com",
    charge: "30000",
  },
  {
    id: 6,
    img: `https://i.ibb.co/fp1wdHf/young-bearded-man-with-striped-shirt.jpg`,
    person: "Akash Barua",
    phone: "01347698356",
    email: "akash@gmail.com",
    charge: "40000",
  },
];

export default class SimpleSlider extends Component {
   
  render() {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      lazyLoad: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      speed: 2000,
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
    return (
      <Container>
          <Typography sx={{textAlign:"center",mt:2,mb:8,color:"#0c4b65",fontSize:"44px",fontWeight:800}}  variant="h6" gutterBottom component="div">
                   Driver's Information
      </Typography>
     
        <Slider {...settings}>
          {slideData.map((item, id) => {
              
            return (
              <Box  key={id}>
                  
                <Box sx={{background: "#fff",boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",borderRadius: "12px"}}>
                  <Box >
                  <Avatar
               
                src={item?.img}
                style={{
                    width: 120,
                    height: 120,
                    border: "1px solid lightgray",
                    padding: 7,
                    marginBottom: 20,
                    margin:" 0px auto"
                }}
            />
                  </Box>
                  <Box>
                  <Typography variant="body1" sx={{textAlign:"center",mt:4,color:"#0c4b65",fontSize:"24px",fontWeight:800}} gutterBottom>
        {item?.title}
      </Typography>
      
                  <Typography variant="body2" sx={{textAlign:"center",color:"#0c4b65",fontSize:"14px",fontWeight:500,mt:3}} gutterBottom> {item?.person}</Typography>
                  <Typography variant="body2" sx={{textAlign:"center",color:"#0c4b65",fontSize:"14px",fontWeight:200,mt:3}} gutterBottom>Driver Phone: {item?.phone}</Typography>
                  <Typography variant="body2" sx={{textAlign:"center",color:"#0c4b65",fontSize:"14px",fontWeight:200,mt:3}} gutterBottom>Driver Email: {item?.email}</Typography>
                  <Typography variant="body2" sx={{textAlign:"center",color:"#0c4b65",fontSize:"14px",fontWeight:200,mt:3}} gutterBottom>Driver Charge: {item?.charge}</Typography>
<Box sx={{textAlign:"center",mt:3,color:"#0c4b65"}}>
<ButtonBase>
          <FacebookRoundedIcon sx={{ fontSize: "20px", cursor: "pointer" }} />
        </ButtonBase>
        <ButtonBase>
          <WhatsappRoundedIcon sx={{ fontSize: "20px", cursor: "pointer" }} />
        </ButtonBase>
        <ButtonBase>
          <LinkedInIcon sx={{ fontSize: "20px", cursor: "pointer" }} />
        </ButtonBase>
        <ButtonBase>
          <EmailIcon sx={{ fontSize: "20px", cursor: "pointer" }} />
        </ButtonBase>
</Box>

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
