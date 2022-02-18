import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import educationbig from "../../../Assets/Images/AboutUs/education-big.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Principles = () => {
  return (
    <Container sx={{ py: 15 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Box sx={{ mb: 5 }}>
            <Typography
              sx={{
                fontStyle: "italic",
                fontSize: "22px",
                pt: 12,
                color: "#3B4757",
              }}
              variant="body1"
              gutterBottom
            >
              Professional and graduated
            </Typography>
            <Typography
              sx={{ fontWeight: "500", fontSize: 42, color: "#3B4757" }}
              variant="h4"
              gutterBottom
              component="div"
            >
              Our Staff are Guided by the
              <span style={{ color: "#46AADC", paddingLeft: "2%" }}>
                Principles of
              </span>
            </Typography>
            <Typography
              sx={{ fontSize: 15, color: "#777" }}
              variant="body2"
              gutterBottom
            >
              Above and beyond our already stringent code of ethics and
              guidelines for continuing education, our professional staff are
              guided by the principles and ethical codes of the following
              clinical and educational organizations:
            </Typography>
          </Box>
          {/* principles-1*/}

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
                American Speech & Hearing Association (ASHA)
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
                Bell Academy for Listening and Spoken Language
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
                American Physical Therapy Association (APTA)
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
                Audiology Foundation of America
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
                American Board of Audiology
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <img
            style={{ width: "80%", marginTop: "25%", marginLeft: "25%" }}
            src={educationbig}
            alt=""
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Principles;
