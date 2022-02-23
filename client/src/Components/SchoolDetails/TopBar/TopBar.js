import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleIcon from "@mui/icons-material/People";
import CollectionsIcon from "@mui/icons-material/Collections";
import StarIcon from "@mui/icons-material/Star";
import MessageIcon from "@mui/icons-material/Message";
import CallIcon from "@mui/icons-material/Call";
const TopBar = () => {
  return (
    <Container
      sx={{
        background: "#fff",
        width: {
          xs: "100%",
          sm: "100%",
          md: "100%",
        },
        p: {
          xs: "2px 2px",
          sm: "2px 2px",
          md: "5px 15px",
        },
        boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
        borderRadius: "80px",
        mt: {
          xs: -2,
          sm: -2,
          md: -5,
        },
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {/* Basic */}
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          item
          xs={1}
          sm={1}
          md={1}
        >
          <HomeIcon
            sx={{
              color: "#46AADC",
              fontSize: {
                xs: "30px",
                sm: "30px",
                md: "40px",
              },
            }}
          />{" "}
          <br />
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "10px",
                sm: "10px",
                md: "12px",
              },
              fontFamily: "sans-serif",
            }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            Basic
          </Typography>
        </Grid>
        {/* board result */}

        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          item
          xs={1}
          sm={1}
          md={1}
        >
          <AssessmentIcon
            sx={{
              color: "#46AADC",
              fontSize: {
                xs: "30px",
                sm: "30px",
                md: "40px",
              },
            }}
          />{" "}
          <br />
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "10px",
                sm: "10px",
                md: "12px",
              },
              fontFamily: "sans-serif",
            }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            Board Result
          </Typography>
        </Grid>
        {/* Term Result */}
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          item
          xs={1}
          sm={1}
          md={1}
        >
          <AssignmentIcon
            sx={{
              color: "#46AADC",
              fontSize: {
                xs: "30px",
                sm: "30px",
                md: "40px",
              },
            }}
          />{" "}
          <br />
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "10px",
                sm: "10px",
                md: "12px",
              },
              fontFamily: "sans-serif",
            }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            Term Result
          </Typography>
        </Grid>
        {/* Notice */}
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          item
          xs={1}
          sm={1}
          md={1}
        >
          <ArticleIcon
            sx={{
              color: "#46AADC",
              fontSize: {
                xs: "30px",
                sm: "30px",
                md: "40px",
              },
            }}
          />{" "}
          <br />
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "10px",
                sm: "10px",
                md: "12px",
              },
              fontFamily: "sans-serif",
            }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            Notice
          </Typography>
        </Grid>
        {/* People */}
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          item
          xs={1}
          sm={1}
          md={1}
        >
          <PeopleIcon
            sx={{
              color: "#46AADC",
              fontSize: {
                xs: "30px",
                sm: "30px",
                md: "40px",
              },
            }}
          />{" "}
          <br />
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "10px",
                sm: "10px",
                md: "12px",
              },
              fontFamily: "sans-serif",
            }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            People
          </Typography>
        </Grid>
        {/* Gallery */}
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          item
          xs={1}
          sm={1}
          md={1}
        >
          <CollectionsIcon
            sx={{
              color: "#46AADC",
              fontSize: {
                xs: "30px",
                sm: "30px",
                md: "40px",
              },
            }}
          />{" "}
          <br />
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "10px",
                sm: "10px",
                md: "12px",
              },
              fontFamily: "sans-serif",
            }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            Gallery
          </Typography>
        </Grid>
        {/* Feedback */}
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          item
          xs={1}
          sm={1}
          md={1}
        >
          <StarIcon
            sx={{
              color: "#46AADC",
              fontSize: {
                xs: "30px",
                sm: "30px",
                md: "40px",
              },
            }}
          />{" "}
          <br />
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "10px",
                sm: "10px",
                md: "12px",
              },
              fontFamily: "sans-serif",
            }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            Feedback
          </Typography>
        </Grid>
        {/* Message */}
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          item
          xs={1}
          sm={1}
          md={1}
        >
          <MessageIcon
            sx={{
              color: "#46AADC",
              fontSize: {
                xs: "30px",
                sm: "30px",
                md: "40px",
              },
            }}
          />{" "}
          <br />
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "10px",
                sm: "10px",
                md: "12px",
              },
              fontFamily: "sans-serif",
            }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            Message
          </Typography>
        </Grid>
        {/* Contact */}
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
          item
          xs={1}
          sm={1}
          md={1}
        >
          <CallIcon
            sx={{
              color: "#46AADC",
              fontSize: {
                xs: "30px",
                sm: "30px",
                md: "40px",
              },
            }}
          />{" "}
          <br />
          <Typography
            sx={{
              textAlign: "center",
              fontSize: {
                xs: "10px",
                sm: "10px",
                md: "12px",
              },
              fontFamily: "sans-serif",
            }}
            variant="subtitle2"
            gutterBottom
            component="div"
          >
            Contact
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopBar;
