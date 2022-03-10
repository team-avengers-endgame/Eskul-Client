import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const HowWeWorks = () => {
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
                Professional and Experience
              </Typography>
              <Typography
                sx={{ fontWeight: "500", fontSize: 42, color: "#3B4757" }}
                variant="h4"
                gutterBottom
                component="div"
              >
                We work with the 
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
                guidelines for continuing education, our professional driver are
                guided by the principles and ethical codes of the following
                transport and educational organizations:
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
                  We provide transport facility according to location
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
                  Parents can directly contact with driver
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
                 Parents will be able to see location of our transport facility via google map
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
                  Yearly discount package for new subscriber
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
                  Special discount for premium members
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              style={{ width: "100%",
              height: "600px",
              maxWidth: "100%",
              verticalAlign: "top",
              borderRadius: "10px",
              margin:"auto",
              aspectRatio: "auto 1200 / 1200",
              marginTop: "25%", marginLeft: "25%" }} 
              src="https://i.ibb.co/nPkKYQW/photo-1578697554923-4552d0ac946d.jpg"
              alt=""
            />
          </Grid>
        </Grid>
      </Container>
    );
};

export default HowWeWorks;

// map api key= AIzaSyAo7YpydfLtQ60NLuitlPMBueuF-P7r9Wc