import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import CallIcon from "@mui/icons-material/Call";
const Contact = () => {
  return (
    <Container sx={{ mb: { xs: 1, sm: 1, md: 10 } }}>
      <Box
        sx={{
          p: "10px 100px 10px 15px",
          backgroundColor: "#01479b",
          borderRadius: "0px 100px 0px 0px",
          width: "10%",
          mt: 17,
          ml: { xs: 0, sm: 0, md: 25 },
          mt: { xs: 5, sm: 5 },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "14px",
          }}
        >
          Contact
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
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            textAlign: "center",
          }}
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        >
          <Grid item xs={12} sm={12} md={1}>
            <CallIcon
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                color: "#01479b",
              }}
            />{" "}
            <Typography
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              017434124
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={1}>
            <AddLocationIcon
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                color: "#01479b",
              }}
            />{" "}
            <Typography
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              Khulshi
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={1}>
            <AddLocationIcon
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                color: "#01479b",
              }}
            />{" "}
            <Typography
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              Nasirabad
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={1}>
            <AddLocationIcon
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                color: "#01479b",
              }}
            />{" "}
            <Typography
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              Chittiagong
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
