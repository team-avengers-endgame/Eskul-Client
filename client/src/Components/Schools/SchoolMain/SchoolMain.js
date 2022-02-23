import { ButtonBase, Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import Banner from "../../SchoolDetails/Banner/Banner";
const SchoolMain = () => {
  const [schools, setSchools] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/schools")
      .then((res) => res.json())
      .then((data) => setSchools(data?.data?.data));
  }, []);
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  return (
    <Container>
      <h1>{schools.length}</h1>
      {/* <Typography
        variant="h3"
        sx={{
          fontWeight: "500",
          fontSize: 42,
          color: "#3B4757",
          textAlign: "center",
          py: 3,
        }}
        gutterBottom
        component="div"
      >
        Schools
      </Typography>

      <SearchBar />
      <Grid container spacing={2}>
        {schools.map((single) => (
          <Grid sx={{ py: 3 }} key={single.id} item xs={12} sm={12} md={6}>
            <Paper
              sx={{
                p: 2,
                margin: "auto",
                maxWidth: 500,
                flexGrow: 1,
                boxShadow: "0px 14px 22px rgb(42 135 158 / 10%)",
              }}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <NavLink to="/schDetails">
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                      <Img alt="complex" src={single.schoolPhoto} />
                    </ButtonBase>
                  </NavLink>
                </Grid>
                <Grid item xs={6} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Standard license
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Full resolution 1920x1080 • JPEG
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        ID: 1030114
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ cursor: "pointer" }} variant="body2">
                        Remove
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid> */}
    </Container>
  );
};

export default SchoolMain;
