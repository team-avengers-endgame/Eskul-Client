import React, { useEffect, useState} from 'react';
import { Button, Container, Grid,Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate, useParams } from 'react-router-dom';
import Confetti from 'react-confetti';
import { api } from '../../Hooks/Api';
import NavigationBar from '../Shared/NavigationBar/NavigationBar';
import Footer from '../Shared/Footer/Footer';

const DonationSuccess = () => {
    const [donation, setDonation] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`${api}/donationPay/${id}`)
            .then(res => res.json())
            .then(data => {
                setDonation(data);
              
            })
    }, [id])

    const navigate = useNavigate();
    const handlerGotoHome = () => navigate('/');
    const handlerGoToMyDonation = () => navigate('/dashboard/myDonations');

    let width = window.innerWidth;
    let height = window.innerHeight;
    const {cus_name,cus_email,total_amount,cus_postcode,cus_city,cus_add1,cus_country,ocupation,date}=donation;


    return (
        <Box >
            <NavigationBar />
            <Box sx={{  textAlign: "center",
             backgroundImage: "url('https://i.ibb.co/dJGM6xS/dsgn-23-1.jpg')",backgroundPosition: "center",backgroundSize: "cover",backgroundAttachment: "fixed",height: "100vh",backgroundColor: "rgba(0, 0, 0, 0.801) !important"}}>
                <Container   width={width}
                    height={height}>
                    <Confetti />
                  
                   <Box sx={{ background: "rgba(0, 0, 0, 0.301)",
                w: "25%",
                pb:10,
                p: "20px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",}}>
                     <Typography
                sx={{
                  textAlign: "center",
                  fontSize: {
                      xs:"25px",sm:"35px",md:"45px"
                  },
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
               Thanks... <br /> {cus_name}
              </Typography>
              <Grid container spacing={2}>
  <Grid item xs={6} sm={6} md={6}>
  <Typography
                sx={{
                  color: "rgb(218 152 63)",
                  fontWeight: "500",
                  fontSize: {
                    xs:"12px",sm:"14px",md:"16px"
                },
                  textAlign: "center",
                }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Email: {cus_email}
              </Typography>
              <Typography
                sx={{
                    color: "rgb(218 152 63)",
                  fontWeight: "500",
                  fontSize: {
                      xs:"12px",sm:"14px",md:"16px"
                  },
             
                  textAlign: "center",
                }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Total Amount: {total_amount} $
              </Typography>
              <Typography
                sx={{
                    color: "rgb(218 152 63)",
                  fontWeight: "500",
                  fontSize: {
                    xs:"12px",sm:"14px",md:"16px"
                },
                  textAlign: "center",
                }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Post Code: {cus_postcode}
              </Typography>
              <Typography
                sx={{
                    color: "rgb(218 152 63)",
                  fontWeight: "500",
                  fontSize: {
                    xs:"12px",sm:"14px",md:"16px"
                },
                  textAlign: "center",
                }}
                variant="h6"
                gutterBottom
                component="div"
              >
                City: {cus_city}
              </Typography>
              <Button sx={{
                color: "#fff",
                flexBasis: "initial",
                minHeight: "40px",
                fontFamily: "Sans-serif",
                fontSize: "15px",
                textTransform: "capitalize",
                letterSpacing: "1px",
                backgroundImage: "linear-gradient(to right bottom, rgba(126,213,111,0.85), rgba(40,180,133,0.85))",
                borderStyle: "solid",
                borderWidth: "1px 1px 1px 1px",
                borderColor: "#01479b",
                paddingTop: 0,
                paddingBottom: 0,
                border: "none",
                padding: "12px 24px",
                display: "inlineBlock",
                lineHeight: 1,
                borderRadius: "5px",
                fill: "#FFFFFF",
                textAlign: "center",
                fontWeight: 500,
                whiteSpace: "nowrap",

                width: "auto",
                mb: 2,
                overflow: "visible",
              }} variant = "contained" onClick={handlerGotoHome}>Go Home</Button>
  </Grid>
  <Grid item xs={6} sm={6} md={6}>
  <Typography
                sx={{
                    color: "rgb(218 152 63)",
                  fontWeight: "500",
                  fontSize: {
                    xs:"12px",sm:"14px",md:"16px"
                },
                  textAlign: "center",
                }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Address: {cus_add1}
              </Typography>
              <Typography
                sx={{
                    color: "rgb(218 152 63)",
                  fontWeight: "500",
                  fontSize: {
                    xs:"12px",sm:"14px",md:"16px"
                },
                  textAlign: "center",
                }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Country: {cus_country}
              </Typography>
              <Typography
                sx={{
                    color: "rgb(218 152 63)",
                  fontWeight: "500",
                  fontSize: {
                    xs:"12px",sm:"14px",md:"16px"
                },
                  textAlign: "center",
                }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Ocupation: {ocupation}
              </Typography>
              <Typography
                sx={{
                    color: "rgb(218 152 63)",
                  fontWeight: "500",
                  fontSize: {
                    xs:"12px",sm:"14px",md:"16px"
                },
                  textAlign: "center",
                }}
                variant="h6"
                gutterBottom
                component="div"
              >
                Date: {date}
              </Typography>
              <Button sx={{
                color: "#fff",
                flexBasis: "initial",
                minHeight: "40px",
                fontFamily: "Sans-serif",
                fontSize: "15px",
                textTransform: "capitalize",
                letterSpacing: "1px",
                backgroundImage: "linear-gradient(to right bottom, rgba(126,213,111,0.85), rgba(40,180,133,0.85))",
                borderStyle: "solid",
                borderWidth: "1px 1px 1px 1px",
                borderColor: "#01479b",
                paddingTop: 0,
                paddingBottom: 0,
                border: "none",
                padding: "12px 24px",
                display: "inlineBlock",
                lineHeight: 1,
                borderRadius: "5px",
                fill: "#FFFFFF",
                textAlign: "center",
                fontWeight: 500,
                whiteSpace: "nowrap",

                width: "auto",
                mb: 2,
                overflow: "visible",
              }} variant = "contained" onClick={handlerGoToMyDonation}>My Donation</Button>
              
  </Grid>
 
</Grid>
             
              
                   </Box>
                </Container>
               
            </Box>

            <Footer />
        </Box>
      
    );
};

export default DonationSuccess;