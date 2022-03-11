import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TransportDetails = () => {
  let {tpid} = useParams();
  const [details,setDetails] = useState([])
  const [items,setItems] = useState([])
  useEffect(()=>{
    fetch('https://raw.githubusercontent.com/Taniatabassumnoor/fakedata/main/transportdetails.json')
        .then(res=>res.json())
        .then(data=>setDetails(data));
  },[])
  
  useEffect(()=>{
   const foundtp=  details.find(tp=>tp?.id==tpid)
   setItems(foundtp)
  },[details])
  
  return (
    <Container sx={{py:4}}>
             <Typography sx={{mb:4}} variant="h5" gutterBottom component="div">
        Name of the Bus is <span style={{color:"#0c4b65",fontWeight:600}}>{items?.name}</span>
      </Typography>
      <Grid container spacing={12}>
  <Grid item xs={12} sm={12} md={6}>
  
  <img
              style={{ width: "100%",
              height: "auto",
             maxWidth:"100%",
             
              verticalAlign: "top",
              borderRadius: "10px",
              margin:"auto",
              aspectRatio: "auto 1200 / 1200",
              }} 
              src={items?.busImg}
              alt=""
            />
  </Grid>
  <Grid item xs={12} sm={12} md={6}>
    <Box sx={{ background: "#fff",
                w: "25%",
                p: "20px 15px",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px"}}>
                <Typography sx={{color:"#0c4b65",fontSize:"24px",fontWeight:400}} variant="h6" gutterBottom component="div">
  In {items?.location} Location, the transportation facility we provided are <br />
  <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <ArrowForwardIosIcon
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mx: 2,
                  fontSize: "14px",
                  color: "#46AADC",
                  mt: 2,
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: 15, color: "#777", lineHeight: 3 }}
                variant="body2"
                gutterBottom
              >
                {items?.schools?.sh1} <br />
              Schedule:  {items?.time} 
              </Typography>
            </Box>
          </Box>
          {/* principles-2*/}
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <ArrowForwardIosIcon
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mx: 2,
                  fontSize: "14px",
                  color: "#46AADC",
                  mt: 2,
                }}
              />
            </Box>
            <Box>
              <Typography
                sx={{ fontSize: 15, color: "#777", lineHeight: 3 }}
                variant="body2"
                gutterBottom
              >
                {items?.schools?.sh2}
                <br />
              Schedule:  {items?.time}
              </Typography>
            </Box>
          </Box>
          {/* principles-3*/}
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <ArrowForwardIosIcon
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mx: 2,
                  fontSize: "14px",
                  color: "#46AADC",
                  mt: 2,
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{ fontSize: 15, color: "#777", lineHeight: 3 }}
                variant="body2"
                gutterBottom
              >
               {items?.schools?.sh3}<br />
              Schedule:  {items?.time}
              </Typography>
            </Box>
          </Box>
          {/* principles-4*/}
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <ArrowForwardIosIcon
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mx: 2,
                  fontSize: "14px",
                  color: "#46AADC",
                  mt: 2,
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{ fontSize: 15, color: "#777", lineHeight: 3 }}
                variant="body2"
                gutterBottom
              >
               {items?.schools?.sh4}<br />
              Schedule:  {items?.time}
              </Typography>
            </Box>
          </Box>
          {/* principles-5*/}
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Box>
              <ArrowForwardIosIcon
                sx={{
                  justifyContent: "space-between",
                  alignItems: "center",
                  mx: 2,
                  fontSize: "14px",
                  color: "#46AADC",
                  mt: 2,
                }}
              />
            </Box>

            <Box>
              <Typography
                sx={{ fontSize: 15, color: "#777", lineHeight: 3 }}
                variant="body2"
                gutterBottom
              >
                {items?.schools?.sh5}<br />
              Schedule:  {items?.time}
              </Typography>
            </Box>
          </Box>
      </Typography>
                  </Box>
  
  </Grid>

</Grid>
    </Container>
  );
};

export default TransportDetails;