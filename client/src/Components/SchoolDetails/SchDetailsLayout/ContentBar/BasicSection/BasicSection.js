import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../../../Hooks/Api";

const BasicSection = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch(`${api}/schools/${id}`)
      .then((res) => res.json())
      .then((data) => setDetails(data.data.data));
  }, [id]);
  return (
    <Container>
      <Box
        sx={{
          p: "10px 100px 10px 15px",
          backgroundColor: "#01479b",
          borderRadius: "0px 100px 0px 0px",
          width: "10%",

          ml: { xs: 0, sm: 0, md: 25 },
          mt: { xs: 3, sm: 3, md: 17 },
        }}
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
          p: "15px 15px 15px 15px",
          backgroundColor: "#FFFFFF",
          borderLeft: 1,
          borderStyle: "solid",
          borderWidth: "0px 0px 0px 2px",
          borderColor: "#01479b",
          boxShadow: "0px 0px 10px 0px rgb(0 0 0 / 15%)",
          display: "block",
          ml: { md: 25 },
          mx: { xs: "auto", sm: "auto" },
        }}
      >
        <Typography variant="subtitle1" gutterBottom component="div">
          <span style={{ color: "#01479b", fontWeight: "bolder" }}>
            {details?.schoolName}
          </span>{" "}
          is a academic institute located at Nasirabad,in Chittagong district.
          Its institute code{" "}
          <span style={{ color: "#01479b", fontWeight: "bolder" }}>(EIIN)</span>{" "}
          is{" "}
          <span style={{ color: "#01479b", fontWeight: "bolder" }}>
            {details?.EIIN}
          </span>{" "}
          It was established on{" "}
          <span style={{ color: "#01479b", fontWeight: "bolder" }}>
            {details?.founderDate}
          </span>
          .Its co-education type is{" "}
          <span style={{ color: "#01479b", fontWeight: "bolder" }}>
            {details?.schoolType}
          </span>
          . The location of the school is{" "}
          <span style={{ color: "#01479b", fontWeight: "bolder" }}>
            {details?.location}
          </span>
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom component="div">
              Alternative Name
            </Typography>
            <Typography
              sx={{ color: "#01479b", fontWeight: "bolder" }}
              variant="subtitle1"
              gutterBottom
              component="div"
            >
              {details?.schoolName}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom component="div">
              EIIN
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              {details?.EIIN}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom component="div">
              Founded
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              {details?.founderDate}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom component="div">
              Location
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              {details?.location}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom component="div">
              Type
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              {details?.schoolType}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom component="div">
              School Shift
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              {details?.schoolShift}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BasicSection;
