import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import img1 from "../../../Assets/Gallery/gallery-1.webp";
import img2 from "../../../Assets/Gallery/gallery-2.webp";
import img3 from "../../../Assets/Gallery/gallery-3.webp";
import img4 from "../../../Assets/Gallery/gallery-4.webp";
import img5 from "../../../Assets/Gallery/gallery-5.webp";
import img6 from "../../../Assets/Gallery/gallery-6.webp";
import img7 from "../../../Assets/Gallery/gallery-7.webp";
import img8 from "../../../Assets/Gallery/gallery-8.webp";
import img9 from "../../../Assets/Gallery/gallery-9.webp";
import img10 from "../../../Assets/Gallery/gallery-10.webp";
import img11 from "../../../Assets/Gallery/gallery-11.webp";
import bg from "../../../Assets/Images/wave-pink.svg";

const galleryImgs = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
  { id: 9, image: img9 },
  { id: 10, image: img10 },
  { id: 11, image: img11 },
];

const Gallery = () => {
  return (
    <Box
      id="gallery"
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        py: 15,
      }}
    >
      <Container>
        <Box sx={{ textAlign: "center", py: 3 }}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{
              fontStyle: "italic",
              fontFamily: "Georgia",
            }}
          >
            Checkout our Instagram feed
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            sx={{ fontWeight: "500", color: "#3B4757" }}
          >
            <span style={{ color: "#46AADC" }}>Eskul</span> Centre Photo Gallery
          </Typography>
        </Box>
        <Box>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ alignItems: "center" }}
          >
            {galleryImgs.map(
              (singleImage) =>
                singleImage.id < 7 && (
                  <Grid key={singleImage.id} item xs={12} sm={6} md={3}>
                    <Box sx={{}}>
                      <img
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        style={{
                          width: "100%",
                          borderRadius: 15,
                        }}
                        src={singleImage.image}
                        alt=""
                      />
                    </Box>
                  </Grid>
                )
            )}
            <Grid item xs={12} sm={6} md={3}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ alignItems: "center" }}
              >
                {galleryImgs.map(
                  (singleImage) =>
                    singleImage.id > 6 &&
                    singleImage.id < 11 && (
                      <Grid key={singleImage.id} item xs={6}>
                        <img
                          data-aos="flip-right"
                          data-aos-easing="ease-out-cubic"
                          data-aos-duration="2000"
                          style={{
                            width: "100%",
                            borderRadius: 15,
                          }}
                          src={singleImage.image}
                          alt=""
                        />
                      </Grid>
                    )
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box>
                <img
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  style={{
                    width: "100%",
                    borderRadius: 15,
                  }}
                  src={img11}
                  alt=""
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Gallery;
