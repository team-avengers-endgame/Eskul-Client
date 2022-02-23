import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

const BasicSection = () => {
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
            Chittagong Government School
          </span>{" "}
          is a academic institute located at Nasirabad,in Chittagong district.
          Its institute code{" "}
          <span style={{ color: "#01479b", fontWeight: "bolder" }}>(EIIN)</span>{" "}
          is{" "}
          <span style={{ color: "#01479b", fontWeight: "bolder" }}>
            123456.
          </span>{" "}
          It was established on 01 January 2000.Its co-education type is
          combined.
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
              Chittagong Government School
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom component="div">
              EIIN
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              123456
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom component="div">
              Founded
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              01-01-2000
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom component="div">
              Founded
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              01-01-2000
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom component="div">
              Founded
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              Combined
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom component="div">
              Founded
            </Typography>
            <Typography variant="subtitle1" gutterBottom component="div">
              Plain-Land
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BasicSection;
