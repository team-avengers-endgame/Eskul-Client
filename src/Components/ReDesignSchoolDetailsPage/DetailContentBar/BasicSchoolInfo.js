import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from "../../../Hooks/Api";
import { Box, Container, Grid, Typography } from "@mui/material";

const BasicSchoolInfo = () => {
    const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`${api}/schools/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.data.data));
  }, [id]);
    return (
        <Container >
        <Box
          
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "14px",
            }}
          >
            Basic
          </Typography>
        </Box>
  
        <Box
          sx={{
            p: "80px 50px 80px 50px",
            backgroundColor: "#FFFFFF",
            borderLeft: 1,
            borderStyle: "solid",
            borderWidth: "0px 0px 0px 2px",
            borderColor: "rgb(42 135 158 / 14%)",
            boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
            display: "block",
            // ml: { md: 25 },
            borderRadius: "0px 200px 0px 200px",
            mx: { xs: "auto", sm: "auto" },
          }}
        >
          <Typography sx={{color:"#a3a3a3"}} variant="subtitle1" gutterBottom component="div">
            <span style={{ color:"#727475",fontWeight:"bold", letterSpacing: "1px", }}>
              {details?.schoolName}
            </span>{" "}
            is a academic institute located at {details?.location}.
            Its institute code{" "}
            <span style={{ color:"#727475",fontWeight:"bold", letterSpacing: "1px", }}>(EIIN)</span>{" "}
            is{" "}
            <span style={{ color:"#727475",fontWeight:"bold", letterSpacing: "1px", }}>
              {details?.EIIN}
            </span>{" "}
            It was established on{" "}
            <span style={{ color:"#727475",fontWeight:"bold", letterSpacing: "1px", }}>
              {details?.founderDate}
            </span>
            .Its co-education type is{" "}
            <span style={{ color:"#727475",fontWeight:"bold", letterSpacing: "1px", }}>
              {details?.schoolType}
            </span>
            . The location of the school is{" "}
            <span style={{ color:"#727475",fontWeight:"bold", letterSpacing: "1px",}}>
              {details?.location}
            </span>
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <Typography sx={{color:"#727475"}} variant="h6" gutterBottom component="div">
                Alternative Name
              </Typography>
              <Typography
                sx={{ color: "#a3a3a3" }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                {details?.schoolName}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography sx={{color:"#727475",fontWeight:"bold", letterSpacing: "1px",}} variant="h6" gutterBottom component="div">
                EIIN
              </Typography>
              <Typography sx={{color:"#a3a3a3"}} variant="subtitle1" gutterBottom component="div">
                {details?.EIIN}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography sx={{color:"#727475",fontWeight:"bold", letterSpacing: "1px",}} variant="h6" gutterBottom component="div">
                Founded
              </Typography>
              <Typography sx={{color:"#a3a3a3"}} variant="subtitle1" gutterBottom component="div">
                {details?.founderDate}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography sx={{color:"#727475",fontWeight:"bold", letterSpacing: "1px",}} variant="h6" gutterBottom component="div">
                Location
              </Typography>
              <Typography sx={{color:"#a3a3a3"}} variant="subtitle1" gutterBottom component="div">
                {details?.location}
              </Typography>
            </Grid>
            <Grid item  xs={12} sm={6} md={4}>
              <Typography sx={{color:"#727475",fontWeight:"bold", letterSpacing: "1px",}} variant="h6" gutterBottom component="div">
                Type
              </Typography>
              <Typography sx={{color:"#a3a3a3"}} variant="subtitle1" gutterBottom component="div">
                {details?.schoolType}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Typography sx={{color:"#727475",fontWeight:"bold", letterSpacing: "1px",}} variant="h6" gutterBottom component="div">
                School Shift
              </Typography>
              <Typography sx={{color:"#a3a3a3"}} variant="subtitle1" gutterBottom component="div">
                {details?.schoolShift}
              </Typography>
            </Grid>
          </Grid>
        </Box>
        
      </Container>
    );
};

export default BasicSchoolInfo;